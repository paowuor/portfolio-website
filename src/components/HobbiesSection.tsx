import React from 'react';
import { Headphones, Navigation, Globe, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const HobbiesSection: React.FC = () => {
  const { hobbies } = PORTFOLIO_DATA;

  const icons: Record<string, React.ReactNode> = {
    'Headphones': <Headphones className="w-5 h-5 text-blue-400" />,
    'Compass': <Navigation className="w-5 h-5 text-amber-400" />,
    'Zap': <Globe className="w-5 h-5 text-emerald-400" />,
    'BookOpen': <BookOpen className="w-5 h-5 text-purple-400" />,
  };

  return (
    <section id="beyond" className="py-20 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono-code text-blue-400 uppercase tracking-wider mb-2">
            <span>Interests & Context</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Beyond Code
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
            The domains, cultures, and real-world fascinations that inform my engineering work.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 w-fit mb-4">
                  {icons[item.icon]}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] font-mono-code text-slate-500">
                {idx === 0 && 'Inspiration → DJNextDoor'}
                {idx === 1 && 'Inspiration → FlexiRides'}
                {idx === 2 && 'Inspiration → KopaBridge'}
                {idx === 3 && 'Lifelong Learning'}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
