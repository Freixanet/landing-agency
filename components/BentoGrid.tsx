import React from 'react';
import { LayoutTemplate, Zap, Smartphone, TrendingUp, BarChart2 } from 'lucide-react';

export const BentoGrid: React.FC = () => {
  return (
    <section id="proceso" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Ingeniería de Conversión.
          </h2>
          <p className="text-slate-400 font-light text-lg max-w-2xl">
            No hacemos "sitios web". Construimos activos digitales diseñados para
            filtrar curiosos y captar inversores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="md:col-span-2 p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-white/10 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
              <LayoutTemplate strokeWidth={1.5} className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-medium text-white mb-3">
              Estética Minimalista de Lujo
            </h3>
            <p className="text-slate-400 font-light leading-relaxed">
              Entendemos que vender una reforma de 200.000€ requiere una
              presentación impecable. Eliminamos el ruido visual y nos centramos
              en la fotografía, la tipografía y el espacio negativo.
            </p>
          </div>

          {/* Card 2 */}
          <div className="md:col-span-1 p-8 rounded-2xl bg-gradient-to-b from-slate-900/50 to-slate-900/80 border border-white/5 hover:border-white/10 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
              <Zap strokeWidth={1.5} className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-medium text-white mb-3">
              Velocidad Instantánea
            </h3>
            <p className="text-slate-400 font-light leading-relaxed">
              Optimizada al milisegundo. Tus clientes de alto nivel no esperan.
            </p>
          </div>

          {/* Card 3 */}
          <div className="md:col-span-1 p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-white/10 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
              <Smartphone strokeWidth={1.5} className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-medium text-white mb-3">Mobile First</h3>
            <p className="text-slate-400 font-light leading-relaxed">
              El 80% de tus clientes verán tu obra desde un iPhone. Nos
              aseguramos de que sea perfecto.
            </p>
          </div>

          {/* Card 4 */}
          <div className="md:col-span-2 p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                <TrendingUp strokeWidth={1.5} className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">
                Copywriting Persuasivo
              </h3>
              <p className="text-slate-400 font-light leading-relaxed max-w-lg">
                No escribimos textos de relleno. Redactamos argumentos de venta
                que posicionan tu empresa como la única opción lógica para una
                reforma premium.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-10 translate-y-10">
              <BarChart2 strokeWidth={1} size={200} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};