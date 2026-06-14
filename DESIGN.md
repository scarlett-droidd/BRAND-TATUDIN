# DESIGN.md — Tatudin Design Tokens

> Referencia rápida y autocontenida de los tokens de diseño de Tatudin.
> Pensada para pegar en una conversación con Claude/herramientas de diseño sin gastar tokens repitiendo toda la guía.
>
> Para voz de marca, copy, layout detallado e iconografía completa: ver `README.md`.
> Fuente de la verdad en código: `colors_and_type.css`.

---

## 1. Colores de marca — solo 3

Restricción = el sistema. Nunca agregar un cuarto color.

| Token | Hex | Uso |
|---|---|---|
| `--azul-profundo` | `#221C35` | Gravedad de la marca. Texto primario, headers, fondos oscuros, nav, fill primario en CTAs de confirmar/continuar. Reemplaza al negro. |
| `--lavanda-claro` | `#DCDAE9` | Canvas de la app. Fondos de página, fills sutiles, chips suaves, estados vacíos/disabled. |
| `--rojo-accion` | `#D50037` | **Exclusivo**: acciones críticas y alertas (confirmar destructivo, "en sesión", badge "más rápido", sobregasto). **Nunca decorativo.** |

## 2. Escalas de color

**Azul profundo** — `50 #F5F4F8 · 100 #E9E7F0 · 200 #C9C5D6 · 300 #A29CB6 · 400 #6E677F · 500 #4A4360 · 600 #2E2745 · 700 #221C35 (canónico) · 800 #18132A · 900 #0F0B1E`

**Lavanda** — `50 #FAF9FC · 100 #F2F0F8 · 200 #E5E2F0 · 300 #DCDAE9 (canónico) · 400 #C5C2D7 · 500 #A6A2BF`

**Rojo** — `50 #FDECF1 · 100 #FBCFDB · 200 #F390A8 · 400 #E13564 · 500 #D50037 (canónico) · 600 #AC002C · 700 #810020`

**Neutros** (gris frío, tinte violeta) — `0 #FFFFFF · 50 #FAFAFB · 100 #F2F2F5 · 200 #E5E5EA · 300 #D2D2D9 · 400 #A1A1AC · 500 #71717A · 600 #52525B · 700 #3F3F46 · 800 #27272A · 900 #18181B`

## 3. Tokens semánticos

| Grupo | Token → valor |
|---|---|
| Texto | `fg-1` → azul-700 (primario) · `fg-2` → azul-500 (secundario) · `fg-3` → azul-400 (hint) · `fg-inverse` → blanco · `fg-accent` → rojo-500 · `fg-link` → azul-700 |
| Fondo | `bg-app` → lav-100 (canvas) · `bg-surface`/`bg-elevated` → blanco (cards/modales) · `bg-muted` → lav-200 · `bg-inverse` → azul-700 (cards/CTA oscuros) · `bg-accent` → rojo-500 |
| Bordes | `border-soft` → lav-300 · `border-strong` → azul-200 · `border-focus` → azul-700 |
| Estado | `state-success` `#2EA85C` · `state-warning` `#D69412` · `state-danger` → rojo-500 · `state-info` `#3672D5` |

## 4. Tipografía

- **UI**: Plus Jakarta Sans — pesos 400/500/600/700/800. Headers 600–700, body 400–500, botones/chips 600.
- **Marca**: Caveat Brush — **solo** para el wordmark o una palabra de acento en hero. Nunca body ni botones.
- **Mono**: stack system mono (código, valores tabulares opcionales).
- **Numerales**: tabulares para moneda, fechas y horas.

**Escala** (px): `display 44 · h1 32 · h2 24 · h3 20 · h4 18 · body-lg 17 · body 15 · body-sm 14 · caption 12 · overline 11`

**Line-height**: `tight 1.15 · snug 1.3 · normal 1.45 · loose 1.6`
**Letter-spacing**: `tight -0.02em · normal 0 · wide 0.04em · overline 0.08em` (overline siempre en MAYÚSCULAS)

## 5. Espaciado — grid de 4pt

`0 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64` px

- Padding interno de canvas: 20–24px.
- Gap entre cards: 16px. Gap entre secciones: 32px (sin divisor).
- Cards: padding interno 24px.

## 6. Radios, sombras, bordes

| Radio | Valor | Uso |
|---|---|---|
| `r-xs` | 6px | — |
| `r-sm` | 8px | — |
| `r-md` | 12px | inputs |
| `r-lg` | 16px | — |
| `r-xl` | 20px | cards |
| `r-2xl` | 24px | modales/sheets |
| `r-pill` | 999px | chips, botones tipo pill |

Botones primarios: 14px radio, ancho completo.

**Sombras**: `shadow-sm` (cards en reposo, casi invisible) · `shadow-lg` (modales/sheets, difusa baja-opacidad) · `shadow-dark` (cards inversos/oscuros). No drop-shadow en botones, sin inner shadows.

**Bordes**: hairlines 1px con `border-soft`, poco usados — solo separadores de campos en modales.

## 7. Motion

- Default: **200ms `ease-out`**. Transiciones lentas: **320ms `ease-in-out`**.
- Sheets: entran desde abajo (translateY + fade). Modales: fade + 4px scale. Sin spring/overshoot.
- Sin animaciones en loop, excepto el spinner de carga (Espiral, rotación 1.4s lineal).
- Hover (web): 4% darken en fills, wash lav-200 en outline. Press: scale 0.97 + opacity 0.92 (primarios), opacity 0.7 (ghost icons). Focus: outline 2px `border-focus` + 2px offset. Disabled: opacity 0.4, fill `lav-300` + texto `azul-400`.

## 8. Reglas duras — nunca romper

- Solo los 3 colores de marca. Rojo exclusivo para acciones críticas, nunca decorativo.
- Sin gradientes decorativos, sin glassmorphism, sin fondos con blur (excepto scrim de modal `rgba(34,28,53,0.45)`).
- Sin iconos SVG dibujados a mano → Lucide CDN, 20px en UI / 24px en tab bars y headers.
- Caveat Brush solo en wordmark o una palabra de acento.
- Movimiento calmado: 200ms ease-out, sin bounce, sin springs, sin loops.
- Copy en español, "tú" informal, sin emojis, sin signos de exclamación, sentence case.
- Touch targets ≥ 44px. Tab bar 56px. Form rows ≥ 56px.

## 9. Assets de marca (`assets/`)

| Archivo | Descripción | Uso |
|---|---|---|
| `logo-tatudin-azul.png` | Wordmark, azul-profundo | Fondos claros/lavanda |
| `logo-tatudin-gris.png` | Wordmark, tono lavanda/gris | Fondos oscuros (azul-700) |
| `espiral-azul.png` / `espiral-gris.png` | Espiral — icono principal de marca | App icon, spinner, favicon, hero de empty states |
| `cara-azul.png` / `cara-gris.png` | "Cara" — glifo circular con ojos | Empty states amigables, confirmaciones |
| `muneco-azul.png` / `muneco-gris.png` | Mascota / personaje | Marketing, ilustraciones |
| `muneco-fondo-azul.png` / `muneco-fondo-gris.png` | Mascota con fondo de color | Heroes de marketing |

## 10. Mapa del repo

```
README.md               guía completa (voz, copy, layout, iconografía)
DESIGN.md                este archivo — tokens
SKILL.md                 manifiesto para usar esto como skill de Claude
colors_and_type.css      tokens en CSS (fuente de verdad)
Landing.html             landing page actual, usa estos tokens
assets/                  logos, espiral, cara, mascota
docs/                     brief de marca original (.docx)
```
