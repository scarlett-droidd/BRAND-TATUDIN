// Tatudin · Reschedule appointment

function RescheduleScreen({ onBack, onConfirm }) {
  const [selectedDay, setSelectedDay] = React.useState(11);
  const [slot, setSlot] = React.useState('afternoon');

  const cal = [
    [{d:26,muted:true},{d:27,muted:true},{d:28,muted:true},{d:29,muted:true},{d:30,muted:true},{d:1,dot:true},{d:2}],
    [{d:3},{d:4},{d:5},{d:6},{d:7,dot:true},{d:8},{d:9}],
    [{d:10},{d:11},{d:12},{d:13},{d:14,dot:true},{d:15},{d:16}],
  ];

  return (
    <div style={{ background: tatudinTheme.lav100, minHeight: '100%', paddingBottom: 24 }}>
      <TopBar
        leading={<IconButton name="arrow-left" onClick={onBack}/>}
        title="Reschedule"
        trailing={<Chip variant="soft">Session #402</Chip>}
      />

      <div style={{ padding: '6px 20px 0' }}>
        <div style={{ display: 'flex', alignItems:'center', gap: 12 }}>
          <Avatar size={44} bg={tatudinTheme.azul} initials="MT"/>
          <div>
            <div style={{ fontSize: 13, color: tatudinTheme.fg3 }}>Rescheduling with</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: tatudinTheme.azul, letterSpacing: '-0.01em' }}>Marcus Thorne</div>
          </div>
        </div>
        <h2 style={{
          fontSize: 22, fontWeight: 800, color: tatudinTheme.azul,
          letterSpacing: '-0.01em', lineHeight: 1.2, margin: '14px 0 0',
        }}>When should we move the 'Neo-Traditional Sleeve' session?</h2>
      </div>

      <div style={{ padding: '18px 18px 0' }}>
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: tatudinTheme.azul }}>October 2024</div>
            <div style={{ display: 'flex', gap: 4 }}>
              <IconButton name="chev-left" size={18}/>
              <IconButton name="chev-right" size={18}/>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: 11, fontWeight: 600, color: tatudinTheme.fg3, marginBottom: 8 }}>
            {['MO','TU','WE','TH','FR','SA','SU'].map(d => <div key={d}>{d}</div>)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
            {cal.flat().map((c,i) => {
              const isSel = c.d === selectedDay && !c.muted;
              return (
                <button key={i} onClick={() => !c.muted && setSelectedDay(c.d)} style={{
                  aspectRatio: '1', border: 'none', cursor: c.muted ? 'default' : 'pointer',
                  background: isSel ? tatudinTheme.azul : 'transparent',
                  color: isSel ? '#fff' : (c.muted ? tatudinTheme.fgMuted : tatudinTheme.azul),
                  fontWeight: isSel ? 700 : 500, fontSize: 14, borderRadius: '50%',
                  position: 'relative', fontFamily: tatudinFonts.ui, padding: 0,
                }}>
                  {c.d}
                  {c.dot && !isSel && <span style={{
                    position: 'absolute', bottom: 5, left: '50%', transform: 'translateX(-50%)',
                    width: 4, height: 4, borderRadius: '50%', background: tatudinTheme.rojo,
                  }}/>}
                </button>
              );
            })}
          </div>
          <div style={{ display: 'flex', gap: 16, marginTop: 12, fontSize: 11, color: tatudinTheme.fg2 }}>
            <span style={{display:'inline-flex',alignItems:'center',gap:6}}><span style={{width:7,height:7,borderRadius:'50%',background:tatudinTheme.azul}}/>Selected</span>
            <span style={{display:'inline-flex',alignItems:'center',gap:6}}><span style={{width:7,height:7,borderRadius:'50%',background:tatudinTheme.rojo}}/>Limited Openings</span>
          </div>
        </Card>
      </div>

      <div style={{ padding: '18px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: tatudinTheme.azul, letterSpacing: '-0.01em' }}>Available on Oct {selectedDay}</h3>
        <span style={{ fontSize: 11, color: tatudinTheme.fg3 }}>PST (Local Time)</span>
      </div>

      <div style={{ padding: '12px 18px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <SlotCard id="morning"   label="Morning"   time="10:00 AM" tag={{text:'Fastest choice', color:'lav'}}    selected={slot} onClick={setSlot}/>
        <SlotCard id="afternoon" label="Afternoon" time="02:30 PM" tag={{text:'Selected', color:'redOnDark'}} selected={slot} onClick={setSlot} dark/>
        <SlotCard id="evening"   label="Evening"   time="06:00 PM" tag={{text:'Booked', color:'red'}}  selected={slot} onClick={setSlot} disabled/>
        <SlotCard id="late"      label="Late Night" time="08:00 PM" tag={{text:'Quiet hours', color:'lav'}} selected={slot} onClick={setSlot}/>
      </div>

      <div style={{ padding: '16px 18px 0' }}>
        <Card style={{ padding: 16 }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: tatudinTheme.lav200, color: tatudinTheme.azul, display: 'grid', placeItems: 'center' }}>
              <Icon name="bell" size={18}/>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: tatudinTheme.azul }}>Automatic Notification</div>
              <div style={{ fontSize: 12, color: tatudinTheme.fg2, marginTop: 4, lineHeight: 1.5 }}>Client will be automatically notified via SMS and email once you confirm the change.</div>
            </div>
          </div>
        </Card>
      </div>

      <div style={{ padding: '22px 18px 0', display: 'flex', gap: 10 }}>
        <Button variant="secondary" full onClick={onBack}>Cancel</Button>
        <Button variant="primary" full onClick={onConfirm} icon="calendar">Confirm New Slot</Button>
      </div>
    </div>
  );
}

function SlotCard({ id, label, time, tag, selected, onClick, dark, disabled }) {
  const isActive = selected === id;
  const useDark = dark || isActive;
  const isDisabled = disabled;
  return (
    <button
      disabled={isDisabled}
      onClick={() => !isDisabled && onClick(id)}
      style={{
        textAlign: 'left',
        padding: 14, borderRadius: 16, border: 'none',
        background: isDisabled ? tatudinTheme.lav100 : (useDark ? 'linear-gradient(165deg,#2E2745,#18132A)' : '#fff'),
        color: useDark && !isDisabled ? '#fff' : (isDisabled ? tatudinTheme.fgMuted : tatudinTheme.azul),
        boxShadow: useDark && !isDisabled
          ? '0 8px 16px rgba(34,28,53,0.20)'
          : '0 1px 2px rgba(34,28,53,0.06)',
        opacity: isDisabled ? 0.7 : 1,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        fontFamily: tatudinFonts.ui,
      }}>
      <div style={{ fontSize: 12, opacity: 0.75 }}>{label}</div>
      <div style={{ fontSize: 19, fontWeight: 800, marginTop: 4, fontVariantNumeric: 'tabular-nums' }}>{time}</div>
      <div style={{ marginTop: 10 }}>
        {tag.color === 'lav' && <span style={{ display:'inline-block', padding: '3px 8px', borderRadius: 6, background: tatudinTheme.lav200, color: tatudinTheme.azul, fontSize: 9, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase'}}>{tag.text}</span>}
        {tag.color === 'red' && <span style={{ display:'inline-block', padding: '3px 8px', borderRadius: 6, background: tatudinTheme.rojoSoft, color: '#810020', fontSize: 9, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase'}}>{tag.text}</span>}
        {tag.color === 'redOnDark' && <span style={{ display:'inline-flex',alignItems:'center',gap:4, padding: '3px 8px', borderRadius: 6, background: 'rgba(213,0,55,0.18)', color: '#FF6B89', fontSize: 9, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase'}}>● {tag.text}</span>}
      </div>
    </button>
  );
}

window.RescheduleScreen = RescheduleScreen;
