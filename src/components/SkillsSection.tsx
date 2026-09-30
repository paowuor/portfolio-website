import React from 'react';
import { Code, Server, Layout, Database, Cloud, Cpu, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  const categories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-4 h-4 text-blue-400" />,
      items: skills.languages,
      description: 'Typed systems, object-oriented backends, scripts, and high-performance concurrency.'
    },
    {
      title: 'Backend & Microservices',
      icon: <Server className="w-4 h-4 text-emerald-400" />,
      items: skills.backend,
      description: 'Enterprise Spring Boot microservices, NestJS middleware, and Django REST APIs.'
    },
    {
      title: 'Databases & In-Memory Stores',
      icon: <Database className="w-4 h-4 text-purple-400" />,
      items: skills.databases,
      description: 'Relational data modeling, ACID transactions, Prisma ORM, Redis caching & keyspace.'
    },
    {
      title: 'Frontend Engineering',
      icon: <Layout className="w-4 h-4 text-amber-400" />,
      items: skills.frontend,
      description: 'Component architecture, typed state management, Tailwind styling, and mobile Expo.'
    },
    {
      title: 'DevOps & Infrastructure',
      icon: <Cloud className="w-4 h-4 text-sky-400" />,
      items: skills.devops,
      description: 'Container orchestration with Docker, GraalVM native builds, Linux servers, CI/CD.'
    },
    {
      title: 'AI Systems & Evaluation',
      icon: <Cpu className="w-4 h-4 text-rose-400" />,
      items: skills.aiAndTools,
      description: 'LLM evaluation rubrics, prompt engineering, Cohere annotation, AI-assisted dev workflows.'
    }
  ];

  return (
    <section id="skills" className="py-20 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono-code text-blue-400 uppercase tracking-wider mb-2">
            <span>Engineering Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical Skills
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            A curated, honest overview of technologies, frameworks, and workflows I actively build with and can defend in technical interviews.
          </p>
        </div>

        {/* Organized 6-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2 pb-2 border-b border-slate-800">
                  <div className="p-1.5 rounded bg-slate-950 border border-slate-800">
                    {cat.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 text-xs font-mono-code text-slate-200 bg-slate-950/70 border border-slate-800 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono-code text-slate-400">
                <span>Production Tested</span>
                <span className="text-emerald-400">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* AI Engineering Workflow Callout */}
        <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-purple-950/40 border border-blue-900/50">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span>AI-Assisted Software Engineering Workflow</span>
              </h4>
              <p className="text-xs text-slate-300 mt-1 max-w-3xl">
                I actively combine Claude, ChatGPT, Google AI, Antigravity, and GitHub Copilot to accelerate systems research, reason through unfamiliar architecture patterns, write edge-case tests, and review PRs before deployment.
              </p>
            </div>
            <div className="shrink-0 font-mono-code text-xs text-blue-400 bg-blue-950/80 px-3 py-1.5 rounded border border-blue-800">
              Modern AI Tooling
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
