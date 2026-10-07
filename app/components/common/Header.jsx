'use client';
import { useState } from 'react';
import Container from './Container';
import Button from './Button';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Our Office', href: '#office' },
    { name: 'Technology', href: '#technology' },
    { name: 'Invisalign', href: '#invisalign' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-100">
      <Container className="flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="bg-medical-600 text-white p-2.5 rounded-2xl shadow-md shadow-medical-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-2xl font-black text-slate-900 tracking-tight">
            Orthodontics
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-slate-600 hover:text-medical-600 transition-colors relative py-1"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact">
            <Button variant="primary">Book Appointment</Button>
          </a>
        </nav>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-2 text-slate-700 hover:text-medical-600"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="lg:hidden bg-white border-b border-slate-200 px-6 pt-3 pb-6 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-medical-600"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="block pt-2">
            <Button variant="primary" className="w-full">Book Appointment</Button>
          </a>
        </motion.div>
      )}
    </header>
  );
}