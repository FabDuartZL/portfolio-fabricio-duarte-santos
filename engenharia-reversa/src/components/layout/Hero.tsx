import React from 'react';

interface HeroProps {
  accentColor?: string;
}

export const Hero: React.FC<HeroProps> = ({ accentColor = '#4267b2' }) => {
  return (
    <section 
      className="w-full py-16 px-6 md:px-12 border-b border-gray-200 transition-all duration-700 ease-in-out"
      style={{
        background: `linear-gradient(135deg, #000000 0%, ${accentColor} 50%, #ffffff 100%)`
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] text-white drop-shadow-lg uppercase">
            QR CODE STYLING
          </h2>
          <p className="text-xl md:text-2xl font-light tracking-tight text-white/80 max-w-2xl pt-2">
            An open source JS library for generating styled codes
          </p>
        </div>
      </div>
    </section>
  );
};
