import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 mb-8 animate-fade-in-up">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Exclusivo para constructoras y estudios de interiorismo
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500 mb-6 text-glow leading-[1.1] pb-2">
          Renueva tu
          <br />
          Presencia Digital.
        </h1>

        <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Diseñamos landing pages que reflejan la misma calidad, precisión y
          lujo que tus reformas. Convierte visitantes en contratos de alto
          valor.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="w-full sm:w-auto px-8 py-3 bg-white text-slate-950 text-sm font-medium rounded hover:bg-slate-100 transition-all flex items-center justify-center gap-2 group"
          >
            Iniciar Proyecto
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-3 bg-white/5 border border-white/10 text-white text-sm font-medium rounded hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            Ver Portfolio
          </a>
        </div>

        {/* Abstract UI Mockup */}
        <div className="mt-20 relative mx-auto max-w-4xl perspective-2000">
          <div className="relative bg-slate-900 border border-white/10 rounded-lg shadow-2xl overflow-hidden aspect-auto md:aspect-[16/9] rotate-x-6 transform origin-top hover:rotate-x-0 transition-transform duration-700 ease-out group">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-800 opacity-90"></div>
            {/* Mockup Header */}
            <div className="h-8 border-b border-white/5 flex items-center px-4 gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500/20"></div>
              <div className="w-2 h-2 rounded-full bg-amber-500/20"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-500/20"></div>
            </div>
            {/* Mockup Body (Wireframe) */}
            <div className="p-4 md:p-8 grid grid-cols-12 gap-3 md:gap-6 opacity-50 group-hover:opacity-80 transition-opacity">
              <div className="col-span-12 h-28 md:h-40 bg-white/5 rounded border border-white/5 mb-3 md:mb-4"></div>
              <div className="col-span-4 h-20 md:h-32 bg-white/5 rounded border border-white/5"></div>
              <div className="col-span-4 h-20 md:h-32 bg-white/5 rounded border border-white/5"></div>
              <div className="col-span-4 h-20 md:h-32 bg-white/5 rounded border border-white/5"></div>
            </div>
            {/* Reflection */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
          </div>
          {/* Glow underneath */}
          <div className="absolute -bottom-10 inset-x-0 h-20 bg-indigo-500/20 blur-[60px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};