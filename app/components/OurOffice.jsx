'use client';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import { motion } from 'framer-motion';

export default function OurOffice() {
  const photos = [
    "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
  ];

  return (
    <section id="office" className="py-20 bg-slate-50">
      <Container>
        <SectionHeading 
          badge="State-Of-The-Art Facility"
          title="Designed For Your Comfort"
          subtitle="Take a tour of our modern, clean, and welcoming clinic environment."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((src, idx) => (
            <motion.img 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              src={src} 
              alt="Office" 
              className="rounded-2xl shadow-md w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}