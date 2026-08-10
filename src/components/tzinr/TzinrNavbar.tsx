import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/Tzinr_logo.png';
import { useCurtainStore } from './RouteTransition';

export default function TzinrNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { triggerCurtain } = useCurtainStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Why TZINR', href: '#why-tzinr' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div 
            className={`flex items-center justify-between mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${
              scrolled 
                ? 'bg-[#030A1D]/75 backdrop-blur-[24px] border border-[#437EF0]/20 px-6 py-3 shadow-2xl shadow-black/20' 
                : 'bg-transparent px-4 py-2'
            }`}
          >
            {/* Logo */}
            <Link to="/tzinr" className="flex items-center">
              <img src={logo} alt="TZINR Studio" className="h-10 md:h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[var(--c-muted)] hover:text-[var(--c-primary)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="hidden md:flex items-center gap-6">
              <a href="/" onClick={(e) => {
                e.preventDefault();
                triggerCurtain('toPersonal', () => navigate('/'));
              }} className="text-sm font-medium text-[var(--c-muted)] hover:text-[var(--c-white)] transition-colors underline decoration-white/20 underline-offset-4">
                Trinath's Portfolio ↗
              </a>
              <a 
                href="#contact"
                className="px-5 py-2.5 rounded-lg bg-[var(--c-primary)] text-[var(--c-white)] text-sm font-semibold hover:bg-[var(--c-secondary)] transition-all flex items-center gap-2"
              >
                Start a Project ↗
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-[var(--c-white)] p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[var(--c-base)]/95 backdrop-blur-2xl flex flex-col pt-24 px-8"
          >
            <div className="flex flex-col gap-6 text-2xl font-display font-medium text-[var(--c-white)]">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="border-b border-[var(--c-deep)] pb-4 hover:text-[var(--c-primary)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="mt-8 flex flex-col gap-6">
                <a 
                  href="/" 
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    triggerCurtain('toPersonal', () => navigate('/'));
                  }}
                  className="text-lg text-[var(--c-muted)] hover:text-[var(--c-white)] underline decoration-white/20 underline-offset-4"
                >
                  Trinath's Portfolio ↗
                </a>
                <a 
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-4 text-center rounded-xl bg-[var(--c-primary)] text-[var(--c-white)] text-lg font-semibold"
                >
                  Start a Project ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
