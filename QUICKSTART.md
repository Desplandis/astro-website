# Quick Start Guide

## ✅ Project Status

The Astro project structure is **fully configured** and ready to use.

Dependencies have been installed (`node_modules/` and `package-lock.json` detected).

---

## 🚀 Start Development

```bash
npm run dev
```

**Server will start at:** `http://localhost:4321`

**Hot reload enabled** - changes will reflect immediately.

---

## 📁 Project Structure Overview

```
src/
├── components/    # Reusable UI components (Header, Footer, Button, Card)
├── content/       # Markdown content collections (blog, case-studies, governance)
├── layouts/       # Page layout templates (Base, Page, Blog)
├── pages/         # Routes (index, blog, case-studies, etc.)
├── styles/        # Global CSS and variables
└── utils/         # Helper functions (dates, content)
```

---

## 📝 Adding Content

### Blog Post

Create a new file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
summary: "Brief description for listings"
publishDate: 2026-01-06
audience: "both"
tags: ["tag1", "tag2"]
draft: false
---

Your content here...
```

### Case Study

Create a new file in `src/content/case-studies/`:

```markdown
---
title: "Organization Name"
organization: "Full Organization Name"
industry: "research"
useCase: "One-sentence use case description"
outcome: "What was achieved"
publishDate: 2026-01-06
featured: true
---

Full case study content...
```

---

## 🎨 Available Routes

Visit these URLs in your browser (after starting dev server):

- `http://localhost:4321/` - Homepage
- `http://localhost:4321/blog` - Blog listing
- `http://localhost:4321/case-studies` - Case studies
- `http://localhost:4321/governance` - Governance docs
- `http://localhost:4321/docs` - Documentation
- `http://localhost:4321/community` - Community page

---

## 🛠️ Other Commands

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Type-check TypeScript and content schemas
npm run astro check

# Format code
npm run format

# Lint code
npm run lint
```

---

## 📦 What's Included

✅ **3 Content Collections** with type-safe schemas (blog, case-studies, governance)  
✅ **9 Pages** (homepage, blog, case studies, governance, docs, community, 404)  
✅ **4 Components** (Header, Footer, Button, Card)  
✅ **3 Layouts** (Base, Page, Blog)  
✅ **Global Styles** with CSS variables and responsive design  
✅ **Utility Functions** for dates and content manipulation  
✅ **Sample Content** (1 blog post, 1 case study, 1 governance doc)

---

## 🎯 Next Steps

1. **Start the dev server** → `npm run dev`
2. **Browse the site** → Visit `http://localhost:4321`
3. **Add real content** → Replace sample files in `src/content/`
4. **Customize components** → Edit components in `src/components/`
5. **Update homepage** → Edit `src/pages/index.astro`

---

## 📚 Documentation

- **Full Setup Guide:** [SETUP.md](SETUP.md)
- **Directory Structure:** [STRUCTURE.txt](STRUCTURE.txt)
- **Product Definition:** [docs/product-definition.md](docs/product-definition.md)
- **Stack Decision:** [docs/stack-decision.md](docs/stack-decision.md)
- **Project Rules:** [.cursor/rules/project/RULES.md](.cursor/rules/project/RULES.md)

---

## ⚡ Quick Tips

- **Content is validated** - Invalid frontmatter will cause build errors with helpful messages
- **TypeScript paths** - Use `@components/*`, `@layouts/*`, `@utils/*`, `@styles/*`
- **Scoped CSS** - Component styles are automatically scoped
- **Zero JS by default** - No JavaScript shipped unless explicitly added
- **Mobile-first** - All styles are responsive

---

## ❓ Need Help?

- Check [SETUP.md](SETUP.md) for detailed configuration info
- Review [Astro Documentation](https://docs.astro.build)
- Look at existing components and pages for patterns

---

**Happy Building!** 🎉

