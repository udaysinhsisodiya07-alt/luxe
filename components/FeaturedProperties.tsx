'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { BedDouble, Bath, Square, Heart, ArrowRight, MapPin } from 'lucide-react';
import { useState } from 'react';

const PROPERTIES = [
  {
    id: 1,
    title: 'The Royal Marina Penthouse',
    location: 'Worli Sea Face, Mumbai',
    price: '₹ 45,00,00,000',
    beds: 5,
    baths: 6,
    area: '6,200',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop',
    tags: ['For Sale', 'Sea Facing']
  },
  {
    id: 2,
    title: 'Heritage Palace Estate',
    location: 'Banjara Hills, Hyderabad',
    price: '₹ 85,50,00,000',
    beds: 8,
    baths: 10,
    area: '14,500',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format&fit=crop',
    tags: ['For Sale', 'Heritage']
  },
  {
    id: 3,
    title: 'Lutyens Elite Bungalow',
    location: 'Amrita Shergill Marg, New Delhi',
    price: '₹ 120,00,00,000',
    beds: 7,
    baths: 8,
    area: '12,000',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    tags: ['Off Market', 'Exclusive']
  },
  {
    id: 4,
    title: 'Luxury Beachfront Villa',
    location: 'Assagao, Goa',
    price: '₹ 22,50,00,000',
    beds: 5,
    baths: 6,
    area: '8,400',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop',
    tags: ['For Sale', 'Villa']
  }
];

export function FeaturedProperties() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

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
                <button 
                  onClick={() => toggleFavorite(property.id)}
                  className={`absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md shadow-lg border flex items-center justify-center transition-all ${
                    favorites.includes(property.id) 
                      ? 'text-[#FF2D55] border-[#FF2D55]' 
                      : 'border-white/10 text-white/50 hover:text-[#FF2D55] hover:border-[#FF2D55]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${favorites.includes(property.id) ? 'fill-[#FF2D55]' : ''}`} />
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
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full py-3 bg-gradient-to-r from-[#D90429] to-[#8B0000] rounded-xl text-sm font-bold uppercase tracking-tighter shadow-lg shadow-[#D90429]/20 flex items-center justify-center gap-2 hover:shadow-[#D90429]/40 transition-all text-white"
                  >
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
