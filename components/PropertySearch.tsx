'use client';

import { motion } from 'motion/react';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { useState } from 'react';

export function PropertySearch() {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
    }, 800);
  };

  return (
    <section className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 -mt-20 mb-20 pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 items-end">
          
          <div className="space-y-2 lg:col-span-1">
            <label className="text-[10px] uppercase text-gray-500 font-bold mb-1 block px-2">Location</label>
            <div className="relative group">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-hover:text-[#FF2D55] transition-colors" />
              <input 
                type="text" 
                placeholder="Mumbai, South Delhi, Goa" 
                className="w-full bg-[#0A0A0A]/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-[#FF2D55]/50 focus:bg-white/5 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2 lg:col-span-1">
            <label className="text-[10px] uppercase text-gray-500 font-bold mb-1 block px-2">Property Type</label>
            <div className="relative group">
              <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-hover:text-[#FF2D55] transition-colors" />
              <select className="w-full bg-[#0A0A0A]/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white/80 focus:outline-none focus:border-[#FF2D55]/50 focus:bg-white/5 transition-all appearance-none outline-none">
                <option value="all">Any Type</option>
                <option value="villa">Luxury Villa</option>
                <option value="penthouse">Penthouse</option>
                <option value="mansion">Mansion</option>
                <option value="apartment">Apartment</option>
              </select>
            </div>
          </div>

          <div className="space-y-2 lg:col-span-1">
            <label className="text-[10px] uppercase text-gray-500 font-bold mb-1 block px-2">Price Range</label>
            <div className="relative group">
              <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-hover:text-[#FF2D55] transition-colors" />
              <select className="w-full bg-[#0A0A0A]/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white/80 focus:outline-none focus:border-[#FF2D55]/50 focus:bg-white/5 transition-all appearance-none outline-none">
                <option value="any">Any Price</option>
                <option value="5-10">₹5 Cr - ₹10 Cr</option>
                <option value="10-25">₹10 Cr - ₹25 Cr</option>
                <option value="25-50">₹25 Cr - ₹50 Cr</option>
                <option value="50+">₹50 Cr+</option>
              </select>
            </div>
          </div>

          <div className="space-y-2 lg:col-span-1">
            <label className="text-[10px] uppercase text-gray-500 font-bold mb-1 block px-2">Status</label>
            <div className="relative group">
              <select className="w-full bg-[#0A0A0A]/50 border border-white/10 rounded-xl py-3 px-6 text-sm text-white/80 focus:outline-none focus:border-[#FF2D55]/50 focus:bg-white/5 transition-all appearance-none outline-none">
                <option value="buy">For Sale</option>
                <option value="rent">For Rent</option>
                <option value="off-market">Off Market</option>
              </select>
            </div>
          </div>

          <div className="lg:col-span-1">
            <button 
              onClick={handleSearch}
              disabled={isSearching}
              className="w-full h-[46px] rounded-xl bg-gradient-to-r from-[#D90429] to-[#8B0000] text-sm font-bold uppercase tracking-tighter shadow-lg shadow-[#D90429]/20 flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#D90429]/40 transition-all duration-300 group text-white disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSearching ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Search
                </>
              )}
            </button>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
