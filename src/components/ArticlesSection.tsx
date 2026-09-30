import React, { useState } from 'react';
import { BookOpen, ArrowRight, X, Clock, Calendar, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA, Article } from '../data/portfolioData';

export const ArticlesSection: React.FC = () => {
  const { articles, profile } = PORTFOLIO_DATA;
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Backend', 'Architecture', 'AI', 'Go'];

  const filteredArticles = articles.filter(art => {
    if (activeCategory === 'All') return true;
    return art.category === activeCategory;
  });

  return (
    <section id="notes" className="py-20 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-blue-400 uppercase tracking-wider mb-2">
              <span>Writing & Knowledge Sharing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Engineering Notes
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              "Things I'm learning, building, breaking, and figuring out along the way."
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="inline-flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all hover:bg-slate-900/60 group"
            >
              <div>
                {/* Metadata: Unboxed text with separators */}
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3 font-mono-code">
                  <span className="text-blue-400 font-semibold">{article.category}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{article.readTime}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{article.publishedDate}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {article.summary}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] font-mono-code text-slate-400">
                  {article.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <a
                  href={profile.devto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-slate-200 font-mono-code inline-flex items-center gap-1"
                >
                  <span>Dev.to</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Reader Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
            <div className="relative w-full max-w-2xl bg-[#0E1117] border border-slate-700 rounded-xl shadow-2xl overflow-hidden my-8">
              
              {/* Reader Header */}
              <div className="p-6 border-b border-slate-800 bg-slate-900/60 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono-code text-blue-400 mb-1">
                    <span>{selectedArticle.category}</span>
                    <span>·</span>
                    <span>{selectedArticle.readTime}</span>
                    <span>·</span>
                    <span>{selectedArticle.publishedDate}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedArticle.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Reader Body */}
              <div className="p-6 space-y-4 text-slate-300 text-sm leading-relaxed max-h-[65vh] overflow-y-auto font-normal">
                {selectedArticle.content.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Reader Footer */}
              <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between">
                <a
                  href={profile.devto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:underline"
                >
                  <span>Discuss on Dev.to</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors"
                >
                  Done Reading
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
