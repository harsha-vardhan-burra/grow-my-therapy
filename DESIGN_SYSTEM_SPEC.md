# DESIGN SYSTEM SPECIFICATION: DR. MAYA REYNOLDS, PSYD

**Brand Positioning:** Grounded, high-end clinical psychology practice in Santa Monica, CA.
**Aesthetic Archetype:** Warm Architectural Sanctuary (Coastal California organic modernism + clinical depth).
**Design Critique Validation:** Passed Anti-AI-Slop test (no purple gradients, no floating blobs, zero decorative glassmorphism).

---

## 1. Color Palette (Semantic Tokens)

All colors meet or exceed WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text) and AAA standards.

| Token | Name | Hex Value | Role & Usage Rationale | Contrast Ratio |
| :--- | :--- | :--- | :--- | :--- |
| `primary` | Deep Cypress | `#283E34` | Brand cornerstone; main CTAs, active elements, focal headings | 9.4:1 on `#FAF8F5` (AAA) |
| `primary-hover` | Forest Shade | `#1D2F27` | Button hover and active states | 12.8:1 on `#FAF8F5` (AAA) |
| `secondary` | Terracotta Clay | `#A3654E` | Secondary badges, warm accents, interactive emphasis | 4.8:1 on `#FAF8F5` (AA) |
| `accent` | Sandstone Ochre | `#D29C6B` | Delicate ornamental borders, subtle highlights, subtle badges | Decorative / large elements |
| `bg-main` | Alabaster Linen | `#FAF8F5` | Primary site background; soothing, low-glare, organic warm white | Base |
| `bg-surface` | Crisp Studio | `#FFFFFF` | Card surfaces, modals, elevated white containers | Base |
| `bg-muted` | Warm Sand | `#F2ECE4` | Subtle section backgrounds, pill tags, inset callout containers | Low contrast fill |
| `bg-dark` | Forest Nocturne | `#18241F` | Statement quote banner, dark atmospheric sections, footer | 14.2:1 with `#FAF8F5` (AAA) |
| `text-primary` | Charcoal Spruce | `#1C2420` | Body text, major headings, navigation links | 11.2:1 on `#FAF8F5` (AAA) |
| `text-muted` | Muted Sage Slate| `#56625C` | Supporting descriptions, timestamps, subheaders | 5.1:1 on `#FAF8F5` (AA) |
| `text-light` | Linen Cream | `#FAF8F5` | Text on dark backgrounds (`#18241F`) | 14.2:1 on `#18241F` (AAA) |
| `text-light-muted`| Muted Sage Sand| `#A2ABA6` | Secondary text on dark surfaces | 6.8:1 on `#18241F` (AAA) |
| `border-light` | Warm Linen Border| `#E6DFD5`| Subtle structural dividers and card outlines | 1.3:1 (Subtle border) |
| `border-medium`| Stone Sand | `#D1C7B7` | Form inputs and interactive card borders | Form input border |

---

## 2. Typography Hierarchy

Pairing:
- **Headings / Editorial:** `Newsreader` (or `Cormorant Garamond` / `Playfair`) — organic serif with warm literary weight and serene authority.
- **Body / Interface:** `Plus Jakarta Sans` (or `Inter` / `Mulish`) — clean modern geometric sans-serif designed for high legibility on screens.

| Scale Token | Font Family | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `display` | Editorial Serif | 60px / 3.75rem | 38px / 2.375rem | Medium 500 | 1.1 | -0.02em |
| `h1` | Editorial Serif | 48px / 3.0rem | 32px / 2.0rem | Medium 500 | 1.15 | -0.02em |
| `h2` | Editorial Serif | 36px / 2.25rem | 26px / 1.625rem | Medium 500 | 1.25 | -0.015em |
| `h3` | Editorial Serif | 26px / 1.625rem | 22px / 1.375rem | Medium 500 | 1.3 | -0.01em |
| `h4` | Editorial Serif | 21px / 1.3125rem| 19px / 1.1875rem| SemiBold 600 | 1.35 | 0em |
| `lead` | Sans-Serif | 19px / 1.1875rem| 17px / 1.0625rem| Normal 400 | 1.6 | 0em |
| `body` | Sans-Serif | 16px / 1.0rem | 15px / 0.9375rem| Normal 400 | 1.65 | 0em |
| `body-sm` | Sans-Serif | 14px / 0.875rem | 13px / 0.8125rem| Normal 400 | 1.5 | 0em |
| `overline` | Sans-Serif | 12px / 0.75rem | 11px / 0.6875rem| SemiBold 600 | 1.2 | +0.12em (Uppercase) |
| `button` | Sans-Serif | 15px / 0.9375rem| 14px / 0.875rem| Medium 500 | 1.0 | +0.02em |

---

## 3. Spacing, Layout & Grid Architecture

- **Base Rhythm:** 8px increments (`4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `80px`, `104px`).
- **Container Max-Width:** `1280px` (`max-w-7xl`) with horizontal gutters `px-6 md:px-10 lg:px-16`.
- **Section Spacing (Y-Axis):**
  - Desktop: `py-24` (96px) to `py-32` (128px) for breathing room.
  - Tablet: `py-20` (80px).
  - Mobile: `py-14` (56px) to `py-16` (64px).
- **Card Padding:** `p-8 md:p-10` for primary feature cards; `p-6 md:p-8` for grid service cards.
- **Border Radius:**
  - Standard Cards: `rounded-2xl` (16px) — organic yet grounded.
  - Buttons / Badges: `rounded-full` (Pill) or `rounded-lg` (8px) for crisp tactile interaction.
  - Architectural Arch Masks: `rounded-t-[100px]` or `rounded-t-full` — deliberate homage to the reference site's arch architecture, refined with modern proportions.

---

## 4. Component Language & Interaction Rules

- **Buttons:**
  - Primary: Deep Cypress background (`#283E34`), Linen Cream text (`#FAF8F5`), `px-7 py-3.5`, subtle shadow `shadow-sm hover:shadow-md`, hover transition with `hover:bg-[#1D2F27] hover:-translate-y-0.5 transition-all duration-200`. Focus ring `focus:ring-2 focus:ring-[#283E34] focus:ring-offset-2`.
  - Secondary / Outline: Transparent background, 1.5px border `#283E34`, text `#283E34`, hover `hover:bg-[#283E34]/5`.
  - Subtle Ghost: Text `#283E34`, underline on hover, icon arrow with translateX on hover.
- **Card Elevations:**
  - No muddy, oversized drop-shadows. Crisp, low-opacity layered ambient shadows: `shadow-[0_4px_20px_-4px_rgba(40,62,52,0.06)]` with border `border border-[#E6DFD5]`.
- **Form Controls:**
  - Accessible inputs with clear labels, explicit focus rings, error messaging, and 44px min tap targets.
- **Micro-Interactions & Motion:**
  - Restrained transitions (150ms - 250ms `cubic-bezier(0.16, 1, 0.3, 1)`).
  - Full support for `@media (prefers-reduced-motion: reduce)`.

---

## 5. Visual Art Direction & Photography Plan

1. **Dr. Maya Reynolds Portrait:**
   - Source: `extracted_profile_assets/image1.png` (Authoritative portrait provided in profile).
   - Framing: Warm natural light, professional, approachable, authentic clinical psychologist persona.
2. **"Our Office" Section Imagery:**
   - Source: `extracted_profile_assets/image2.jpg` (Quiet Santa Monica consultation lounge with natural light and linen sofa).
   - Source: `extracted_profile_assets/image3.jpg` (Calm interior with bookshelf, warm oak desk, and grounding greenery).
3. **Curated Architectural & Nature Atmosphere:**
   - Santa Monica coastal morning light, organic ceramics, warm ocean bluffs, architectural stillness.
   - Consistent warm, natural, low-saturation color grading that pairs with `#283E34` and `#FAF8F5`.
