'use client';
import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-3xl mb-12 ${centered ? 'mx-auto text-center' : ''} ${className}`}
    >
      {badge && (
        <span className="bg-medical-50 text-medical-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-medical-200 inline-block mb-3">
          {badge}
        </span>
      )}

      <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}