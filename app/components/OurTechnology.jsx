'use client';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import { motion } from 'framer-motion';
import { Cpu, Scan, Sparkles } from 'lucide-react';

export default function OurTechnology() {
  const techs = [
    { icon: Scan, title: "3D Intraoral Scanning", desc: "No more messy impressions. Quick, clean, and precise 3D digital scans." },
    { icon: Cpu, title: "Digital Treatment Planning", desc: "Visualize your final smile transformation before starting treatment." },
    { icon: Sparkles, title: "Low-Radiation Imaging", desc: "Advanced digital X-rays ensuring maximum safety and diagnostic accuracy." }
  ];

  return (
    <section id="technology" className="py-20 bg-white">
      <Container>
        <SectionHeading 
          badge="Cutting-Edge Tech"
          title="Modern Dental Innovations"
          subtitle="Leveraging advanced technology for faster, more predictable results."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-medical-500 text-white rounded-2xl w-fit mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}