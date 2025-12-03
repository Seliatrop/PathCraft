import { useState } from 'react';
import './Competence.css';

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: 'frontend' | 'backend' | 'cloud' | 'emerging';
}

const skillsData: Skill[] = [
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    level: 40,
    category: 'backend',
  },
  {
    name: 'Web languages (HTML, CSS)',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    level: 80,
    category: 'frontend',
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    level: 60,
    category: 'cloud',
  },
  {
    name: 'Bash/Shell',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
    level: 60,
    category: 'emerging',
  },
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    level: 70,
    category: 'backend',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    level: 50,
    category: 'frontend',
  },
  {
    name: 'SQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    level: 60,
    category: 'backend',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    level: 56,
    category: 'frontend',
  },
  {
    name: 'React.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    level: 46,
    category: 'frontend',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    level: 45,
    category: 'backend',
  },
  {
    name: 'Angular',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    level: 45,
    category: 'frontend',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    level: 42,
    category: 'backend',
  },
  {
    name: 'J2EE',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    level: 40,
    category: 'backend',
  },
  {
    name: 'Cisco',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    level: 30,
    category: 'emerging',
  },
  {
    name: 'Php',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    level: 30,
    category: 'backend',
  },
  {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    level: 20,
    category: 'frontend',
  },
];

export default function Competence() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredSkills =
    activeCategory === 'all'
      ? [...skillsData].sort((a, b) => b.level - a.level)
      : skillsData.filter(skill => skill.category === activeCategory).sort((a, b) => b.level - a.level);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">


        <div className="skill-categories">
          <button
            className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Skills
          </button>
          <button
            className={`category-tab ${activeCategory === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveCategory('frontend')}
          >
            Frontend
          </button>
          <button
            className={`category-tab ${activeCategory === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveCategory('backend')}
          >
            Backend
          </button>
          <button
            className={`category-tab ${activeCategory === 'cloud' ? 'active' : ''}`}
            onClick={() => setActiveCategory('cloud')}
          >
            Cloud & DevOps
          </button>
          <button
            className={`category-tab ${activeCategory === 'emerging' ? 'active' : ''}`}
            onClick={() => setActiveCategory('emerging')}
          >
            Emerging Tech
          </button>
        </div>

        <div className="skills-hexagon-grid">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-hexagon"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="hexagon-inner">
                <div className="hexagon-content">
                  <div className="skill-icon-hex">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="skill-icon-img"
                    />
                  </div>
                  <div className="skill-name-hex">{skill.name}</div>
                  <div className="skill-level">
                    <div
                      className="skill-level-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="skill-percentage-hex">{skill.level}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
