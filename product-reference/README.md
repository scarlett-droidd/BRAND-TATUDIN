# product-reference/

Referencia de producto para Claude Code y herramientas de diseño.
Contiene los 6 screenshots del producto real + el UI kit en React reconstruido desde esas capturas.

---

## Cuándo usar esta carpeta

- **Claude Code / agentes de código**: leer `ui-kit/components.jsx` antes de escribir cualquier componente nuevo. Define los átomos del sistema (colores, tipografía, botones, chips, cards, sheets, iconos) para no inventar nada.
- **Claude Design**: subir las imágenes de `screenshots/` como referencia visual del producto real.
- **Cualquier tarea de diseño**: `ui-kit/components.jsx` es la fuente de verdad de los tokens en JS. Complementa a `../colors_and_type.css` (que es la fuente de verdad en CSS).

---

## screenshots/

Capturas del producto real. Base para validar fidelidad visual.

| Archivo | Pantalla |
|---|---|
| `calendario-filtro.png` | Agenda — modal "Filtrar calendarios" abierto sobre la vista de semana |
| `finanzas.png` | Finanzas — card de saldo total, secciones de ganancias y gastos |
| `integraciones.png` | Integraciones — conectores de calendarios y reseñas |
| `onboarding-role.png` | Onboarding — selector de rol (Artista / Studio / Aprendiz) |
| `create-booking-calendar.png` | Crear Booking Calendar — duración, tipo, personalización de color |
| `reschedule.png` | Reschedule — grilla de calendario + cards de horario + notificación automática |

---

## ui-kit/

Recreación en React de las 6 pantallas, construida pixel-a-pixel desde los screenshots.

> **Advertencia:** No es un port del codebase real — no hay Figma ni repo fuente conectado. Es una recreación fiel en look & feel, no en arquitectura interna. Reemplazar con componentes reales cuando se conecte el repo de producción.

### Cómo funciona

Abrir `index.html` en un navegador. Carga React 18 desde CDN + Babel standalone para compilar los JSX en el cliente. No necesita build step.

La navegación entre pantallas usa un nav segmentado sobre el frame del dispositivo iOS.

### Archivos del UI kit

| Archivo | Rol |
|---|---|
| `components.jsx` | **Átomos compartidos** — `tatudinTheme`, `tatudinFonts`, `Icon`, `Button`, `IconButton`, `Chip`, `TopBar`, `BottomTabBar`, `Card`, `DarkCard`, `Avatar`, `ListRow`, `Sheet`, `Field`. Cargado primero; exporta todo a `window`. |
| `ios-frame.jsx` | Frame del dispositivo iOS (bisel). |
| `AgendaScreen.jsx` | Tira semanal + tarjetas de citas + FAB. Pantalla por defecto. |
| `FinanzasScreen.jsx` | Card oscura de saldo, "Lo ganado hoy", gastos, "Lo que realmente queda", actividad reciente. |
| `IntegracionesScreen.jsx` | Conectores de calendarios (Google, Apple, Outlook) + Google Reviews. |
| `RescheduleScreen.jsx` | Grilla de calendario con día seleccionado + 4 tarjetas de horario + barra de confirmación. |
| `RolePickerScreen.jsx` | Pantalla de onboarding — selección de rol. |
| `FilterCalendarSheet.jsx` | Modal "Filtrar calendarios" con toggles. |
| `index.html` | Shell — carga React, Babel y todos los JSX en orden. |

### Tokens de color en JS (de `components.jsx`)

```js
const tatudinTheme = {
  azul:       '#221C35',   // azul-700 — gravedad de marca
  azulSoft:   '#2E2745',   // azul-600
  azulDarker: '#18132A',   // azul-800
  lav300:     '#DCDAE9',   // lavanda canónica
  lav200:     '#E5E2F0',
  lav100:     '#F2F0F8',   // canvas de la app
  lav50:      '#FAF9FC',
  rojo:       '#D50037',   // rojo-500 — solo acciones críticas
  rojoSoft:   '#FBCFDB',
  white:      '#FFFFFF',
  fg1:        '#221C35',
  fg2:        '#4A4360',
  fg3:        '#6E677F',
  fgMuted:    '#A29CB6',
  ok:         '#1E7A47',
  okSoft:     '#ECF6F1',
};
```

### Patrones demostrados

- Canvas en `lav100`, cards blancas flotando con `shadow-sm`.
- Card oscura de balance: gradiente `azul-600` → `azul-800` — el único gradiente permitido en UI de producto.
- CTAs primarios: ancho completo, `azul-700`. Destructivo (botón "+" de gastos): `rojo-500`. Cancelar: variante secondary blanco-sobre-lavanda.
- Chips pill, sentence-case, variante soft lavanda. El chip "In session" es el único coloreado (rojo).
- Tab bar inferior: ítem activo tiene cápsula `azul-700` detrás del ícono.
- Íconos: trazo liviano estilo Lucide, 20px en UI / 24px en headers y tab bar.

---

## Relación con el resto del repo

```
BRAND-TATUDIN/
├── README.md                   guía completa de marca
├── DESIGN.md                   tokens en referencia rápida
├── SKILL.md                    manifiesto para usarlo como skill
├── colors_and_type.css         tokens en CSS (fuente de verdad)
├── Landing.html                landing actual
├── assets/                     logos, espiral, cara, mascota
├── docs/                       brief de marca original
└── product-reference/          ← esta carpeta
    ├── screenshots/            capturas del producto real
    └── ui-kit/                 recreación React del producto
```
