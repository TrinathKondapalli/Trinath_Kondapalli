import { useEffect, useState } from 'react'

export default function ScrollProgressBar() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }

    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: 2,
        width: `${width}%`,
        background: '#6ddc6d',
        zIndex: 10000,
        transition: 'width 0.1s linear',
        pointerEvents: 'none',
      }}
    />
  )
}
