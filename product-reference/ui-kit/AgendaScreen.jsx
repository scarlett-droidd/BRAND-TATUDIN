// Tatudin · Agenda (default screen)
// Shows: top bar, month label, week strip, appointment cards, FAB

function AgendaScreen({ onOpenFilter, onOpenReschedule }) {
  const days = [
    { dow: 'Mon', d: 9 }, { dow: 'Tue', d: 10 }, { dow: 'Wed', d: 11, active: true, dot: true },
    { dow: 'Thu', d: 12 }, { dow: 'Fri', d: 13 }, { dow: 'Sat', d: 14 }, { dow: 'Sun', d: 15 },
  ];
  return (
    <div style={{ background: tatudinTheme.lav100, minHeight: '100%', paddingBottom: 24 }}>
      <TopBar
        brand
        trailing={
          <>
            <IconButton name="bell" />
            <IconButton name="filter" bg={tatudinTheme.lav200} onClick={onOpenFilter}/>
          </>
        }
      />

      <div style={{ padding: '8px 20px 14px' }}>
        <h1 style={{
          fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em',
          color: tatudinTheme.azul, margin: 0, lineHeight: 1.1,
        }}>September 2024</h1>
        <p style={{ margin: '6px 0 0', color: tatudinTheme.fg3, fontSize: 13 }}>
          4 appointments scheduled this week
        </p>
      </div>

      <div style={{ padding: '0 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <IconButton name="chev-left" size={18}/>
        <button style={{
          padding: '8px 18px', borderRadius: 999, background: tatudinTheme.azul,
          color: '#fff', border: 'none', fontWeight: 700, fontSize: 13,
          fontFamily: tatudinFonts.ui, cursor: 'pointer',
        }}>Today</button>
        <IconButton name="chev-right" size={18}/>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)',
        gap: 4, padding: '14px 14px 0',
      }}>
        {days.map(day => (
          <div key={day.d} style={{
            background: day.active ? tatudinTheme.azul : 'transparent',
            color: day.active ? '#fff' : tatudinTheme.azul,
            borderRadius: 14, padding: '10px 4px', textAlign: 'center',
            position: 'relative',
          }}>
            <div style={{ fontSize: 10, opacity: 0.7, letterSpacing: '0.04em' }}>{day.dow}</div>
            <div style={{ fontSize: 18, fontWeight: 700, marginTop: 4 }}>{day.d}</div>
            {day.dot && (
              <span style={{
                position: 'absolute', bottom: 6, left: '50%', transform: 'translateX(-50%)',
                width: 5, height: 5, borderRadius: '50%', background: tatudinTheme.rojo,
              }}/>
            )}
          </div>
        ))}
      </div>

      {/* timed appointments */}
      <div style={{ padding: '24px 18px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <AppointmentRow
          time="10:00" duration="45m"
          title="Minimalist Script"
          subtitle="Elena Vasquez · Consultation"
          variant="muted"
        />
        <AppointmentRow
          time="13:30" duration="3h"
          title="Geometric Spine"
          subtitle="5h Large Session"
          variant="dark" live artist="Elara"
          onClick={onOpenReschedule}
        />
        <AppointmentRow
          time="18:00" duration="1h"
          title="Touch-up · Rose Color"
          subtitle="Marcus Thorne"
          variant="muted"
        />
      </div>

      {/* FAB */}
      <div style={{
        position: 'sticky', bottom: 18, marginTop: 18,
        display: 'flex', justifyContent: 'flex-end', paddingRight: 18,
      }}>
        <button style={{
          width: 56, height: 56, borderRadius: '50%', background: tatudinTheme.azul,
          color: '#fff', border: 'none', display: 'grid', placeItems: 'center',
          boxShadow: '0 8px 16px rgba(34,28,53,0.20)', cursor: 'pointer',
        }}>
          <Icon name="plus" size={24} color="#fff"/>
        </button>
      </div>
    </div>
  );
}

function AppointmentRow({ time, duration, title, subtitle, variant, live, artist, onClick }) {
  const isDark = variant === 'dark';
  return (
    <div onClick={onClick} style={{
      display: 'flex', gap: 12, cursor: onClick ? 'pointer' : 'default',
    }}>
      <div style={{ minWidth: 44, paddingTop: 14 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: tatudinTheme.azul, fontVariantNumeric: 'tabular-nums' }}>{time}</div>
        <div style={{ fontSize: 11, color: tatudinTheme.fg3 }}>{duration}</div>
      </div>
      <div style={{
        flex: 1,
        background: isDark
          ? 'linear-gradient(165deg, #2E2745 0%, #18132A 100%)'
          : tatudinTheme.lav200,
        color: isDark ? '#fff' : tatudinTheme.azul,
        borderRadius: 16, padding: '14px 16px',
        boxShadow: isDark ? '0 8px 24px rgba(34,28,53,0.20)' : 'none',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.01em' }}>{title}</div>
            <div style={{ fontSize: 12, opacity: isDark ? 0.75 : 0.7, marginTop: 4 }}>{subtitle}</div>
          </div>
          {live && <Chip variant="live">In session</Chip>}
        </div>
        {artist && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 12, fontSize: 12, opacity: 0.8 }}>
            <Icon name="user" size={13}/> Artist · {artist}
          </div>
        )}
      </div>
    </div>
  );
}

window.AgendaScreen = AgendaScreen;
