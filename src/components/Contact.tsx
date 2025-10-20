import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
        </div>
        
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-primary-500">locatelli.r@protonmail.ch</p>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
            <img src="/Olvid01.png">
            </div>
            <h3 className="text-white font-semibold mb-2">Olvid</h3>
            <p className="text-primary-500">
              <a href="https://invitation.olvid.io/#AwAAAGoAAAAAWmh0dHBzOi8vc2VydmVyLm9sdmlkLmlvAABZmNplqg6tlyQFGi7FPuIMG2Dof70x_Jt7BCG_lMeDfQELhpyqiMthwNf2OUhz394XfazJJcM1SDhDpxsgGz1-XQAAAAAGUm9tYWlu" className="text-primary-500">
                Lien d'invitation
              </a>
            </p>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <h3 className="text-white font-semibold mb-2">Localisation</h3>
            <p className="text-primary-500">Paris, France</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
