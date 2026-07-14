import { useCountUp } from '../hooks/useCountUp'

export default function StatNumber({ value, suffix = '', label }: { value: number, suffix?: string, label?: string }) {
  const { count, ref } = useCountUp(value, 1400)

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div
        style={{
          fontSize: 'clamp(56px, 8vw, 96px)',
          fontWeight: 700,
          color: '#ffffff',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
      >
        {count}
        {suffix}
      </div>
      {label && (
        <div
          style={{
            fontSize: 13,
            color: 'rgba(255,255,255,0.4)',
            marginTop: 8,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          {label}
        </div>
      )}
    </div>
  )
}
