import { motion } from 'framer-motion';

const tools = [
  { name: 'Figma', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Framer', url: 'https://cdn.simpleicons.org/framer/white' },
  { name: 'VS Code', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', url: 'https://cdn.simpleicons.org/nextdotjs/white' }, 
  { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Webflow', url: 'https://cdn.simpleicons.org/webflow/white' },
];

export default function ToolsMarquee() {
  return (
    <div style={{
      width: '100%',
      padding: '20px 0',
      marginTop: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 20
    }}>
      {/* Premium Glassmorphism Dock */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(20px, 3vw, 48px)', // responsive gap
        padding: '20px 40px',
        background: 'var(--rgba-dark-06)', // subtle dark glass
        backdropFilter: 'blur(16px)',
        border: '1px solid var(--rgba-white-03)',
        borderRadius: '100px', // pill shape
        boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
      }}>
        {tools.map((tool, i) => (
          <motion.div 
            key={`${tool.name}-${i}`}
            whileHover={{ 
              scale: 1.6, 
              y: -12, // pop upwards
              rotate: (i % 2 === 0 ? 3 : -3) // slight playful tilt
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center' }}
            title={tool.name}
          >
            <motion.img 
              whileHover={{ opacity: 1, filter: 'drop-shadow(0 10px 20px rgba(109,215,76,0.3))' }}
              initial={{ opacity: 0.7 }}
              src={tool.url} 
              alt={tool.name} 
              style={{
                height: 32,
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
