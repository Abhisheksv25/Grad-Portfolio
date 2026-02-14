import React, { useState, useEffect } from 'react';
import Navigation from './src/components/Navigation';
import Hero from './src/components/Hero';
import Experience from './src/components/Experience';
import Projects from './src/components/Projects';
import Publications from './src/components/Publications';
import Honors from './src/components/Honors';
import Skills from './src/components/Skills';
import Education from './src/components/Education';
import Extracurricular from './src/components/Extracurricular';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on initial load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-teal-200 dark:selection:bg-teal-900 selection:text-teal-900 dark:selection:text-teal-100">
        <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Publications />
          <Honors />
          <Extracurricular />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;