import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="prism-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <div className="footer-logo-icon">
              <div className="footer-prism-shape"></div>
            </div>
            <div className="footer-logo-text">
              <span className="prism">Tony</span>
              <span className="flux">ZHENG</span>
            </div>
          </Link>
          <p className="footer-description">
            Etudiant à l'ETNA en tant que Master 1 en informatique. Curieux et
            impliqué.
          </p>
          <div className="footer-social">
            <a
              href="https://github.com/Seliatrop"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <span>🔗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/tony-zhg/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <span>💼</span>
            </a>
            <a
              href="mailto:tony.whg@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <span>✉️</span>
            </a>
          </div>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h4>Ressources</h4>
          <div className="footer-links">
            <a
              href="https://github.com/Seliatrop"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
