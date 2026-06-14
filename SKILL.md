---
name: tatudin-design
description: Use this skill to generate well-branded interfaces and assets for Tatudin (a management app for tattoo artists), either for production or throwaway prototypes/mocks. Contains brand guidelines, color tokens, type, fonts, brand assets, and a UI kit of recreated product components for prototyping in the Tatudin visual language.
user-invocable: true
---

# Tatudin Design Skill

Tatudin is administrative software for tattoo artists ("software de gestión para tatuadores"). It is calm, ordered, mentor-like. The product replaces administrative chaos with clarity — its design system follows the same rule: restraint over decoration.

## How to use this skill

1. **Read `README.md` first.** It is the master document — brand voice, content rules, visual foundations, iconography. For a fast token-only reference (without the full guide), use `DESIGN.md`.
2. **Pull tokens from `colors_and_type.css`.** Use the CSS variables (`--azul-700`, `--lav-300`, `--rojo-500`, etc.) and the semantic ones (`--fg-1`, `--bg-app`, `--shadow-sm`). Do not hard-code hex.
3. **Reuse `assets/`** for brand marks (espiral, cara, wordmark). Never redraw them — copy the PNGs.
4. **Reference `ui_kits/tatudin/`** for component patterns (top bar, calendar, cards, sheets, chips, tab bar, primary CTAs).
5. **Preview cards in `preview/`** are samples of the visual system rendered as standalone HTML — they show the right scale, spacing, and color usage in isolation.

## When generating output

- For **visual artifacts** (slides, mocks, prototypes, throwaway HTML) — copy any required brand assets into the output's folder, then build static HTML. Use the CSS tokens directly.
- For **production code** — read this skill end-to-end, install Plus Jakarta Sans + Caveat Brush, and treat the CSS file as the source of truth for design tokens.
- If invoked with no other guidance, ask the user **what** they want to build (screen, slide, marketing site, prototype, asset), confirm the **surface** (mobile / desktop / print), then act as an expert designer producing HTML.

## Hard rules to never break

- **Spanish-first copy**, informal "tú". No emoji. No exclamation marks.
- **Three brand colors**: azul-700, lavanda-300, rojo-500. Rojo is for critical actions only — never decorative.
- **No gradients** as decoration. No glassmorphism. No bluish-purple background gradients.
- **No hand-rolled SVG icons.** Use Lucide from CDN at 20–24 px, or copy the brand marks from `assets/`.
- **Brand font (Caveat Brush) is for the wordmark or one accent word only.** Body and UI use Plus Jakarta Sans.
- **Calm motion.** 200 ms / ease-out. No springs, no bounces, no looping animations.

## Substitutions flagged (replace when possible)

- **Brand wordmark font** → Caveat Brush (closest free Google Font for the custom hand-brushed marker). Drop a real font file in `fonts/` to replace.
- **Product icon set** → Lucide via CDN (closest match for stroke weight / rounded-join style).
