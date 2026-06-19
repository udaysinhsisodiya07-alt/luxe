'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Award, Users, Building, ShieldCheck } from 'lucide-react';

const STATS = [
  { icon: Building, value: '1,200+', label: 'Properties Sold' },
  { icon: Users, value: '98%', label: 'Happy Clients' },
  { icon: Award, value: '25+', label: 'Years Experience' },
  { icon: ShieldCheck, value: '150+', label: 'Expert Agents' },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-[#121212] relative border-y border-white/5 overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FF2D55]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 relative z-10"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF2D55]/10 border border-[#FF2D55]/20 text-[#FF2D55] text-[10px] font-bold uppercase tracking-widest mb-6">
                About Our Agency
              </div>
              <h2 className="text-5xl font-light leading-[1.1] mb-6 tracking-tight text-white">
                Redefining the <br />
                <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D55] via-[#D90429] to-[#8B0000]">Luxury Standard</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-4">
                Luxe Estates was founded with a singular vision: to provide the most discerning clients with an unparalleled real estate experience. We represent the most spectacular homes and exclusive developments across the globe.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Our approach is discreet, highly personalized, and driven by a deep understanding of the luxury market landscape. We don't just sell properties; we curate lifestyles.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
              {STATS.map((stat, idx) => (
                <div key={idx} className="bg-white/5 border border-white/5 p-4 rounded-2xl flex flex-col items-center text-center">
                  <stat.icon className="w-6 h-6 text-gray-400 mb-2" />
                  <span className="text-3xl font-black text-white">{stat.value}</span>
                  <span className="text-[9px] uppercase tracking-widest text-[#FF2D55] font-bold mt-1">{stat.label}</span>
                </div>
              ))}
            </div>

            <button className="px-8 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm font-bold uppercase tracking-tighter mt-4 text-white">
              More About Us
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-white/10"
          >
            <Image
              src="https://picsum.photos/seed/agency/800/1000"
              alt="Luxury Real Estate Agent"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Overlay Card */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                <h4 className="font-space font-bold text-xl mb-2 text-white">Award Winning Agency</h4>
                <p className="text-sm text-white/60 font-light">
                  Recognized globally for excellence in luxury architectural representation.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
