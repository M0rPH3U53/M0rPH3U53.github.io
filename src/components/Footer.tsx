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
        
        <div className="flex justify-center gap-6 mb-6 flex-wrap">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-dark-100 hover:text-primary-500 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-dark-100 hover:text-primary-500 transition-colors duration-300"
          >
            GitHub
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-dark-100 hover:text-primary-500 transition-colors duration-300"
          >
            Twitter
          </a>
          <a 
            href="mailto:john.doe@pentester.fr"
            className="text-dark-100 hover:text-primary-500 transition-colors duration-300"
          >
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
          © {new Date().getFullYear()} John Doe - Expert en Cybersécurité. Tous droits réservés.
        </p>
        
        <p className="text-dark-50 text-xs italic">
          "La sécurité n'est pas un produit, mais un processus" - Bruce Schneier
        </p>
      </div>
    </footer>
  );
};

export default Footer;
