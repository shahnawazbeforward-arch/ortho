'use client';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import { motion } from 'framer-motion';

export default function Invisalign() {
  return (
    <section id="invisalign" className="py-20 bg-medical-50/50">
      <Container>
        <SectionHeading 
          badge="Clear Aligners"
          title="Invisalign® – Straighten Smiles Invisibly"
          subtitle="Virtually invisible, comfortable, and removable clear aligners."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-slate-600"
          >
            <h3 className="text-2xl font-bold text-slate-900">Why Choose Invisalign?</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">✔ Almost invisible clear aligners</li>
              <li className="flex items-center gap-2">✔ Easily removable for food & drinks</li>
              <li className="flex items-center gap-2">✔ Smooth plastic with zero metal wires</li>
              <li className="flex items-center gap-2">✔ Faster treatment times with 3D tracking</li>
            </ul>
          </motion.div>
          <motion.img 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80" 
            alt="Invisalign Aligners" 
            className="rounded-3xl shadow-xl w-full h-[380px] object-cover"
          />
        </div>
      </Container>
    </section>
  );
}