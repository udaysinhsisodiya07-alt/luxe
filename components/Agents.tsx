'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const AGENTS = [
  {
    name: 'Sarah Montgomery',
    role: 'Managing Partner',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    sales: '₹ 1,200 Cr+'
  },
  {
    name: 'Alexandra Pierce',
    role: 'Director of Luxury Estates',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    sales: '₹ 850 Cr+'
  },
  {
    name: 'Marcus Sterling',
    role: 'Senior Vice President',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    sales: '₹ 1,500 Cr+'
  }
];

export function Agents() {
  return (
    <section id="agents" className="py-24 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="text-center md:text-left md:flex justify-between items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0"
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-white">
              Meet Our <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D55] to-[#8B0000]">Experts</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto md:mx-0">
              Our team of seasoned professionals is consistently ranked among the top real estate agents globally, bringing unmatched expertise to every transaction.
            </p>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#FF2D55] text-white transition-all"
          >
            View All Agents
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AGENTS.map((agent, idx) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative h-[450px] w-full rounded-2xl overflow-hidden border border-white/10"
            >
              <Image
                src={agent.image}
                alt={agent.name}
                fill
                className="object-cover grayscale-[30%] group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-2">
                    <p className="text-[#FF2D55] text-[10px] uppercase tracking-widest font-bold mb-1">{agent.role}</p>
                    <h3 className="text-2xl font-bold text-white">{agent.name}</h3>
                  </div>
                  
                  <div className="flex gap-4 mb-4 text-gray-300 text-sm">
                    <p>Career Volume: <span className="text-white font-black">{agent.sales}</span></p>
                  </div>

                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <a href={`mailto:contact@luxeestates.com?subject=Inquiry for ${agent.name}`} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-[#FF2D55] hover:border-[#FF2D55] hover:text-white transition-all text-white/80">
                      <Mail className="w-4 h-4" />
                    </a>
                    <a href="tel:+919820012345" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-[#FF2D55] hover:border-[#FF2D55] hover:text-white transition-all text-white/80">
                      <Phone className="w-4 h-4" />
                    </a>
                    <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white hover:border-white hover:text-black transition-all text-white/80 ml-auto">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
