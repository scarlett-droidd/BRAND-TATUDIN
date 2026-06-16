// Tatudin · Filter calendars sheet (modal)

function FilterCalendarSheet({ open, onClose, onApply }) {
  const [all, setAll] = React.useState(true);
  const [santiago, setSantiago] = React.useState(true);
  const [berlin, setBerlin] = React.useState(false);

  return (
    <Sheet open={open} onClose={onClose}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: tatudinTheme.azul, letterSpacing: '-0.01em' }}>Filtrar calendarios</h3>
        <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: tatudinTheme.azul, fontSize: 20, cursor: 'pointer', padding: 0 }}>✕</button>
      </div>

      <div onClick={() => setAll(!all)} style={{
        display: 'flex', alignItems: 'center', gap: 10, padding: '14px 12px',
        borderRadius: 12, background: tatudinTheme.lav100, marginTop: 6,
        cursor: 'pointer',
      }}>
        <Icon name="calendar" size={18} color={tatudinTheme.azul}/>
        <span style={{ flex: 1, fontWeight: 600, color: tatudinTheme.azul, fontSize: 14 }}>Todos los calendarios</span>
        {all && <Icon name="check" size={18} color={tatudinTheme.azul}/>}
      </div>

      <ToggleRow color={tatudinTheme.rojo} label="Santiago Office" value={santiago} onChange={setSantiago}/>
      <ToggleRow color={tatudinTheme.fg2}  label="Berlin Guest"   value={berlin}   onChange={setBerlin}/>

      <div style={{ marginTop: 16 }}>
        <Button variant="primary" full onClick={onApply}>Aplicar filtros</Button>
      </div>
    </Sheet>
  );
}

function ToggleRow({ color, label, value, onChange }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '14px 4px', borderBottom: `1px solid ${tatudinTheme.lav200}`,
    }}>
      <span style={{ width: 9, height: 9, borderRadius: '50%', background: color }}/>
      <span style={{ flex: 1, fontWeight: 600, color: tatudinTheme.azul, fontSize: 14 }}>{label}</span>
      <button onClick={() => onChange(!value)} style={{
        width: 42, height: 24, borderRadius: 999,
        background: value ? tatudinTheme.azul : tatudinTheme.lav300,
        position: 'relative', border: 'none', cursor: 'pointer',
        transition: 'background 200ms cubic-bezier(0.22,1,0.36,1)',
      }}>
        <span style={{
          position: 'absolute', top: 3, left: value ? 21 : 3,
          width: 18, height: 18, borderRadius: '50%', background: '#fff',
          transition: 'left 200ms cubic-bezier(0.22,1,0.36,1)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
        }}/>
      </button>
    </div>
  );
}

window.FilterCalendarSheet = FilterCalendarSheet;
