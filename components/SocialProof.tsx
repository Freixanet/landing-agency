import React from 'react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-10 border-b border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-medium text-slate-500 uppercase tracking-widest mb-8">
          Estándares elevados para empresas líderes
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale select-none">
          <span className="text-xl font-serif italic tracking-tight text-white">
            VOGUE LIVING
          </span>
          <span className="text-xl font-bold tracking-tighter text-white">
            ARCHITECTURAL
          </span>
          <span className="text-xl font-serif tracking-widest text-white">
            DEZEEN
          </span>
          <span className="text-xl font-medium tracking-tight text-white">
            HOUZZ PREMIUM
          </span>
          <span className="text-xl font-light tracking-widest uppercase text-white">
            Elite Structures
          </span>
        </div>
      </div>
    </section>
  );
};