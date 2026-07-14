import { useState } from 'react'
import Reveal from './Reveal'

export default function ProjectCard({ index, title, category, image, result, href = '#', large = false }: any) {
  const [hovered, setHovered] = useState(false)

  return (
    <Reveal delay={index * 80}>
      <a
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'block',
          position: 'relative',
          borderRadius: 12,
          overflow: 'hidden',
          aspectRatio: large ? '16/9' : '4/3',
          background: '#0d1f0d',
          textDecoration: 'none',
          cursor: 'none', 
        }}
        data-cursor-hover="true"
      >
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
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
            }}
          >
            <div
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: '#fff',
                marginBottom: 4,
              }}
            >
              {title}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{category}</span>
              {result && (
                <span
                  style={{
                    fontSize: 12,
                    color: '#6ddc6d',
                    fontWeight: 500,
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
      </a>
    </Reveal>
  )
}
