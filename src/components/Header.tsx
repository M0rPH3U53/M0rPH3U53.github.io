import React from 'react';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav-fixed">
      <div className="nav-content">
        <a 
          href="#home" 
          className="logo" 
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
        >
          &lt;/PenTester&gt;
        </a>
        <ul className="nav-links">
          <li>
            <a 
              href="#home" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Accueil
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              À propos
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
            >
              Compétences
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
            >
              Expérience
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            >
              Projets
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;