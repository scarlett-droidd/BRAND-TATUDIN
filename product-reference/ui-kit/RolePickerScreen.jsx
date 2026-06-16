// Tatudin · Role picker (onboarding step)

function RolePickerScreen({ onClose, onContinue }) {
  const [role, setRole] = React.useState('artist');

  const roles = [
    { id: 'artist',     icon: 'palette',    title: 'Independent Artist', desc: 'Manage your own schedule, client intake, and creative portfolio with ease.' },
    { id: 'studio',     icon: 'store',      title: 'Studio Owner',       desc: 'Oversee multiple artists, manage shop deposits, and track studio growth.' },
    { id: 'apprentice', icon: 'graduation', title: 'Apprentice',         desc: 'Focus on learning, organizing reference material, and tracking your hours.' },
  ];

  return (
    <div style={{ background: tatudinTheme.lav100, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent: 'center', padding: '14px 18px', position: 'relative' }}>
        <button onClick={onClose} style={{ position:'absolute', left: 18, top: 14, background:'transparent', border:'none', color: tatudinTheme.azul, fontSize: 22, cursor:'pointer'}}>✕</button>
        <span style={{ fontFamily: tatudinFonts.brand, fontSize: 26, color: tatudinTheme.azul, lineHeight: 1 }}>tatudin</span>
        <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 90, height: 2, background: tatudinTheme.azul }}/>
      </div>

      <div style={{ padding: '24px 24px 0' }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, color: tatudinTheme.azul, letterSpacing: '-0.02em', lineHeight: 1.05, margin: 0, textAlign: 'center' }}>Cuéntanos sobre ti.</h1>
        <p style={{ marginTop: 10, fontSize: 14, color: tatudinTheme.fg2, textAlign: 'center', lineHeight: 1.5 }}>Adaptaremos tu workspace según tu rol.</p>
      </div>

      <div style={{ padding: '22px 18px 0', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        {roles.map(r => {
          const sel = role === r.id;
          return (
            <button key={r.id} onClick={() => setRole(r.id)} style={{
              textAlign:'left', padding: 22, borderRadius: 18,
              background: '#fff',
              border: sel ? `2px solid ${tatudinTheme.azul}` : `1px solid ${tatudinTheme.lav200}`,
              boxShadow: sel ? '0 4px 12px rgba(34,28,53,0.08)' : '0 1px 2px rgba(34,28,53,0.04)',
              cursor: 'pointer', fontFamily: tatudinFonts.ui,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 14,
                background: tatudinTheme.lav200, color: tatudinTheme.azul,
                display: 'grid', placeItems: 'center',
              }}>
                <Icon name={r.icon} size={22}/>
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, color: tatudinTheme.azul, marginTop: 14, letterSpacing: '-0.01em' }}>{r.title}</div>
              <div style={{ fontSize: 13, color: tatudinTheme.fg2, marginTop: 6, lineHeight: 1.5 }}>{r.desc}</div>
            </button>
          );
        })}
      </div>

      <div style={{ padding: '20px 18px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <button style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '12px 16px', background: 'transparent', border: 'none',
          color: tatudinTheme.azul, fontFamily: tatudinFonts.ui, fontSize: 14, fontWeight: 600, cursor: 'pointer',
        }}>
          <Icon name="arrow-left" size={16}/> Atrás
        </button>
        <Button variant="primary" onClick={onContinue} style={{ minWidth: 180 }}>Continuar →</Button>
      </div>
    </div>
  );
}

window.RolePickerScreen = RolePickerScreen;
