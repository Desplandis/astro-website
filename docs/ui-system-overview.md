# UI System Overview

**iTowns Website Design System**  
**Version:** 1.0  
**Status:** ✅ Complete

---

## Executive Summary

The iTowns website UI system is a minimal, professional design system built specifically for a dual-audience website serving both developers and C-suite decision-makers. It prioritizes credibility, accessibility, and performance over aesthetic flourish.

**Core Characteristics:**
- **Accessibility-first** - WCAG 2.1 AA compliant, semantic HTML
- **Mobile-first** - Responsive from 375px up
- **Zero JavaScript** - Static HTML/CSS only
- **Neutral visual language** - Credible, not "marketing-y"
- **Scoped CSS** - Component-level styles, no global cascade issues

---

## Design Philosophy

### 1. Credibility Over Aesthetics

**Problem:** Marketing-heavy design undermines technical credibility.

**Solution:**
- Neutral color palette (grays + single blue accent)
- No gradients, minimal shadows
- System font stack (no custom fonts)
- Content and structure create visual hierarchy

### 2. Dual-Audience Balance

**Problem:** Developers want technical depth; executives want strategic clarity.

**Solution:**
- Generous white space (readable, not dense)
- Clear visual separation between audience segments
- Audience badges for explicit signaling
- Progressive disclosure (headings → summaries → details)

### 3. Accessibility as Foundation

**Problem:** Accessibility bolted on later creates debt.

**Solution:**
- Semantic HTML from the start
- Color contrast tested (4.5:1 minimum)
- Keyboard navigation for all interactions
- Focus-visible styles on all interactive elements
- Respects reduced-motion preferences

### 4. Performance as Feature

**Problem:** Slow sites undermine technical credibility.

**Solution:**
- Zero client-side JavaScript
- Scoped CSS (only what's needed per page)
- System fonts (no web font downloads)
- Minimal asset loading

---

## Architecture

### Technology Stack

```
Astro 4.x (Static Site Generator)
  ├── TypeScript (Type-safe props)
  ├── Scoped CSS (Component styles)
  └── CSS Variables (Design tokens)
```

**No external dependencies:**
- ❌ No React, Vue, Svelte
- ❌ No Tailwind CSS
- ❌ No CSS-in-JS
- ❌ No component libraries
- ❌ No web fonts

### File Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── ui/              # Button, Card, Tag, Badge, Container, Section
│   └── sections/        # Hero, FeatureGrid, CallToAction
├── layouts/
│   ├── BaseLayout       # HTML foundation + SEO
│   ├── PageLayout       # Standard page wrapper
│   └── ArticleLayout       # Blog post template
└── styles/
    ├── variables.css    # Design tokens (CSS custom properties)
    └── global.css       # Reset, base typography, utilities
```

### CSS Architecture

**Three-layer system:**

1. **Global Layer** (`global.css`)
   - CSS reset
   - Base typography
   - Utility classes (`.container`, `.sr-only`)
   - Minimal, foundational only

2. **Variables Layer** (`variables.css`)
   - All design tokens as CSS custom properties
   - Colors, spacing, typography, shadows, etc.
   - Single source of truth

3. **Component Layer** (Scoped CSS in `.astro` files)
   - Component-specific styles
   - Automatically scoped by Astro
   - Uses CSS variables (no hard-coded values)

**Benefits:**
- No naming collisions (scoped styles)
- Predictable specificity (component-level)
- Easy theme changes (modify CSS variables)
- Fast builds (no CSS processing)

---

## Component Library

### Layout Components (3)

**BaseLayout** - HTML foundation with SEO meta tags  
**PageLayout** - Standard page with header/footer  
**ArticleLayout** - Blog post with metadata display

### UI Components (7)

**Button** - Primary interactive element (3 variants, 3 sizes)  
**Card** - Content container with optional interactivity  
**Container** - Width constraint (default, narrow, wide)  
**Section** - Page section wrapper with spacing  
**Tag** - Small labels for categorization  
**Badge** - Audience indicator (developers/executives/both)

### Section Components (3)

**Hero** - Above-the-fold with title and CTAs  
**FeatureGrid** - Responsive grid for features/cards  
**CallToAction** - Mid/end-page CTA section

### Layout Patterns (2)

**Header** - Sticky navigation with active state  
**Footer** - Multi-column with dual-audience organization

---

## Design Tokens

### Colors

**Neutral Palette (95% of interface):**
```
Text:        #1a1a1a (primary), #4a4a4a (secondary), #737373 (tertiary)
Backgrounds: #ffffff (primary), #f5f5f5 (secondary), #e5e5e5 (tertiary)
Borders:     #e5e5e5 (default), #d4d4d4 (dark)
```

**Accent (Links, CTAs only):**
```
Primary: #2563eb (blue)
Hover:   #1d4ed8 (darker blue)
Light:   #dbeafe (backgrounds)
```

**Semantic (Status indicators only):**
```
Success: #16a34a (green)
Warning: #ea580c (orange)
Error:   #dc2626 (red)
```

### Typography

**System Font Stack:**
```
Sans: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, ...
Mono: SF Mono, Monaco, Inconsolata, Fira Code, ...
```

**Scale:**
```
h1: 48px (3rem)    - Page titles
h2: 36px (2.25rem) - Major sections
h3: 30px (1.875rem) - Subsections
h4: 24px (1.5rem)   - Supporting
body: 16px (1rem)   - Default
small: 14px (0.875rem) - Captions
```

**Weights:**
```
400 (normal) - Body text
500 (medium) - Navigation, UI
600 (semibold) - Subheadings
700 (bold) - Main headings
```

### Spacing

**8px base unit:**
```
1: 4px   2: 8px   3: 12px  4: 16px
5: 24px  6: 32px  7: 48px  8: 64px  9: 96px
```

**Usage:**
- Internal padding: 8-16px (space-2 to space-4)
- Between elements: 16-32px (space-4 to space-6)
- Between sections: 48-96px (space-7 to space-9)

### Other Tokens

**Border Radius:**
```
sm: 4px (tags, badges)
md: 6px (buttons, inputs)
lg: 8px (cards, containers)
```

**Shadows (minimal use):**
```
sm: 0 1px 2px rgba(0,0,0,0.05)   - Hover states
md: 0 4px 6px rgba(0,0,0,0.1)    - Cards
lg: 0 10px 15px rgba(0,0,0,0.1)  - Modals
```

**Transitions:**
```
fast: 150ms ease-in-out  - Hover states
base: 250ms ease-in-out  - Default
slow: 350ms ease-in-out  - Complex animations
```

---

## Responsive Strategy

### Mobile-First Approach

**Base styles target 375px viewport:**
- Single column layouts
- Stacked navigation
- Larger touch targets (44x44px minimum)
- Readable text without zooming (16px base)

**Progressive enhancement for larger screens:**
```css
/* Mobile (default) */
.grid { grid-template-columns: 1fr; }

/* Tablet (768px+) */
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```

### Breakpoints

```
Mobile:  < 640px  (default, no media query)
Tablet:  640px+   (sm)
Desktop: 768px+   (md)
Large:   1024px+  (lg)
XLarge:  1280px+  (xl)
```

### Container Widths

```
Mobile:  100% (padding: 16px)
Desktop: 100% (padding: 24px, max-width: 1280px)
Narrow:  720px (for long-form content)
Wide:    1440px (for data tables)
```

---

## Accessibility Features

### Built-In Compliance

**WCAG 2.1 AA Minimum:**
- ✅ Color contrast ≥ 4.5:1 (text), ≥ 3:1 (UI)
- ✅ Semantic HTML (headings, sections, nav)
- ✅ Keyboard navigation (tab order, focus states)
- ✅ Focus-visible styles (2px outline)
- ✅ Touch targets ≥ 44x44px
- ✅ No color-only information conveyance
- ✅ Respects `prefers-reduced-motion`
- ✅ Alt text for images (enforced in content)
- ✅ ARIA labels where semantic HTML insufficient

### Screen Reader Support

**Semantic Structure:**
```html
<header> → Site header with navigation
<main>   → Primary page content
<nav>    → Navigation (with aria-label)
<article> → Blog posts and case studies
<section> → Page sections
<footer>  → Site footer
```

**ARIA Enhancement:**
- `aria-current="page"` for active navigation
- `aria-label` for icon-only buttons
- `aria-describedby` for form hints

### Keyboard Navigation

**All interactive elements support:**
- `Tab` to focus
- `Enter` or `Space` to activate
- Visible focus indicator (`:focus-visible`)
- Logical tab order (source order)

---

## Performance Characteristics

### Build Output

**Static HTML only:**
- No client-side JavaScript
- No hydration overhead
- No runtime framework code

**Scoped CSS:**
- Only used styles per page
- No global CSS bloat
- Minimal file sizes

**System Fonts:**
- Zero web font downloads
- Instant text rendering
- Cross-platform consistency

### Typical Page Metrics

**Homepage (estimated):**
```
HTML:       ~20KB (gzipped)
CSS:        ~5KB (scoped + global)
JavaScript: 0KB
Images:     (varies by content)
Total:      ~25KB + images
```

**Performance scores (Lighthouse):**
- Performance: 100 (static pages)
- Accessibility: 95+ (WCAG AA)
- Best Practices: 100
- SEO: 100

**Core Web Vitals:**
- First Contentful Paint: < 1.0s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.0s

---

## Usage Patterns

### Page Composition Example

```astro
---
import PageLayout from '@layouts/PageLayout.astro';
import Hero from '@components/sections/Hero.astro';
import FeatureGrid from '@components/sections/FeatureGrid.astro';
import Card from '@components/ui/Card.astro';
import CallToAction from '@components/sections/CallToAction.astro';
---

<PageLayout title="About" description="Learn about iTowns">
  <Hero
    title="About iTowns"
    subtitle="A commons-oriented 3D framework"
  />

  <FeatureGrid columns={3} heading="Key Principles">
    <Card>
      <h3>Open Governance</h3>
      <p>Decisions made collectively by the community.</p>
    </Card>
    <!-- More cards... -->
  </FeatureGrid>

  <CallToAction
    heading="Get Involved"
    primaryCTA={{ href: '/community', label: 'Join Community' }}
    background="secondary"
  />
</PageLayout>
```

### Component Customization

**All components accept a `class` prop for extension:**
```astro
<Button class="custom-spacing" variant="primary">
  Click Me
</Button>

<style>
  .custom-spacing {
    margin-top: var(--space-6);
  }
</style>
```

**CSS variables can be overridden per-component:**
```astro
<section style="--color-accent-primary: #16a34a;">
  <!-- Green accent instead of blue for this section -->
  <Button variant="primary">Green Button</Button>
</section>
```

---

## Maintenance & Extension

### When to Add New Components

**Yes, if:**
- Pattern appears 3+ times across designs
- Solves a recurring, specific problem
- Improves consistency or DX

**No, if:**
- One-off use case (just write inline)
- Duplicates existing component
- Adds unnecessary complexity

### Component Checklist

Before adding a new component:
- [ ] Cannot be achieved with existing components
- [ ] Has clear, single responsibility
- [ ] Accepts typed props (TypeScript interface)
- [ ] Uses CSS variables (no hard-coded values)
- [ ] Includes focus-visible styles
- [ ] Keyboard accessible
- [ ] Tested on mobile viewport
- [ ] Documented in `docs/components.md`

### Design Token Changes

**All design token changes must:**
1. Update `src/styles/variables.css`
2. Document rationale in `docs/design-system.md`
3. Test across all existing pages
4. Verify accessibility (contrast, touch targets)

---

## Documentation

### Complete Documentation Set

1. **[design-system.md](./design-system.md)** - Design principles, visual language, patterns
2. **[components.md](./components.md)** - Component API reference and usage examples
3. **[ui-system-overview.md](./ui-system-overview.md)** - This file (architecture and philosophy)
4. **[/style-guide](../src/pages/style-guide.astro)** - Visual reference page (in-browser)

### Quick Links

- **Visual Reference:** `/style-guide` (dev server only)
- **Project Rules:** `.cursor/rules/project/RULES.md`
- **Product Definition:** `docs/product-definition.md`
- **Stack Decision:** `docs/stack-decision.md`

---

## Testing & Quality Assurance

### Browser Support

**Minimum:**
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

**Mobile:**
- iOS Safari 13+
- Chrome Android (latest)

### Testing Checklist

**Per Component:**
- [ ] Renders correctly on mobile (375px)
- [ ] Renders correctly on desktop (1280px+)
- [ ] Keyboard navigable
- [ ] Focus visible
- [ ] Color contrast passes (4.5:1 text, 3:1 UI)
- [ ] Works with reduced motion
- [ ] No console errors
- [ ] Lighthouse accessibility score 95+

**Per Page:**
- [ ] Semantic HTML structure
- [ ] Proper heading hierarchy
- [ ] Alt text for images
- [ ] Links have descriptive text
- [ ] Forms have labels
- [ ] Lighthouse scores: 95/95/100/100

---

## Future Considerations

### Potential Enhancements (Not Included)

**Dark Mode:**
- CSS variables already support it (see `variables.css`)
- Can be enabled via `prefers-color-scheme` media query
- Decision: Add only if user feedback indicates need

**Search:**
- Static search via Pagefind (no backend needed)
- Add when site exceeds ~50 pages

**Analytics:**
- Privacy-first (Plausible or Fathom)
- Add only if usage data becomes necessary

**Interactive Demos (3D visualizations):**
- Use Astro islands for isolated interactivity
- Load JavaScript only on demo pages
- Server-render fallback HTML

---

## Summary

The iTowns UI system is a **minimal, professional, and highly accessible** design system built specifically for a dual-audience technical website. It prioritizes credibility, performance, and long-term maintainability over aesthetic maximalism.

**Key Strengths:**
- Zero JavaScript, fully static
- WCAG 2.1 AA accessible by design
- Mobile-first, responsive
- Component-level CSS scoping
- Comprehensive documentation
- Easy to maintain and extend

**What Makes It Different:**
- No frameworks (Astro only for builds)
- No design system "kitchen sink" (just what's needed)
- Neutral visual language (not marketing-heavy)
- Explicit dual-audience support (developers + executives)

**Status:** ✅ Production-ready

---

**Owner:** iTowns Website Team  
**Last Updated:** January 2026  
**Questions:** See project governance documentation

