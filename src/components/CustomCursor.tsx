import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only on non-touch devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    const cursor = cursorRef.current
    const dot = dotRef.current
    if (!cursor || !dot) return

    // Start in the center of the screen so it appears in automated screenshots
    let mx = window.innerWidth / 2, my = window.innerHeight / 2
    let cx = mx, cy = my
    let raf: number

    // Hide the system cursor globally and robustly
    document.documentElement.classList.add('custom-cursor-active')

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
    }

    const loop = () => {
      cx += (mx - cx) * 0.1
      cy += (my - cy) * 0.1
      cursor.style.left = cx + 'px'
      cursor.style.top = cy + 'px'
      raf = requestAnimationFrame(loop)
    }

    const onEnter = () => {
      cursor.style.width = '48px'
      cursor.style.height = '48px'
      cursor.style.opacity = '1'
    }

    const onLeave = () => {
      cursor.style.width = '32px'
      cursor.style.height = '32px'
      cursor.style.opacity = '0.5'
    }

    // Global event delegation for hover states
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (target?.closest('a, button, [data-cursor-hover], input, textarea')) {
        onEnter()
      } else {
        onLeave()
      }
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    raf = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: 32,
          height: 32,
          border: '1.5px solid var(--c-primary)',
          opacity: 0.5,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.25s ease, height 0.25s ease, opacity 0.25s ease',
          top: -100,
          left: -100,
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: 5,
          height: 5,
          background: 'var(--c-primary)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          top: -100,
          left: -100,
        }}
      />
    </>
  )
}
