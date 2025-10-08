import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message envoyé ! Je vous répondrai dans les plus brefs délais.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <label htmlFor="name">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Votre nom"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="votre.email@exemple.com"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Sujet de votre message"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Décrivez votre projet ou vos besoins en cybersécurité..."
            />
          </div>
          
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Envoyer le message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;