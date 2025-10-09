import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      date: '2023 - 2026',
      title: 'Bachelor & Master Sécurité Informatique',
      company: 'ESGI - Ville de Paris',
      description: 'Apprenti a la Ville de Paris'
    },
    {
      date: '2021 - 2022',
      title: 'BTS SIO - SISR',
      company: 'Greta - Douane de Paris',
      description: 'Stage a la Douane'
    },
    {
      date: '2020 - 2021',
      title: 'BAC PRO - SN RISC',
      company: 'Greta - Ministere de la justice',
      description: 'Stage au Tribunal Judiciaire & Palais de Justice de Paris'
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Expérience Professionnelle</h2>
        </div>
        
        <div className="timeline">
          {experiences.map((experience, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date">{experience.date}</div>
              <div className="timeline-title">{experience.title}</div>
              <div className="timeline-company">{experience.company}</div>
              <div className="timeline-description">{experience.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
