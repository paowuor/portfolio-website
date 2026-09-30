import React from 'react';
import { ArrowUp, Github, Linkedin, BookOpen, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#07080C] py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="space-y-1 text-center md:text-left">
            <span className="font-bold text-white text-sm">
              {profile.name}
            </span>
            <p className="text-slate-500">
              Software Engineer · AI & Backend Developer · Kisumu / Nairobi, Kenya
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6 text-slate-400">
            <a href="#projects" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#internal" className="hover:text-white transition-colors">Internal Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#notes" className="hover:text-white transition-colors">Engineering Notes</a>
            <a href="#beyond" className="hover:text-white transition-colors">Beyond Code</a>
          </div>

          {/* Social icons & back to top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.devto}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
                aria-label="Dev.to articles"
              >
                <BookOpen className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Send email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <div>
            © {new Date().getFullYear()} Paul Owuor. Built with TypeScript, React & Tailwind CSS.
          </div>
          <div className="font-mono-code">
            EAT (UTC+3) · Built for real-world impact
          </div>
        </div>
      </div>
    </footer>
  );
};
