import React, { useEffect, useRef } from 'react'

export function useReveal(options: any = {}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Set transition dynamically based on delay
    el.style.transition = `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${options.delay || 0}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${options.delay || 0}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        }
      },
      { threshold: options.threshold || 0.12 }
    )

    // Slight delay before observing to guarantee initial styles are painted
    const timeout = setTimeout(() => observer.observe(el), 10)
    
    return () => {
      clearTimeout(timeout)
      observer.disconnect()
    }
  }, [options.delay, options.threshold])

  return ref
}

export default function Reveal({ children, delay = 0, threshold = 0.12, style = {} }: { children: React.ReactNode, delay?: number, threshold?: number, style?: React.CSSProperties }) {
  const ref = useReveal({ delay, threshold })

  return (
    <div 
      ref={ref} 
      style={{ 
        opacity: 0, 
        transform: 'translateY(28px)', 
        willChange: 'opacity, transform',
        ...style 
      }}
    >
      {children}
    </div>
  )
}
