import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, FileText, ExternalLink, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { usePhotos } from '../context/PhotoContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'clean' | 'raw'>('clean');
  const { photos } = usePhotos();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const resumePlainText = `
PAUL OWUOR
AI Developer | Software Engineer | Project Manager
Email: owuorpaul500@gmail.com | Phone: +254718676079 | Kisumu, Kenya
GitHub: https://github.com/paowuor | LinkedIn: https://www.linkedin.com/in/paul-owuor-66a821397/ | Dev.to: https://dev.to/paowuor

PROFESSIONAL SUMMARY
AI-focused software engineer with hands-on experience building backend and full-stack applications using Python, Go, Java, TypeScript, and JavaScript, combined with practical experience in LLM evaluation, data annotation, prompt engineering, and AI-assisted software development. Experienced in REST APIs, databases, microservices, authentication, containerization, testing, and deployment workflows. Currently a Software Engineering Apprentice at Zone01 Kisumu and a Project Manager for a team building FlexiRide, a 13-service microservice-based application. Comfortable using AI tools including Claude, ChatGPT, Google AI, Antigravity, and GitHub Copilot to accelerate development, review code, debug problems, test solutions, and improve engineering workflows.

TECHNICAL SKILLS
Languages: Go, JavaScript, Python, Java, TypeScript, SQL, HTML, CSS, Bash
Frameworks: Spring Boot, NestJS, Node.js, Prisma, Django, Django REST Framework, React, React Native, Expo
DevOps & Tools: Git, GitHub, Docker, Docker Compose, Maven, Linux, GraalVM, PostgreSQL, SQLite, Redis, Vite, Tailwind CSS, REST APIs, CI/CD

SELECTED PROJECTS
- FlexiRides - Car-hailing microservices app (Java 21, Spring Boot, Maven, Docker, GraalVM)
  Leading an engineering team building a 13-service microservices-based car-hailing platform for transport operations in East Africa. Coordinating sprint priorities, technical deliverables, dependencies, and blockers while contributing to backend architecture, testing, build automation, and deployment workflows.
- KopaBridge - Unified Energy API (NestJS, TypeScript, Prisma, PostgreSQL, REST APIs)
  Building a unified API to address fragmented solar payment and energy-usage data across PAYGo providers. Designed data models and normalization workflows that transform provider-specific information into consistent API responses.
- DJNextDoor - DJ & Venue Marketplace (Python, Django, PostgreSQL, Redis, REST APIs, DRF)
  Marketplace connecting DJs with venues for gigs and bookings with role-based accounts, reviews, and audio streaming.
- Marples Cleaners - Customer Booking Portal (React, TypeScript, Vite, Tailwind CSS)
  Responsive customer booking portal for a Mombasa cleaning business with real-time cost estimator and direct WhatsApp quote generation.

EXPERIENCE
- Software Development Apprentice | Zone01 Kisumu (April 2026 - Present)
  Develop software projects using Go, Python, JavaScript, Java, Linux, Git, and databases through project-based engineering training. Build backend and full-stack apps with algorithms, data structures, and software architecture.
- Project Manager - FlexiRides | Zone01 Kisumu (May 2026 - Present)
  Leading 13-service microservices engineering team, sprint planning, PR reviews, GraalVM build automation.
- AI Data Trainer | Cohere (June 2024 - December 2024)
  Evaluated and annotated large volumes of LLM-generated responses for quality, accuracy, prompt engineering, and safety.
- Customer Success Manager | Invisible Technologies (January 2024 - December 2024)
  Managed relationships with 50+ global enterprise clients in the US, UK, and Europe; bridged client requirements with internal technical teams.

EDUCATION
- Zone01 Kisumu - Software Engineering & Systems Programming (Ongoing)
- University of the People - Bachelor's Degree in Computer Science (Ongoing)
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(resumePlainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([resumePlainText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Paul_Owuor_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#0F1219] border border-slate-700 rounded-xl shadow-2xl overflow-hidden my-6"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Controls */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-blue-950 border border-blue-800 text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                Paul Owuor — Professional Resume
              </h2>
              <p className="text-xs text-slate-400">
                AI Developer · Software Engineer · Project Manager
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Switcher */}
            <div className="hidden sm:inline-flex items-center p-1 bg-slate-950 border border-slate-800 rounded-lg text-xs">
              <button
                onClick={() => setActiveTab('clean')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  activeTab === 'clean' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                }`}
              >
                Executive Layout
              </button>
              <button
                onClick={() => setActiveTab('raw')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  activeTab === 'raw' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                }`}
              >
                Plain Text
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-md transition-colors"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 max-h-[78vh] overflow-y-auto bg-slate-950/80 text-slate-200">
          
          {activeTab === 'raw' ? (
            <div className="relative">
              <button
                onClick={handleCopy}
                className="absolute top-2 right-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-slate-800 text-slate-200 hover:text-white rounded border border-slate-700 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>
              <pre className="font-mono-code text-xs text-slate-300 whitespace-pre-wrap p-4 bg-slate-900 rounded-lg border border-slate-800 leading-relaxed">
                {resumePlainText}
              </pre>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-8 bg-white text-slate-900 p-8 sm:p-12 rounded-lg shadow-md font-sans">
              
              {/* Document Header with Photo */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-6 border-b border-slate-200">
                <div className="w-20 h-24 rounded-md overflow-hidden bg-slate-100 border border-slate-300 shrink-0 shadow-sm">
                  <img
                    src={photos.NY1A0074}
                    alt="Paul Owuor"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left space-y-1">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Paul Owuor
                  </h1>
                  <p className="text-sm font-semibold text-slate-700">
                    AI Developer | Software Engineer | Project Manager
                  </p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-600 pt-1 font-mono-code">
                    <a href="mailto:owuorpaul500@gmail.com" className="hover:text-blue-600">owuorpaul500@gmail.com</a>
                    <span>|</span>
                    <a href="tel:+254718676079" className="hover:text-blue-600">+254718676079</a>
                    <span>|</span>
                    <a href="https://github.com/paowuor" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GitHub</a>
                    <span>|</span>
                    <a href="https://www.linkedin.com/in/paul-owuor-66a821397/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
                    <span>|</span>
                    <a href="https://dev.to/paowuor" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Dev.to</a>
                    <span>|</span>
                    <span>Kenya</span>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-1 mb-2 border-b border-slate-300">
                  Professional Summary
                </h2>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                  AI-focused software engineer with hands-on experience building backend and full-stack applications using Python, Go, Java, TypeScript, and JavaScript, combined with practical experience in LLM evaluation, data annotation, prompt engineering, and AI-assisted software development. Experienced in REST APIs, databases, microservices, authentication, containerization, testing, and deployment workflows. Currently a Software Engineering Apprentice at Zone01 Kisumu and a Project Manager for a team building FlexiRide, a 13-service microservice-based application. Comfortable using AI tools including Claude, ChatGPT, Google AI, Antigravity, and GitHub Copilot to accelerate development, review code, debug problems, test solutions, and improve engineering workflows.
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-1 mb-2 border-b border-slate-300">
                  Technical Skills
                </h2>
                <div className="text-xs sm:text-[13px] space-y-1.5 text-slate-800">
                  <p><strong className="text-slate-900 font-semibold">Languages:</strong> Go, JavaScript, Python, Java, TypeScript, SQL, HTML, CSS, Bash</p>
                  <p><strong className="text-slate-900 font-semibold">Frameworks:</strong> Spring Boot, NestJS, Node.js, Prisma, Django, Django REST Framework, React, React Native, Expo</p>
                  <p><strong className="text-slate-900 font-semibold">DevOps & Tools:</strong> Git, GitHub, Docker, Docker Compose, Maven, Linux, GraalVM, PostgreSQL, SQLite, Redis, Vite, Tailwind CSS, REST APIs, CI/CD</p>
                </div>
              </div>

              {/* Selected Projects */}
              <div>
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-1 mb-3 border-b border-slate-300">
                  Selected Projects
                </h2>
                
                <div className="space-y-4 text-xs sm:text-[13px]">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-slate-900 text-sm">Flexiride - Car-hailing microservices app</span>
                    </div>
                    <p className="italic text-slate-600 font-mono-code text-[11px] mb-1">
                      Java 21, Spring Boot, Maven, Docker, GraalVM
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      Leading an engineering team building a 13-service microservices-based car-hailing platform for transport operations in East Africa. Coordinating sprint priorities, technical deliverables, dependencies, and blockers while contributing to the backend architecture, testing, build automation, and deployment workflows.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-slate-900 text-sm">KopaBridge - Unified Energy API</span>
                    </div>
                    <p className="italic text-slate-600 font-mono-code text-[11px] mb-1">
                      NestJS, TypeScript, Prisma, PostgreSQL, REST APIs
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      Building a unified API to address fragmented solar payment and energy-usage data across PAYGo providers. Designed data models and normalization workflows that transform provider-specific information into consistent API responses. Implementing backend functionality for authentication, database persistence, provider connections, structured data processing, health monitoring, and API documentation.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-slate-900 text-sm">DJNextDoor - DJ & Venue Marketplace</span>
                    </div>
                    <p className="italic text-slate-600 font-mono-code text-[11px] mb-1">
                      Python, Django, PostgreSQL, Redis, REST APIs, JavaScript, Django REST Framework
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      Developing a marketplace connecting DJs with venues for gigs and bookings. Implemented role-based accounts, DJ and venue profiles, gig discovery, applications, booking workflows, messaging, reviews, and audio-mix management.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-slate-900 text-sm">Marples Cleaners - Customer Booking Portal</span>
                    </div>
                    <p className="italic text-slate-600 font-mono-code text-[11px] mb-1">
                      React, TypeScript, Vite, Tailwind CSS
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      Built a responsive customer web application for a cleaning and property-services business. Developed an interactive real-time cost estimator with itemized pricing, direct WhatsApp quote generation, Google Maps integration, service catalogues, portfolio filtering, testimonials, and mobile booking actions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-1 mb-3 border-b border-slate-300">
                  Experience
                </h2>

                <div className="space-y-4 text-xs sm:text-[13px]">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-slate-900">Software Development Apprentice</span>
                      <span className="font-mono-code text-slate-600 text-xs">April 2026 - Present</span>
                    </div>
                    <div className="text-slate-700 italic mb-1.5">Zone01 Kisumu</div>
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      <li>Develop software projects using Go, Python, JavaScript, Java, Linux, Git, and databases through project-based engineering training.</li>
                      <li>Build backend and full-stack applications involving REST APIs, authentication, databases, algorithms, data structures, and software architecture.</li>
                      <li>Apply software engineering practices including debugging, testing, code review, Git/GitHub workflows, technical documentation, and collaborative development.</li>
                      <li>Use AI-assisted development tools to research unfamiliar concepts, reason through technical problems, debug implementations, review code, and accelerate project delivery.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-slate-900">Project Manager - Flexirides</span>
                      <span className="font-mono-code text-slate-600 text-xs">May 2026 - Present</span>
                    </div>
                    <div className="text-slate-700 italic mb-1.5">Zone01 Kisumu</div>
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      <li>Leading an engineering team developing a 13-service microservices-based car-hailing app.</li>
                      <li>Coordinate development tasks, technical priorities, deliverables, dependencies, and blockers throughout the project lifecycle.</li>
                      <li>Facilitate technical discussions, project planning, documentation, Git/GitHub collaboration, and structured development workflows.</li>
                      <li>Translate product requirements into actionable engineering tasks and track implementation progress across the team.</li>
                      <li>Use AI tools including Claude, Google AI, Antigravity, and GitHub Copilot to test, review, debug, and improve pull requests before merging.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-slate-900">AI Data Trainer</span>
                      <span className="font-mono-code text-slate-600 text-xs">June 2024 - December 2024</span>
                    </div>
                    <div className="text-slate-700 italic mb-1.5">Cohere</div>
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      <li>Evaluated and annotated large volumes of LLM-generated responses for quality, relevance, accuracy, and adherence to task-specific guidelines.</li>
                      <li>Worked with prompt engineering and NLP concepts while contributing to responsible AI and model-quality workflows.</li>
                      <li>Developed practical experience understanding LLM behavior, identifying model errors, and applying structured evaluation criteria.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-slate-900">Customer Success Manager</span>
                      <span className="font-mono-code text-slate-600 text-xs">January 2024 - December 2024</span>
                    </div>
                    <div className="text-slate-700 italic mb-1.5">Invisible Technologies</div>
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      <li>Managed relationships with 50+ global clients across the US, UK, and Europe in a fast-paced remote environment.</li>
                      <li>Worked across technical and operational issues, translating customer requirements into actionable solutions for internal teams.</li>
                      <li>Communicated technical and operational updates clearly to both technical and non-technical stakeholders.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-1 mb-2 border-b border-slate-300">
                  Education
                </h2>
                <div className="space-y-1.5 text-xs sm:text-[13px] text-slate-800">
                  <div className="flex justify-between">
                    <span><strong>Zone01 Kisumu</strong> - Software Engineering & Systems Programming</span>
                    <span className="font-mono-code text-slate-600">Ongoing</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>University of the People</strong> - Bachelor's Degree in Computer Science</span>
                    <span className="font-mono-code text-slate-600">Ongoing</span>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
          <span>Need a customized version or specific reference?</span>
          <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="text-blue-400 hover:underline">
            Request via email →
          </a>
        </div>

      </div>
    </div>
  );
};
