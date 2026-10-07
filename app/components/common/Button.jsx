'use client';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = "relative overflow-hidden font-bold rounded-xl transition-all duration-300 inline-flex items-center justify-center px-6 py-3 text-sm z-10 group";
  
  const variants = {
    primary: "text-white bg-medical-600 border border-medical-500 shadow-md shadow-medical-500/20 hover:shadow-lg hover:shadow-medical-500/30",
    secondary: "text-medical-600 bg-white border border-medical-200 hover:text-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className="absolute inset-0 w-full h-full bg-slate-900 -z-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}