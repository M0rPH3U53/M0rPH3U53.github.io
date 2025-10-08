import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'metaWeb',
      description: 'Automatisation des scanner de vulns avec génération de rapport pour chacun',
      tags: ['Python', 'Flask', 'SQLite', 'Requests', 'BeautifulSoup'],
      image: 'https://private-user-images.githubusercontent.com/144029241/433967253-794ab03e-834b-4c7f-b6fd-407c2b281135.jpeg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTk5NDY2OTIsIm5iZiI6MTc1OTk0NjM5MiwicGF0aCI6Ii8xNDQwMjkyNDEvNDMzOTY3MjUzLTc5NGFiMDNlLTgzNGItNGM3Zi1iNmZkLTQwN2MyYjI4MTEzNS5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MTAwOCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTEwMDhUMTc1OTUyWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YTMxY2ZjZTA1YzM1NDRmN2VmMjJjZDczNzAyMTdiMjYzNmQwNDlkNzUwZGNiYWM1NmY1OWE4NjdlNzk5OGI0MyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.ZJp8NOcDiNNoalrXHEJp1MPPgq7YgBolTJH53qYFiJ0',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Massap',
      description: 'Accélération de la découverte des ports en combinant Nmap & Masscan',
      tags: ['Python', 'Nmap', 'Scapy', 'Threading', 'JSON'],
      image: 'https://private-user-images.githubusercontent.com/144029241/433148327-ee9c7993-f1b7-4745-b7e3-e3ab187500e1.jpeg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTk5NDY2OTUsIm5iZiI6MTc1OTk0NjM5NSwicGF0aCI6Ii8xNDQwMjkyNDEvNDMzMTQ4MzI3LWVlOWM3OTkzLWYxYjctNDc0NS1iN2UzLWUzYWIxODc1MDBlMS5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MTAwOCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTEwMDhUMTc1OTU1WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YTg1MTVmYjcyNDUxZDkyOWFkNDdiYTk2NzE0NzE1ZmE4ZGY5NDE1NjUxMDllOTExYjc4NGI4NGQwYmE3MGFiMSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.Ol6lo44QRmFlse9scJfN3eKfHy5vEkyTquvbN9gdZ94',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'fullEx',
      description: 'Automatisation dexploits root Linux',
      tags: ['Node.js', 'React', 'MongoDB', 'Express', 'JWT'],
      image: 'https://private-user-images.githubusercontent.com/144029241/497123404-c947aebb-593b-4027-bc50-ac87663ff387.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTk5NDY2OTMsIm5iZiI6MTc1OTk0NjM5MywicGF0aCI6Ii8xNDQwMjkyNDEvNDk3MTIzNDA0LWM5NDdhZWJiLTU5M2ItNDAyNy1iYzUwLWFjODc2NjNmZjM4Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMDA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTAwOFQxNzU5NTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04MTY5YTdkNzM3ODAzM2I5MWZkZDFhZmQ1NmFmODUyMTE0OWI5NDA2NWVmMGYwZmM4ZTlkZGJlY2EwZWQ2ODQyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.LdMI2M79QpRug4MFRWWS4qntxiQOic-O0uldcac9P14',
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
