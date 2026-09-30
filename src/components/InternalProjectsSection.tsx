import React from 'react';
import { Terminal, Github, Check, ArrowRight, ZoomIn } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { usePhotos } from '../context/PhotoContext';

interface InternalProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const InternalProjectsSection: React.FC<InternalProjectsSectionProps> = ({ onSelectProject }) => {
  const { internalProjects } = PORTFOLIO_DATA;
  const { photos, openLightbox } = usePhotos();

  return (
    <section id="internal" className="py-20 border-b border-white/[0.08] relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono-code text-emerald-400 uppercase tracking-wider mb-2">
            <span>Systems & Peer Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Zone01 & Internal Projects
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            Collaborative, low-level, and framework-less engineering projects built at Zone01 Kisumu emphasizing pure Go primitives, TCP concurrency, and systems design.
          </p>
        </div>

        {/* Structured Grid: Problem -> Contribution -> Tech -> Outcome */}
        <div className="space-y-6">
          {internalProjects.map((proj, idx) => (
            <div
              key={proj.id}
              className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors"
            >
              {/* Header line */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80 mb-5">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono-code">
                    <span className="text-emerald-400 font-bold">PROJECT {idx + 1}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-300">{proj.role}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {proj.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:text-white hover:bg-slate-700 rounded transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                  {proj.interactiveType && (
                    <button
                      onClick={() => onSelectProject(proj)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded transition-colors cursor-pointer"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Interactive View</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Problem → Contribution → Technologies → Outcome Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
                
                {/* 1. Problem */}
                <div className="p-3.5 rounded bg-slate-950/60 border border-slate-800/80">
                  <div className="font-mono-code text-[11px] text-amber-400 uppercase tracking-wider mb-1.5">
                    Problem
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {proj.problem}
                  </p>
                </div>

                {/* 2. My Contribution */}
                <div className="p-3.5 rounded bg-slate-950/60 border border-slate-800/80">
                  <div className="font-mono-code text-[11px] text-blue-400 uppercase tracking-wider mb-1.5">
                    My Contribution
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {proj.contribution}
                  </p>
                </div>

                {/* 3. Technologies */}
                <div className="p-3.5 rounded bg-slate-950/60 border border-slate-800/80">
                  <div className="font-mono-code text-[11px] text-slate-400 uppercase tracking-wider mb-1.5">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {proj.technologies.map((t) => (
                      <span key={t} className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700/60 font-mono-code text-[11px] text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4. Outcome */}
                <div className="p-3.5 rounded bg-slate-950/60 border border-slate-800/80">
                  <div className="font-mono-code text-[11px] text-emerald-400 uppercase tracking-wider mb-1.5">
                    Outcome
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {proj.outcome}
                  </p>
                </div>

              </div>

              {/* Photo spotlight for Forum Project */}
              {proj.id === 'forum' && (
                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-center gap-4 p-3.5">
                    <div 
                      onClick={() => openLightbox('NY1A9768')}
                      className="relative w-full sm:w-52 aspect-[16/10] shrink-0 rounded-lg overflow-hidden group cursor-pointer"
                      title="Click to view full photo"
                    >
                      <img
                        src={photos.NY1A9768}
                        alt="Paul Owuor building Forum on ThinkPad T480"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="text-xs space-y-1">
                      <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400">
                        <span className="font-semibold">Live Terminal & Browser</span>
                        <span className="text-slate-600">·</span>
                        <span className="text-slate-400">ThinkPad T480 Workstation</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        Captured during testing: Paul compiling the Go HTTP backend while validating session authentication, SQLite queries, and tag filtering in the Forum browser interface.
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
