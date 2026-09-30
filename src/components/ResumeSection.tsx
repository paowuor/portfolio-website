import React from 'react';
import { FileText, Download, Eye, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  return (
    <section className="py-20 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900/80 to-blue-950/40 border border-slate-800 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono-code text-blue-400 uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>Curriculum Vitae</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Want the full picture?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Download my latest resume for a complete breakdown of my software engineering experience, microservices architecture work on FlexiRides, PAYGo financial middleware on KopaBridge, Cohere AI evaluation background, and formal education.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-all shadow-md cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </button>

                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-950 hover:bg-slate-800 border border-slate-700 rounded-md transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span>View Resume Online →</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950/80 border border-slate-800/80 rounded-xl p-5 space-y-3 text-xs">
              <div className="font-mono-code text-[11px] text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-800">
                Resume Quick Specs
              </div>

              <div className="flex items-center justify-between text-slate-300">
                <span>Format:</span>
                <span className="font-mono-code text-white">Standard ATS 1-Page / 3-Page</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Verified Roles:</span>
                <span className="font-mono-code text-emerald-400">Zone01, Cohere, Invisible</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Target Opportunities:</span>
                <span className="font-mono-code text-blue-400">Software & AI Engineering</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Location Status:</span>
                <span className="font-mono-code text-slate-300">Kenya / Global Remote</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
