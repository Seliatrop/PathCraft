import { useState } from 'react';
import './Competence.css';

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: 'frontend' | 'backend' | 'cloud' | 'emerging';
}

const skillsData: Skill[] = [
  { name: 'React.js', icon: '⚛️', level: 95, category: 'frontend' },
  { name: 'Node.js', icon: '🟢', level: 90, category: 'backend' },
  { name: 'TypeScript', icon: '📘', level: 88, category: 'frontend' },
  { name: 'AWS', icon: '☁️', level: 92, category: 'cloud' },
  { name: 'Docker', icon: '🐳', level: 85, category: 'cloud' },
  { name: 'Python', icon: '🐍', level: 93, category: 'backend' },
  { name: 'Kubernetes', icon: '☸️', level: 82, category: 'cloud' },
  { name: 'GraphQL', icon: '◈', level: 87, category: 'backend' },
  { name: 'TensorFlow', icon: '🤖', level: 78, category: 'emerging' },
  { name: 'Blockchain', icon: '🔗', level: 75, category: 'emerging' },
  { name: 'Vue.js', icon: '💚', level: 85, category: 'frontend' },
  { name: 'MongoDB', icon: '🍃', level: 90, category: 'backend' },
];

export default function Competence() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="section-subtitle">
            Mastery of cutting-edge technologies and frameworks
          </p>
        </div>

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
                  <div className="skill-icon-hex">{skill.icon}</div>
                  <div className="skill-name-hex">{skill.name}</div>
                  <div className="skill-level">
                    <div className="skill-level-fill" style={{ width: `${skill.level}%` }}></div>
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
