import React from 'react';

const About: React.FC = () => {
  const skills = [
    { name: 'ParrotOS', level: 5 },
    { name: 'Metasploit', level: 4 },
    { name: 'Nmap', level: 5 },
    { name: 'NetExec', level: 4 },
    { name: 'Bash/PowerShell', level: 4 },
    { name: 'Wireshark', level: 4 },
    { name: 'John the Ripper', level: 3 },
    { name: 'SQLMap', level: 4 },
    { name: 'Aircrack-ng', level: 3 },
  ];

  const certifications: string[] = [
    'OSCP - Offensive Security Certified Professional',
    'CEH - Certified Ethical Hacker',
    'CISSP - Certified Information Systems Security Professional',
    'GPEN - GIAC Penetration Tester'
  ];
  
    return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title">
          <h2>À propos de moi</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-primary-500 mb-4">Mon parcours</h3>
            <p className="text-dark-100 mb-4">
              Passionné par la cybersécurité depuis plus de 5 ans, je me spécialise dans les tests d'intrusion 
              et l'audit de sécurité. Mon approche méthodique et ma curiosité naturelle me permettent d'identifier 
              les failles de sécurité les plus subtiles.
            </p>
            <p className="text-dark-100 mb-8">
              J'accompagne les entreprises dans la sécurisation de leurs systèmes d'information en réalisant 
              des audits complets, des tests d'intrusion ciblés et en proposant des recommandations concrètes 
              pour améliorer leur posture de sécurité.
            </p>
            
            <h3 className="text-2xl font-semibold text-primary-500 mb-4">Certifications</h3>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center gap-3 text-dark-100">
                  <span className="text-primary-500 font-bold">✓</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-primary-500 mb-4">Compétences techniques</h3>
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="font-medium">{skill.name}</span>
                  <div className="skill-level">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div 
                        key={dot} 
                        className={`skill-dot ${dot <= skill.level ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Tests d'intrusion réalisés</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">200+</span>
            <span className="stat-label">Vulnérabilités découvertes</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">Entreprises accompagnées</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Années d'expérience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
