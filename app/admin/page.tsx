'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Inbox, Trash2, Mail, Phone, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface Booking {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  date: string;
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('luxury_bookings') || '[]');
    setBookings(data);
  }, []);

  const handleDelete = (id: number) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    localStorage.setItem('luxury_bookings', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#FF2D55]/30 p-6 md:p-12 lg:p-20">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-6">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-4 text-sm font-bold uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-5xl font-light tracking-tight">
              Admin <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D55] to-[#8B0000]">Dashboard</span>
            </h1>
          </div>
          <div className="bg-[#121212] border border-white/10 px-6 py-3 rounded-full flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#FF2D55] animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-widest text-gray-300">
              {bookings.length} Inquiries
            </span>
          </div>
        </div>

        {bookings.length === 0 ? (
          <div className="bg-[#121212]/50 border border-white/5 rounded-3xl p-16 text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 text-gray-500">
              <Inbox className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">No Inquiries Yet</h3>
            <p className="text-gray-500 max-w-sm">When individuals fill out the contact form, their inquiries will appear here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {bookings.map((booking) => (
              <motion.div 
                key={booking.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#121212]/50 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 transition-colors relative group"
              >
                <div className="flex flex-col md:flex-row gap-8 justify-between">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                       <h3 className="text-xl font-bold">{booking.firstName} {booking.lastName}</h3>
                       <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-white/5 px-3 py-1 rounded-full flex items-center gap-2">
                         <Calendar className="w-3 h-3" />
                         {booking.date}
                       </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                      <a href={`mailto:${booking.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                        <Mail className="w-4 h-4 text-gray-500" />
                        {booking.email}
                      </a>
                      <a href={`tel:${booking.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                        <Phone className="w-4 h-4 text-gray-500" />
                        {booking.phone}
                      </a>
                    </div>

                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <p className="text-sm leading-relaxed text-gray-300 whitespace-pre-wrap">
                        {booking.message}
                      </p>
                    </div>
                  </div>

                  <div>
                    <button 
                      onClick={() => handleDelete(booking.id)}
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-[#8B0000]/10 text-[#FF2D55] hover:bg-[#D90429] hover:text-white transition-colors"
                      title="Delete Inquiry"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
