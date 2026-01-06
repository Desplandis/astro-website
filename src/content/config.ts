import { defineCollection, z } from 'astro:content';

/**
 * Blog Post Collection
 * ====================
 *
 * The blog is a first-class communication surface for the iTowns project.
 *
 * Purpose:
 * - Framework evolution updates
 * - Governance decisions and transparency
 * - Technical deep-dives and tutorials
 * - Community announcements
 * - Thought leadership
 *
 * Content Guidelines:
 * - Each post must have a clear purpose
 * - Technical posts should be accessible to non-experts
 * - Governance posts should explain context and rationale
 * - All posts must specify their intended audience
 *
 * Audience Values:
 * - "developers" - Technical implementation details
 * - "executives" - Strategic value and governance
 * - "both" - Announcements and community updates
 */
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    // Required fields
    title: z
      .string()
      .min(10, 'Title must be at least 10 characters')
      .max(100, 'Title must be under 100 characters'),
    summary: z
      .string()
      .min(50, 'Summary must be at least 50 characters')
      .max(300, 'Summary must be under 300 characters for SEO'),
    publishDate: z.coerce.date(),
    audience: z.enum(['developers', 'executives', 'both']),
    tags: z
      .array(z.string().toLowerCase())
      .min(1, 'At least one tag required')
      .max(5, 'Maximum 5 tags'),

    // Optional fields
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    author: z.string().optional(),
    featured: z.boolean().default(false),

    // SEO (optional overrides)
    seoTitle: z.string().max(60).optional(),
    seoDescription: z.string().max(160).optional(),
  }),
});

/**
 * Case Studies Collection
 * =======================
 *
 * Real-world implementations demonstrating iTowns in production.
 */
const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    industry: z.enum([
      'government',
      'research',
      'commercial',
      'education',
      'nonprofit',
      'other',
    ]),
    useCase: z.string(),
    outcome: z.string(),
    publishDate: z.coerce.date(),
    featured: z.boolean().default(false),
    logo: z.string().optional(),
    website: z.string().url().optional(),
  }),
});

/**
 * Governance Collection
 * =====================
 *
 * Transparency and decision-making documentation.
 */
const governance = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum([
      'process',
      'membership',
      'decision-making',
      'transparency',
      'funding',
    ]),
    lastUpdated: z.coerce.date(),
    order: z.number().optional(),
  }),
});

export const collections = {
  blog,
  'case-studies': caseStudies,
  governance,
};
