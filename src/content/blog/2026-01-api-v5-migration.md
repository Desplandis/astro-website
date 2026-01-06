---
title: "Migrating to iTowns v5: Breaking Changes and Upgrade Path"
summary: "Complete migration guide for upgrading from iTowns v4 to v5, including breaking changes, deprecation timeline, and code migration examples."
publishDate: 2026-01-03
audience: "developers"
tags: ["technical", "migration", "api"]
draft: false
featured: false
author: "Technical Team"
---

iTowns v5 introduces significant improvements to the API, along with some breaking changes. This guide covers everything you need to migrate from v4.

## Overview of Changes

### Why v5?

Version 5 addresses long-standing issues:

- **Simplified layer API** — Consistent patterns across all layer types
- **Improved TypeScript support** — Full type definitions
- **Better performance defaults** — Optimized out of the box
- **Modern JavaScript** — ES2022 baseline

### Deprecation Timeline

| Version | Date | Status |
|---------|------|--------|
| v4.x | Active | Maintenance mode (security fixes only) |
| v5.0 | Jan 2026 | Current release |
| v4.x EOL | Jul 2026 | End of support |

## Breaking Changes

### 1. Layer Construction

**Before (v4):**
```javascript
const layer = new itowns.ColorLayer('imagery', {
  source: new itowns.WMTSSource({
    url: 'https://example.com/wmts',
    layer: 'ortho',
    format: 'image/png',
    tileMatrixSet: 'PM',
  }),
});
view.addLayer(layer);
```

**After (v5):**
```javascript
const layer = new itowns.ColorLayer({
  id: 'imagery',
  source: {
    type: 'wmts',
    url: 'https://example.com/wmts',
    layer: 'ortho',
    format: 'image/png',
    tileMatrixSet: 'PM',
  },
});
view.addLayer(layer);
```

**Key changes:**
- `id` is now a property, not constructor argument
- Source is now a plain object with `type` discriminator
- Source classes removed in favor of configuration objects

### 2. Event System

**Before (v4):**
```javascript
view.addFrameRequester(itowns.MAIN_LOOP_EVENTS.UPDATE_START, (dt) => {
  // ...
});
```

**After (v5):**
```javascript
view.addEventListener('update-start', (event) => {
  const { deltaTime } = event.detail;
  // ...
});
```

**Key changes:**
- Standard `addEventListener` API
- Event data in `event.detail`
- Kebab-case event names

### 3. View Options

**Before (v4):**
```javascript
const view = new itowns.GlobeView(container, {
  coord: new itowns.Coordinates('EPSG:4326', 2.35, 48.85),
  range: 25000000,
});
```

**After (v5):**
```javascript
const view = new itowns.GlobeView(container, {
  initialPosition: {
    longitude: 2.35,
    latitude: 48.85,
    altitude: 25000000,
  },
});
```

**Key changes:**
- Simplified initial position object
- No `Coordinates` wrapper needed
- Clearer property names

### 4. Removed APIs

The following have been removed with no direct replacement:

| Removed | Alternative |
|---------|-------------|
| `View.pickFeaturesAt()` | Use `View.pickObjectsAt()` with type filter |
| `Layer.visible` setter | Use `Layer.setVisibility(bool)` |
| `GlobeControls.enableRotation` | Use `GlobeControls.options.rotation` |

## Migration Script

We provide a codemod to automate common migrations:

```bash
# Install the migration tool
npm install -g @itowns/migrate

# Run on your codebase
itowns-migrate --from v4 --to v5 src/
```

The script handles:
- Layer construction updates
- Event listener migration
- Import path changes

Manual review required for:
- Custom source implementations
- Extended layer classes
- Non-standard event handling

## Step-by-Step Migration

### Step 1: Update Dependencies

```bash
npm install itowns@5 --save
```

### Step 2: Run Migration Script

```bash
npx @itowns/migrate src/
```

### Step 3: Fix TypeScript Errors

With v5's improved types, you may see new type errors. Address them:

```typescript
// Before: implicit any
const layer = view.getLayerById('imagery');

// After: explicit type
const layer = view.getLayerById<ColorLayer>('imagery');
```

### Step 4: Test Thoroughly

Focus testing on:
- Layer loading and display
- User interactions (pan, zoom, pick)
- Event handling
- Performance (should improve)

### Step 5: Remove Deprecation Warnings

Enable strict mode to catch remaining issues:

```javascript
itowns.config.strict = true;
```

## New Features in v5

While migrating, consider adopting new capabilities:

### Declarative Layers

```javascript
const layers = itowns.createLayers([
  { type: 'color', id: 'imagery', source: { type: 'wmts', ... } },
  { type: 'elevation', id: 'terrain', source: { type: 'wms', ... } },
]);

layers.forEach(layer => view.addLayer(layer));
```

### Improved Loading States

```javascript
layer.addEventListener('loading-change', (event) => {
  const { loading, progress } = event.detail;
  updateLoadingUI(loading, progress);
});
```

### Built-in Performance Monitoring

```javascript
const stats = view.getPerformanceStats();
console.log(stats.fps, stats.memoryUsage, stats.tilesLoaded);
```

## Getting Help

- [Migration Issues](https://github.com/iTowns/itowns/issues?q=label:migration)
- [Discussion Forum](https://github.com/iTowns/itowns/discussions)
- [v5 Documentation](/docs/v5)

---

*Having trouble migrating? Open an issue with the `migration` label and we'll help.*

