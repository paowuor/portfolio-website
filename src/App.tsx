import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PhotoShowcase } from './components/PhotoShowcase';
import { ProjectsSection } from './components/ProjectsSection';
import { InternalProjectsSection } from './components/InternalProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ArticlesSection } from './components/ArticlesSection';
import { HobbiesSection } from './components/HobbiesSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveProjectModal } from './components/InteractiveProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { PhotoLightboxModal } from './components/PhotoLightboxModal';
import { PhotoProvider } from './context/PhotoContext';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <PhotoProvider>
      <div className="min-h-screen bg-[#090A0F] text-[#F3F4F6] selection:bg-blue-600 selection:text-white flex flex-col font-sans">
        
        {/* Navigation */}
        <Navbar onOpenResume={() => setResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Hero Landing */}
          <Hero onOpenResume={() => setResumeModalOpen(true)} />

          {/* 2. About Me */}
          <AboutSection />

          {/* Documentary Photo Showcase */}
          <PhotoShowcase />

          {/* 3. Flagship Projects */}
          <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

          {/* 4. Internal / Zone01 Projects */}
          <InternalProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

          {/* 5. Technical Skills */}
          <SkillsSection />

          {/* 6. Experience & Education */}
          <ExperienceSection />

          {/* 7. Engineering Notes / Articles */}
          <ArticlesSection />

          {/* 8. Hobbies & Beyond Code */}
          <HobbiesSection />

          {/* 9. Dedicated Resume Section */}
          <ResumeSection onOpenResume={() => setResumeModalOpen(true)} />

          {/* 10. Contact */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Case Study & Interactive Feature Modal */}
        <InteractiveProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Full Resume Modal & PDF / Print Dialog */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />

        {/* Fullscreen Photo Lightbox Modal */}
        <PhotoLightboxModal />

      </div>
    </PhotoProvider>
  );
}
