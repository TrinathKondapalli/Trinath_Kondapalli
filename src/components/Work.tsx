import { motion } from 'framer-motion';

export default function Work() {
  return (
    <section 
      id="work"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '120px 24px',
        backgroundColor: 'transparent',
        zIndex: 1, 
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: '100%', maxWidth: 1200 }}
      >
        <h2 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(48px, 6vw, 80px)',
          fontWeight: 700,
          color: 'var(--c-white)',
          letterSpacing: '-2px',
          margin: '0 0 24px 0'
        }}>
          Selected <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            color: 'var(--c-primary)',
            fontStyle: 'italic'
          }}>Works</span>
        </h2>
        
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 20,
          color: 'var(--rgba-white-06)',
          maxWidth: 600,
          lineHeight: 1.6,
          marginBottom: 64
        }}>
          A collection of digital experiences designed to solve complex problems and drive business growth.
        </p>

        {/* Placeholder for projects */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 32
        }}>
          {[1, 2, 3, 4].map(i => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              style={{
                width: '100%',
                aspectRatio: '4/3',
                backgroundColor: 'var(--rgba-dark-07)',
                backdropFilter: 'blur(10px)',
                borderRadius: 24,
                border: '1px solid var(--rgba-white-008)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
            }}>
              <span style={{ color: 'var(--rgba-white-03)', fontFamily: 'var(--font-sans)' }}>Project {i} Preview</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
