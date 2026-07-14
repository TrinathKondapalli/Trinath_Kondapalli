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

    let mx = -100, my = -100, cx = -100, cy = -100
    let raf: number

    // Hide the system cursor globally
    document.documentElement.style.cursor = 'none'

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
      cursor.style.borderColor = 'rgba(109,220,109,1)'
    }

    const onLeave = () => {
      cursor.style.width = '32px'
      cursor.style.height = '32px'
      cursor.style.borderColor = 'rgba(109,220,109,0.5)'
    }

    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)

    // Attach hover effects to interactive elements
    const attach = () => {
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    attach()

    // Re-attach on DOM changes (for dynamically rendered sections)
    const mo = new MutationObserver(attach)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      mo.disconnect()
      document.documentElement.style.cursor = ''
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
          border: '1.5px solid rgba(109,220,109,0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.25s ease',
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
          background: '#6ddc6d',
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
