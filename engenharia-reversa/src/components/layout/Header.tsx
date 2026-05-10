import React from 'react';
import { cn } from '@/src/lib/utils';

interface HeaderProps {
  accentColor?: string;
}

export const Header: React.FC<HeaderProps> = ({ accentColor = '#000000' }) => {
  return (
    <header className="w-full bg-[#1a1a1a] border-b border-white/5 py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="relative flex items-center group cursor-pointer h-12 w-38 overflow-hidden select-none">
          {/* Background Giant QR - Swiss Typography Style */}
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[44px] font-black text-white leading-none tracking-tighter opacity-100">
            QR
          </span>
          
          {/* Foreground CODE STYLING - Aligned Right & Intersecting */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-end gap-0 z-20 mix-blend-difference">
            <h1 className="text-lg font-black tracking-tighter text-white uppercase leading-none">
              CODE
            </h1>
            <h1 className="text-lg font-black tracking-tighter text-white uppercase leading-none">
              STYLING
            </h1>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Documentation</a>
          <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">GitHub</a>
        </nav>
      </div>
    </header>
  );
};
