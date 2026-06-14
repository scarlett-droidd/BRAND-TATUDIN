# Tatudin Design System

> **Claridad operativa para una mente creativa.**
> A management system designed for tattoo artists, built to remove administrative chaos so they can focus on the work that matters: tattooing.

---

## What is Tatudin?

**Tatudin** is administrative software ("software de gestión") designed specifically for tatuadores (tattoo artists). It is part of the **Rupta** ecosystem but operates as an independent product — and is positioned as the monetization base of the project.

The product's job is to **reduce mental load**: agenda, clients, calendars, payments, integrations, and reschedules — all in one calm, ordered surface. The audience is *intermediate-to-advanced tattoo artists* with constant client flow who feel overwhelmed by admin work.

**Key insight from the brief:** *"Quieren tatuar, no gestionar."* (They want to tattoo, not manage.)

### Product surfaces observed in the source material
The uploads show a mobile-first SaaS app in **Spanish** with the following surfaces:

| Screen | Notes |
|---|---|
| Onboarding — *Tell us about yourself* | Role picker (Independent Artist · Studio Owner · Apprentice). Mixed Spanish/English copy in current build. |
| Dashboard / Agenda | Weekly calendar with month label, day strip, appointment cards. |
| Calendar filter modal | Toggle which calendars are visible (e.g. "Santiago Office", "Berlin Guest"). |
| Create Booking Calendar | Public booking page builder; sets duration, type, color identity. |
| Reschedule Appointment | Date + time-of-day picker with state (booked, selected, quiet hours, fastest choice). |
| Finanzas | Balance / earnings / expenses summary, recent activity list. |
| Integraciones | Calendar + reviews connectors (Google, Apple, Outlook, Google Reviews). |

### Source materials
Sources referenced when building this system, now organized in this repo:

- `docs/Brief_de_Marca_Tatudin.docx` — the master brand brief.
- `assets/logo-tatudin-azul.png`, `assets/logo-tatudin-gris.png` — primary wordmark.
- `assets/espiral-azul.png`, `assets/espiral-gris.png` — the spiral icon (primary brand mark).
- `assets/cara-azul.png`, `assets/cara-gris.png` — "cara" (face) variant icons.
- `assets/muneco-azul.png`, `assets/muneco-gris.png`, `assets/muneco-fondo-azul.png`, `assets/muneco-fondo-gris.png` — mascot/character illustrations.
- Product screenshots (Calendario, Reschedule, Finanzas, Integraciones, Your Role, Create Booking Calendar) — referenced during the original recreation, not stored in this repo.

> No codebase or Figma link was provided. The UI kit is a **screenshot-based pixel recreation**, not a code-faithful port. Flag this if codebase access becomes available — fidelity will improve.

---

## CONTENT FUNDAMENTALS

**Language.** Primarily Spanish (Chilean/LatAm). Some buttons and form labels appear in English in the current build (e.g. "Continue", "Custom", "Tattoo session", "Today") — treat that as a build-state inconsistency, not the target voice. New copy should default to Spanish.

**Voice.** A close mentor and creative friend who organises without judgement. Never corporate, cold, complex, or boring. The personality the brief asks for:

> *"Un mentor cercano. Un amigo creativo que ordena sin juzgar."*

**Tone register.**
- Plain, direct, calm. Short sentences.
- "Tú" (informal). Never "usted".
- Avoid jargon, tech-speak, and exclamation marks.
- Microcopy reinforces *claridad* and *control* — show the user nothing is hanging over them.

**Casing.** Sentence case everywhere — buttons, headers, labels. Title Case only for proper nouns (Google Calendar, Google Reviews). UPPERCASE used very sparingly for overlines / category eyebrows ("PREVIEW", "FASTEST CHOICE", "QUIET HOURS", "TOTAL DEL DÍA").

**Length.** Headlines under ~8 words. Empty-state lines under ~6 words. The "Lo ganado hoy" / "Lo que realmente queda" Finanzas headers model the cadence — declarative, owner-first, no filler.

**Emoji.** **No.** None observed in product surfaces. Iconography carries that role.

**Reference copy from the source screens — keep this voice:**

| Surface | Spanish |
|---|---|
| Finanzas balance | "Saldo Total · Todo conciliado" |
| Finanzas section | "Lo ganado hoy" / "Lo que realmente queda" |
| Empty state | "Sin citas completadas hoy" / "Sin gastos registrados este mes" |
| Calendar filter | "Filtrar calendarios" / "Todos los calendarios" / "Aplicar filtros" |
| Integraciones | "Conecta tus calendarios personales para evitar duplicar citas." |
| Integraciones (reviews) | "Gestiona lo que tus clientes dicen de ti." |
| Reschedule prompt | "¿Cuándo movemos la sesión 'Neo-Traditional Sleeve'?" |
| Status chips | "Confirmado · En sesión · Conectado · Conectar" |

**Microcopy patterns from the brief (use as templates).**
> Todo listo para hoy · Sin pendientes · Ordenado · Confirmado

---

## VISUAL FOUNDATIONS

### Color
Three colors do all the work. Restraint is the system.

- **Azul profundo `#221C35`** — the brand's gravity. Used for primary text, headers, dark-mode card backgrounds, sidebar/nav, and the *primary fill* on confirm/continue CTAs. Replaces black throughout.
- **Lavanda claro `#DCDAE9`** — the app canvas. Used for page backgrounds, subtle muted fills, soft chip backgrounds, and disabled/empty states. Provides calm.
- **Rojo `#D50037`** — reserved exclusively for critical actions and alerts: destructive confirms, "in session" live status, "fastest choice" badge, total-loss / overspend signals. **Never decorative.**
- **Neutrals** — a cool, slightly violet-tinted gray scale is allowed for hairlines, secondary text, and disabled inputs. See `colors_and_type.css` for the full ramp.

Backgrounds are almost always solid lavender or white. **No gradients** as decoration. The only "gradient" you'll see is the deep-blue Finanzas balance card, which uses azul-700 → azul-900 to add weight to the headline figure.

### Type
- **UI:** Plus Jakarta Sans (substitute for the unbranded system sans seen in the screenshots — clean humanist sans, friendly without being playful). **Weights:** 400 / 500 / 600 / 700. The product uses 600–700 for headers, 400–500 for body, 600 for buttons and chips.
- **Brand display:** Caveat Brush (substitute for the custom hand-brushed wordmark in `uploads/azul.png`). Use *only* for the wordmark itself or for one accent word in hero compositions. **Never set body or buttons in the brand font.**
- **⚠️ Font substitution flag:** the real wordmark is a custom hand-brushed marker letterform — no font file was provided. Caveat Brush is the closest free match. If a brand font file exists, swap it in `fonts/` and update `--font-brand`.
- **Numerals:** tabular for currency, dates, and times (Finanzas, calendar grids).

### Layout & spacing
- **4-pt grid.** All spacing tokens (`--s-1` … `--s-16`) are multiples of 4.
- Mobile-first; canonical artboard width **390 px** (iPhone 14/15). Padding *inside* the app canvas is **20–24 px**.
- Cards stack with **16 px gap**. Sectional breaks use a **32 px gap** with no divider.
- The "app canvas + white surface card" pattern is the dominant container. Cards always have **24 px internal padding**, **20 px radius**, **white fill**, and the soft elevation listed below.

### Corners & cards
- Cards: **20 px** radius, white surface, `--shadow-sm`.
- Modals/sheets: **24 px** radius, white surface, `--shadow-lg`. Sheets enter bottom-up.
- Buttons: **14 px** radius (square-ish) or **999 px** pill, depending on context. Primary CTAs use 14 px and span full width; chips use pill.
- Inputs: **12 px** radius, **1 px** soft border (`--border-soft`), lavender-tinted fill on inactive (`--lav-100`).
- Avatar / icon wells: pill or perfect circle.

### Borders & dividers
Hairlines (1 px) using `--border-soft` (lavender-300) are rare — used only inside modals as field separators. Most container separation is *spatial*, not lineal.

### Elevation
Two shadow recipes only:
- `--shadow-sm` — resting cards, default chips. Almost invisible.
- `--shadow-lg` — modals, sheets, dropdowns. Diffuse, low-opacity (`rgba(34,28,53,0.10)` with a wide spread).
- A `--shadow-dark` is reserved for inverse / dark-fill cards.

No drop-shadow on buttons. No inner shadows.

### Iconography (placeholder for the standalone section)
See **ICONOGRAPHY** below.

### Backgrounds
- App canvas: solid `--lav-100` (the muted lavender seen behind every screen).
- Section "hero" plates: solid `--azul-700` (the dark balance card in Finanzas, the primary CTA bar, the selected calendar tile).
- **No** full-bleed photography in product UI. **No** repeating patterns or textures. **No** hand-drawn illustration in product chrome (illustrations are reserved for empty states and marketing).
- Imagery, when used (artist avatars, "Your Role" onboarding photo), is **warm + slightly desaturated** monochrome — note the cool gray-toned photo of the ink bottle on the role-picker screen.

### Hover, focus, press
- **Hover (web).** 4% darken on fills; lavender-200 wash on outlined buttons; cursor pointer.
- **Press.** Scale 0.97 + opacity 0.92 for primary buttons; opacity 0.7 for ghost icons.
- **Focus.** 2 px outline using `--border-focus` (azul-700) with a 2 px transparent ring offset. Never the browser default.
- **Disabled.** Opacity 0.4, no pointer events. Disabled primary fills become `--lav-300` with `--azul-400` text.

### Motion
- Calm, not bouncy. Default **200 ms**, `--ease-out`. Slow transitions get **320 ms**, `--ease-in-out`.
- Sheets enter from bottom with a translate-Y + fade. Modals enter with fade + 4 px scale. No spring overshoot.
- No looping animations. Loading uses a single rotating spiral (`Espiral`) at 1.4 s linear.

### Transparency & blur
Used only for modal scrims: `rgba(34, 28, 53, 0.45)` over the page. No glassmorphism / no backdrop-blur cards.

### Density
Comfortable. Touch targets ≥ 44 px. Tab bar items at 56 px height. Form rows ≥ 56 px. Calendar day cells 44–48 px.

### Layout fixtures
- **Top bar:** logo / title + optional icon (notifications, more). 56 px height. Transparent over canvas.
- **Bottom tab bar:** 5 items max, icon + tiny label. Active item is filled azul-700 pill behind icon. Lives at the bottom safe area.
- **Floating Add button:** lavender-tinted dark pill, top-right of list views (see the red "+" in Finanzas → Gastos). Red **only** for destructive add-spend.

---

## ICONOGRAPHY

The system has **two distinct mark systems**: brand marks and product icons.

### Brand marks (in `assets/`)
The brand mark set is hand-drawn and bold. Used in marketing, splashes, loading states, OG images, app icons.

- `logo-tatudin-azul.png` — the primary wordmark with the spiral as the dot on the `i`, azul-profundo on transparent. Use on light/lavender surfaces.
- `logo-tatudin-gris.png` — the wordmark in the lavanda/gris tone, for use on dark (azul-700) surfaces.
- `espiral-azul.png`, `espiral-gris.png` — the **Espiral**, the primary brand glyph. The brief explicitly names this as *"el icono principal"*. Use it solo as the app icon, the loading spinner (slow rotate), the empty-state hero, the favicon.
- `cara-azul.png`, `cara-gris.png` — a circular "cara" (face) glyph with two eye-shaped negative spaces. Use sparingly: friendly empty states, confirmation moments, "you're all caught up" surfaces.
- `muneco-azul.png`, `muneco-gris.png` — mascot/character illustration, two color variants.
- `muneco-fondo-azul.png`, `muneco-fondo-gris.png` — the mascot illustration with a full-color background plate, for hero/marketing placements.

### Product icons
Product UI uses a **light-stroke outline icon family** — 1.5–2 px strokes, rounded joins, no fills (with one exception: the bell and calendar glyphs in tab bars sometimes use a duotone fill).

- **Source of truth.** No icon font or sprite was shipped with the uploads. The closest CDN match — same stroke weight, geometry, and rounded-join personality — is **Lucide** (https://lucide.dev), used at **20 px** for body UI and **24 px** for tab bars / headers.
- **⚠️ Icon substitution flag.** Until the original product SVGs are imported, use Lucide as the working set. Document any custom icons (e.g. the spiral itself, the Tatudin star/sparkle on Finanzas) as exceptions in `assets/`.
- **Emoji.** Never used. Do not introduce.
- **Unicode glyphs as icons.** Never used.
- **Color rules.** Icons inherit current color. Default to `--fg-1` (azul-700) on light surfaces, `--lavanda-claro` on dark. Red icons are reserved (matches the red-CTA-only rule).

---

## Index — what's in this folder

| Path | Purpose |
|---|---|
| `README.md` | This file. Brand, content, visual foundations, iconography. |
| `DESIGN.md` | Quick-reference design tokens — colors, type, spacing, rules. Use this to brief Claude/tools without re-pasting the full guide. |
| `SKILL.md` | Agent skill manifest — entry point when this folder is loaded as a skill. |
| `colors_and_type.css` | Tokens: color scales, semantic vars, type ramp, spacing, radii, shadows, motion. |
| `assets/` | Logos, spiral marks, face marks, mascot illustrations. |
| `docs/` | Source brand brief (`Brief_de_Marca_Tatudin.docx`). |
| `Landing.html` | Current marketing landing page, built on these tokens. |
| `fonts/` | (empty) — Plus Jakarta Sans + Caveat Brush load from Google Fonts via `colors_and_type.css`. Drop custom brand-font files here when available. |
| `preview/` | Design-system cards (rendered in the Design System tab). Split by Type / Colors / Spacing / Components / Brand. |
| `ui_kits/tatudin/` | Click-thru recreation of the mobile product. See its own README. |

Slides are intentionally **not** included — no slide templates were provided in the uploads.

---

## Caveats & open questions

1. **No codebase, no Figma.** Everything was recreated from 7 screenshots + the brand brief. Component fidelity is screenshot-level, not code-level. Re-attach a repo or Figma link to upgrade.
2. **Custom brand font missing.** The hand-brushed *tatudin* wordmark isn't a public font — I'm substituting **Caveat Brush** from Google Fonts. Ship the real font file and drop it in `fonts/` to replace.
3. **Icon set not shipped.** Using **Lucide** as the closest CDN match. Export your product icon set to replace.
4. **Spanish/English copy mix in current build.** Screenshots show some untranslated English in the role-picker. Treat new work as Spanish-first.

> Resolved: the `muñeco` mascot illustrations are now in `assets/` as `muneco-azul.png`, `muneco-gris.png`, `muneco-fondo-azul.png`, and `muneco-fondo-gris.png`.
