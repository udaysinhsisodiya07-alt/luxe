'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Building2 } from 'lucide-react';
import Link from 'next/link';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Properties', 'About', 'Agents', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-white/5 ${
        scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-xl py-4' : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-gradient-to-br from-[#FF2D55] to-[#8B0000] rounded-sm transform rotate-45 flex items-center justify-center group-hover:rotate-90 transition-all duration-300">
            <Building2 className="text-white w-4 h-4 -rotate-45 group-hover:-rotate-90 transition-all duration-300" />
          </div>
          <span className="text-2xl font-bold tracking-tighter uppercase ml-2 hidden sm:block">
            Luxe<span className="text-[#FF2D55]">Estates</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium tracking-wide text-gray-400 uppercase hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA Button Desktop */}
        <div className="hidden lg:block">
          <button className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#FF2D55] text-white transition-all backdrop-blur-sm">
            Book Consultation
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-white/80 hover:text-white z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-3xl border-b border-white/10 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-[0.15em] text-white/70 hover:text-white hover:pl-2 transition-all"
                >
                  {item}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/10">
                <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF2D55] to-[#D90429] text-sm font-semibold uppercase tracking-widest text-white shadow-[0_8px_20px_rgba(255,45,85,0.3)]">
                  Book Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
