import React, { useState } from 'react';
import { Menu, X, FileText, ArrowUpRight, Camera } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Internal Projects', href: '#internal' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Notes', href: '#notes' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#090A0F]/90 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text wordmark */}
        <a 
          href="#" 
          className="text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-colors shrink-0"
        >
          {PORTFOLIO_DATA.profile.name}
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.slice(0, 7).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors relative py-1 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-blue-500 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="hover:text-white transition-colors relative py-1 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-blue-500 whitespace-nowrap"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary action button */}
        <div className="flex items-center gap-2.5">
          <a
            href="#gallery"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700/80 rounded-md transition-colors whitespace-nowrap"
            title="View photo documentary gallery"
          >
            <Camera className="w-3.5 h-3.5 text-blue-400" />
            <span>Photos</span>
          </a>

          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors whitespace-nowrap cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            Resume
          </button>
          
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors whitespace-nowrap"
          >
            Let's Talk
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/[0.08] bg-[#090A0F] px-4 pt-2 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-800 rounded-md"
            >
              <Camera className="w-4 h-4 text-blue-400" />
              View Photo Gallery
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-800 rounded-md cursor-pointer"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              View & Download Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
