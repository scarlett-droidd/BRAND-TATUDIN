// Tatudin · Finanzas

function FinanzasScreen() {
  return (
    <div style={{ background: tatudinTheme.lav100, minHeight: '100%', paddingBottom: 24 }}>
      <TopBar
        leading={<Avatar size={36} bg={tatudinTheme.azul} initials="MT"/>}
        title="Finanzas"
        trailing={<IconButton name="bell"/>}
      />

      <div style={{ padding: '0 18px', display: 'flex', justifyContent: 'flex-end', marginTop: 4 }}>
        <button style={{
          padding: '6px 12px 6px 14px', borderRadius: 999, background: '#fff',
          border: `1px solid ${tatudinTheme.lav300}`, color: tatudinTheme.azul,
          fontSize: 12, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4,
          cursor: 'pointer', fontFamily: tatudinFonts.ui,
        }}>Mes <Icon name="chev-right" size={14}/></button>
      </div>

      <div style={{ padding: '14px 18px 0' }}>
        <DarkCard>
          <div style={{ fontSize: 11, opacity: 0.7, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Saldo Total</div>
          <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.02em', marginTop: 6, color: '#fff', fontVariantNumeric: 'tabular-nums' }}>$4,280.00</div>
          <div style={{ marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, padding: '4px 10px', borderRadius: 999, background: 'rgba(255,255,255,0.10)' }}>
            <span style={{width:6,height:6,borderRadius:'50%',background:'#3DD68C'}}/>
            Todo conciliado
          </div>
        </DarkCard>
      </div>

      <SectionLabel icon="sparkle">Lo ganado hoy</SectionLabel>
      <div style={{ padding: '0 18px' }}>
        <Card>
          <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: tatudinTheme.lav200, display:'grid',placeItems:'center', color: tatudinTheme.azul }}><Icon name="dollar" size={16}/></div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: tatudinTheme.fg2 }}>Total del día</div>
          </div>
          <div style={{ fontSize: 36, fontWeight: 800, color: tatudinTheme.azul, marginTop: 8, fontVariantNumeric: 'tabular-nums' }}>$0</div>
          <div style={{ fontSize: 13, color: tatudinTheme.fg3, marginTop: 4 }}>Sin citas completadas hoy</div>
        </Card>
      </div>

      <div style={{ padding: '12px 18px 0' }}>
        <Card style={{ border: `2px dashed ${tatudinTheme.lav300}`, background: 'transparent', boxShadow: 'none', textAlign: 'center', padding: 22 }}>
          <div style={{ fontSize: 13, color: tatudinTheme.fg2 }}>Clientes atendidos</div>
          <div style={{ fontSize: 44, fontWeight: 800, color: tatudinTheme.azul, lineHeight: 1, margin: '6px 0' }}>0</div>
          <div style={{ fontSize: 12, color: tatudinTheme.fg3 }}>hoy</div>
        </Card>
      </div>

      <SectionLabel icon="sparkle" >Dinero abonado</SectionLabel>
      <div style={{ padding: '0 18px' }}>
        <Card>
          <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: tatudinTheme.lav200, display:'grid',placeItems:'center', color: tatudinTheme.azul }}><Icon name="sparkle" size={16}/></div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: tatudinTheme.fg2 }}>Dinero abonado</div>
          </div>
          <div style={{ fontSize: 36, fontWeight: 800, color: tatudinTheme.azul, marginTop: 8, fontVariantNumeric: 'tabular-nums' }}>$0</div>
          <div style={{ fontSize: 13, color: tatudinTheme.fg3, marginTop: 4 }}>0 abonos registrados este mes</div>
        </Card>
      </div>

      <div style={{ display:'flex', alignItems:'center', justifyContent: 'space-between', padding: '20px 18px 6px' }}>
        <div style={{ display:'flex', alignItems:'center', gap: 8 }}>
          <span style={{ color: tatudinTheme.rojo, fontWeight: 700 }}>↘</span>
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: tatudinTheme.azul }}>Gastos del mes</h3>
        </div>
        <button style={{
          width: 36, height: 36, borderRadius: '50%', background: tatudinTheme.rojo,
          border: 'none', color: '#fff', display: 'grid', placeItems: 'center', cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(213,0,55,0.30)',
        }}><Icon name="plus" size={18} color="#fff"/></button>
      </div>

      <div style={{ padding: '0 18px' }}>
        <Card>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: tatudinTheme.fg2 }}>Total gastos</div>
          <div style={{ fontSize: 36, fontWeight: 800, color: tatudinTheme.rojo, marginTop: 6, fontVariantNumeric: 'tabular-nums' }}>$0</div>
          <div style={{ fontSize: 13, color: tatudinTheme.fg3, marginTop: 10 }}>Sin gastos registrados este mes</div>
        </Card>
      </div>

      <div style={{ padding: '24px 18px 0' }}>
        <div style={{ display:'flex', alignItems:'center', gap: 8 }}>
          <Icon name="sparkle" size={16} color={tatudinTheme.azul}/>
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: tatudinTheme.azul }}>Lo que realmente queda</h3>
          <span style={{ marginLeft: 'auto', fontSize: 12, color: tatudinTheme.fg3 }}>(mes actual)</span>
        </div>
      </div>

      <div style={{ padding: '10px 18px 0' }}>
        <DarkCard>
          <div style={{ display:'flex', alignItems:'center', gap: 8, fontSize: 11, opacity: 0.7, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            <Icon name="sparkle" size={13}/>
            Ganancias reales
          </div>
          <div style={{ fontSize: 40, fontWeight: 800, color: '#fff', marginTop: 6, fontVariantNumeric: 'tabular-nums' }}>$0</div>
          <div style={{ fontSize: 12, marginTop: 8, opacity: 0.8 }}>Después de $0 en gastos</div>
        </DarkCard>
      </div>

      <div style={{ padding: '24px 18px 12px', display:'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: tatudinTheme.azul }}>Actividad Reciente</h3>
        <a style={{ fontSize: 12, color: tatudinTheme.azul, textDecoration: 'underline', cursor: 'pointer' }}>Ver todo</a>
      </div>

      <div style={{ padding: '0 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <ActivityRow title="Minimalist Script Piece" when="Hoy, 2:15 PM" amount="+$180.00" status="Confirmado" ok/>
        <ActivityRow title="Traditional Rose Color" when="Ayer, 11:45 AM" amount="+$450.00" status="Confirmado" ok/>
        <ActivityRow title="Studio supplies" when="Lunes, 9:00 AM" amount="−$80.00" status="Gasto" />
      </div>
    </div>
  );
}

function SectionLabel({ children, icon }) {
  return (
    <div style={{ padding: '20px 18px 10px', display:'flex', alignItems:'center', gap: 8 }}>
      {icon && <Icon name={icon} size={16} color={tatudinTheme.azul}/>}
      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: tatudinTheme.azul }}>{children}</h3>
    </div>
  );
}

function ActivityRow({ title, when, amount, status, ok }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap: 12, padding: '8px 4px' }}>
      <div style={{ width: 28, height: 28, borderRadius: '50%', background: ok ? tatudinTheme.okSoft : tatudinTheme.rojoSoft, color: ok ? tatudinTheme.ok : tatudinTheme.rojo, display:'grid', placeItems: 'center' }}>
        {ok ? <Icon name="check" size={14}/> : '−'}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: tatudinTheme.azul }}>{title}</div>
        <div style={{ fontSize: 11, color: tatudinTheme.fg3, marginTop: 1 }}>{when}</div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: ok ? tatudinTheme.azul : tatudinTheme.rojo, fontVariantNumeric: 'tabular-nums' }}>{amount}</div>
        <div style={{ fontSize: 11, color: tatudinTheme.fg3, marginTop: 1 }}>{status}</div>
      </div>
    </div>
  );
}

window.FinanzasScreen = FinanzasScreen;
