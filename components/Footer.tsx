import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="border-t border-white/10 bg-black pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <a
              href="#"
              className="text-white text-xl font-medium tracking-tight mb-4 block"
            >
              BLUEPRINT
            </a>
            <p className="text-slate-500 font-light text-sm leading-relaxed">
              Elevamos el estándar digital de las empresas de reformas. Tu obra
              maestra merece un marco digital a la altura.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 text-sm">
            <div>
              <h4 className="text-white font-medium mb-4">Servicios</h4>
              <ul className="space-y-2 text-slate-500">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Landing Pages
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Auditoría Web
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Estrategia SEO
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-500">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Términos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-slate-600">
          <p>© 2024 Blueprint Digital. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};