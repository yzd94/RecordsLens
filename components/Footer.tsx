
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] pt-40 pb-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-20 mb-32">
          <div className="lg:col-span-2">
            <Logo className="h-12 items-start mb-10" />
            <p className="text-white/30 text-base font-light leading-relaxed mb-12 italic max-w-sm">
              "La vision n'est plus un simple sens, c'est une performance technologique de chaque instant."
            </p>
            <div className="flex space-x-10">
              <a href="#" className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 hover:text-[#0051ff] transition-colors">Instagram</a>
              <a href="#" className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 hover:text-[#0051ff] transition-colors">L'Atelier</a>
            </div>
          </div>
          
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#0051ff] mb-10">RecordsLens</h5>
            <ul className="space-y-5 text-[10px] font-bold text-white/40 uppercase tracking-[0.4em]">
              <li><a href="#" className="hover:text-white transition-colors">Présentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IA & Vision</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prototypage</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Archives</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#0051ff] mb-10">Savoir-Faire</h5>
            <ul className="space-y-5 text-[10px] font-bold text-white/40 uppercase tracking-[0.4em]">
              <li><a href="#" className="hover:text-white transition-colors">Technologie</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recherche</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Optronique</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#0051ff] mb-10">Cercle Privé</h5>
            <p className="text-[10px] text-white/30 mb-8 font-light italic uppercase tracking-[0.3em] leading-loose">Recevez les dernières notes de recherche.</p>
            <div className="flex border-b border-white/10 pb-3 group">
              <input 
                type="email" 
                placeholder="Votre adresse mail" 
                className="bg-transparent text-[10px] w-full focus:outline-none placeholder-white/20 uppercase tracking-[0.2em]"
              />
              <button className="text-[10px] font-bold uppercase tracking-[0.5em] group-hover:text-[#0051ff] transition-colors">→</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] font-bold text-white/10 uppercase tracking-[0.6em] pt-12 border-t border-white/5">
          <p>© 2024 RecordsLens Optronics. Concept & Innovation.</p>
          <div className="flex space-x-12 mt-6 md:mt-0">
            <a href="#" className="hover:text-white">Confidentialité</a>
            <a href="#" className="hover:text-white">Éthique</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
