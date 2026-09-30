import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Tag, ZoomIn } from 'lucide-react';
import { usePhotos, PhotoData } from '../context/PhotoContext';

export const PhotoLightboxModal: React.FC = () => {
  const { activeLightboxPhoto, closeLightbox, photoList, openLightbox } = usePhotos();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeLightboxPhoto) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxPhoto]);

  if (!activeLightboxPhoto) return null;

  const currentIndex = photoList.findIndex((p) => p.id === activeLightboxPhoto.id);

  const navigate = (direction: number) => {
    const nextIndex = (currentIndex + direction + photoList.length) % photoList.length;
    openLightbox(photoList[nextIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative max-w-5xl w-full bg-[#0B0D14] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800/80 bg-slate-900/70">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-blue-400 bg-blue-950/80 border border-blue-800/80 px-2.5 py-0.5 rounded-full font-medium">
              {activeLightboxPhoto.tag}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Photo {currentIndex + 1} of {photoList.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate(-1)}
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Previous photo (Left arrow)"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate(1)}
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Next photo (Right arrow)"
              aria-label="Next photo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="w-px h-4 bg-slate-800 mx-1" />
            <button
              onClick={closeLightbox}
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-rose-950 hover:text-rose-300 text-slate-400 hover:border hover:border-rose-800/60 transition-colors"
              title="Close (Escape)"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Image Display */}
        <div className="relative flex-1 min-h-[300px] max-h-[64vh] bg-black/80 flex items-center justify-center p-2 sm:p-4 overflow-hidden select-none">
          <img
            src={activeLightboxPhoto.src}
            alt={activeLightboxPhoto.title}
            className="max-h-[60vh] max-w-full w-auto object-contain rounded-lg shadow-lg"
          />

          {/* Large Floating Prev/Next Controls on desktop hover */}
          <button
            onClick={() => navigate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/10 backdrop-blur-sm transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => navigate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/10 backdrop-blur-sm transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Details Footer */}
        <div className="p-4 sm:p-5 bg-slate-900/60 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1 max-w-2xl">
            <h3 className="text-base font-bold text-white tracking-tight">
              {activeLightboxPhoto.title}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {activeLightboxPhoto.description}
            </p>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end justify-between shrink-0 gap-1.5 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60">
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{activeLightboxPhoto.location}</span>
            </div>
            <span className="text-[11px] text-slate-500 font-mono">
              High-Resolution Capture
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
