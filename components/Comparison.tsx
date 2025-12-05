import React from 'react';
import { X, Check } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Traditional Way */}
          <div>
            <h3 className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-6">
              Web Tradicional
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-500">
                <X className="w-4.5 h-4.5 text-red-900 mt-1 shrink-0" />
                <span>Diseño genérico basado en plantillas baratas.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-500">
                <X className="w-4.5 h-4.5 text-red-900 mt-1 shrink-0" />
                <span>Textos vagos que no filtran al cliente barato.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-500">
                <X className="w-4.5 h-4.5 text-red-900 mt-1 shrink-0" />
                <span>Lenta, confusa y sin llamada a la acción clara.</span>
              </li>
            </ul>
          </div>

          {/* Blueprint Way */}
          <div>
            <h3 className="text-sm font-medium text-white uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              Enfoque Blueprint
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300">
                <Check className="w-4.5 h-4.5 text-indigo-500 mt-1 shrink-0" />
                <span>
                  Diseño bespoke alineado con la identidad de marca de lujo.
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Check className="w-4.5 h-4.5 text-indigo-500 mt-1 shrink-0" />
                <span>
                  Estructura psicológica para generar confianza inmediata.
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Check className="w-4.5 h-4.5 text-indigo-500 mt-1 shrink-0" />
                <span>
                  Optimización técnica para posicionamiento SEO local.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};