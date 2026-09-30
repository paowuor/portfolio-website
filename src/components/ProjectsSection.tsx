import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Terminal, Activity, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'flagship' | 'backend' | 'commercial'>('all');

  const { flagshipProjects } = PORTFOLIO_DATA;

  const filteredProjects = flagshipProjects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'flagship') return p.category === 'Flagship';
    if (filter === 'backend') return p.technologies.some(t => ['NestJS', 'Spring Boot', 'Django', 'PostgreSQL'].includes(t));
    if (filter === 'commercial') return p.category === 'Commercial';
    return true;
  });

  return (
    <section id="projects" className="py-20 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono-code text-blue-400 uppercase tracking-wider mb-2">
              Featured Engineering Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Selected Flagship Projects
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Production systems solving complex domain challenges in finance, transit, and business operations.
            </p>
          </div>

          {/* Segmented Filter Control */}
          <div className="inline-flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Flagship
            </button>
            <button
              onClick={() => setFilter('backend')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'backend'
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Backend & Microservices
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'commercial'
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Client Solutions
            </button>
          </div>
        </div>

        {/* Flagship Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const indexNumber = `0${index + 1}`;

            return (
              <div
                key={project.id}
                className="bg-slate-900/40 border border-slate-800/90 hover:border-slate-700/80 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:bg-slate-900/60"
              >
                <div>
                  {/* Top metadata line (Unboxed text with separators) */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-code text-blue-400 font-bold">{indexNumber}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="font-medium text-slate-300">{project.category}</span>
                      {project.role && (
                        <>
                          <span aria-hidden="true" className="text-slate-600">·</span>
                          <span className="text-slate-400">{project.role}</span>
                        </>
                      )}
                    </div>

                    {project.metrics && project.metrics[0] && (
                      <div className="text-[11px] font-mono-code text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                        {project.metrics[0].label}: {project.metrics[0].value}
                      </div>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-blue-400">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bulleted */}
                  <div className="mt-5 space-y-1.5 border-t border-slate-800/80 pt-4">
                    <div className="text-[11px] font-mono-code uppercase tracking-wider text-slate-400 mb-2">
                      Key Highlights:
                    </div>
                    {project.highlights.slice(0, 4).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-blue-500 font-bold mt-0.5">•</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies (Clean unboxed tags) */}
                  <div className="mt-6 flex flex-wrap gap-1.5 text-[11px] font-mono-code text-slate-400">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-slate-950 border border-slate-800 rounded text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors cursor-pointer"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Explore Case Study & Demo</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-white bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-md transition-colors"
                        aria-label={`View ${project.title} repository`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-white bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-md transition-colors"
                        aria-label={`Visit ${project.title} live demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
