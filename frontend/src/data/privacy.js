/**
 * KojoTech Privacy Policy — content.
 *
 * Kept as structured data so we can render it consistently and update it
 * in one place. This is a plain-language policy — not legal advice. If you
 * later incorporate KojoTech or scale significantly, have a lawyer review it.
 *
 * LAST UPDATED: change this date whenever the policy materially changes.
 */
export const PRIVACY_LAST_UPDATED = '26 September 2026';

export const PRIVACY_INTRO = `
KojoTech ("we", "us", "our") is a technology brand founded by Francis Kojo Haizel.
We build websites, web applications, business systems, and custom digital solutions.

This Privacy Policy explains what information we collect when you visit kojotech.com,
how we use it, who we share it with, and the choices you have. It applies to our
website, our contact form, our AI assistant (Bolt), and any communication you send us.

We wrote this in plain language on purpose. If anything is unclear, contact us at
hello.kojotech@gmail.com and we will explain.
`;

export const PRIVACY_SECTIONS = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: [
      {
        type: 'paragraph',
        text: 'We only collect information that is necessary to respond to you and to run the site securely. Depending on how you interact with KojoTech, this may include:',
      },
      {
        type: 'list',
        items: [
          {
            term: 'Information you provide directly',
            detail:
              'When you submit the contact form or start a project, we collect your name, email address, phone number (optional), company name (optional), project type, budget range (optional), preferred contact method, and the message you write.',
          },
          {
            term: 'Information you provide to Bolt',
            detail:
              'When you chat with Bolt (our AI assistant), your messages are sent to our servers and forwarded to an AI provider to generate a reply. Bolt conversations are kept only in your browser session and are not stored on our servers after your visit ends.',
          },
          {
            term: 'Information collected automatically',
            detail:
              'Like most websites, our servers log basic technical information: IP address, browser type, pages requested, and timestamps. These logs are used for security and debugging, and are retained for a short period.',
          },
          {
            term: 'Cookies and tracking',
            detail:
              'KojoTech does not use advertising cookies or cross-site tracking. We use only what is necessary for the site to function. We do not sell or share browsing data with advertisers.',
          },
        ],
      },
    ],
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Your Information',
    content: [
      {
        type: 'paragraph',
        text: 'We use the information we collect for the following purposes:',
      },
      {
        type: 'list',
        items: [
          {
            term: 'Responding to inquiries',
            detail:
              'Your contact form submission is stored in our database and a notification is emailed to us so we can reply within 24–48 hours.',
          },
          {
            term: 'Building the project you asked about',
            detail:
              'If we agree to work together, information you provided may be used to scope, plan, and deliver your project.',
          },
          {
            term: 'Answering questions through Bolt',
            detail:
              'Your Bolt messages are processed by our servers and by a third-party AI provider in order to generate a helpful response.',
          },
          {
            term: 'Keeping the site secure',
            detail:
              'Server logs help us detect abuse, spam, and unauthorized access attempts. They are not used for marketing.',
          },
          {
            term: 'Legal and operational requirements',
            detail:
              'We may retain certain records if required by law, or to protect the rights and safety of KojoTech, our clients, and the public.',
          },
        ],
      },
    ],
  },
  {
    id: 'how-we-share-information',
    title: 'How We Share Information',
    content: [
      {
        type: 'paragraph',
        text: 'KojoTech does not sell your personal information. We share it only with the service providers necessary to run the website and respond to you:',
      },
      {
        type: 'list',
        items: [
          {
            term: 'MongoDB Atlas',
            detail:
              'Contact form submissions are stored in a MongoDB Atlas database. Data is encrypted in transit and at rest.',
          },
          {
            term: 'EmailJS',
            detail:
              'When you submit the contact form, our server sends an email notification through EmailJS to our brand inbox so we can reply to you.',
          },
          {
            term: 'AI providers (OpenRouter, Google Gemini)',
            detail:
              'When you chat with Bolt, your message is sent to an AI provider to generate a reply. We do not send identifying information beyond the message content itself.',
          },
          {
            term: 'Hosting infrastructure (Vercel, Cloudflare, Dokploy)',
            detail:
              'Our website and API are hosted on standard cloud infrastructure. These providers process traffic on our behalf and do not have access to your personal data.',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'We do not share your information with anyone else unless required by law or with your explicit permission.',
      },
    ],
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: [
      {
        type: 'paragraph',
        text: 'We take reasonable technical and organizational steps to protect your information, including:',
      },
      {
        type: 'list',
        items: [
          { term: 'Encryption in transit', detail: 'All traffic to and from KojoTech is served over HTTPS.' },
          { term: 'Database security', detail: 'MongoDB Atlas handles encryption at rest and controlled network access.' },
          { term: 'Access controls', detail: 'Only the KojoTech founder has access to client inquiries and project data.' },
          { term: 'Rate limiting', detail: 'The contact form and Bolt are rate-limited to prevent abuse.' },
        ],
      },
      {
        type: 'paragraph',
        text: 'No system is completely secure. If we ever discover a data breach that affects you, we will notify you and take appropriate action as required by applicable law.',
      },
    ],
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    content: [
      {
        type: 'paragraph',
        text: 'We retain your information only as long as needed for the purposes described in this policy:',
      },
      {
        type: 'list',
        items: [
          {
            term: 'Contact form submissions',
            detail:
              'Retained so we can respond and, if we work together, keep a record of the project. If you would like us to delete your submission, contact us and we will do so.',
          },
          {
            term: 'Bolt conversations',
            detail:
              'Never stored on our servers. Session-only, held in your browser, discarded when you close the tab.',
          },
          {
            term: 'Server logs',
            detail: 'Retained for a short period for security and debugging, then automatically discarded.',
          },
        ],
      },
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    content: [
      {
        type: 'paragraph',
        text: 'You have control over the information you have shared with us. Depending on where you live, you may have specific legal rights (for example, under GDPR in the EU or CCPA in California). Regardless of your location, we extend these choices to everyone:',
      },
      {
        type: 'list',
        items: [
          { term: 'Access', detail: 'Request a copy of the information we hold about you.' },
          { term: 'Correction', detail: 'Ask us to correct anything that is inaccurate.' },
          { term: 'Deletion', detail: 'Ask us to delete your information — we will honor reasonable requests.' },
          { term: 'Objection', detail: 'Tell us to stop using your information for a specific purpose.' },
          { term: 'Withdraw consent', detail: 'You can withdraw consent at any time for anything based on it.' },
        ],
      },
      {
        type: 'paragraph',
        text: 'To exercise any of these rights, email hello.kojotech@gmail.com. We aim to respond within 30 days.',
      },
    ],
  },
  {
    id: 'children',
    title: "Children's Privacy",
    content: [
      {
        type: 'paragraph',
        text: 'KojoTech is a business-to-business and professional services website. Our services are not directed at children under 13. We do not knowingly collect information from children. If you believe a child has provided us with personal information, contact us and we will delete it.',
      },
    ],
  },
  {
    id: 'international',
    title: 'International Users',
    content: [
      {
        type: 'paragraph',
        text: 'KojoTech is based in Ghana and works with clients internationally. When you send us information, it may be stored and processed in countries other than your own (including Ghana, and where our service providers operate). By using the site, you consent to this transfer, storage, and processing.',
      },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    content: [
      {
        type: 'paragraph',
        text: 'We may update this policy from time to time to reflect changes in our practices or for legal reasons. When we do, we will update the "Last updated" date at the top of this page. If the changes are material, we will mention them on the homepage or by other reasonable means.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: [
      {
        type: 'paragraph',
        text: 'If you have questions about this policy, want to exercise any of your rights, or need to reach us for any privacy-related reason:',
      },
      {
        type: 'list',
        items: [
          { term: 'Email', detail: 'hello.kojotech@gmail.com' },
          { term: 'WhatsApp', detail: 'Available via the WhatsApp button on the Contact page.' },
        ],
      },
      {
        type: 'paragraph',
        text: 'We take privacy seriously and will respond to every reasonable request.',
      },
    ],
  },
];