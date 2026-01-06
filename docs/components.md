# Component Library

**iTowns Website Components**  
**Version:** 1.0

---

## Layout Components

### BaseLayout

**Purpose:** Foundation HTML structure with SEO meta tags.

**Location:** `src/layouts/BaseLayout.astro`

**Props:**
```typescript
{
  title: string;        // Page title
  description: string;  // Meta description
  canonical?: string;   // Canonical URL (optional)
  image?: string;       // OG image URL (optional)
}
```

**Usage:**
```astro
---
import BaseLayout from '@layouts/BaseLayout.astro';
---

<BaseLayout
  title="Page Title"
  description="Page description for SEO"
>
  <!-- Your content -->
</BaseLayout>
```

**Features:**
- Automatic SEO meta tags
- Open Graph and Twitter card support
- Favicon and manifest links
- Responsive viewport

---

### PageLayout

**Purpose:** Standard page wrapper with header and footer.

**Location:** `src/layouts/PageLayout.astro`

**Props:**
```typescript
{
  title: string;
  description: string;
  canonical?: string;
  image?: string;
}
```

**Usage:**
```astro
---
import PageLayout from '@layouts/PageLayout.astro';
---

<PageLayout title="About" description="Learn about iTowns">
  <!-- Your page content -->
</PageLayout>
```

**Features:**
- Includes Header and Footer automatically
- Extends BaseLayout
- Semantic `<main>` wrapper

---

### BlogLayout

**Purpose:** Blog post template with metadata display.

**Location:** `src/layouts/BlogLayout.astro`

**Props:**
```typescript
{
  title: string;
  summary: string;
  publishDate: Date;
  updatedDate?: Date;
  audience: 'developers' | 'executives' | 'both';
  tags: string[];
  author?: string;
}
```

**Usage:**
```astro
---
import BlogLayout from '@layouts/BlogLayout.astro';
---

<BlogLayout
  title="Post Title"
  summary="Post summary"
  publishDate={new Date('2026-01-06')}
  audience="both"
  tags={['governance', 'technical']}
>
  <!-- Blog post content (markdown) -->
</BlogLayout>
```

**Features:**
- Displays post metadata (date, audience, tags)
- Optimized for reading (max-width: 720px)
- Author attribution

---

## UI Components

### Button

**Purpose:** Primary interactive element for CTAs and actions.

**Location:** `src/components/ui/Button.astro`

**Props:**
```typescript
{
  href?: string;          // Link URL (creates <a> instead of <button>)
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  class?: string;
}
```

**Usage:**
```astro
---
import Button from '@components/ui/Button.astro';
---

<Button href="/docs" variant="primary" size="lg">
  Get Started →
</Button>

<Button variant="outline">Learn More</Button>
```

**Variants:**
- `primary` - Filled, high contrast (main CTAs)
- `secondary` - Dark filled (alternative actions)
- `outline` - Outlined, medium contrast

**Accessibility:**
- Keyboard accessible
- Focus-visible styles
- Semantic HTML (button vs link)

---

### Card

**Purpose:** Container for grouped content with optional interactivity.

**Location:** `src/components/ui/Card.astro`

**Props:**
```typescript
{
  href?: string;  // Makes card clickable
  class?: string;
}
```

**Usage:**
```astro
---
import Card from '@components/ui/Card.astro';
---

<Card href="/case-studies/example">
  <h3>Card Title</h3>
  <p>Card content...</p>
</Card>

<Card>
  <p>Non-clickable card</p>
</Card>
```

**Features:**
- Border (not shadow) by default
- Hover state for clickable cards
- Padding: 24px
- Border-radius: 8px

---

### Container

**Purpose:** Constrain content width and provide consistent padding.

**Location:** `src/components/ui/Container.astro`

**Props:**
```typescript
{
  size?: 'default' | 'narrow' | 'wide';
  class?: string;
}
```

**Usage:**
```astro
---
import Container from '@components/ui/Container.astro';
---

<Container>
  <!-- Max-width: 1280px -->
</Container>

<Container size="narrow">
  <!-- Max-width: 720px (for long-form content) -->
</Container>

<Container size="wide">
  <!-- Max-width: 1440px (for data tables) -->
</Container>
```

**Features:**
- Centered with auto margins
- Responsive padding
- Mobile: 16px padding
- Desktop: 24px padding

---

### Section

**Purpose:** Page section wrapper with consistent spacing.

**Location:** `src/components/ui/Section.astro`

**Props:**
```typescript
{
  background?: 'primary' | 'secondary';
  spacing?: 'default' | 'large' | 'small';
  class?: string;
}
```

**Usage:**
```astro
---
import Section from '@components/ui/Section.astro';
---

<Section background="secondary" spacing="large">
  <!-- Section content -->
</Section>
```

**Spacing:**
- `small`: 32px top/bottom
- `default`: 64px top/bottom
- `large`: 96px top/bottom

---

### Tag

**Purpose:** Small labels for categorization (tags, labels, metadata).

**Location:** `src/components/ui/Tag.astro`

**Props:**
```typescript
{
  variant?: 'default' | 'primary' | 'success' | 'warning';
  size?: 'sm' | 'md';
  class?: string;
}
```

**Usage:**
```astro
---
import Tag from '@components/ui/Tag.astro';
---

<Tag>governance</Tag>
<Tag variant="primary">featured</Tag>
<Tag variant="success" size="sm">active</Tag>
```

**Variants:**
- `default` - Gray background
- `primary` - Blue accent
- `success` - Green
- `warning` - Orange

---

### Badge

**Purpose:** Audience indicator for content sections.

**Location:** `src/components/ui/Badge.astro`

**Props:**
```typescript
{
  audience?: 'developers' | 'executives' | 'both';
  class?: string;
}
```

**Usage:**
```astro
---
import Badge from '@components/ui/Badge.astro';
---

<Badge audience="developers" />
<!-- Renders: "For Developers" -->

<Badge audience="executives" />
<!-- Renders: "For Decision-Makers" -->
```

**Features:**
- Uppercase text
- Color-coded by audience
- Renders nothing if no audience specified

---

## Section Components

### Hero

**Purpose:** Above-the-fold hero section with title and CTAs.

**Location:** `src/components/sections/Hero.astro`

**Props:**
```typescript
{
  title: string;
  subtitle?: string;
  primaryCTA?: { href: string; label: string };
  secondaryCTA?: { href: string; label: string };
  class?: string;
}
```

**Usage:**
```astro
---
import Hero from '@components/sections/Hero.astro';
---

<Hero
  title="A Framework for 3D Geospatial Web Applications"
  subtitle="Built as a commons, governed by its users."
  primaryCTA={{ href: '/docs', label: 'Get Started →' }}
  secondaryCTA={{ href: '/about', label: 'Why iTowns?' }}
>
  <!-- Optional: Additional content (quick facts, etc.) -->
</Hero>
```

**Features:**
- Center-aligned
- Large typography
- CTA buttons
- Responsive (stacks on mobile)

---

### FeatureGrid

**Purpose:** Grid layout for features, benefits, or cards.

**Location:** `src/components/sections/FeatureGrid.astro`

**Props:**
```typescript
{
  columns?: 2 | 3 | 4;
  heading?: string;
  description?: string;
  class?: string;
}
```

**Usage:**
```astro
---
import FeatureGrid from '@components/sections/FeatureGrid.astro';
import Card from '@components/ui/Card.astro';
---

<FeatureGrid
  columns={3}
  heading="Key Features"
  description="What makes iTowns different"
>
  <Card>
    <h3>Feature 1</h3>
    <p>Description...</p>
  </Card>
  <Card>
    <h3>Feature 2</h3>
    <p>Description...</p>
  </Card>
  <Card>
    <h3>Feature 3</h3>
    <p>Description...</p>
  </Card>
</FeatureGrid>
```

**Features:**
- Responsive grid
- Optional section header
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 2-4 columns

---

### CallToAction

**Purpose:** Mid or end-of-page CTA section.

**Location:** `src/components/sections/CallToAction.astro`

**Props:**
```typescript
{
  heading: string;
  description?: string;
  primaryCTA?: { href: string; label: string };
  secondaryCTA?: { href: string; label: string };
  background?: 'primary' | 'secondary';
  class?: string;
}
```

**Usage:**
```astro
---
import CallToAction from '@components/sections/CallToAction.astro';
---

<CallToAction
  heading="Ready to Get Started?"
  description="Install iTowns and start building today."
  primaryCTA={{ href: '/docs/getting-started', label: 'Get Started' }}
  secondaryCTA={{ href: '/community', label: 'Join Community' }}
  background="secondary"
/>
```

**Features:**
- Center-aligned
- Background color variants
- Up to 2 CTAs
- Full-width section

---

## Layout Patterns

### Header

**Location:** `src/components/layout/Header.astro`

**Features:**
- Sticky navigation
- Active state for current page
- GitHub link
- Responsive (stacks on mobile)

**Navigation Items:**
- Documentation
- Blog
- Case Studies
- Governance
- Community

---

### Footer

**Location:** `src/components/layout/Footer.astro`

**Features:**
- Multi-column layout
- Dual-audience link organization
- Copyright and license info
- Responsive (stacks on mobile)

**Sections:**
1. About (left column)
2. For Developers
3. For Decision-Makers
4. Connect

---

## Component Composition Examples

### Homepage Hero

```astro
---
import Hero from '@components/sections/Hero.astro';
---

<Hero
  title="A Framework for 3D Geospatial Web Applications"
  subtitle="Built as a commons, governed by its users."
  primaryCTA={{ href: '/docs/getting-started', label: 'Get Started →' }}
  secondaryCTA={{ href: '/about', label: 'Why iTowns?' }}
>
  <ul class="hero-facts">
    <li>Built on open standards (OGC, WMS, WMTS, 3D Tiles)</li>
    <li>Used in production by research organizations</li>
    <li>Apache 2.0 licensed</li>
  </ul>
</Hero>
```

### Case Studies Grid

```astro
---
import FeatureGrid from '@components/sections/FeatureGrid.astro';
import Card from '@components/ui/Card.astro';
import { getCollection } from 'astro:content';

const caseStudies = await getCollection('case-studies');
---

<FeatureGrid
  columns={3}
  heading="Trusted by Organizations"
  description="Real-world implementations across industries"
>
  {caseStudies.map(study => (
    <Card href={`/case-studies/${study.slug}`}>
      <h3>{study.data.organization}</h3>
      <p>{study.data.useCase}</p>
    </Card>
  ))}
</FeatureGrid>
```

### Content Section with Badge

```astro
---
import Section from '@components/ui/Section.astro';
import Container from '@components/ui/Container.astro';
import Badge from '@components/ui/Badge.astro';
import Button from '@components/ui/Button.astro';
---

<Section background="secondary">
  <Container>
    <Badge audience="developers" />
    <h2>Build Without Lock-In</h2>
    <p>Standards-first architecture. No proprietary APIs.</p>
    <Button href="/docs" variant="primary">
      Documentation →
    </Button>
  </Container>
</Section>
```

---

## Accessibility Guidelines

### All Components Must:

1. **Use semantic HTML**
   - `<button>` for actions, `<a>` for navigation
   - Proper heading hierarchy
   - `<section>`, `<article>`, not just `<div>`

2. **Support keyboard navigation**
   - Tab order is logical
   - Enter/Space activates buttons
   - Focus visible (`:focus-visible`)

3. **Provide ARIA labels**
   - `aria-label` for icon-only buttons
   - `aria-current` for active nav items
   - `aria-describedby` for form hints

4. **Meet contrast requirements**
   - Text: 4.5:1 minimum
   - UI elements: 3:1 minimum
   - Test with WebAIM Contrast Checker

5. **Support reduced motion**
   - All transitions respect `prefers-reduced-motion`
   - No auto-playing animations

6. **Touch-friendly targets**
   - Minimum 44x44px for interactive elements
   - Adequate spacing between tap targets

---

## Testing Components

### Browser Testing

**Required:**
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Responsive Testing

**Viewports:**
- Mobile: 375px, 414px
- Tablet: 768px, 834px
- Desktop: 1280px, 1440px, 1920px

### Accessibility Testing

**Tools:**
- Lighthouse (Chrome DevTools)
- axe DevTools
- Keyboard navigation (manual)
- Screen reader (NVDA or VoiceOver)

---

## Adding New Components

### Checklist

- [ ] Create component file in appropriate directory
- [ ] Add TypeScript interface for props
- [ ] Include usage example in component file (comment)
- [ ] Use CSS variables (no hard-coded values)
- [ ] Add focus-visible styles
- [ ] Test keyboard navigation
- [ ] Test on mobile viewport
- [ ] Document in this file
- [ ] Add to visual style guide (if UI component)

### File Naming

- PascalCase: `Button.astro`, `CallToAction.astro`
- Descriptive: `FeatureGrid.astro` not `Grid.astro`
- One component per file

### Component Structure

```astro
---
// Props interface (TypeScript)
interface Props {
  required: string;
  optional?: boolean;
}

// Destructure with defaults
const { required, optional = false } = Astro.props;
---

<!-- HTML (semantic, accessible) -->
<element class="component-name">
  <slot />
</element>

<style>
  /* Scoped CSS (Astro automatically scopes) */
  /* Use CSS variables, no hard-coded values */
  .component-name {
    /* styles */
  }
</style>
```

---

## Component Dependencies

**All components depend on:**
- `src/styles/global.css` (CSS reset, base styles)
- `src/styles/variables.css` (CSS custom properties)

**No external dependencies** (no React, no Tailwind, no CSS frameworks).

---

## Questions?

Refer to [Design System documentation](./design-system.md) for design principles and visual guidelines.

