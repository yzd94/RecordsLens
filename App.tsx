
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector((this as HTMLAnchorElement).getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-[#0051ff] selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Transition Segment */}
        <section className="py-20 flex justify-center items-center opacity-20">
          <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </section>

        <section id="vision" className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#0051ff] mb-8 animate-pulse">
              Le Regard Signature
            </h2>
            <p className="text-4xl md:text-6xl font-bold leading-tight luxury-font italic mb-12">
              Plus qu'une lentille, <br/>
              <span className="text-[#0051ff]">une œuvre d'art neuronale.</span>
            </p>
            <div className="w-16 h-px bg-white/10 mx-auto"></div>
          </div>
        </section>

        <ProductGallery />

        {/* Technical Specification Statement */}
        <section id="technology" className="relative py-60 overflow-hidden bg-black border-y border-white/5">
          <div className="absolute inset-0 bg-[#000a1a]">
             <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#00337c 1px, transparent 1px), linear-gradient(90deg, #00337c 1px, transparent 1px)', backgroundSize: '120px 120px' }}></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="max-w-3xl space-y-12">
              <h3 className="text-5xl md:text-8xl font-bold luxury-font leading-none">
                Filmez votre <br/>
                <span className="text-[#0051ff]">propre réalité.</span>
              </h3>
              <p className="text-xl text-white/50 font-light leading-relaxed">
                RecordsLens intègre un capteur photonique miniaturisé capable de capturer chaque nuance de votre existence. Votre regard devient votre média, transcendant les limites physiques de la captation traditionnelle.
              </p>
              <div className="flex items-center space-x-12">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold luxury-font">120 FPS</span>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold">Fluidité Native</span>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold luxury-font">8K RAW</span>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold">Définition Ultime</span>
                </div>
                <div className="w-px h-12 bg-white/10 hidden md:block"></div>
                <div className="flex flex-col hidden md:flex">
                  <span className="text-3xl font-bold luxury-font">TRANSLATE</span>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold">IA Multilingue</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Manifesto */}
        <section className="bg-white text-black py-48 px-6">
          <div className="max-w-5xl mx-auto text-center space-y-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.6em] text-black/30 italic">Manifeste RecordsLens</h2>
            <p className="text-4xl md:text-7xl font-light leading-[1.1] luxury-font tracking-tight">
              La fusion ultime entre <span className="italic text-[#00337c]">l'élégance joaillière</span> et la puissance de l'IA.
            </p>
            <div className="text-sm font-bold uppercase tracking-[0.5em] pt-12 border-t border-black/10 inline-block">
              Camera, Action, Vision Ouloulouuu
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
