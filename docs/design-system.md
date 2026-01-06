# Design System: iTowns Website

**Version:** 1.0  
**Last Updated:** January 2026

---

## Design Principles

### 1. Credibility Over Aesthetics
**Why:** Both developers and executives need to trust the information presented.

- Favor clarity over decoration
- Use neutral color palette
- Avoid marketing-style gradients and shadows
- Let content and structure create visual hierarchy

### 2. Information Density Appropriate to Audience
**Why:** Developers want technical depth; executives want strategic clarity.

- Use white space generously
- Break complex information into scannable sections
- Provide clear visual separation between audience segments
- Use progressive disclosure (headings → summaries → details)

### 3. Accessibility Is Non-Negotiable
**Why:** Inclusive design benefits everyone and signals quality.

- WCAG 2.1 AA minimum
- Semantic HTML always
- Keyboard navigation for all interactions
- Sufficient color contrast (4.5:1 for text)
- Respect reduced-motion preferences

### 4. Mobile-First, Desktop-Enhanced
**Why:** Many technical evaluations happen on mobile devices.

- Design for 375px viewport first
- Progressive enhancement for larger screens
- Touch-friendly targets (minimum 44x44px)
- Readable text without zooming (16px base)

### 5. Performance as a Feature
**Why:** Slow sites undermine technical credibility.

- Zero JavaScript by default
- Minimal CSS (scoped, not global)
- No web fonts (system font stack)
- Optimized images only

---

## Visual Language

### Typography Hierarchy

**Purpose:** Create clear information structure without relying on color.

```
Heading 1 (48px/3rem)   - Page titles only
Heading 2 (36px/2.25rem) - Major sections
Heading 3 (30px/1.875rem) - Subsections
Heading 4 (24px/1.5rem)   - Supporting sections
Heading 5 (20px/1.25rem)  - Minor headings
Body (16px/1rem)          - All body text
Small (14px/0.875rem)     - Captions, metadata
XSmall (12px/0.75rem)     - Labels, tags
```

**Font Weights:**
- 400 (normal) - Body text
- 500 (medium) - Navigation, UI elements
- 600 (semibold) - Subheadings
- 700 (bold) - Main headings

### Color Palette

**Neutral Tones (Primary):**
```
Text:
  Primary:   #1a1a1a (nearly black)
  Secondary: #4a4a4a (dark gray)
  Tertiary:  #737373 (medium gray)

Backgrounds:
  Primary:   #ffffff (white)
  Secondary: #f5f5f5 (light gray)
  Tertiary:  #e5e5e5 (gray)

Borders:
  Default:   #e5e5e5 (light gray)
  Dark:      #d4d4d4 (medium gray)
```

**Accent (Minimal Use):**
```
Primary:   #2563eb (blue) - Links, CTAs
Hover:     #1d4ed8 (darker blue)
Light:     #dbeafe (very light blue) - Backgrounds
```

**Semantic (Status Only):**
```
Success:   #16a34a (green)
Warning:   #ea580c (orange)
Error:     #dc2626 (red)
```

**Usage Rules:**
- Use neutral tones for 95% of the interface
- Accent colors only for interactive elements and emphasis
- Never rely on color alone to convey information
- Test all color combinations for WCAG AA contrast

### Spacing Scale

**8px Base Unit:**
```
1 = 4px   (0.25rem)  - Tight internal spacing
2 = 8px   (0.5rem)   - Default internal spacing
3 = 12px  (0.75rem)  - Comfortable internal spacing
4 = 16px  (1rem)     - Small external spacing
5 = 24px  (1.5rem)   - Medium external spacing
6 = 32px  (2rem)     - Large external spacing
7 = 48px  (3rem)     - Section spacing
8 = 64px  (4rem)     - Major section spacing
9 = 96px  (6rem)     - Page-level spacing
```

**Usage:**
- Use scale consistently (no arbitrary values)
- Prefer larger spacing on larger screens
- Internal padding: space-2 to space-4
- Between elements: space-4 to space-6
- Between sections: space-7 to space-9

### Border Radius

**Minimal, Consistent:**
```
sm: 4px  (0.25rem)  - Tags, badges
md: 6px  (0.375rem) - Buttons, inputs
lg: 8px  (0.5rem)   - Cards, containers
```

**No border-radius > 8px** (avoids overly "soft" aesthetic).

### Shadows

**Subtle Depth Only:**
```
sm: 0 1px 2px rgba(0,0,0,0.05)    - Hover states
md: 0 4px 6px rgba(0,0,0,0.1)     - Cards
lg: 0 10px 15px rgba(0,0,0,0.1)   - Modals (if needed)
```

**Usage:**
- Use sparingly (shadows aren't necessary for most elements)
- Prefer borders over shadows for containers
- Only on interactive elements to signal affordance

---

## Component Patterns

### Containers

**Purpose:** Constrain content width and provide consistent padding.

```astro
<div class="container">
  <!-- Content max-width: 1280px, centered -->
</div>
```

**Variants:**
- Default: 1280px max-width
- Narrow: 720px (for long-form content)
- Wide: 1440px (for data tables, if needed)

### Cards

**Purpose:** Group related information with subtle visual separation.

**Rules:**
- Use border, not shadow (default)
- Add shadow only on hover (interactive cards)
- Padding: space-5 (24px)
- Border-radius: radius-lg (8px)

### Buttons

**Hierarchy:**
```
Primary:   Fill color, high contrast (main CTAs)
Secondary: Outlined, medium contrast (alternative actions)
Tertiary:  Text-only link style (low-priority actions)
```

**Sizes:**
```
sm: 8px × 12px padding, 14px text
md: 12px × 24px padding, 16px text (default)
lg: 16px × 32px padding, 18px text (hero CTAs)
```

**Rules:**
- Maximum 2 CTAs per section
- Primary CTA on the left (reading order)
- Never use red for primary buttons (implies danger)

### Lists

**Unordered:**
- Use for feature lists, benefits, key points
- Left-aligned bullets
- Space-2 between items

**Ordered:**
- Use for step-by-step instructions only
- Clear visual hierarchy for multi-level lists

### Code Blocks

**Inline:**
- Background: bg-secondary
- Padding: 2px × 4px
- Border-radius: radius-sm
- Font: mono stack

**Block:**
- Background: bg-secondary
- Padding: space-4
- Border-radius: radius-md
- Syntax highlighting: GitHub Dark theme (muted colors)

---

## Layout Patterns

### Page Structure

**Standard Page:**
```
Header (sticky)
  ↓
Hero/Page Title
  ↓
Content Sections (space-8 between)
  ↓
Footer
```

**Blog Post:**
```
Header (sticky)
  ↓
Article Header (title, meta, summary)
  ↓
Article Content (max-width: 720px)
  ↓
Article Footer (author, date)
  ↓
Footer
```

### Grid Systems

**Feature Grids:**
- Mobile: 1 column
- Tablet (768px+): 2 columns
- Desktop (1024px+): 3 columns
- Gap: space-5 or space-6

**Content + Sidebar:**
- Mobile: Stacked (sidebar below content)
- Desktop (1024px+): 2/3 content, 1/3 sidebar

### Responsive Breakpoints

```
Mobile:  < 640px  (default)
Tablet:  640px+   (sm)
Desktop: 768px+   (md)
Large:   1024px+  (lg)
XLarge:  1280px+  (xl)
```

**Mobile-first media queries:**
```css
/* Mobile styles (default) */

@media (min-width: 768px) {
  /* Tablet and up */
}

@media (min-width: 1024px) {
  /* Desktop and up */
}
```

---

## Interaction Patterns

### Links

**In-text links:**
- Color: accent-primary
- Underline on hover only
- Focus: 2px outline, accent-primary

**Navigation links:**
- Color: text-secondary
- No underline
- Hover: accent-primary
- Active state: text-primary, no underline

**Button-style links:**
- Same styling as buttons
- Use `<a>` tag with button classes

### Focus States

**Keyboard navigation:**
```css
:focus-visible {
  outline: 2px solid var(--color-accent-primary);
  outline-offset: 2px;
  border-radius: 2px;
}
```

**Never remove focus outlines** (accessibility violation).

### Hover States

**Interactive elements:**
- Transition: 150ms ease-in-out
- Color shift (e.g., text-secondary → accent-primary)
- Background shift (e.g., accent-primary → accent-hover)
- Cursor: pointer

**Non-interactive elements:**
- No hover state (don't mislead users)

---

## Content Patterns

### Audience Signals

**For Developers:**
- Badge: "For Developers"
- Background: subtle tech-oriented context (code, architecture)
- Links to: Docs, GitHub, API reference

**For Executives:**
- Badge: "For Decision-Makers"
- Background: strategic/governance context
- Links to: Governance, case studies, about

**For Both:**
- No explicit badge needed
- Balanced technical and strategic language

### CTAs (Call-to-Action)

**Effective CTA copy:**
- Action-oriented verbs (Get Started, Learn More, View Docs)
- Clear outcome (→ Documentation, → Case Studies)
- No false urgency ("Start now!", "Don't miss out!")

**CTA placement:**
- Hero section: 2 CTAs (primary + secondary)
- Mid-page: 1 CTA per major section
- Footer: Contact/community CTAs

---

## Accessibility Checklist

### Required for All Components

- [ ] Semantic HTML (no `<div>` where `<section>` belongs)
- [ ] ARIA labels where needed (`aria-label`, `aria-current`)
- [ ] Keyboard accessible (tab order, enter/space for actions)
- [ ] Focus visible (`:focus-visible` styles)
- [ ] Color contrast ≥ 4.5:1 for text, ≥ 3:1 for UI elements
- [ ] Touch targets ≥ 44x44px
- [ ] No reliance on color alone
- [ ] Respects `prefers-reduced-motion`
- [ ] Alt text for all images
- [ ] Heading hierarchy (no skipped levels)

---

## CSS Architecture

### Scoped Styles (Default)

**Astro automatically scopes component styles:**
```astro
<style>
  .my-component { /* scoped to this component */ }
</style>
```

**Benefits:**
- No naming collisions
- No global cascade issues
- Component-level encapsulation

### Global Styles (Minimal)

**Only for:**
- CSS reset
- Base typography
- Utility classes (`.container`, `.sr-only`)
- CSS variables

**File:** `src/styles/global.css`

### CSS Variables

**All design tokens as CSS custom properties:**
```css
:root {
  --color-text-primary: #1a1a1a;
  --space-4: 1rem;
  --text-lg: 1.125rem;
  /* etc. */
}
```

**Benefits:**
- Single source of truth
- Easy theme switching (dark mode)
- Consistent values across components

### Naming Conventions

**Classes:**
- Descriptive, not presentational
- `hero-section` not `blue-box`
- BEM-style for complex components (optional)

**Variables:**
- Semantic names: `--color-text-primary` not `--gray-900`
- Prefix by type: `--color-`, `--space-`, `--text-`

---

## Anti-Patterns to Avoid

### Visual

- ❌ Gradients (too "marketing-y")
- ❌ Drop shadows on everything
- ❌ Multiple accent colors
- ❌ Decorative animations
- ❌ Custom fonts (performance + credibility)
- ❌ Stock photos of people (generic, insincere)

### Interaction

- ❌ Hover states on non-interactive elements
- ❌ Disabled buttons without explanation
- ❌ Click targets < 44x44px
- ❌ Opening links in new tabs without warning
- ❌ Auto-playing anything

### Content

- ❌ "Enterprise-grade" (vague)
- ❌ "Blazing fast" (unverifiable)
- ❌ Long walls of text without structure
- ❌ CTAs without clear outcomes

---

## Design System Maintenance

### When to Add New Patterns

**Yes, if:**
- Pattern appears 3+ times in designs
- Pattern solves a recurring problem
- Pattern improves consistency

**No, if:**
- One-off use case
- Adds unnecessary complexity
- Duplicates existing pattern

### Review Cadence

- Monthly: Review components for usage
- Quarterly: Audit for consistency
- Per-release: Update documentation

---

## References

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Inclusive Components](https://inclusive-components.design/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Project RULES.md (technical constraints)

---

**Design System Owner:** iTowns Website Team  
**Questions:** Refer to governance documentation

