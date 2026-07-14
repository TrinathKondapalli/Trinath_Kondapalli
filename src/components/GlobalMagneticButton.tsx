import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface GlobalMagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function GlobalMagneticButton({ children, className, style, onClick }: GlobalMagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  
  // Base button transform values
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  
  // Text transform values (for inner parallax)
  const textX = useMotionValue(0);
  const textY = useMotionValue(0);
  
  // Spring config for smooth snap back
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  
  const smoothBtnX = useSpring(btnX, springConfig);
  const smoothBtnY = useSpring(btnY, springConfig);
  const smoothTextX = useSpring(textX, springConfig);
  const smoothTextY = useSpring(textY, springConfig);

  useEffect(() => {
    // Only apply on hover capable devices
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const { clientX, clientY } = e;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      if (distance < 100) {
        // Apply magnetic pull proportional to distance
        btnX.set(distanceX * 0.35);
        btnY.set(distanceY * 0.35);
        
        // Inner text pulls slightly stronger
        textX.set(distanceX * 0.5);
        textY.set(distanceY * 0.5);
      } else {
        // Reset
        btnX.set(0);
        btnY.set(0);
        textX.set(0);
        textY.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [btnX, btnY, textX, textY]);

  return (
    <motion.button
      ref={ref}
      className={className}
      style={{ ...style, x: smoothBtnX, y: smoothBtnY }}
      onClick={onClick}
    >
      <motion.div 
        style={{ 
          x: smoothTextX, 
          y: smoothTextY,
          display: 'flex',
          alignItems: 'center',
          gap: style?.gap || '8px',
          width: '100%',
          justifyContent: style?.justifyContent || 'center'
        }}
      >
        {children}
      </motion.div>
    </motion.button>
  );
}
