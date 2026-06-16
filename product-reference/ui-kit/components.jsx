// Tatudin · shared UI atoms
// Globals: Button, IconButton, Chip, StatusChip, TopBar, BottomTabBar, Card, DarkCard,
//          Avatar, ListRow, Sheet, Field, Icon

const tatudinTheme = {
  azul: '#221C35',
  azulSoft: '#2E2745',
  azulDarker: '#18132A',
  lav300: '#DCDAE9',
  lav200: '#E5E2F0',
  lav100: '#F2F0F8',
  lav50:  '#FAF9FC',
  rojo: '#D50037',
  rojoSoft: '#FBCFDB',
  white: '#FFFFFF',
  fg1: '#221C35',
  fg2: '#4A4360',
  fg3: '#6E677F',
  fgMuted: '#A29CB6',
  ok: '#1E7A47',
  okSoft: '#ECF6F1',
};

const tatudinFonts = {
  ui: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif',
  brand: '"Caveat Brush", cursive',
};

// ───── Icon · light-stroke Lucide-style ─────
function Icon({ name, size = 22, stroke = 1.75, color = 'currentColor' }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'calendar': return <svg {...common}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>;
    case 'bell':     return <svg {...common}><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>;
    case 'filter':   return <svg {...common}><path d="M3 6h18M7 12h10M11 18h2"/></svg>;
    case 'dollar':   return <svg {...common}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
    case 'message':  return <svg {...common}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
    case 'check':    return <svg {...common}><path d="M20 6L9 17l-5-5"/></svg>;
    case 'clock':    return <svg {...common}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>;
    case 'user':     return <svg {...common}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>;
    case 'chev-left': return <svg {...common}><path d="M15 18l-6-6 6-6"/></svg>;
    case 'chev-right': return <svg {...common}><path d="M9 18l6-6-6-6"/></svg>;
    case 'plus':     return <svg {...common}><path d="M12 5v14M5 12h14"/></svg>;
    case 'mail':     return <svg {...common}><path d="M3 6l9 6 9-6M3 6v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"/></svg>;
    case 'star':     return <svg {...common}><path d="M12 2l3 7h7l-6 4 2 8-6-5-6 5 2-8-6-4h7z"/></svg>;
    case 'settings': return <svg {...common}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
    case 'sparkle':  return <svg {...common}><path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z"/><path d="M19 4l.7 1.8L21.5 6.5 19.7 7 19 9l-.7-1.8L16.5 6.5l1.8-.7z"/></svg>;
    case 'x':        return <svg {...common}><path d="M18 6L6 18M6 6l12 12"/></svg>;
    case 'home':     return <svg {...common}><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>;
    case 'arrow-left': return <svg {...common}><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>;
    case 'palette':  return <svg {...common}><circle cx="13.5" cy="6.5" r="0.5" fill={color}/><circle cx="17.5" cy="10.5" r="0.5" fill={color}/><circle cx="8.5" cy="7.5" r="0.5" fill={color}/><circle cx="6.5" cy="12.5" r="0.5" fill={color}/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.7 0 2.5-1.3 2-2.5-.5-1.3.4-2.5 1.7-2.5H18a4 4 0 0 0 4-4c0-5.5-4.5-10-10-10z"/></svg>;
    case 'store':    return <svg {...common}><path d="M3 9l1-5h16l1 5"/><path d="M5 9v11h14V9"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/></svg>;
    case 'graduation': return <svg {...common}><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>;
    default: return null;
  }
}

// ───── Button ─────
function Button({ variant = 'primary', children, onClick, full, icon, style }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    fontFamily: tatudinFonts.ui, fontWeight: 600, fontSize: 15,
    padding: '14px 20px', borderRadius: 14, border: 'none',
    cursor: 'pointer', transition: 'transform 200ms cubic-bezier(0.22,1,0.36,1), background 200ms, opacity 200ms',
    width: full ? '100%' : undefined, ...style,
  };
  const skins = {
    primary: { background: tatudinTheme.azul, color: '#fff' },
    danger:  { background: tatudinTheme.rojo, color: '#fff' },
    secondary: { background: '#fff', color: tatudinTheme.azul, border: `1px solid ${tatudinTheme.lav300}` },
    ghost: { background: 'transparent', color: tatudinTheme.azul },
  };
  return (
    <button
      onClick={onClick}
      style={{ ...base, ...skins[variant] }}
      onMouseDown={e => e.currentTarget.style.transform = 'scale(0.97)'}
      onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
      {icon && <Icon name={icon} size={18} />}
      {children}
    </button>
  );
}

// ───── IconButton ─────
function IconButton({ name, onClick, size = 22, color = tatudinTheme.azul, bg }) {
  return (
    <button onClick={onClick} style={{
      width: 36, height: 36, borderRadius: '50%',
      background: bg || 'transparent', border: 'none',
      display: 'grid', placeItems: 'center', cursor: 'pointer',
      color, padding: 0,
    }}>
      <Icon name={name} size={size} color={color}/>
    </button>
  );
}

// ───── Chip ─────
function Chip({ variant = 'soft', children, dot, onClick }) {
  const skins = {
    soft: { background: tatudinTheme.lav200, color: tatudinTheme.azul },
    solid: { background: tatudinTheme.azul, color: '#fff' },
    outline: { background: 'transparent', color: tatudinTheme.azul, border: `1px solid ${tatudinTheme.lav300}`},
    live: { background: tatudinTheme.rojo, color: '#fff', fontSize: 11, padding: '4px 9px' },
    ok: { background: tatudinTheme.okSoft, color: tatudinTheme.ok },
    overline: { background: tatudinTheme.lav200, color: tatudinTheme.azul, fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 8px'},
    overlineRed: { background: tatudinTheme.rojoSoft, color: '#810020', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 8px'},
  };
  return (
    <span onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: tatudinFonts.ui, fontSize: 12, fontWeight: 600,
      padding: '5px 11px', borderRadius: 999,
      cursor: onClick ? 'pointer' : 'default',
      ...skins[variant],
    }}>
      {variant === 'live' && <span style={{width:5,height:5,borderRadius:'50%',background:'#fff'}}/>}
      {dot && <span style={{width:7,height:7,borderRadius:'50%',background:dot}}/>}
      {children}
    </span>
  );
}

// ───── TopBar ─────
function TopBar({ title, brand, leading, trailing, padded = true }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: padded ? '14px 18px 8px' : '0', minHeight: 52,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 36 }}>
        {leading}
        {brand && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <img src="../../assets/espiral-azul.png" alt="" style={{ width: 26, height: 26 }}/>
            <span style={{ fontFamily: tatudinFonts.brand, fontSize: 24, color: tatudinTheme.azul, lineHeight: 1 }}>tatudin</span>
          </div>
        )}
        {title && !brand && <span style={{ fontSize: 17, fontWeight: 700, color: tatudinTheme.azul }}>{title}</span>}
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>{trailing}</div>
    </div>
  );
}

// ───── Bottom tab bar ─────
function BottomTabBar({ active = 'agenda', onChange }) {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'home' },
    { id: 'agenda',    label: 'Agenda',    icon: 'calendar' },
    { id: 'finanzas',  label: 'Finanzas',  icon: 'dollar' },
    { id: 'mensajes',  label: 'Mensajes',  icon: 'message' },
    { id: 'menu',      label: 'Menú',      icon: 'settings' },
  ];
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between',
      padding: '10px 14px 18px',
      background: '#fff',
      borderTop: `1px solid ${tatudinTheme.lav200}`,
    }}>
      {tabs.map(t => {
        const isActive = active === t.id;
        return (
          <button key={t.id} onClick={() => onChange && onChange(t.id)} style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            padding: 0, color: isActive ? tatudinTheme.azul : tatudinTheme.fgMuted,
            fontFamily: tatudinFonts.ui, fontSize: 10, fontWeight: 500,
          }}>
            <div style={{
              width: 48, height: 30, borderRadius: 999, display: 'grid', placeItems: 'center',
              background: isActive ? tatudinTheme.azul : 'transparent',
              color: isActive ? '#fff' : tatudinTheme.fgMuted,
              transition: 'all 200ms cubic-bezier(0.22,1,0.36,1)',
            }}>
              <Icon name={t.icon} size={18}/>
            </div>
            {t.label}
          </button>
        );
      })}
    </div>
  );
}

// ───── Card ─────
function Card({ children, style, padded = true }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 20,
      padding: padded ? 18 : 0,
      boxShadow: '0 1px 2px rgba(34,28,53,0.06), 0 1px 1px rgba(34,28,53,0.04)',
      ...style,
    }}>{children}</div>
  );
}

// ───── DarkCard (Finanzas balance) ─────
function DarkCard({ children, style }) {
  return (
    <div style={{
      background: 'linear-gradient(165deg, #2E2745 0%, #18132A 100%)',
      borderRadius: 20, padding: 20, color: tatudinTheme.lav300,
      boxShadow: '0 8px 24px rgba(34,28,53,0.20)',
      ...style,
    }}>{children}</div>
  );
}

// ───── Avatar ─────
function Avatar({ size = 36, src, initials, bg = tatudinTheme.azul }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', overflow: 'hidden',
      background: bg, color: '#fff', display: 'grid', placeItems: 'center',
      fontSize: size * 0.4, fontWeight: 600, flexShrink: 0,
    }}>
      {src ? <img src={src} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/> : initials}
    </div>
  );
}

// ───── ListRow ─────
function ListRow({ leading, title, subtitle, trailing, onClick }) {
  return (
    <div onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 14,
      padding: '12px 14px', borderRadius: 14, cursor: onClick ? 'pointer' : 'default',
      background: '#fff',
    }}>
      {leading}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, color: tatudinTheme.azul, fontSize: 14 }}>{title}</div>
        {subtitle && <div style={{ fontSize: 12, color: tatudinTheme.fg3, marginTop: 2 }}>{subtitle}</div>}
      </div>
      {trailing}
    </div>
  );
}

// ───── Sheet (modal scrim + bottom-floating panel) ─────
function Sheet({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: 'absolute', inset: 0, zIndex: 100,
      background: 'rgba(34,28,53,0.45)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: '#fff', borderRadius: 24, padding: 22,
        boxShadow: '0 16px 32px rgba(34,28,53,0.10), 0 2px 6px rgba(34,28,53,0.05)',
        width: '100%', maxWidth: 360,
        animation: 'tatudin-sheet-in 240ms cubic-bezier(0.22,1,0.36,1)',
      }}>{children}</div>
    </div>
  );
}

// ───── Field ─────
function Field({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {label && <label style={{ fontSize: 13, fontWeight: 600, color: tatudinTheme.azul }}>{label}</label>}
      {children}
    </div>
  );
}

Object.assign(window, {
  tatudinTheme, tatudinFonts,
  Icon, Button, IconButton, Chip, TopBar, BottomTabBar,
  Card, DarkCard, Avatar, ListRow, Sheet, Field,
});
