import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Expertise } from './components/sections/Expertise';
import { FeaturedWork } from './components/sections/FeaturedWork';
import { EngineeringApproach } from './components/sections/EngineeringApproach';
import { Experience } from './components/sections/Experience';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] dark:bg-ink-900 text-[#14171A] dark:text-[#F4F5F2] transition-colors duration-200 selection:bg-sage-200 selection:text-sage-900 dark:selection:bg-sage-400/20 dark:selection:text-sage-200">
      {/* Subtle Technical Grid Background */}
      <div 
        className="fixed inset-0 pointer-events-none bg-grid-technical mask-radial-faded z-0" 
        aria-hidden="true"
      />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Assembly */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Expertise />
        <FeaturedWork />
        <EngineeringApproach />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      {/* Footer Colophon */}
      <Footer />
    </div>
  );
}
