import React from 'react';
import { Camera, ZoomIn, MapPin, Maximize2 } from 'lucide-react';
import { usePhotos, PhotoData } from '../context/PhotoContext';

export const PhotoShowcase: React.FC = () => {
  const { photoList, openLightbox } = usePhotos();

  const portrait = photoList[0]; // NY1A0074
  const terminal = photoList[1]; // NY1A9768
  const lab = photoList[2];      // NY1A9777

  return (
    <section id="gallery" className="py-20 border-b border-white/[0.08] relative bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
              <Camera className="w-4 h-4" />
              <span>Documentary Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              In The Field · Engineering & Apprenticeship
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Authentic documentary captures of Paul Owuor in Kisumu, Kenya: hands-on software development, peer problem solving, and low-level systems programming.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 rounded-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              3 High-Resolution Photos
            </span>
            <button
              onClick={() => openLightbox(portrait)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Open Lightbox</span>
            </button>
          </div>
        </div>

        {/* 3-Photo Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Portrait Card (5 cols) */}
          <div 
            onClick={() => openLightbox(portrait)}
            className="md:col-span-5 group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 hover:border-blue-500/50 transition-all duration-300 cursor-pointer shadow-xl flex flex-col justify-between"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-950">
              <img
                src={portrait.src}
                alt={portrait.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-slate-950/20 to-transparent opacity-90" />
              
              <div className="absolute top-3 right-3 p-2 rounded-full bg-black/70 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="text-[11px] font-mono text-blue-400 bg-blue-950/90 px-2.5 py-0.5 rounded-full border border-blue-800 inline-block font-medium">
                  {portrait.tag}
                </span>
                <h3 className="text-xl font-bold text-white leading-tight">
                  {portrait.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 pt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{portrait.location}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-900/90 text-xs text-slate-400 border-t border-slate-800/80 leading-relaxed">
              {portrait.description}
            </div>
          </div>

          {/* Right Column with 2 Landscape Cards (7 cols) */}
          <div className="md:col-span-7 flex flex-col gap-6">
            
            {/* Terminal Coding Photo (Forum on ThinkPad T480) */}
            <div 
              onClick={() => openLightbox(terminal)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer shadow-xl"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                <img
                  src={terminal.src}
                  alt={terminal.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-slate-950/30 to-transparent opacity-90" />

                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/70 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/90 px-2.5 py-0.5 rounded-full border border-emerald-800 inline-block font-medium">
                      {terminal.tag}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                      ThinkPad T480 · Go Stdlib
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {terminal.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {terminal.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Lab Collaboration Photo */}
            <div 
              onClick={() => openLightbox(lab)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 hover:border-purple-500/50 transition-all duration-300 cursor-pointer shadow-xl"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                <img
                  src={lab.src}
                  alt={lab.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-slate-950/30 to-transparent opacity-90" />

                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/70 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-purple-400 bg-purple-950/90 px-2.5 py-0.5 rounded-full border border-purple-800 inline-block font-medium">
                      {lab.tag}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                      Peer Review & Lab Sessions
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {lab.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {lab.description}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
