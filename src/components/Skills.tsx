import React from 'react';

const Skills: React.FC = () => {
  const technicalSkills = [
    {
      category: 'Outils de Pentest',
      icon: '🧰',
      skills: [
        { name: 'Metasploit',level: 'Avancé', icon: '🛡️' },
        { name: 'Nmap', level: 'Avancé', icon: '👁️' },
        { name: 'NetExec', level: 'Avancé', icon: '🖥️' },
        { name: 'Gobuster', level: 'Avancé', icon: '👊' },
        { name: 'LinPeas', level: 'Avancé', icon: '🤖' },
        { name: 'Wireshark', level: 'Avancé', icon: '🦈' },
        { name: 'Aircrack-ng', level: 'Avancé', icon: '📶' },
        { name: 'Wpscan', level: 'Avancé', icon: '🔍' },
      ]
    },
    {
      category: 'Langages & Scripts',
      icon: '💻',
      skills: [
        { name: 'Python', level: 'Intermédiaire', icon: '🐍' },
        { name: 'Bash', level: 'Intermédiaire', icon: '💲' },
        { name: 'PowerShell', level: 'Intermédiaire', icon: '⚡' },
      ]
    },
    {
      category: 'OS & Firmware',
      icon: '⚙️',
      skills: [
        { name: 'ParrotOS', level: 'Avancé', icon: '🦜' },
        { name: 'Debian', level: 'Avancé', icon: '🌀' },
        { name: 'Kali NetHunter', level: 'Avancé', icon: '📱' },
        { name: 'OpenWRT', level: 'Avancé', icon: '📶' },
      ]
    },
    {
      category: 'Virtualisation',
      icon: '📦',
      skills: [
        { name: 'Virtualbox', level: 'Avancé', icon: '🗳️' },
        { name: 'KVM', level: 'Intermédiaire', icon: '🐧' },
      ]
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'text-green-400';
      case 'Avancé': return 'text-blue-400';
      case 'Intermédiaire': return 'text-yellow-400';
      case 'Débutant': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Compétences Techniques</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {technicalSkills.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card">
              <h3 className="text-2xl font-semibold text-primary-500 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  {category.icon}
                </span>
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between p-3 bg-dark-500 border border-dark-300 rounded-lg hover:border-primary-500/50 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-medium text-white">{skill.name}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(skill.level)} border-current`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        
        {/* Section Certifications en bas */}
        {/*
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-primary-500 mb-8">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="card text-center">           
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="font-semibold text-white mb-2">CPTS</h4>
              <p className="text-sm text-dark-100">Certified Penetration Testing Specialist</p>        
            </div>
          </div>
        </div>*/}
      </div>
    </section>
  );
};


export default Skills;
