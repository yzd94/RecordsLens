
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001a3d]/40 via-transparent to-[#030303] z-10"></div>
        
        {/* Animated Navy Orbs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#001a3d]/20 rounded-full blur-[150px] animate-subtle"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[#0051ff]/10 rounded-full blur-[120px] animate-subtle delay-1000"></div>
        
        {/* Minimalist Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl">
        <div className="mb-16 inline-block">
          <div className="w-24 h-24 rounded-full border border-white/5 flex items-center justify-center p-3 bg-[#030303] shadow-2xl relative">
             <div className="absolute inset-0 border border-[#0051ff]/20 rounded-full animate-ping opacity-20"></div>
             <div className="w-full h-full rounded-full border border-[#0051ff]/40 flex items-center justify-center">
                <div className="w-3 h-3 bg-[#0051ff] rounded-full shadow-[0_0_20px_#0051ff]"></div>
             </div>
          </div>
        </div>

        <span className="block text-[11px] font-bold tracking-[0.7em] uppercase text-white/40 mb-10">
          La Révolution Optique
        </span>
        <h1 className="text-7xl md:text-[10rem] font-bold mb-10 leading-[0.85] tracking-tighter">
          Records<span className="text-[#0051ff]">Lens</span>
        </h1>
        <p className="text-xl md:text-2xl font-light text-white/60 italic mb-20 luxury-font max-w-2xl mx-auto tracking-wide">
          "Camera, Action, Vision <span className="text-white/90">Ouloulouuu</span>"
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <a href="#collections" className="group relative px-14 py-5 bg-[#00337c] text-white font-bold tracking-[0.4em] uppercase text-[10px] transition-all duration-500 hover:bg-[#0051ff] hover:shadow-[0_0_40px_rgba(0,81,255,0.4)]">
            Accéder à la vue
          </a>
          <button className="px-14 py-5 border border-white/10 text-white font-bold tracking-[0.4em] uppercase text-[10px] hover:bg-white/5 transition-all backdrop-blur-sm">
            La Manufacture
          </button>
        </div>
      </div>

      {/* Footer indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6">
        <div className="w-px h-16 bg-gradient-to-b from-[#00337c] via-white/10 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
