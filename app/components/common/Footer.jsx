'use client';
import { useState, useEffect } from 'react';
import Container from './Container';
import { Sparkles, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800/80">
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <a href="#" className="flex items-center gap-2 mb-4">
            <div className="bg-medical-500 text-white p-2 rounded-xl">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Orthodontics</span>
          </a>
          <p className="text-xs leading-relaxed text-slate-400">
            Crafting healthy, beautiful smiles through modern technology and compassionate patient care.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2.5 text-xs">
            <li><a href="#about" className="hover:text-medical-500 transition-colors">About Practice</a></li>
            <li><a href="#office" className="hover:text-medical-500 transition-colors">Our Office Tour</a></li>
            <li><a href="#technology" className="hover:text-medical-500 transition-colors">3D Digital Tech</a></li>
            <li><a href="#invisalign" className="hover:text-medical-500 transition-colors">Invisalign® Clear Aligners</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Contact Info</h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-medical-500 shrink-0" />
              <span>123 Medical Plaza, Suite 400</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-medical-500 shrink-0" />
              <a href="tel:5551234567" className="hover:text-white">(555) 123-4567</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-medical-500 shrink-0" />
              <span>info@orthodontics.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Office Hours</h4>
          <ul className="space-y-2 text-xs">
            <li className="flex justify-between py-1 border-b border-slate-900">
              <span>Mon - Thu:</span>
              <span className="text-white font-medium">8:00 AM - 5:00 PM</span>
            </li>
            <li className="flex justify-between py-1 border-b border-slate-900">
              <span>Friday:</span>
              <span className="text-white font-medium">8:00 AM - 2:00 PM</span>
            </li>
            <li className="flex justify-between py-1">
              <span>Sat - Sun:</span>
              <span className="text-medical-500 font-medium">Closed</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="mt-12 pt-8 border-t border-slate-900 text-center text-xs text-slate-500">
        <Container className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {year} Orthodontics. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </Container>
      </div>
    </footer>
  );
}