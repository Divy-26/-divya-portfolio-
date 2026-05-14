import { motion } from 'motion/react';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F3]/80 backdrop-blur-md border-b border-[#0D0D0D]/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-lg tracking-tight hover:opacity-70 transition-opacity"
        >
          DIVYA GUPTA
        </button>

        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('work')}
            className="text-sm hover:opacity-70 transition-opacity"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm hover:opacity-70 transition-opacity"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm hover:opacity-70 transition-opacity"
          >
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
