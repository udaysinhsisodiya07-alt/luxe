'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'James Harrington',
    role: 'Tech Executive',
    text: '"The level of service provided by Luxe Estates is truly unmatched. They handled the purchase of our Manhattan penthouse with absolute discretion and precision. Highly recommended for the luxury buyer."',
    rating: 5,
  },
  {
    name: 'Sophia Laurent',
    role: 'Art Collector',
    text: '"Finding a property that met my specific architectural requirements seemed impossible until I met this team. Their portfolio of off-market estates is astonishing. Pure professionals."',
    rating: 5,
  },
  {
    name: 'William & Grace Cole',
    role: 'International Investors',
    text: '"From London to Miami, they made our luxury portfolio expansion seamless. A bespoke service that caters to every detail, ensuring a frictionless transaction from start to finish."',
    rating: 5,
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#121212] relative border-t border-white/5 overflow-hidden">
       {/* Background gradient */}
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF2D55]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF2D55]/10 border border-[#FF2D55]/20 text-[#FF2D55] text-[10px] font-bold uppercase tracking-widest mb-6">
            <Star className="w-3 h-3 text-[#FF2D55]" />
            <span>Client Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
            A Legacy of <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D55] to-[#D90429]">Trust</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-[#FF2D55]/10 transition-colors duration-500" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#FF2D55] fill-[#FF2D55]" />
                ))}
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-8 italic">
                {review.text}
              </p>
              
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-sm">{review.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-[#FF2D55] font-bold mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
