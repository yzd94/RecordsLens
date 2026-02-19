
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl py-3 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-12">
          <a href="#" className="transform transition-transform hover:scale-105">
            <Logo className="h-10" />
          </a>
          <div className="hidden md:flex space-x-10 text-[10px] font-bold tracking-[0.4em] uppercase text-white/50">
            <a href="#collections" className="hover:text-white transition-colors">Exposé</a>
            <a href="#technology" className="hover:text-white transition-colors">Technologie</a>
            <a href="#vision" className="hover:text-white transition-colors">Manifeste</a>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-[10px] font-bold tracking-[0.3em] uppercase border border-[#0051ff]/40 px-8 py-2.5 hover:bg-[#0051ff] hover:text-white transition-all duration-300 bg-transparent text-[#0051ff]">
            L'Expérience
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
