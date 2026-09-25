/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // KojoTech brand palette
        ink: {
          DEFAULT: '#0B0F14',   // base background
          soft: '#11161D',      // slightly lifted surface
          line: '#1C242E',      // borders / dividers
          mute: '#2A3441',      // disabled / subtle
        },
        bone: {
          DEFAULT: '#F5F3EF',   // primary text on ink
          dim: '#C9C5BD',       // secondary text
          faint: '#8B8880',     // tertiary / captions
        },
        lime: {
          DEFAULT: '#C6F24E',   // signature accent — CTAs, Bolt, highlights
          soft: '#D7F77A',
          deep: '#A8D633',
        },
        steel: {
          DEFAULT: '#5B7A9E',   // secondary accent — links, tags
          soft: '#7A96B5',
          deep: '#3E5872',
        },
        signal: {
          red: '#F26B5E',       // error state
          green: '#5ED69A',     // success state
          amber: '#F2C14E',     // warning state
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Fluid display scale for heroes and section headings
        'display-xl': ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        shell: '80rem',       // 1280px — main content container
        prose: '65ch',        // readable text width
      },
      borderRadius: {
        xs: '4px',
        sm: '6px',
        DEFAULT: '10px',
        lg: '14px',
        xl: '20px',
        '2xl': '28px',
      },
      boxShadow: {
        'glow-lime': '0 0 0 1px rgba(198,242,78,0.25), 0 8px 32px -8px rgba(198,242,78,0.35)',
        'lift': '0 12px 40px -12px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        // Blueprint grid used as a subtle motif
        'grid-ink':
          'linear-gradient(rgba(198,242,78,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(198,242,78,0.05) 1px, transparent 1px)',
        'grid-dot':
          'radial-gradient(rgba(245,243,239,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-40': '40px 40px',
        'grid-80': '80px 80px',
        'dot-24': '24px 24px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-soft': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'signal-travel': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'signal-travel': 'signal-travel 3s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};