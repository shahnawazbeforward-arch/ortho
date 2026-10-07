'use client';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <SectionHeading 
          badge="About Our Practice"
          title="Transforming Smiles With Passion & Precision"
          subtitle="Dedicated to providing high-quality orthodontic care for patients of all ages."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.img 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" 
            alt="Our Dentist" 
            className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-slate-600"
          >
            <h3 className="text-2xl font-bold text-slate-900">Personalized Orthodontic Solutions</h3>
            <p className="leading-relaxed">
              We combine years of clinical expertise with advanced modern technology to craft customized treatment plans. Every smile is unique, and so is our approach.
            </p>
            <p className="leading-relaxed">
              Whether you are looking for clear aligners or traditional options, our friendly team makes your comfort and satisfaction our highest priority.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}