import { motion, type Variants } from 'framer-motion';

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number; // in seconds
  duration?: number; // in seconds
  splitType?: 'chars' | 'words';
  style?: React.CSSProperties;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

export default function SplitText({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  splitType = 'words',
  style = {},
  tag = 'span'
}: SplitTextProps) {
  const words = text.split(' ');
  const chars = text.split('');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: splitType === 'chars' ? 0.03 : 0.08,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: [0.16, 1, 0.3, 1], // Buttery smooth custom easing, much lighter than physics spring
        duration: duration,
      },
    },
  };

  const Tag = motion[tag as keyof typeof motion] as React.ElementType;

  if (splitType === 'chars') {
    return (
      <Tag
        style={{ display: 'inline-block', ...style }}
        className={className}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {chars.map((char, index) => (
          <motion.span
            key={index}
            variants={child}
            style={{ 
              display: 'inline-block', 
              whiteSpace: char === ' ' ? 'pre' : 'normal',
              willChange: 'transform, opacity'
            }}
          >
            {char}
          </motion.span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag
      style={{ display: 'inline-block', ...style }}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ 
            display: 'inline-block', 
            marginRight: index === words.length - 1 ? 0 : '0.25em',
            willChange: 'transform, opacity'
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
