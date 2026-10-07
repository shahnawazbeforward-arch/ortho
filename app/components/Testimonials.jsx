'use client';
import { useState, useEffect } from 'react';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    { name: "Sarah Jenkins", role: "Invisalign Patient", text: "The team completely transformed my smile in just 10 months! The process was seamless and the results are unbelievable.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" },
    { name: "David Miller", role: "Parent of Patient", text: "Both my teenagers got their braces here. The staff are incredibly patient, knowledgeable, and caring. Highly recommended!", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" },
    { name: "Jessica Taylor", role: "Adult Braces Patient", text: "I was hesitant to get braces in my 30s, but their 3D digital technology made it so effortless. Best dental decision I ever made!", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80" }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white via-medical-50/50 to-white overflow-hidden">
      <Container>
        <SectionHeading 
          badge="Patient Success Stories"
          title="Loved By Smiles Across The City"
          subtitle="Real experiences from patients who achieved their dream smile with us."
        />

        <div className="max-w-4xl mx-auto relative px-4">
          <AnimatePresence mode="wait">
            <motion.div 
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-medical-500/5 border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-8 w-16 h-16 text-medical-100 -z-0" />

              <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              <p className="text-slate-700 text-lg md:text-xl leading-relaxed italic mb-8 relative z-10">
                "{reviews[current].text}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={reviews[current].image} 
                  alt={reviews[current].name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-medical-500 shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{reviews[current].name}</h4>
                  <p className="text-xs text-medical-600 font-medium">{reviews[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={() => setCurrent((current - 1 + reviews.length) % reviews.length)} 
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-medical-500 hover:text-white hover:border-medical-500 transition-all shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2.5 rounded-full transition-all ${current === idx ? 'w-8 bg-medical-500' : 'w-2.5 bg-slate-200'}`}
                />
              ))}
            </div>
            <button 
              onClick={() => setCurrent((current + 1) % reviews.length)} 
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-medical-500 hover:text-white hover:border-medical-500 transition-all shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}