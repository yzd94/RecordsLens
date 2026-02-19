
import React from 'react';

const Logo: React.FC<{ className?: string; color?: string }> = ({ className = "h-12", color = "white" }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Blue Arc */}
      <svg viewBox="0 0 100 40" className="absolute -top-4 w-full h-8 overflow-visible">
        <path 
          d="M 10,35 Q 50,0 90,35" 
          fill="none" 
          stroke="#00337c" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
      </svg>
      
      <div className="flex flex-col items-center leading-none">
        <div className="flex items-center space-x-1">
          <span className="text-2xl font-bold tracking-tight luxury-font">Records</span>
          <div className="w-6 h-6 border-2 border-white rounded-full relative flex items-center justify-center">
             <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
             {/* Aperture blades simulation */}
             <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <div className="w-px h-full bg-white rotate-0"></div>
                <div className="w-px h-full bg-white rotate-45"></div>
                <div className="w-px h-full bg-white rotate-90"></div>
                <div className="w-px h-full bg-white rotate-135"></div>
             </div>
          </div>
        </div>
        <span className="text-2xl font-bold tracking-[0.1em] luxury-font -mt-1">Lens</span>
      </div>
    </div>
  );
};

export default Logo;
