import React from 'react';
import { ArrowDown, FileText, Send, Linkedin, Github, BookOpen, Mail, MapPin, ZoomIn } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { usePhotos } from '../context/PhotoContext';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { profile } = PORTFOLIO_DATA;
  const { photos, openLightbox } = usePhotos();

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-white/[0.08] overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Identity & Statement */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status indicator line */}
            <div className="inline-flex items-center gap-2 text-xs font-mono-code text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Based in Kenya (UTC+3)</span>
              <span className="text-slate-600">·</span>
              <span className="text-emerald-400">Available for Opportunities</span>
            </div>

            {/* Name & Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                {profile.name}
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-blue-400">
                {profile.title}
              </p>
            </div>

            {/* Core Editorial Pitch */}
            <blockquote className="border-l-2 border-blue-500/60 pl-4 py-1 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              "{profile.tagline}"
            </blockquote>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-all shadow-sm hover:shadow-blue-500/20"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700/80 rounded-md transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-slate-800/40 border border-slate-800 rounded-md transition-colors"
              >
                <Send className="w-4 h-4 text-slate-400" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Social & Contact Bar */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="font-mono-code text-slate-500 uppercase tracking-wider text-[11px]">Connect:</span>
              
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors py-1"
                aria-label="Paul Owuor on LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <span className="text-slate-700">/</span>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors py-1"
                aria-label="Paul Owuor on GitHub"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <span className="text-slate-700">/</span>

              <a
                href={profile.devto}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors py-1"
                aria-label="Paul Owuor on Dev.to"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Dev.to</span>
              </a>

              <span className="text-slate-700">/</span>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors py-1"
                aria-label="Send email to Paul Owuor"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{profile.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Professional Editorial Card with Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden relative backdrop-blur-sm shadow-2xl">
              
              {/* Photo Showcase Container */}
              <div 
                onClick={() => openLightbox('NY1A0074')}
                className="relative aspect-[4/4] sm:aspect-[4/3.8] w-full overflow-hidden bg-slate-950 group cursor-pointer"
                title="Click to view full-resolution photo"
              >
                <img
                  src={photos.NY1A0074}
                  alt="Paul Owuor - Software Engineer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />

                {/* Top Badge & Zoom trigger */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-blue-400 bg-blue-950/80 border border-blue-800/80 px-2 py-0.5 rounded backdrop-blur-md">
                    Zone01 Kisumu · Software Engineer
                  </span>

                  <div className="p-1.5 rounded-full bg-black/60 text-slate-300 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-white leading-tight">Paul Owuor</h2>
                      <div className="flex items-center gap-1.5 text-xs text-slate-300">
                        <MapPin className="w-3 h-3 text-blue-400" />
                        <span>Kisumu · Nairobi, Kenya</span>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono-code text-emerald-400 bg-emerald-950/70 border border-emerald-800/70 px-2 py-0.5 rounded">
                      Available for Roles
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Quick Engineering Focus Metrics */}
              <div className="p-5 space-y-3 bg-slate-900/90 border-t border-slate-800">
                <div className="text-[11px] font-mono-code text-slate-400 uppercase tracking-wider">
                  Core Track Record:
                </div>
                
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded bg-slate-950/50 border border-slate-800/80">
                    <span className="text-slate-300 font-medium">FlexiRides Microservices</span>
                    <span className="font-mono-code text-blue-400 font-semibold">13 Services</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-2 rounded bg-slate-950/50 border border-slate-800/80">
                    <span className="text-slate-300 font-medium">KopaBridge Energy API</span>
                    <span className="font-mono-code text-emerald-400 font-semibold">&lt;85ms Latency</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded bg-slate-950/50 border border-slate-800/80">
                    <span className="text-slate-300 font-medium">Cohere LLM Evaluation</span>
                    <span className="font-mono-code text-purple-400 font-semibold">AI Benchmark</span>
                  </div>
                </div>

                {/* Quick Tech Badges */}
                <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5 text-[11px] text-slate-300 font-mono-code">
                  <span className="bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">Python</span>
                  <span className="bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">Go</span>
                  <span className="bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">Java</span>
                  <span className="bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">TypeScript</span>
                  <span className="bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">Spring Boot</span>
                  <span className="bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">NestJS</span>
                  <span className="bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">Docker</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
