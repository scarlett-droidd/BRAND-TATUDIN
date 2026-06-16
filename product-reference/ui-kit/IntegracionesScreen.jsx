// Tatudin · Integraciones

function IntegracionesScreen({ onBack }) {
  return (
    <div style={{ background: tatudinTheme.lav100, minHeight: '100%', paddingBottom: 24 }}>
      <TopBar
        leading={<IconButton name="arrow-left" onClick={onBack}/>}
        title="Integraciones"
        trailing={<Avatar size={36} bg={tatudinTheme.azul} initials="MT"/>}
      />

      <div style={{ padding: '12px 18px 0' }}>
        <Card style={{ padding: 20 }}>
          <SectionHead icon="calendar">Calendarios</SectionHead>
          <p style={{ fontSize: 13, color: tatudinTheme.fg2, lineHeight: 1.5, margin: '6px 0 16px' }}>
            Conecta tus calendarios personales para evitar duplicar citas.
          </p>
          <IntegrationRow
            icon="calendar" color="#3672D5"
            name="Google Calendar"
            connected
          />
          <IntegrationRow icon="calendar" color="#222" name="Apple Calendar"/>
          <IntegrationRow icon="mail" color="#2A6FDB" name="Outlook Calendar"/>
        </Card>
      </div>

      <div style={{ padding: '14px 18px 0' }}>
        <Card style={{ padding: 20 }}>
          <SectionHead icon="star">Reseñas y Reputación</SectionHead>
          <p style={{ fontSize: 13, color: tatudinTheme.fg2, lineHeight: 1.5, margin: '6px 0 16px' }}>
            Gestiona lo que tus clientes dicen de ti.
          </p>
          <IntegrationRow icon="star" color="#D54B3F" name="Google Reviews"/>
        </Card>
      </div>
    </div>
  );
}

function SectionHead({ children, icon }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{
        width: 40, height: 40, borderRadius: 12, background: tatudinTheme.lav200,
        color: tatudinTheme.azul, display: 'grid', placeItems: 'center',
      }}>
        <Icon name={icon} size={20}/>
      </div>
      <h3 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: tatudinTheme.azul, letterSpacing: '-0.01em' }}>{children}</h3>
    </div>
  );
}

function IntegrationRow({ icon, color, name, connected }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '12px 14px', borderRadius: 14,
      background: tatudinTheme.lav50,
      marginBottom: 8,
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 10, background: '#fff',
        color, display: 'grid', placeItems: 'center',
        border: `1px solid ${tatudinTheme.lav200}`,
      }}>
        <Icon name={icon} size={20}/>
      </div>
      <div style={{ flex: 1, fontSize: 14, fontWeight: 700, color: tatudinTheme.azul }}>{name}</div>
      {connected
        ? <Chip variant="soft">Conectado</Chip>
        : <button style={{
            padding: '8px 16px', borderRadius: 999, background: 'transparent',
            border: `1px solid ${tatudinTheme.lav400 || tatudinTheme.lav300}`,
            color: tatudinTheme.azul, fontFamily: tatudinFonts.ui, fontSize: 13, fontWeight: 600, cursor: 'pointer',
          }}>Conectar</button>}
    </div>
  );
}

window.IntegracionesScreen = IntegracionesScreen;
