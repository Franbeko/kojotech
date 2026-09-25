/**
 * Submit a contact inquiry.
 *
 * PHASE 8: stub — simulates latency so the UI can be tested end-to-end.
 * PHASE 9: swap the body for the real `api.post('/api/contact', payload)` call.
 */
export async function submitContactForm(payload) {
  await new Promise((resolve) => setTimeout(resolve, 900));

  if (!payload.email || !payload.email.includes('@')) {
    throw {
      response: {
        status: 400,
        data: { message: 'Please provide a valid email address.' },
      },
    };
  }

  return {
    success: true,
    id: `stub-${Date.now()}`,
    message: 'Inquiry received (stub — real API wired in Phase 9).',
  };
}