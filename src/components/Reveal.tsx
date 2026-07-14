import React, { useEffect, useRef } from 'react'

export function useReveal(options: any = {}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.opacity = '0'
    el.style.transform = 'translateY(28px)'
    el.style.transition = `opacity 0.6s ease ${options.delay || 0}ms, transform 0.6s ease ${options.delay || 0}ms`

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

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

export default function Reveal({ children, delay = 0, threshold = 0.12, style = {} }: { children: React.ReactNode, delay?: number, threshold?: number, style?: React.CSSProperties }) {
  const ref = useReveal({ delay, threshold })

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  )
}
