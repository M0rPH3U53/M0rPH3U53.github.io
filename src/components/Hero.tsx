import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Expert en Cybersécurité';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content animate-fade-in-up">
          <h1 className="hero-title">LOCATELLI Romain</h1>
          <p className="hero-subtitle">
            <span className="code-effect">$</span> {displayText}
            <span className="typewriter-cursor">|</span>
          </p>
          <p className="text-dark-100 max-w-2xl mx-auto mb-8">
            Spécialisé dans les tests d'intrusion, l'audit de sécurité et la protection des systèmes d'information. 
            Plus de 5 ans d'expérience dans le domaine de la cybersécurité.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('skills')}
            >
              Voir mes compétences
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => scrollToSection('contact')}
            >
              Me contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
