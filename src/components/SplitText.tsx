import React from 'react';

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
  duration = 0.6,
  splitType = 'words',
  style = {},
  tag = 'span'
}: SplitTextProps) {
  const parts = splitType === 'chars' ? text.split('') : text.split(' ');
  const baseDelayMs = delay * 1000;
  const staggerMs = splitType === 'chars' ? 30 : 80;

  const Tag = tag as React.ElementType;

  return (
    <Tag style={{ display: 'inline-block', ...style }} className={className}>
      {parts.map((part, index) => (
        <span
          key={index}
          className="reveal"
          style={{ 
            display: 'inline-block', 
            whiteSpace: part === ' ' ? 'pre' : 'normal',
            marginRight: splitType === 'words' && index !== parts.length - 1 ? '0.25em' : 0,
            transitionDelay: `${baseDelayMs + (index * staggerMs)}ms`,
            transitionDuration: `${duration}s`
          }}
        >
          {part}
        </span>
      ))}
    </Tag>
  );
}
