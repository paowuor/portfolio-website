import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, Linkedin, Github, BookOpen, Clock, MapPin, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      // Create mailto fallback link automatically
      const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(
        `From: ${formState.name} (${formState.email})\n\n${formState.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono-code text-blue-400 uppercase tracking-wider mb-2">
            <span>Direct Outreach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's build something.
          </h2>
          <blockquote className="mt-2 text-slate-300 text-base sm:text-lg border-l-2 border-blue-500 pl-3">
            Have a project, opportunity, or interesting engineering problem? I'd love to hear about it.
          </blockquote>
        </div>

        {/* 2-Column Split: Direct Channels vs Interactive Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-950 border border-blue-800 text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono-code uppercase">Email</div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono-code uppercase">Phone / WhatsApp</div>
                    <a
                      href={profile.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800 rounded hover:bg-emerald-900 transition-colors"
                >
                  Chat →
                </a>
              </div>

              {/* Location & Timezone */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center gap-3 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <div>
                  <span className="font-semibold text-white">East Africa Time (EAT, UTC+3)</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">Prompt response across global time zones (US, Europe, Africa)</p>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3">
              <div className="text-xs font-mono-code text-slate-400 uppercase tracking-wider">
                Professional Networks:
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 hover:text-blue-400 transition-all text-center"
                >
                  <Linkedin className="w-4 h-4 mb-1" />
                  <span className="font-semibold">LinkedIn</span>
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 hover:text-white transition-all text-center"
                >
                  <Github className="w-4 h-4 mb-1" />
                  <span className="font-semibold">GitHub</span>
                </a>

                <a
                  href={profile.devto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 hover:text-emerald-400 transition-all text-center"
                >
                  <BookOpen className="w-4 h-4 mb-1" />
                  <span className="font-semibold">Dev.to</span>
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-slate-900/60 border border-slate-800 shadow-xl">
              
              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Prepared!</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your email client has been opened with your pre-filled inquiry. You can also message Paul directly on WhatsApp or LinkedIn.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormState({ name: '', email: '', subject: 'Project Inquiry', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-code text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-md text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-code text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="s.jenkins@company.com"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-md text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-slate-300 mb-1.5">
                      Subject / Topic
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-md text-xs text-white focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                    >
                      <option value="Full-Time Engineering Role">Full-Time Software / AI Engineering Role</option>
                      <option value="Project Management Opportunity">Project Management Opportunity</option>
                      <option value="Contract / Backend Architecture">Contract / Backend Architecture</option>
                      <option value="Technical Collaboration">Technical Collaboration / Open Source</option>
                      <option value="General Inquiry">General Conversation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-slate-300 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your team, system architecture, or problem you are trying to solve..."
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-md text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors shadow-md cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{status === 'submitting' ? 'Preparing Transmission...' : 'Send Message to Paul'}</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center font-mono-code">
                    Opens your configured mail client or dispatches direct inquiry to owuorpaul500@gmail.com
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
