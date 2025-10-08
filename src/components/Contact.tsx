import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p className="text-dark-100 max-w-2xl mx-auto">
            Vous avez un projet de sécurité ou souhaitez discuter de vos besoins ? 
            N'hésitez pas à me contacter !
          </p>
        </div>
        
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-primary-500">john.doe@pentester.fr</p>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <h3 className="text-white font-semibold mb-2">Téléphone</h3>
            <p className="text-primary-500">+33 6 12 34 56 78</p>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <h3 className="text-white font-semibold mb-2">Localisation</h3>
            <p className="text-primary-500">Paris, France</p>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">💼</div>
            <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
            <p className="text-primary-500">linkedin.com/in/johndoe</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;