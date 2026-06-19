import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { PropertySearch } from '@/components/PropertySearch';
import { FeaturedProperties } from '@/components/FeaturedProperties';
import { About } from '@/components/About';
import { Agents } from '@/components/Agents';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] selection:bg-[#FF2D55]/30">
      <Navigation />
      <Hero />
      <PropertySearch />
      <FeaturedProperties />
      <About />
      <Agents />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
