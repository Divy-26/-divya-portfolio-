import { useState, useEffect } from 'react';
import Navbar from './components/portfolio/Navbar';
import Hero from './components/portfolio/Hero';
import FeaturedProjects from './components/portfolio/FeaturedProjects';
import About from './components/portfolio/About';
import Contact from './components/portfolio/Contact';
import AdidasProject from './components/adidas/AdidasProject';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'adidas'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  if (currentView === 'adidas') {
    return <AdidasProject onBack={() => setCurrentView('home')} />;
  }

  return (
    <div className="min-h-screen bg-[#F5F5F3]">
      <Navbar />
      <Hero />
      <FeaturedProjects onProjectClick={(id) => {
        if (id === 1) setCurrentView('adidas');
      }} />
      <About />
      <Contact />
    </div>
  );
}