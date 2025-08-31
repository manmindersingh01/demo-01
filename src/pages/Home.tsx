import { useRef } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import CaseStudies from '@/components/CaseStudies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onExperienceClick={() => scrollToSection(experienceRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onEducationClick={() => scrollToSection(educationRef)}
        onCaseStudiesClick={() => scrollToSection(caseStudiesRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <Hero />
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={caseStudiesRef}>
        <CaseStudies />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
