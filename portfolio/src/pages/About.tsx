import Competence from '../components/Competence';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="prism-line"></div>
          <h1 className="about-title">
            À Propos de Moi
          </h1>
          <p className="about-subtitle">
            Étudiant passionné en développement informatique, transformant les idées en solutions numériques innovantes
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="profile-section">
        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-image">
              <div className="profile-icon">👨‍💻</div>
            </div>
            <div className="profile-info">
              <h2 className="profile-name">Tony ZHENG</h2>
              <p className="profile-role">Développeur Full Stack | Master 1 à l'ETNA</p>
              <div className="profile-badges">
                <span className="badge">React</span>
                <span className="badge">TypeScript</span>
                <span className="badge">Node.js</span>
                <span className="badge">Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <div className="journey-container">
          <h2 className="section-title">Mon Parcours</h2>
          <p className="section-intro">
            Je suis actuellement étudiant à l'ETNA en tant que développeur informatique en alternance. 
            Mon objectif est de devenir un développeur compétent et polyvalent, capable de relever 
            les défis du monde technologique en constante évolution.
          </p>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">🎓</div>
              <div className="timeline-content">
                <div className="timeline-year">Aujourd'hui</div>
                <h3 className="timeline-title">Master 1 Informatique</h3>
                <p className="timeline-description">
                  ETNA - École de Technologies Numériques Avancées
                </p>
                <p className="timeline-details">
                  Formation approfondie en développement logiciel, architecture système et technologies émergentes
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">💼</div>
              <div className="timeline-content">
                <div className="timeline-year">2021 - 2024</div>
                <h3 className="timeline-title">BUT Informatique</h3>
                <p className="timeline-description">
                  Université Paris Cité (Paris Rive de Seine)
                </p>
                <p className="timeline-details">
                  3 ans de formation intensive en développement, bases de données, réseaux et gestion de projets
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">🔧</div>
              <div className="timeline-content">
                <div className="timeline-year">2018 - 2021</div>
                <h3 className="timeline-title">Bac Technologique STI2D</h3>
                <p className="timeline-description">
                  Lycée Diderot - Option SIN (Systèmes d'Information et Numérique)
                </p>
                <p className="timeline-details">
                  Spécialisation en systèmes numériques et programmation informatique
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Competence />

      {/* Values Section */}
      <section className="values-section">
        <div className="values-container">
          <h2 className="section-title">Mes Valeurs</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-description">
                Toujours à la recherche de nouvelles technologies et méthodes pour créer des solutions modernes
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3 className="value-title">Précision</h3>
              <p className="value-description">
                Attention méticuleuse aux détails pour garantir la qualité et la fiabilité du code
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3 className="value-title">Collaboration</h3>
              <p className="value-description">
                Travail d'équipe efficace et communication claire pour atteindre des objectifs communs
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">📚</div>
              <h3 className="value-title">Apprentissage</h3>
              <p className="value-description">
                Curiosité constante et volonté d'apprendre pour rester à jour dans un domaine en évolution
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
