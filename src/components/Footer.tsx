import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-400 border-t border-dark-200 py-10 text-center">
      <div className="container">
        <div className="mb-6">
          <a href="#home" className="logo text-xl">
            &lt;/PenTester&gt;
          </a>
        </div>

        <div className="flex justify-center items-center gap-6 mb-6 flex-wrap">
            <a 
            href="https://github.com/m0rph3u53" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-dark-100 hover:text-primary-500 transition-colors duration-300 flex items-center gap-2"
            >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
            </a>
            <a 
            href="mailto:rlocatelli@myges.fr"
            className="text-dark-100 hover:text-primary-500 transition-colors duration-300 flex items-center gap-2"
            >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
            </svg>
            Email
            </a>
        </div>
        
        <div className="flex justify-center gap-2 mb-6 flex-wrap text-sm">
          <span className="tag">Pentesting</span>
          <span className="tag">Cybersécurité</span>
          <span className="tag">Audit</span>
          <span className="tag">Red Team</span>
          <span className="tag">OWASP</span>
        </div>
        
        <hr className="border-none h-px bg-dark-200 my-6" />
        
        <p className="text-dark-50 text-sm mb-2">
          © {new Date().getFullYear()} Romain Locatelli - Expert en Cybersécurité. Tous droits réservés.
        </p>
        
        <p className="text-dark-50 text-xs italic">
          "Mon objectif premier du hacking était la curiosité intellectuelle, la séduction de l’aventure." - Kevin Mitnick
        </p>
      </div>
    </footer>
  );
};

export default Footer;
