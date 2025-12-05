import React from 'react';
import { CheckCircle } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none"></div>
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
          Una inversión, no un gasto.
        </h2>
        <p className="text-xl text-slate-400 font-light mb-10">
          Una reforma media te factura 80.000€+. Nuestra landing page cuesta
          menos que el grifo de cocina de uno de tus proyectos.
        </p>

        <div className="glass p-1 rounded-2xl inline-block w-full max-w-md mx-auto">
          <div className="bg-slate-950/80 rounded-xl p-8 border border-white/5">
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-sm text-slate-400">Desde</span>
              <span className="text-4xl font-semibold text-white">2.500€</span>
            </div>
            <p className="text-xs text-slate-500 mb-8">+ IVA</p>

            <ul className="text-left space-y-3 mb-8 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-white" />
                Diseño 100% Personalizado
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-white" />
                Copywriting de Ventas incluido
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-white" />
                Optimización de Velocidad y SEO On-page
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-white" />
                Integración con tu CRM / Email
              </li>
            </ul>

            <a
              href="#contacto"
              className="block w-full py-3 bg-white text-slate-950 font-medium rounded hover:bg-indigo-50 transition-colors"
            >
              Solicitar Presupuesto
            </a>
            <p className="text-[10px] text-slate-500 mt-4">
              Plazas limitadas. Solo trabajamos con 3 empresas al mes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};