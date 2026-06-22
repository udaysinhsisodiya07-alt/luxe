import Link from 'next/link';
import { Building2, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FF2D55] to-[#8B0000] rounded-sm transform rotate-45 flex items-center justify-center">
                <Building2 className="text-white w-4 h-4 -rotate-45" />
              </div>
              <span className="text-2xl font-bold tracking-tighter uppercase ml-2">
                Luxe<span className="text-[#FF2D55]">Estates</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              The premier destination for luxury real estate and exclusive properties worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#FF2D55] transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#FF2D55] transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#FF2D55] transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6 text-white tracking-wide uppercase border-b border-white/10 pb-2 inline-block">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 hover:text-[#FF2D55] text-sm transition-colors font-medium">About Us</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#FF2D55] text-sm transition-colors font-medium">Our Agents</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#FF2D55] text-sm transition-colors font-medium">Careers</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#FF2D55] text-sm transition-colors font-medium">Press & Media</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6 text-white tracking-wide uppercase border-b border-white/10 pb-2 inline-block">Properties</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 hover:text-[#FF2D55] text-sm transition-colors font-medium">Featured Estates</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#FF2D55] text-sm transition-colors font-medium">New Developments</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#FF2D55] text-sm transition-colors font-medium">Off-Market Access</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#FF2D55] text-sm transition-colors font-medium">Penthouse Collection</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6 text-white tracking-wide uppercase border-b border-white/10 pb-2 inline-block">Newsletter</h4>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Subscribe to receive exclusive off-market listings and market reports.
            </p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-[#FF2D55]/50 transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#FF2D55] transition-colors">
                &rarr;
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase font-bold tracking-widest">
          <div className="flex gap-8">
            <span>Core Markets: Mumbai • Delhi NCR • Goa • Hyderabad</span>
            <span>EST. 2012</span>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#FF2D55] cursor-pointer transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#FF2D55] cursor-pointer transition-colors">Terms of Luxury</Link>
            <span className="text-white/40 italic flex-shrink-0">Experience Redefined.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
