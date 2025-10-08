import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'metaWeb',
      description: 'Automatisation des scanner de vulns avec génération de rapport pour chacun',
      tags: ['Python', 'Flask', 'SQLite', 'Requests', 'BeautifulSoup'],
      image: '🔍',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Massap',
      description: 'Accélération de la découverte des ports en combinant Nmap & Masscan',
      tags: ['Python', 'Nmap', 'Scapy', 'Threading', 'JSON'],
      image: '🌐',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'fullEx',
      description: 'Automatisation dexploits root Linux',
      tags: ['Node.js', 'React', 'MongoDB', 'Express', 'JWT'],
      image: '🎣',
      demoLink: '#',
      codeLink: '#'
    },
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
            Pour voir plus de projet consultez mon GitHub.
          </p>
          <a 
            href="https://github.com/M0rPH3U53" 
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
