import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const { experience, education } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono-code text-blue-400 uppercase tracking-wider mb-2">
            <span>Career & Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Experience
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            A career spanning hands-on systems engineering, microservices leadership, LLM evaluation, and enterprise client operations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-slate-800 before:-translate-x-1/2">
          {experience.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={item.id}
                className="relative flex flex-col md:flex-row items-start md:items-center justify-between"
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#090A0F] z-10 shadow-sm" />

                {/* Left Card or Spacer */}
                <div className={`w-full md:w-5/12 pl-10 md:pl-0 ${isEven ? 'md:pr-8' : 'md:order-2 md:pl-8'}`}>
                  <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors">
                    
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-mono-code text-xs text-blue-400 font-bold">
                        {item.company}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono-code">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white">
                      {item.role}
                    </h3>
                    
                    <div className="flex items-center gap-1 text-xs text-slate-400 mt-0.5 mb-4">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{item.location}</span>
                      <span className="text-slate-600">·</span>
                      <span className="text-slate-400">{item.type}</span>
                    </div>

                    <ul className="space-y-2 text-xs text-slate-300">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-0.5">•</span>
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill tags */}
                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5 font-mono-code text-[11px] text-slate-400">
                      {item.skills.map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                          {s}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Counterbalance Spacer for Desktop */}
                <div className={`hidden md:block w-5/12 ${isEven ? 'md:order-2' : ''}`} />
              </div>
            );
          })}
        </div>

        {/* Education Section */}
        <div className="mt-20 pt-12 border-t border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono-code text-purple-400 uppercase tracking-wider mb-2">
            <span>Academic Foundations</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-6">
            Education & Apprenticeship
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded bg-slate-950 border border-slate-800 text-purple-400">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{edu.institution}</h4>
                      <p className="text-xs text-blue-400 font-medium">{edu.program}</p>
                    </div>
                  </div>
                  <span className="font-mono-code text-xs text-slate-400 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  {edu.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
