import React from 'react';
import { Header } from './Header';
import { Hero } from './Hero';

interface MainLayoutProps {
  children: React.ReactNode;
  accentColor?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, accentColor }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-black selection:text-white">
      <Header accentColor={accentColor} />
      <Hero accentColor={accentColor} />
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
        {children}
      </main>
      <footer className="w-full py-8 px-6 md:px-12 border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 Fabricio Duarte. Built with React & Tailwind.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-400 hover:text-black transition-colors uppercase tracking-widest font-semibold">Privacy</a>
            <a href="#" className="text-xs text-gray-400 hover:text-black transition-colors uppercase tracking-widest font-semibold">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
