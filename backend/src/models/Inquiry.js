import mongoose from 'mongoose';

/**
 * Inquiry — a contact form submission from the KojoTech website.
 *
 * Fields mirror the frontend form. Status is designed for a future admin
 * dashboard to track each lead from arrival to completion.
 */

const INQUIRY_STATUSES = [
  'new',
  'contacted',
  'discussing',
  'in-progress',
  'completed',
  'archived',
];

const INQUIRY_SOURCES = [
  'website-contact-form',
  'whatsapp',
  'email',
  'bolt',
  'manual',
];

const InquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [100, 'Name must be at most 100 characters'],
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please provide a valid email address',
      ],
      index: true,
    },

    phone: {
      type: String,
      trim: true,
      maxlength: [30, 'Phone number is too long'],
      default: '',
    },

    company: {
      type: String,
      trim: true,
      maxlength: [120, 'Company name is too long'],
      default: '',
    },

    projectType: {
      type: String,
      required: [true, 'Project type is required'],
      trim: true,
      enum: {
        values: [
          'website',
          'web-application',
          'e-commerce',
          'business-management-system',
          'custom-digital-solution',
          'domain-hosting',
          'maintenance',
          'other',
        ],
        message: '{VALUE} is not a valid project type',
      },
    },

    budget: {
      type: String,
      trim: true,
      maxlength: [40, 'Budget value is too long'],
      default: '',
    },

    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      minlength: [20, 'Message must be at least 20 characters'],
      maxlength: [5000, 'Message is too long (max 5000 characters)'],
    },

    preferredContact: {
      type: String,
      enum: {
        values: ['email', 'whatsapp', 'phone'],
        message: '{VALUE} is not a valid contact method',
      },
      default: 'email',
    },

    source: {
      type: String,
      enum: {
        values: INQUIRY_SOURCES,
        message: '{VALUE} is not a valid source',
      },
      default: 'website-contact-form',
      index: true,
    },

    status: {
      type: String,
      enum: {
        values: INQUIRY_STATUSES,
        message: '{VALUE} is not a valid status',
      },
      default: 'new',
      index: true,
    },

    // Optional admin notes — populated later via admin dashboard
    notes: {
      type: String,
      trim: true,
      maxlength: 5000,
      default: '',
    },

    // Optional request metadata (populated when useful, not required)
    meta: {
      userAgent: { type: String, default: '' },
      referrer: { type: String, default: '' },
      ip: { type: String, default: '' },
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
    collection: 'inquiries',
  }
);

// Compound index for common admin queries (status + recency)
InquirySchema.index({ status: 1, createdAt: -1 });

// Full-text search index on name, email, company, message
InquirySchema.index({
  name: 'text',
  email: 'text',
  company: 'text',
  message: 'text',
});

export const Inquiry = mongoose.model('Inquiry', InquirySchema);

export const INQUIRY_STATUS_VALUES = INQUIRY_STATUSES;
export const INQUIRY_SOURCE_VALUES = INQUIRY_SOURCES;