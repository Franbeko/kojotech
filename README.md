# KojoTech

**Building Digital Solutions.**

Official website and platform for KojoTech — a technology brand building
modern websites, web applications, business management systems, e-commerce
solutions, and custom digital products.

Founded by **Francis Kojo Haizel** — Full-Stack Developer | WordPress Developer | AI & Technology Enthusiast.

---

## Live Site

- **Website:** https://kojotech.com *(coming soon)*
- **Founder Portfolio:** https://franciskojohaizel.vercel.app/

---

## Features

- **Marketing site** — Home, Services, Work, About, FAQ, Testimonials, Contact
- **Case studies** — individual project pages with Problem / Solution / Features / Tech
- **Contact form** — validated client + server-side, persists to MongoDB, sends email notification via EmailJS
- **KojoTech Bolt** — AI assistant that answers visitor questions about KojoTech's services, process, and pricing factors
- **WhatsApp integration** — floating button + contextual CTAs throughout the site
- **SEO** — JSON-LD structured data, sitemap, robots.txt, Open Graph, Twitter Cards
- **Fully responsive** — mobile-first, tested 320px → 1920px
- **Accessible** — keyboard navigation, focus states, reduced-motion support, WCAG AA contrast

---

## Tech Stack

### Frontend
- **React 18** + **Vite**
- **Tailwind CSS** with custom design tokens
- **React Router v6**
- **React Hook Form** + **Zod** for validation
- **Axios** for HTTP
- **Lucide React** for icons
- **CSS-only animations** (no runtime animation library)

### Backend
- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **Helmet** for security headers
- **express-rate-limit** for abuse prevention
- **express-validator** for input validation
- **EmailJS** integration (via REST API) for notifications

### AI
- **KojoTech Bolt** — OpenRouter (primary) + Google Gemini (fallback)
- Provider abstraction via adapter pattern — swap providers without touching the app

### Infrastructure
- **Frontend hosting:** Vercel
- **Backend hosting:** Dokploy
- **Database:** MongoDB Atlas
- **DNS + SSL:** Cloudflare

---

## Project Structure

kojotech/
├── frontend/ # React + Vite SPA
│ ├── public/ # Static assets (favicon, og-image, robots.txt, sitemap.xml)
│ └── src/
│ ├── components/ # Reusable UI (header, footer, bolt, forms)
│ ├── sections/ # Page sections (hero, services, work)
│ ├── pages/ # Route-level pages
│ ├── hooks/ # useBolt, useScrollReveal, useMediaQuery
│ ├── services/ # API clients (api, contact, bolt)
│ ├── data/ # Content (services, faqs, projects, testimonials)
│ └── config/ # env.js, site.js
├── backend/ # Express API
│ └── src/
│ ├── config/ # env.js, db.js
│ ├── controllers/ # Route handlers (thin)
│ ├── middleware/ # errorHandler, rateLimiter, validate
│ ├── models/ # Mongoose schemas (Inquiry)
│ ├── routes/ # Route definitions
│ ├── services/ # Business logic (inquiry, email, bolt, ai)
│ └── utils/ # ApiError, logger


---

## Local Development

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- OpenRouter API key (free tier)
- Google Gemini API key (free tier)
- EmailJS account (free tier)

### Setup

```bash
# Clone
git clone https://github.com/Franbeko/kojotech.git
cd kojotech

# Frontend
cd frontend
npm install
cp .env.example .env   # fill in values
npm run dev

# Backend (in a new terminal)
cd backend
npm install
cp .env.example .env   # fill in values
npm run dev