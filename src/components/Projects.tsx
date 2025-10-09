import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'metaWeb',
      description: 'Automatisation des scanner de vulns avec génération de rapport pour chaque outils',
      tags: ['Nuclei', 'Nikto', 'Wapiti', 'Skipfish', 'ZAP'],
      image: '/metaweb.jpeg',
      repoLink: 'https://github.com/M0rPH3U53/metaWeb',
      codeLink: 'https://github.com/M0rPH3U53/metaWeb/blob/main/metaWeb.sh'
    },
    {
      title: 'Massap',
      description: 'Accélération de la découverte des ports en combinant Nmap & Masscan',
      tags: ['Masscan', 'Nmap',],
      image: '/massap.jpeg',
      repoLink: 'https://github.com/M0rPH3U53/Massap',
      codeLink: 'https://github.com/M0rPH3U53/Massap/blob/main/massap.sh'
    },
    {
      title: 'fullEx',
      description: 'Automatisation d"exploits root Linux',
      tags: ['LinPeas', 'Binaires', 'LaZagne'],
      image: '/fullex.png',
      repoLink: 'https://github.com/M0rPH3U53/fullEx',
      codeLink: 'https://github.com/M0rPH3U53/fullEx/blob/main/fullEx.sh'
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Projets</h2>
          <p className="text-dark-100 max-w-2xl mx-auto">
             Voici quelques-uns de mes projets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <div className="project-image">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              
              <h3 className="text-xl font-semibold text-primary-500 mb-3">{project.title}</h3>
              <p className="text-dark-100 mb-4">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.repoLink} className="project-link">
                  Dépot
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
            Pour en savoir plus consultez mon GitHub.
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
