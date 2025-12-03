import { useState } from 'react';
import type { FormEvent } from 'react';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const mailtoLink = `mailto:tony.whg@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;

      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setSubmitStatus('success');
        setIsSubmitting(false);
      }, 1000);

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <h2 className="section-title">Envie de me contacter ?</h2>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <a href="mailto:tony.whg@gmail.com" className="info-item">
            <div className="info-icon">📧</div>
            <div className="info-text">
              <h4>Email</h4>
              <p>tony.whg@gmail.com</p>
            </div>
          </a>

          <div className="info-item">
            <div className="info-icon">💼</div>
            <div className="info-text">
              <h4>Disponibilité</h4>
              <p>Ouvert aux opportunités</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">⚡</div>
            <div className="info-text">
              <h4>Réponse</h4>
              <p>Sous 24-48 heures</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">🌍</div>
            <div className="info-text">
              <h4>Localisation</h4>
              <p>France</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Votre nom"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="votre.email@exemple.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Objet de votre message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Votre message..."
              rows={6}
            />
          </div>

          {submitStatus === 'success' && (
            <div className="status-message success">
              ✓ Votre client mail s'est ouvert. Envoyez le message pour me contacter !
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="status-message error">
              ✗ Une erreur s'est produite. Veuillez réessayer.
            </div>
          )}

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Ouverture...' : 'Envoyer le Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
