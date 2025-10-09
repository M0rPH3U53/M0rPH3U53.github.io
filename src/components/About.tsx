import React from 'react';

const About: React.FC = () => {
  const skills = [
    { name: 'ParrotOS', level: 5 },
    { name: 'Metasploit', level: 4 },
    { name: 'Nmap', level: 5 },
    { name: 'NetExec', level: 4 },
    { name: 'Bash', level: 4 },
    { name: 'Wireshark', level: 4 },
    { name: 'John the Ripper', level: 3 },
    { name: 'Aircrack-ng', level: 3 },
  ];

  const certifications: string[] = [
    
    'CPTS - Certified Penetration Testing Specialist',
    
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
              Anciennement technicien de maintenance , j'ai decider de faire une reconversion professionelle dans la cybersecurité.
            </p>
            <p className="text-dark-100 mb-8">
              Apres 8 ans dans le monde du travaille , j'ai repris mes etudes dans le domaine de la securité informatique pour en faire mon metier.
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
        </div>
      </div>
    </section>
  );
};

export default About;
