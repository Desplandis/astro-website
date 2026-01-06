---
globs:
alwaysApply: true
---

# Project: iTowns Framework Website (Astro)

This project is a mostly-static website built with Astro for iTowns, a
commons-oriented 3D framework. The site serves both developers and C-suite
decision-makers and must communicate technical credibility, governance clarity,
and long-term value.

The site includes a first-class blog for updates, governance communication,
and thought leadership.

---

## Core Principles

- Content-first, component-second
- Static by default; interactive islands only when justified
- Clarity over cleverness
- Open-source credibility over marketing tone
- Long-term maintainability over short-term speed

---

## Audience Rules

The site must serve two primary audiences equally:

### Developers
- Technical clarity
- Adoption guidance
- Documentation and examples
- Contribution pathways

### Executives / Decision-Makers
- Strategic value
- Risk reduction
- Governance and sustainability
- Ecosystem credibility

Rules:
- No marketing language without concrete technical grounding
- No technical depth without strategic framing
- Pages should explicitly or implicitly signal which audience(s) they serve

---

## Technical Rules

- Astro is the primary framework
- Output must be static HTML by default
- No client-side JavaScript unless explicitly justified
- Use Astro’s islands architecture only when necessary
- Do not introduce React, Vue, or other frameworks unless approved
- Prefer Astro components and slots

---

## Architecture Rules

- Markdown and MDX are first-class content formats
- Use Astro Content Collections for all structured content:
  - Blog posts
  - Use cases
  - Framework features
- Pages live in `src/pages`
- Layouts live in `src/layouts`
- Reusable UI blocks live in `src/components`
- No hard-coded content in layouts when content collections can be used
- Avoid global state

---

## Blog Rules

The blog is a core communication surface, not a marketing afterthought.

### Blog Purpose
- Communicate framework evolution
- Explain governance decisions
- Provide technical and strategic updates
- Build long-term trust

### Blog Technical Rules
- Blog posts must be Markdown-based
- Blog content must be defined via Astro content collections
- Frontmatter must be typed and validated
- Blog pages must be statically generated
- No client-side JavaScript required for reading

### Blog Content Rules
Each blog post must:
- Have a clear purpose (update, explanation, announcement, reflection)
- Include a summary suitable for non-technical readers
- Specify its intended audience:
  - developers
  - executives
  - both

Recommended frontmatter fields:
- title
- summary
- publishDate
- updatedDate (optional)
- tags
- audience
- draft

---

## Styling Rules

- Use scoped CSS or CSS Modules
- Mobile-first responsive design
- Semantic HTML only
- Clear visual hierarchy
- All interactive elements must have:
  - hover state
  - focus state

---

## Accessibility Rules

- All images require alt text
- Navigation must be keyboard accessible
- No reliance on color alone to convey meaning
- Respect reduced-motion preferences
- Use proper heading order

---

## Content Quality Rules

- Prefer neutral, factual language
- Avoid hype and vague claims
- Explain “why” before “how” when possible
- Assume readers are intelligent but time-constrained
- Content should stand on its own without JavaScript

---

## CI/CD Rules

- GitHub Actions is required
- The site must build with a single command (`npm run build`)
- Builds must be deterministic
- CI must fail on:
  - Build errors
  - Invalid content collection schemas
- Output must be static assets only

---

## Decision Defaults

When uncertain:
- Prefer static generation
- Prefer content collections over custom logic
- Prefer accessibility over aesthetics
- Prefer clarity over expressiveness
- Prefer Astro conventions over custom abstractions
