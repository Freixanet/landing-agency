import React from 'react';

export const Steps: React.FC = () => {
  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-medium tracking-tight text-white mb-16 text-center">
        De los planos a la realidad
      </h2>

      <div className="relative pl-8 border-l border-white/10 space-y-16">
        {/* Step 1 */}
        <div className="relative">
          <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-950 border border-white/20 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </span>
          <h3 className="text-xl font-medium text-white mb-2">
            1. Auditoría de Marca
          </h3>
          <p className="text-slate-400 font-light">
            Analizamos tu portfolio actual y tu cliente ideal. Definimos el tono
            de voz: ¿Eres minimalista nórdico o clásico opulento?
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative">
          <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-950 border border-white/20"></span>
          <h3 className="text-xl font-medium text-white mb-2">
            2. Diseño & Desarrollo
          </h3>
          <p className="text-slate-400 font-light">
            Creamos la estructura en Figma y desarrollamos en código limpio (sin
            constructores pesados). Priorizamos la carga de imágenes en alta
            resolución.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative">
          <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-950 border border-white/20"></span>
          <h3 className="text-xl font-medium text-white mb-2">
            3. Lanzamiento & Captación
          </h3>
          <p className="text-slate-400 font-light">
            Publicamos tu landing page, configuramos analíticas y la dejamos
            lista para recibir tráfico cualificado de Google o Meta Ads.
          </p>
        </div>
      </div>
    </section>
  );
};