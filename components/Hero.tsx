'use client';

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Search, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

const BACKGROUNDS = [
  'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop', // Lake Palace
  'https://images.unsplash.com/photo-1585123388867-3bfe6dd4bdbf?q=80&w=2070&auto=format&fit=crop', // Taj Mahal Palace
  'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2132&auto=format&fit=crop', // Luxury Interior
  'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop', // Rambagh
];

export function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % BACKGROUNDS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Image Slider & Overlay */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={BACKGROUNDS[currentBg]}
              alt="Luxury Architecture"
              fill
              priority
              className="object-cover object-center translate-y-[-10%] scale-110"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/40 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FF2D55]/10 via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center md:items-start text-center md:text-left mt-20 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF2D55]/10 border border-[#FF2D55]/20 text-[#FF2D55] text-[10px] font-bold uppercase tracking-widest mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF2D55] animate-pulse" /> Exclusive Properties Available
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-7xl font-light leading-[1.1] mb-6 tracking-tight max-w-4xl"
        >
          Find Your <br />
          <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D55] via-[#D90429] to-[#8B0000]">Dream Property</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
        >
          Discover an unprecedented level of luxury and sophistication in our curated collection of extraordinary estates and exclusive urban properties.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <Link href="#properties" className="group flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-[#D90429] to-[#8B0000] rounded-xl text-sm font-bold uppercase tracking-tighter shadow-lg shadow-[#D90429]/20 hover:shadow-xl hover:shadow-[#D90429]/40 transition-all duration-300 text-white">
            Explore Properties
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link href="#contact" className="flex items-center justify-center gap-3 px-8 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm font-bold uppercase tracking-tighter text-white">
            Book Consultation
          </Link>
        </motion.div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-7xl mx-auto px-6 md:px-12 lg:px-20 z-0">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.1)]"></div>
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden md:block"></div>
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block"></div>
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      </div>
    </section>
  );
}
