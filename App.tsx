import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Honors from './components/Honors';
import Skills from './components/Skills';
import Education from './components/Education';
import Extracurricular from './components/Extracurricular';
import Contact from './components/Contact';
import Footer from './components/Footer';

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