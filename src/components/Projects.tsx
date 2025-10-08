import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'WebVuln Scanner',
      description: 'Scanner automatisé de vulnérabilités web développé en Python. Capable de détecter les failles OWASP Top 10 avec un taux de détection de 95%.',
      tags: ['Python', 'Flask', 'SQLite', 'Requests', 'BeautifulSoup'],
      image: '🔍',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Network Recon Tool',
      description: 'Outil de reconnaissance réseau combinant plusieurs techniques de scan et d\'énumération pour la phase de découverte.',
      tags: ['Python', 'Nmap', 'Scapy', 'Threading', 'JSON'],
      image: '🌐',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Phishing Simulation Platform',
      description: 'Plateforme complète de simulation de phishing pour sensibiliser les employés aux attaques par email.',
      tags: ['Node.js', 'React', 'MongoDB', 'Express', 'JWT'],
      image: '🎣',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Crypto CTF Challenges',
      description: 'Collection de défis cryptographiques créés pour des compétitions CTF, couvrant divers algorithmes et techniques.',
      tags: ['Python', 'OpenSSL', 'RSA', 'AES', 'Hash Functions'],
      image: '🔐',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Mobile App Security Tester',
      description: 'Framework d\'analyse automatisée pour applications Android, incluant analyse statique et dynamique.',
      tags: ['Python', 'Android SDK', 'Frida', 'APKTool', 'XML'],
      image: '📱',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Log Analysis Dashboard',
      description: 'Tableau de bord pour l\'analyse de logs de sécurité avec détection d\'anomalies basée sur ML.',
      tags: ['Python', 'Elasticsearch', 'Kibana', 'Scikit-learn', 'Docker'],
      image: '📊',
      demoLink: '#',
      codeLink: '#'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Projets</h2>
          <p className="text-dark-100 max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets open source et outils développés pour la cybersécurité.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <div className="project-image">
                <span className="text-5xl">{project.image}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-primary-500 mb-3">{project.title}</h3>
              <p className="text-dark-100 mb-4">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.demoLink} className="project-link">
                  Démo
                </a>
                <a href={project.codeLink} className="project-link">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-dark-100 mb-6">
            Vous voulez voir plus de projets ? Consultez mon profil GitHub.
          </p>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Voir sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;