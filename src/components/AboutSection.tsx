import React from 'react';
import { GraduationCap, Code2, Car, Globe2, Hammer, Search, Users, ZoomIn } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { usePhotos } from '../context/PhotoContext';

export const AboutSection: React.FC = () => {
  const { about } = PORTFOLIO_DATA;
  const { photos, openLightbox } = usePhotos();

  const pillarIcons: Record<string, React.ReactNode> = {
    '01': <Hammer className="w-5 h-5 text-blue-400" />,
    '02': <Search className="w-5 h-5 text-emerald-400" />,
    '03': <Users className="w-5 h-5 text-purple-400" />,
  };

  const currentlyIcons: Record<string, React.ReactNode> = {
    'GraduationCap': <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />,
    'Code': <Code2 className="w-4 h-4 text-emerald-400 shrink-0" />,
    'Car': <Car className="w-4 h-4 text-amber-400 shrink-0" />,
    'Globe': <Globe2 className="w-4 h-4 text-indigo-400 shrink-0" />,
  };

  return (
    <section id="about" className="py-20 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono-code text-blue-400 uppercase tracking-wider mb-2">
            <span>Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Build · Solve · Lead
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
            A software engineer turning fragmented industry problems into reliable, production systems.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {about.pillars.map((pillar) => (
            <div
              key={pillar.step}
              className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-code text-xs text-slate-500 font-semibold">
                  STEP {pillar.step}
                </span>
                <div className="p-2 rounded-md bg-slate-950 border border-slate-800">
                  {pillarIcons[pillar.step]}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Story Prose & Currently Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Narrative Bio & Photo */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              {about.bioParagraphs.map((para, idx) => (
                <p key={idx}>
                  {para}
                </p>
              ))}
            </div>

            {/* Lab Documentary Photo Card */}
            <div 
              onClick={() => openLightbox('NY1A9777')}
              className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-lg group relative cursor-pointer hover:border-slate-700 transition-colors"
              title="Click to view full photo"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                <img
                  src={photos.NY1A9777}
                  alt="Paul Owuor in Zone01 Kisumu Tech Lab"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] font-mono text-purple-400 bg-purple-950/90 px-2 py-0.5 rounded border border-purple-800 inline-block mb-1">
                    Zone01 Kisumu · Engineering Hub
                  </span>
                  <p className="text-xs text-slate-200">
                    Collaborative systems programming and peer-to-peer code review in Kisumu, Kenya.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Currently Card */}
          <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-xl p-6 sticky top-20">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono-code mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
              <span>Currently</span>
              <span className="text-[10px] text-emerald-400 lowercase font-mono-code">active status</span>
            </h3>

            <div className="space-y-4">
              {about.currently.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 p-1.5 rounded bg-slate-950 border border-slate-800">
                    {currentlyIcons[item.icon]}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      {item.label}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {item.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <p className="text-xs text-slate-400 italic">
                "Focused on building systems where backend reliability, typed contracts, and real users intersect."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
