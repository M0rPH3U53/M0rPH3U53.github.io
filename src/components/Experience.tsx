import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      date: '2022 - Présent',
      title: 'Senior Penetration Tester',
      company: 'CyberSec Solutions',
      description: 'Responsable de l\'équipe Red Team. Réalisation de tests d\'intrusion complexes pour des clients Fortune 500. Développement d\'outils personnalisés pour l\'automatisation des tests.'
    },
    {
      date: '2020 - 2022',
      title: 'Consultant en Cybersécurité',
      company: 'SecureIT Consulting',
      description: 'Tests d\'intrusion web et mobile, audits de sécurité. Accompagnement de PME et grandes entreprises dans leur mise en conformité RGPD et ISO 27001.'
    },
    {
      date: '2019 - 2020',
      title: 'Analyste Sécurité Junior',
      company: 'TechGuard Corp',
      description: 'Monitoring de sécurité, analyse de logs, réponse aux incidents. Participation à l\'amélioration du SOC et mise en place d\'outils de détection.'
    },
    {
      date: '2018 - 2019',
      title: 'Administrateur Systèmes',
      company: 'DataSafe Systems',
      description: 'Administration de serveurs Linux/Windows, mise en place de politiques de sécurité, durcissement des systèmes d\'exploitation.'
    }
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