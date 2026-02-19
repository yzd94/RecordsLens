
import React from 'react';

const ProductGallery: React.FC = () => {
  return (
    <section id="collections" className="py-40 px-6 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/5 pb-12">
          <div className="max-w-3xl">
            <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#0051ff] mb-6">Exposé Technologique</h2>
            <h3 className="text-5xl md:text-7xl font-bold luxury-font italic leading-tight">L'Ingénierie du Futur</h3>
          </div>
          <div className="hidden md:block">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 italic">Prototype V.2.5</span>
          </div>
        </div>

        {/* Featured Collection Image (input_file_0.png) */}
        <div className="mb-48 group">
          <div className="relative overflow-hidden bg-black/40 border border-white/5 mb-10 shadow-2xl">
            <img 
              src="input_file_0.png" 
              alt="Collection RecordsLens Iris Row" 
              className="w-full h-auto object-cover transition-transform duration-[3000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-10 left-10">
              <p className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#00a2ff] mb-2">Série Signature</p>
              <h4 className="text-4xl font-bold luxury-font italic text-white">Le Spectre Chromatique</h4>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-white/60 text-lg font-light italic leading-relaxed">
              Une démonstration de notre maîtrise des pigments photoniques. Chaque nuance représentée ici n'est pas seulement esthétique, elle définit la longueur d'onde de capture du capteur intégré.
            </p>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-[#0051ff] rounded-full"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Calibrage colorimétrique automatique</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-[#0051ff] rounded-full"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Filtre polarisant adaptatif par impulsion neuronale</span>
              </div>
            </div>
          </div>
        </div>

        {/* Special Edition (input_file_1.png) */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-20">
          <div className="relative group">
            <div className="absolute inset-0 border border-[#00337c]/20 z-10 pointer-events-none"></div>
            <div className="aspect-[4/5] bg-[#0a0a0a] overflow-hidden shadow-2xl">
              <img 
                src="input_file_1.png" 
                alt="RecordsLens Duo Azure" 
                className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#00337c]/20 blur-3xl rounded-full z-0"></div>
          </div>
          <div className="space-y-10">
            <div className="w-12 h-px bg-[#0051ff]"></div>
            <h4 className="text-5xl font-bold luxury-font italic leading-tight">L'Édition <br/><span className="text-[#0051ff]">Neural Azure Duo</span></h4>
            <p className="text-white/50 text-xl font-light leading-relaxed">
              Ce prototype explore la vision binoculaire augmentée. En synchronisant deux flux 8K en temps réel, RecordsLens permet une reconstruction spatiale de l'environnement, ouvrant la voie à une interaction directe avec le métavers par simple regard.
            </p>
            <ul className="space-y-6 text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">
              <li className="flex items-center space-x-6 border-l border-[#0051ff]/30 pl-6 py-2">
                <span>Captation Stéréoscopique 120 FPS</span>
              </li>
              <li className="flex items-center space-x-6 border-l border-[#0051ff]/30 pl-6 py-2">
                <span>Micro-processeur Neural 4nm</span>
              </li>
              <li className="flex items-center space-x-6 border-l border-[#0051ff]/30 pl-6 py-2">
                <span>Interface Haptique Oculaire</span>
              </li>
            </ul>
            <div className="pt-10">
              <span className="px-10 py-4 border border-white/10 text-[10px] font-bold uppercase tracking-[0.4em] text-white/60 italic">
                Concept non commercialisé
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
