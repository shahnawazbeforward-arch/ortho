'use client';
import Container from './common/Container';
import Button from './common/Button';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-medical-50/60 to-white overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="bg-medical-100 text-medical-700 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full inline-block mb-4">
            Advanced Dental Care
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none mb-6">
            Your Perfect Smile Begins Right Here.
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Experience state-of-the-art orthodontic treatment with personalized care. Straighten your teeth comfortably with Invisalign and modern technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact">
              <Button variant="primary" className="text-base py-4 px-8">
                Book Free Consultation
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" 
            alt="Orthodontics Practice" 
            className="rounded-3xl shadow-2xl object-cover w-full h-[450px]"
          />
        </motion.div>
      </Container>
    </section>
  );
}