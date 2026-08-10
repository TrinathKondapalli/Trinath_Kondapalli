import { motion, AnimatePresence } from 'framer-motion';
import { create } from 'zustand';

export const useCurtainStore = create<{
  isAnimating: boolean;
  direction: 'toTzinr' | 'toPersonal' | null;
  triggerCurtain: (dir: 'toTzinr' | 'toPersonal', callback: () => void) => void;
}>((set) => ({
  isAnimating: false,
  direction: null,
  triggerCurtain: (dir, callback) => {
    // 1. Drop the curtain (start wipe in)
    set({ isAnimating: true, direction: dir });
    
    // 2. Wait 600ms (exact duration of curtain slide-in)
    setTimeout(() => {
      // 3. Swap the active page underneath & scroll top
      callback();
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      // 4. Trigger curtain exit wipe out
      setTimeout(() => {
        set({ isAnimating: false });
      }, 50);
    }, 600); 
  }
}));

export default function RouteTransition() {
  const { isAnimating, direction } = useCurtainStore();

  const isTzinr = direction === 'toTzinr';

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          key="curtain"
          initial={{ clipPath: 'polygon(0% 0%, 0% 0%, -20% 100%, -20% 100%)' }}
          animate={{ clipPath: 'polygon(0% 0%, 120% 0%, 100% 100%, -20% 100%)' }}
          exit={{ clipPath: 'polygon(120% 0%, 120% 0%, 100% 100%, 100% 100%)' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center overflow-hidden"
          style={{
            background: isTzinr
              ? 'linear-gradient(135deg, #2061D7 0%, #030A1D 100%)' 
              : 'linear-gradient(135deg, #6dd74c 0%, #081509 100%)'
          }}
        >
          <motion.h2
            inherit={false}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-widest uppercase whitespace-nowrap drop-shadow-lg z-10"
          >
            {isTzinr ? 'TZINR Studio' : 'Trinath Kondapalli'}
          </motion.h2>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
