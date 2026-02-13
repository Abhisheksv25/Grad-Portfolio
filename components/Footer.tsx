import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          © {new Date().getFullYear()} Abhishek Shanmuga Vengatasalam. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-slate-400 hover:text-teal-700 dark:hover:text-teal-400 transition-colors text-sm">
            Resume
          </a>
          <a href="mailto:as7750@columbia.edu" className="text-slate-400 hover:text-teal-700 dark:hover:text-teal-400 transition-colors text-sm">
            Contact
          </a>
          <a href="https://linkedin.com/in/abhishek-sv" className="text-slate-400 hover:text-teal-700 dark:hover:text-teal-400 transition-colors text-sm">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;