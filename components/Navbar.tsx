import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-white text-lg font-medium tracking-tight flex items-center gap-2"
        >
          <span className="bg-white text-black w-6 h-6 flex items-center justify-center rounded-sm font-bold text-xs">
            B
          </span>
          BLUEPRINT
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-light text-slate-400">
          <a href="#proceso" className="hover:text-white transition-colors">
            El Proceso
          </a>
          <a href="#resultados" className="hover:text-white transition-colors">
            Resultados
          </a>
          <a href="#garantia" className="hover:text-white transition-colors">
            Garantía
          </a>
        </div>
        <a
          href="#contacto"
          className="text-xs font-medium bg-white text-slate-950 px-4 py-2 rounded hover:bg-slate-200 transition-colors"
        >
          Agendar Consultoría
        </a>
      </div>
    </nav>
  );
};