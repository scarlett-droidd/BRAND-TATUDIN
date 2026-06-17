# Typography — Tatudin Design System

> **Two families. Four roles. One rule: restraint.**
> The type system exists to communicate clarity, not to decorate. Every size, weight, and spacing decision reinforces the product's core feeling: calm, ordered, in control.

---

## Families in use

Two font families are loaded from Google Fonts via `colors_and_type.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Caveat+Brush&display=swap");
```

A third family (`--font-mono`) is declared for code elements but has no active use in product or landing surfaces.

| Token | Family | Role |
|---|---|---|
| `--font-ui` | Plus Jakarta Sans | Everything functional: body, headings, buttons, labels, captions |
| `--font-brand` | Caveat Brush | Brand accents only: wordmark, 1–2 words in hero headlines |
| `--font-mono` | System monospace (JetBrains Mono fallback) | Code snippets — not active in current build |

---

## The four typographic roles

### 1. Display — hero impact

**Family:** Plus Jakarta Sans  
**Weight:** 800 (Extra Bold)  
**Size:** `clamp(40px, 7vw, 96px)` — fluid, scales with viewport  
**Letter-spacing:** `-0.035em` (very tight — creates mass)  
**Line-height:** `0.98` (lines almost touch — intentional for large text blocks)

```css
.display {
  font-size: clamp(40px, 7vw, 96px);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 0.98;
}
```

**When to use:** Hero headlines only. One per page. This is the loudest voice in the system — it should never compete with anything else on the same surface.

**What it's not for:** Section titles, card headers, or any repeated element. Using it more than once per view breaks the hierarchy.

---

### 2. Brand accent — hand-brushed word

**Family:** Caveat Brush  
**Weight:** 400 (Regular — the only weight the family has)  
**Size:** Matches the surrounding Display text  
**Letter-spacing:** `0` (no tracking — the brush strokes handle rhythm)  
**Transform:** `translateY(0.08em)` to optically align with the Display baseline

```css
.display .brush {
  font-family: var(--font-brand);
  font-weight: 400;
  letter-spacing: 0;
  transform: translateY(0.08em);
}
```

**When to use:**
- 1 or 2 words inside a Display headline — never the full headline
- The wordmark in the nav (`font-size: 28px`, color `--azul-700`)
- Marketing compositions where a human, non-digital texture is needed

**Hard rules — no exceptions:**
- Never set body copy in Caveat Brush
- Never set buttons, labels, or functional UI in Caveat Brush
- Never use more than 2 accent words in a single headline
- Never combine it with bold weight (it doesn't have one — don't fake it with CSS)

> **⚠️ Font substitution note:** The real Tatudin wordmark is a custom hand-brushed letterform — no font file was provided. Caveat Brush is the closest free match available. If the original font file exists, drop it in `fonts/` and update `--font-brand` in `colors_and_type.css`. The visual gap is most visible at small sizes (below 20px).

---

### 3. Eyebrow / Overline — section label

**Family:** Plus Jakarta Sans  
**Weight:** 600 (Semi Bold)  
**Size:** `12px` (fixed — never fluid)  
**Letter-spacing:** `+0.10em` (wide tracking — compensates for uppercase at small size)  
**Transform:** `uppercase`  
**Color:** `--azul-500` (secondary, never primary)

```css
.eyebrow {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: var(--azul-500);
}
```

**When to use:** Above every major section heading. It functions as a category label — tells the reader what type of content follows before they read the headline. Appears inside a pill-shaped container with a soft border in the landing.

**What it's not for:** Body labels, button text, or any element that needs to be tapped/clicked. Its low contrast (`--azul-500` on white) is intentional — it's a whisper, not a shout.

---

### 4. Functional type — everything else

**Family:** Plus Jakarta Sans  
**Weights in use:** 400 / 500 / 600 / 700  
**Sizes:** `11px` → `40px` depending on surface

This single family handles every remaining typographic role. Hierarchy within this level is built through **weight and size only** — not through additional families.

| Role | Size | Weight | Line-height | Letter-spacing | Color |
|---|---|---|---|---|---|
| `h2` — section heading | `24px` (token) / overridden up to `40px` in landing | 700 | `1.3` | `-0.02em` | `--fg-1` |
| `h3` — card/subsection heading | `20px` | 600 | `1.3` | `0` | `--fg-1` |
| `h4` | `18px` | 600 | `1.3` | `0` | `--fg-1` |
| `.sub` — hero subtitle | `clamp(16px, 1.4vw, 19px)` | 400–500 | `1.55` | `0` | `--azul-500` |
| Nav links | `14px` | 500 | — | `0` | `--azul-500` |
| `p` / body | `15px` | 400 | `1.45` | `0` | `--fg-1` |
| `.body-lg` | `17px` | 400 | `1.45` | `0` | `--fg-1` |
| `.body-sm` | `14px` | 400 | `1.45` | `0` | `--fg-2` |
| Buttons | `13–15px` | 600 | — | `0` | depends on variant |
| `.caption` | `12px` | 400 | `1.45` | `0` | `--fg-2` |
| `.overline` | `11px` | 600 | — | `+0.08em` | `--fg-2` |

---

## Full token reference

Defined in `colors_and_type.css` under `:root`:

```css
/* Families */
--font-ui:     "Plus Jakarta Sans", ui-sans-serif, system-ui, -apple-system,
               "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--font-brand:  "Caveat Brush", "Permanent Marker", "Bradley Hand", cursive;
--font-mono:   ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo,
               Consolas, "Liberation Mono", monospace;

/* Weight tokens */
--fw-regular:  400;
--fw-medium:   500;
--fw-semibold: 600;
--fw-bold:     700;
--fw-extra:    800;

/* Size scale */
--t-display:   44px;   /* hero brand (overridden to fluid in landing) */
--t-h1:        32px;
--t-h2:        24px;
--t-h3:        20px;
--t-h4:        18px;
--t-body-lg:   17px;
--t-body:      15px;
--t-body-sm:   14px;
--t-caption:   12px;
--t-overline:  11px;

/* Line-height tokens */
--lh-tight:    1.15;
--lh-snug:     1.3;
--lh-normal:   1.45;
--lh-loose:    1.6;

/* Letter-spacing tokens */
--ls-tight:    -0.02em;
--ls-normal:   0;
--ls-wide:     0.04em;
--ls-overline: 0.08em;
```

---

## Visual hierarchy summary

```
┌──────────────────────────────────────────────────────┐
│  DISPLAY                                             │
│  Plus Jakarta Sans · 800 · 40–96px fluid · ls –0.035│
│                                                      │
│  "Tu tatuaje merece más                              │
│   que planillas y DMs."                              │
│                        ^^^                           │
│                   Caveat Brush accent                │
├──────────────────────────────────────────────────────┤
│  EYEBROW                                             │
│  Plus Jakarta Sans · 600 · 12px · UPPERCASE · +0.10  │
│                                                      │
│  LANZAMIENTO PRÓXIMO · ACCESO BETA LIMITADO          │
├──────────────────────────────────────────────────────┤
│  H2 — Section heading                                │
│  Plus Jakarta Sans · 700 · 24–40px · ls –0.02        │
│                                                      │
│  Hecho para tu bolsillo, no para un escritorio.      │
├──────────────────────────────────────────────────────┤
│  BODY / FUNCTIONAL                                   │
│  Plus Jakarta Sans · 400–600 · 11–19px               │
│                                                      │
│  Subtítulos, cuerpo, botones, nav, captions          │
└──────────────────────────────────────────────────────┘
```

---

## Known issues & technical debt

### Hardcoded sizes in the landing

Several `h2` elements in `Landing.html` override the `--t-h2` token with inline styles:

```html
<!-- ⚠️ Bypasses the token system -->
<h2 style="font-size: 50px">Empieza a tatuar con un...</h2>
<h2 style="font-size: 70px; ...">De caos → a claridad</h2>
```

This means section heading sizes are **not controlled by the design system** — they're set per-section by hand. This is technical debt: any global heading resize requires hunting through the HTML rather than updating a single token.

**Recommended fix:** Define fluid heading variants as named classes (e.g. `.h2-hero`, `.h2-section`) with `clamp()` values, and replace all inline `font-size` overrides with those classes.

### No custom brand font file

Caveat Brush is a substitution. The real Tatudin wordmark is a custom hand-lettered mark. Until the original font file is available:
- Do not use Caveat Brush at sizes below 20px — it loses legibility
- Do not use it in product UI (only marketing / landing / brand moments)
- When the real file arrives: add it to `fonts/`, update `--font-brand`, check all `.brush` elements

---

## Rules at a glance

| ✅ Do | ❌ Don't |
|---|---|
| Use Plus Jakarta Sans for all UI | Set body or buttons in Caveat Brush |
| Use Caveat Brush for 1–2 accent words per headline | Use Caveat Brush for full headlines |
| Use `--font-ui` and `--font-brand` tokens | Hardcode font families inline |
| Use the token scale for all sizes | Hardcode `font-size` per section |
| Uppercase only for eyebrows and overlines | Uppercase section titles or body text |
| Tight letter-spacing for large display text | Apply negative letter-spacing to body text |
| Use tabular numerals for currency and times | Mix proportional and tabular in the same list |

---

*Part of the Tatudin Design System — Rupta Ecosystem.*  
*Last updated: June 2026.*  
*Source of truth for type: `colors_and_type.css` · Landing implementation: `Landing.html`*
