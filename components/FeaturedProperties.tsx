'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { BedDouble, Bath, Square, Heart, ArrowRight, MapPin } from 'lucide-react';
import { useState } from 'react';

const PROPERTIES = [
  {
    id: 1,
    title: 'The Sky Penthouse',
    location: '150 Central Park South, New York',
    price: '$24,500,000',
    beds: 5,
    baths: 6.5,
    area: '6,200',
    image: 'https://picsum.photos/seed/penthouse/800/600',
    tags: ['For Sale', 'Penthouse']
  },
  {
    id: 2,
    title: 'Modern Waterfront Villa',
    location: '88 Star Island Dr, Miami Beach',
    price: '$38,900,000',
    beds: 8,
    baths: 10,
    area: '12,500',
    image: 'https://picsum.photos/seed/villa/800/600',
    tags: ['For Sale', 'Waterfront']
  },
  {
    id: 3,
    title: 'Beverly Hills Estate',
    location: '900 N Crescent Dr, Beverly Hills',
    price: '$45,000,000',
    beds: 7,
    baths: 9,
    area: '15,000',
    image: 'https://picsum.photos/seed/mansion/800/600',
    tags: ['Off Market', 'Estate']
  },
  {
    id: 4,
    title: 'Alpine Minimalist Chalet',
    location: 'Gstaad, Switzerland',
    price: '$18,200,000',
    beds: 6,
    baths: 6,
    area: '8,400',
    image: 'https://picsum.photos/seed/chalet/800/600',
    tags: ['For Sale', 'Chalet']
  }
];

export function FeaturedProperties() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="properties" className="py-24 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-white">
              Featured <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D55] to-[#8B0000]">Properties</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Explore our handpicked curation of the world's most exquisite homes. From breathtaking penthouses to sprawling waterfront estates, find unparalleled luxury.
            </p>
          </motion.div>

          <motion.button 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-white/80 hover:text-[#FF2D55] transition-colors pb-2 border-b border-[#FF2D55]/30 hover:border-[#FF2D55]"
          >
            View All Properties
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROPERTIES.map((property, idx) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onHoverStart={() => setHoveredId(property.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative rounded-2xl overflow-hidden bg-[#121212] border border-white/5 hover:border-white/10 transition-colors"
            >
              {/* Image Container */}
              <div className="relative h-72 md:h-96 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Tags */}
                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                  {property.tags.map((tag, i) => (
                    <span key={tag} className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase text-white ${i === 0 ? 'bg-[#FF2D55]' : 'bg-black/50 backdrop-blur-md border border-white/20'}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Favorite */}
                <button className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md shadow-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-[#FF2D55] hover:border-[#FF2D55] transition-all">
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF2D55] group-hover:to-[#D90429] transition-all duration-300 mb-2">
                      {property.title}
                    </h3>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-[#FF2D55]" />
                      {property.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-bold text-gray-500 mb-1">Asking Price</p>
                    <p className="text-[#FF2D55] font-black text-2xl">{property.price}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#FF2D55]">
                      <BedDouble className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{property.beds}</p>
                      <p className="text-[10px] uppercase text-gray-500 font-bold">Beds</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#FF2D55]">
                      <Bath className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{property.baths}</p>
                      <p className="text-[10px] uppercase text-gray-500 font-bold">Baths</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#FF2D55]">
                      <Square className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{property.area}</p>
                      <p className="text-[10px] uppercase text-gray-500 font-bold">Sq Ft</p>
                    </div>
                  </div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredId === property.id ? 1 : 0, 
                    height: hoveredId === property.id ? 'auto' : 0,
                    marginTop: hoveredId === property.id ? 24 : 0
                  }}
                  className="overflow-hidden"
                >
                  <button className="w-full py-3 bg-gradient-to-r from-[#D90429] to-[#8B0000] rounded-xl text-sm font-bold uppercase tracking-tighter shadow-lg shadow-[#D90429]/20 flex items-center justify-center gap-2 hover:shadow-[#D90429]/40 transition-all text-white">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
