'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-[#FF2D55]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#8B0000]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-white">
            Private <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D55] to-[#8B0000]">Consultation</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Connect with our luxury advisors to begin your journey toward finding your perfect estate or to discuss representing your prestigious property.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-[#121212]/50 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Info Side */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Global Headquarters</h3>
              
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF2D55]/10 to-[#8B0000]/10 border border-[#FF2D55]/30 flex items-center justify-center text-[#FF2D55] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-1 uppercase tracking-wider text-xs">Address</h5>
                    <p className="text-gray-400 text-sm">
                      Level 4, The Capital<br />
                      Bandra Kurla Complex, Mumbai<br />
                      Maharashtra 400051, India
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF2D55]/10 to-[#8B0000]/10 border border-[#FF2D55]/30 flex items-center justify-center text-[#FF2D55] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-1 uppercase tracking-wider text-xs">Direct Line</h5>
                    <p className="text-gray-400 text-sm">
                      +91 98200 12345<br />
                      Mon-Fri: 9am - 6pm IST
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF2D55]/10 to-[#8B0000]/10 border border-[#FF2D55]/30 flex items-center justify-center text-[#FF2D55] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-1 uppercase tracking-wider text-xs">Email</h5>
                    <p className="text-gray-400 text-sm">
                      inquiries@luxeestates.com<br />
                      private@luxeestates.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-12 w-full h-[200px] rounded-2xl overflow-hidden border border-white/10 relative grayscale hover:grayscale-0 transition-all duration-500">
               {/* Embed simple google map iframe for appearance */}
              <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                loading="lazy" 
                allowFullScreen 
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15085.132578508197!2d72.85908332152861!3d19.0567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e123f8d27b%3A0x43799f0f63a3cc16!2sBandra%20Kurla%20Complex%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680540000000!5m2!1sen!2sin">
              </iframe>
              <div className="absolute inset-0 bg-[#0A0A0A]/20 pointer-events-none" />
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-[#0A0A0A] p-8 md:p-12 lg:p-16 border-l border-white/5">
            <h3 className="text-2xl font-bold text-white mb-2">Send an Inquiry</h3>
            <p className="text-gray-500 text-sm mb-8 font-medium">All information is kept strictly confidential.</p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-gray-500 font-bold mb-1 block px-2">First Name</label>
                  <input type="text" className="w-full bg-[#121212] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-[#FF2D55]/50 transition-colors" placeholder="Kabir" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-gray-500 font-bold mb-1 block px-2">Last Name</label>
                  <input type="text" className="w-full bg-[#121212] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-[#FF2D55]/50 transition-colors" placeholder="Singh" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase text-gray-500 font-bold mb-1 block px-2">Email Address</label>
                <input type="email" className="w-full bg-[#121212] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-[#FF2D55]/50 transition-colors" placeholder="kabir@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase text-gray-500 font-bold mb-1 block px-2">Phone Number</label>
                <input type="tel" className="w-full bg-[#121212] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-[#FF2D55]/50 transition-colors" placeholder="+91 98XXX XXXXX" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase text-gray-500 font-bold mb-1 block px-2">Your Message</label>
                <textarea required rows={4} className="w-full bg-[#121212] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-[#FF2D55]/50 transition-colors resize-none" placeholder="I am interested in..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className="w-full py-3 bg-gradient-to-r from-[#D90429] to-[#8B0000] rounded-xl text-sm font-bold uppercase tracking-tighter shadow-lg shadow-[#D90429]/20 flex items-center justify-center gap-2 hover:shadow-[#D90429]/40 transition-all duration-300 mt-4 group text-white disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSuccess ? (
                  <>Message Sent Successfully!</>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    Submit Inquiry
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
