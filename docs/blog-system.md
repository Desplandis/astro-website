# Blog System Documentation

**iTowns Website Blog System**  
**Version:** 1.0  
**Status:** ✅ Complete

---

## Overview

The iTowns blog is a **first-class communication channel**, not a marketing afterthought. It serves as the primary platform for:

- Framework evolution updates
- Governance decisions and transparency
- Technical deep-dives and tutorials
- Community announcements
- Thought leadership

### Key Features

- ✅ Type-safe frontmatter with Zod validation
- ✅ Audience-based filtering (developers, executives, both)
- ✅ Tag-based categorization
- ✅ Featured posts highlighting
- ✅ Reading time calculation
- ✅ Post navigation (prev/next)
- ✅ RSS feed
- ✅ SEO-optimized (JSON-LD structured data)
- ✅ Fully static, zero JavaScript

---

## Content Collection Schema

### Location

```
src/content/config.ts
```

### Blog Schema

```typescript
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    // Required
    title: z.string().min(10).max(100),
    summary: z.string().min(50).max(300),
    publishDate: z.coerce.date(),
    audience: z.enum(['developers', 'executives', 'both']),
    tags: z.array(z.string()).min(1).max(5),

    // Optional
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    author: z.string().optional(),
    featured: z.boolean().default(false),

    // SEO overrides
    seoTitle: z.string().max(60).optional(),
    seoDescription: z.string().max(160).optional(),
  }),
});
```

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Post title (10-100 chars) |
| `summary` | string | Yes | Brief summary for listings (50-300 chars) |
| `publishDate` | date | Yes | Publication date |
| `audience` | enum | Yes | Target audience |
| `tags` | string[] | Yes | Topic tags (1-5) |
| `updatedDate` | date | No | Last updated date |
| `draft` | boolean | No | Draft status (default: false) |
| `author` | string | No | Author name |
| `featured` | boolean | No | Feature on homepage (default: false) |
| `seoTitle` | string | No | Override title for SEO (max 60) |
| `seoDescription` | string | No | Override description for SEO (max 160) |

### Audience Values

| Value | Description | Typical Content |
|-------|-------------|-----------------|
| `developers` | Technical implementation | APIs, performance, tutorials |
| `executives` | Strategic decision-makers | Governance, sustainability, value |
| `both` | Entire community | Announcements, releases, community |

---

## Creating a New Blog Post

### Step 1: Create File

Create a new markdown file in `src/content/blog/`:

```
src/content/blog/YYYY-MM-slug.md
```

**Naming Convention:**
- Use ISO date prefix: `2026-01-my-post.md`
- Use lowercase, kebab-case
- Be descriptive but concise

### Step 2: Add Frontmatter

```yaml
---
title: "Your Post Title Here"
summary: "A brief summary of your post that will appear in listings and social cards. Should be 50-300 characters."
publishDate: 2026-01-15
audience: "developers"
tags: ["technical", "tutorial"]
draft: false
author: "Your Name"
featured: false
---
```

### Step 3: Write Content

Write your post in Markdown below the frontmatter:

```markdown
---
title: "Getting Started with 3D Tiles"
summary: "A practical guide to loading and rendering 3D Tiles datasets in iTowns, with examples and best practices."
publishDate: 2026-01-15
audience: "developers"
tags: ["technical", "3d-tiles", "tutorial"]
draft: false
author: "Technical Team"
---

Introduction paragraph...

## First Section

Content...

## Second Section

Content...

## Conclusion

Summary and next steps...
```

### Step 4: Preview

```bash
npm run dev
```

Visit `http://localhost:4321/blog` to see your post.

### Step 5: Publish

Set `draft: false` and commit the file.

---

## Blog Pages

### Blog Index

**URL:** `/blog`  
**File:** `src/pages/blog/index.astro`

**Features:**
- Featured posts section (if any)
- Audience filter navigation
- All posts list
- Tags sidebar
- RSS subscription link

### Individual Post

**URL:** `/blog/[slug]`  
**File:** `src/pages/blog/[slug].astro`

**Features:**
- Full post content
- Metadata (date, author, reading time)
- Tag links
- Social sharing links
- Post navigation (prev/next)
- Structured data (JSON-LD)

### Tag Filter

**URL:** `/blog/tag/[tag]`  
**File:** `src/pages/blog/tag/[tag].astro`

**Features:**
- Posts filtered by tag
- Tag list for navigation

### Audience Filter

**URL:** `/blog/audience/[audience]`  
**File:** `src/pages/blog/audience/[audience].astro`

**Features:**
- Posts filtered by audience
- Audience description
- Audience navigation

### RSS Feed

**URL:** `/rss.xml`  
**File:** `src/pages/rss.xml.ts`

**Features:**
- All published posts
- Standard RSS 2.0 format
- Includes tags as categories
- Custom audience field

---

## Blog Layout

### Location

```
src/layouts/BlogLayout.astro
```

### Props

```typescript
interface Props {
  title: string;
  summary: string;
  publishDate: Date;
  updatedDate?: Date;
  audience: 'developers' | 'executives' | 'both';
  tags: string[];
  author?: string;
  featured?: boolean;
  rawContent?: string;       // For reading time
  prevPost?: { slug: string; title: string } | null;
  nextPost?: { slug: string; title: string } | null;
}
```

### Structure

```html
<BaseLayout>
  <Header />
  <main>
    <article>
      <header>
        <!-- Audience badge -->
        <!-- Title -->
        <!-- Summary -->
        <!-- Metadata (date, reading time, author) -->
        <!-- Tags -->
      </header>
      <div class="post-content">
        <!-- Markdown content (slot) -->
      </div>
      <footer>
        <!-- Author section -->
        <!-- Social sharing -->
        <!-- Post navigation -->
        <!-- Back to blog link -->
      </footer>
    </article>
  </main>
  <Footer />
</BaseLayout>
```

### Content Styling

The layout includes comprehensive styling for rendered markdown:

- Headings (h2-h4) with proper spacing
- Paragraphs with comfortable line height
- Lists (ordered and unordered)
- Blockquotes with accent border
- Code blocks with syntax highlighting
- Images with border radius
- Tables with borders
- Horizontal rules

---

## Utilities

### Date Utilities

**File:** `src/utils/dates.ts`

```typescript
// Format date for display
formatDate(date: Date, format?: 'long' | 'short'): string

// Sort by date (newest first)
sortByDateDesc<T>(items: T[]): T[]

// Filter out drafts
filterDrafts<T>(items: T[]): T[]
```

### Content Utilities

**File:** `src/utils/content.ts`

```typescript
// Generate excerpt from markdown
generateExcerpt(content: string, maxLength?: number): string

// Calculate reading time
calculateReadingTime(content: string): number

// Create URL-friendly slug
slugify(text: string): string
```

---

## SEO Features

### Meta Tags

Each post automatically generates:

- `<title>` - Post title + site name
- `<meta name="description">` - Post summary
- `<link rel="canonical">` - Canonical URL
- Open Graph tags (og:title, og:description, og:image)
- Twitter Card tags

### Structured Data

Each post includes JSON-LD structured data:

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Post Title",
  "description": "Post summary",
  "datePublished": "2026-01-15T00:00:00.000Z",
  "dateModified": "2026-01-16T00:00:00.000Z",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "publisher": {
    "@type": "Organization",
    "name": "iTowns"
  }
}
```

---

## Content Guidelines

### For Developers

Technical posts should:
- Include code examples
- Provide benchmarks when relevant
- Link to API documentation
- Be actionable (readers should be able to implement)

### For Executives

Strategic posts should:
- Lead with value proposition
- Explain "why" before "how"
- Include decision frameworks
- Address risk and sustainability

### For Both

Announcement posts should:
- Be concise and clear
- Front-load key information
- Include clear call-to-action
- Avoid jargon

### Writing Style

- **Clarity over cleverness** — Be direct
- **Factual, not promotional** — Avoid hype
- **Inclusive language** — Global audience
- **Proper attribution** — Credit sources

---

## Validation

### Frontmatter Validation

Zod validates frontmatter at build time. Invalid posts will fail the build with clear error messages:

```
error: Invalid frontmatter in src/content/blog/my-post.md
  - title: String must contain at least 10 character(s)
  - tags: Array must contain at least 1 element(s)
```

### Content Validation

For additional validation, use the Astro check command:

```bash
npm run astro check
```

---

## Example Posts

### Technical Post

```markdown
---
title: "Optimizing 3D Tiles Loading Performance"
summary: "Deep-dive into loading strategies for large 3D Tiles datasets, with benchmarks and implementation patterns."
publishDate: 2026-01-15
audience: "developers"
tags: ["technical", "performance", "3d-tiles"]
author: "Technical Team"
---

## Introduction

When working with large datasets...

## Strategy 1: Memory Budgets

\`\`\`javascript
view.tileManager.budget = { ... }
\`\`\`

## Benchmarks

| Strategy | FPS | Memory |
|----------|-----|--------|
| Default | 45 | 1.8GB |
| Optimized | 52 | 512MB |

## Conclusion

Key takeaways...
```

### Governance Post

```markdown
---
title: "Q1 2026 Governance Update"
summary: "Transparent overview of governance decisions, including recent changes to the RFC process."
publishDate: 2026-01-10
audience: "executives"
tags: ["governance", "transparency"]
author: "Governance Board"
---

## iTowns Governance Model

iTowns operates as a commons...

## Decision-Making Structure

### Technical Decisions

RFCs are reviewed by...

## For Decision-Makers

When evaluating iTowns, consider:

✅ No vendor lock-in
✅ Transparent governance
✅ Sustainable funding model
```

### Announcement Post

```markdown
---
title: "Welcome to the New iTowns Website"
summary: "Introducing a redesigned website for clarity, transparency, and technical credibility."
publishDate: 2026-01-06
audience: "both"
tags: ["announcement", "community"]
featured: true
---

We're excited to launch...

## What's New

### Content-First Design

...

### First-Class Blog

...

## Get Involved

- [View on GitHub](...)
- [Join the community](...)
```

---

## File Structure

```
src/
├── content/
│   ├── config.ts              # Collection schemas
│   └── blog/
│       ├── 2026-01-welcome.md
│       ├── 2026-01-governance-update.md
│       ├── 2026-01-performance-optimization.md
│       └── 2026-01-api-v5-migration.md
│
├── layouts/
│   └── BlogLayout.astro       # Blog post template
│
├── pages/
│   └── blog/
│       ├── index.astro        # Blog listing
│       ├── [slug].astro       # Individual posts
│       ├── tag/
│       │   └── [tag].astro    # Tag filter
│       └── audience/
│           └── [audience].astro # Audience filter
│
└── utils/
    ├── dates.ts               # Date formatting
    └── content.ts             # Content helpers
```

---

## Extending the Blog

### Adding New Frontmatter Fields

1. Update schema in `src/content/config.ts`
2. Update `BlogLayout.astro` to use new field
3. Update blog pages if needed
4. Document in this file

### Adding New Filters

1. Create new dynamic route (e.g., `src/pages/blog/year/[year].astro`)
2. Implement `getStaticPaths()` to generate paths
3. Add navigation link to blog index
4. Document in this file

### Customizing RSS

Edit `src/pages/rss.xml.ts` to add custom fields or change format.

---

## Checklist for New Posts

- [ ] Frontmatter complete and valid
- [ ] Title is clear and descriptive (10-100 chars)
- [ ] Summary is compelling (50-300 chars)
- [ ] Audience is correctly set
- [ ] Tags are relevant (1-5)
- [ ] Content follows style guidelines
- [ ] Code examples are tested
- [ ] Links are valid
- [ ] `draft: false` when ready to publish

---

## Questions?

- [Blog Source Code](https://github.com/iTowns/itowns-website/tree/main/src/content/blog)
- [Content Guidelines](/docs/contributing)
- [Community Discussion](https://github.com/iTowns/itowns/discussions)

