import { useCallback, useEffect, useRef, useState } from 'react';
import { sendBoltMessage, fetchBoltSuggestions } from '../services/boltService';

const WELCOME_MESSAGE = {
  id: 'welcome',
  role: 'assistant',
  content:
    "Hi, I'm Bolt — KojoTech's AI assistant. Ask me anything about our services, process, or how to start a project.",
};

export function useBolt() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoadedSuggestions, setHasLoadedSuggestions] = useState(false);

  // Session ID — bumped on reset. Late replies from an old session are ignored.
  const sessionRef = useRef(0);

  // Fetch suggestions once on mount (background) so the panel opens instantly.
  useEffect(() => {
    let mounted = true;
    fetchBoltSuggestions().then((list) => {
      if (mounted) {
        setSuggestions(list);
        setHasLoadedSuggestions(true);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  const sendMessage = useCallback(
    async (rawMessage) => {
      const content = String(rawMessage || '').trim().slice(0, 500);
      if (!content || isLoading) return;

      // Capture the session this request belongs to
      const mySession = sessionRef.current;

      const userMessage = {
        id: `u-${Date.now()}`,
        role: 'user',
        content,
      };

      // Trim history aggressively for speed
      const historyForRequest = messages
        .filter((m) => m.id !== 'welcome')
        .slice(-6)
        .map(({ role, content: c }) => ({
          role,
          content: String(c).slice(0, 300),
        }));

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      try {
        const data = await sendBoltMessage({
          message: content,
          history: historyForRequest,
        });

        // If reset was pressed while awaiting, this reply belongs to a dead session.
        if (mySession !== sessionRef.current) return;

        setMessages((prev) => [
          ...prev,
          {
            id: `a-${Date.now()}`,
            role: 'assistant',
            content:
              data.reply || 'Sorry, I didn’t catch that. Could you rephrase?',
          },
        ]);
      } catch (error) {
        // Same session check — don't show stale errors
        if (mySession !== sessionRef.current) return;

        const isRateLimited = error?.status === 429;
        const fallbackText = isRateLimited
          ? "I'm receiving a lot of messages right now. Please try again in a few minutes, or reach KojoTech directly on WhatsApp."
          : "I'm having trouble connecting right now. Please try again, or reach KojoTech on WhatsApp — that's the fastest way.";

        setMessages((prev) => [
          ...prev,
          {
            id: `e-${Date.now()}`,
            role: 'assistant',
            content: fallbackText,
            isError: true,
          },
        ]);
      } finally {
        // Only clear loading if we're still in the same session
        if (mySession === sessionRef.current) {
          setIsLoading(false);
        }
      }
    },
    [messages, isLoading]
  );

  const reset = useCallback(() => {
    // Bump session — any in-flight request from the old session is now stale
    sessionRef.current += 1;
    setMessages([WELCOME_MESSAGE]);
    setIsLoading(false);
  }, []);

  return {
    isOpen,
    open,
    close,
    toggle,
    messages,
    suggestions,
    isLoading,
    sendMessage,
    reset,
    hasMessages: messages.length > 1,
  };
}