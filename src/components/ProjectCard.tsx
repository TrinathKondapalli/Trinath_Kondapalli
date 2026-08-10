import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function ProjectCard({ 
  index, title, category, image, result, href = '#', large = false,
  problem, process, isPlaceholder = false, role, tools
}: any) {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef<HTMLAnchorElement>(null)
  const lightRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || window.matchMedia('(hover: none)').matches) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    
    cardRef.current.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.02)`
    cardRef.current.style.transition = 'none'

    if (lightRef.current) {
      lightRef.current.style.left = (e.clientX - rect.left) + 'px'
      lightRef.current.style.top = (e.clientY - rect.top) + 'px'
      lightRef.current.style.opacity = '1'
    }
  }

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)'
    cardRef.current.style.transition = 'transform 0.5s ease'
    if (lightRef.current) {
      lightRef.current.style.opacity = '0'
    }
  }

  return (
    <Reveal delay={index * 80}>
      <Link
        ref={cardRef}
        to={href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{
          display: 'block',
          position: 'relative',
          borderRadius: 12,
          overflow: 'hidden',
          aspectRatio: '16/9',
          background: '#0d1f0d',
          textDecoration: 'none',
          cursor: 'none', 
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          transition: 'transform 0.5s ease'
        }}
        data-cursor-hover="true"
      >
        <img
          src={image}
          alt={title}
          loading={index === 1 ? "eager" : "lazy"}
          fetchPriority={index === 1 ? "high" : "auto"}
          width={large ? 1600 : 800}
          height={large ? 900 : 600}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />

        {/* Dynamic Light Highlight */}
        <div 
          ref={lightRef}
          style={{
            position: 'absolute',
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%)',
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            opacity: 0,
            transition: 'opacity 0.3s',
            zIndex: 3
          }} 
        />

        <span
          style={{
            position: 'absolute',
            top: 14,
            left: 16,
            fontSize: 11,
            color: 'rgba(255,255,255,0.35)',
            fontWeight: 500,
            letterSpacing: '0.06em',
            zIndex: 2,
          }}
        >
          {String(index).padStart(2, '0')}
        </span>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.25s ease',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '20px 20px 18px',
            zIndex: 2,
          }}
        >
          <div
            style={{
              transform: hovered ? 'translateY(0)' : 'translateY(10px)',
              transition: 'transform 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              gap: 6
            }}
          >
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: '#fff',
              }}
            >
              {title} {isPlaceholder && <span style={{ fontSize: 11, color: 'var(--c-primary)', fontWeight: 400 }}>(Upcoming)</span>}
            </div>

            {/* Details Summary */}
            {role && (
              <div style={{ fontSize: 11, color: 'var(--c-primary)', fontWeight: 600, lineHeight: 1.4 }}>
                Role: <span style={{ color: '#fff', fontWeight: 400 }}>{role}</span>
              </div>
            )}
            {problem && (
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>
                <strong style={{ color: '#fff' }}>Problem:</strong> {problem}
              </div>
            )}
            {process && (
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>
                <strong style={{ color: '#fff' }}>Contribution:</strong> {process}
              </div>
            )}
            {tools && tools.length > 0 && (
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
                {tools.map((t: string) => (
                  <span key={t} style={{ padding: '2px 6px', background: 'rgba(255,255,255,0.1)', borderRadius: 4, fontSize: 10, color: 'rgba(255,255,255,0.7)' }}>
                    {t}
                  </span>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{category}</span>
              {result && (
                <span
                  style={{
                    fontSize: 12,
                    color: '#6ddc6d',
                    fontWeight: 600,
                  }}
                >
                  {result}
                </span>
              )}
            </div>
          </div>
        </div>

        {result && !hovered && (
          <div
            style={{
              position: 'absolute',
              bottom: 12,
              left: 14,
              background: 'rgba(0,0,0,0.65)',
              border: '0.5px solid rgba(109,220,109,0.3)',
              borderRadius: 20,
              padding: '3px 10px',
              fontSize: 11,
              color: '#6ddc6d',
              fontWeight: 500,
              zIndex: 2,
            }}
          >
            {result}
          </div>
        )}

        <div
          style={{
            position: 'absolute',
            top: 14,
            right: 16,
            fontSize: 12,
            color: 'rgba(255,255,255,0.8)',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translate(0,0)' : 'translate(-4px, 4px)',
            transition: 'opacity 0.25s ease, transform 0.25s ease',
            zIndex: 2,
          }}
        >
          View case study →
        </div>
      </Link>
    </Reveal>
  )
}
