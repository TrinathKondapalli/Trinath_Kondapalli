import TzinrNavbar from './TzinrNavbar';
import TzinrFooter from './TzinrFooter';

export default function TzinrLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="tzinr-theme min-h-screen flex flex-col font-sans" style={{ background: 'var(--c-base)', color: 'var(--c-white)' }}>
      <TzinrNavbar />
      <main className="flex-1 relative z-10 w-full overflow-hidden">
        {children}
      </main>
      <TzinrFooter />
    </div>
  );
}
