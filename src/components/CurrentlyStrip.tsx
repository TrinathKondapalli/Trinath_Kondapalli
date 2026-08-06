export default function CurrentlyStrip() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '16px 20px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '14px', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-sans)' }}>
      {/* Pulsing green dot */}
      <div style={{ width: '8px', height: '8px', background: '#6ddc6d', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
      <span style={{ color: '#fff', fontWeight: 500 }}>Available for freelance projects & design contracts</span>
    </div>
  );
}
