import { Link } from 'react-router-dom';
import './Card.css';

interface CardData {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

const cardsData: CardData[] = [
  {
    id: 1,
    title: 'About Me',
    description: 'Découvrez mon parcours, mes compétences techniques et ma passion pour le développement informatique. En savoir plus sur mes expériences et mes aspirations professionnelles.',
    icon: '👤',
    link: '/about'
  },
  {
    id: 2,
    title: 'Portfolio',
    description: 'Explorez mes projets et réalisations dans le développement web et logiciel. Des applications innovantes aux solutions techniques complexes.',
    icon: '💼',
    link: '/projects'
  }
];

export default function Card() {
  return (
    <div className="cards-container">
      {cardsData.map((card) => (
        <div key={card.id} className="prism-card">
          <div className="card-number">0{card.id}</div>
          
          <div className="card-icon-wrapper">
            <div className="card-icon">{card.icon}</div>
          </div>
          
          <h3 className="card-title">{card.title}</h3>
          
          <p className="card-description">{card.description}</p>
          
          <Link to={card.link} className="card-link">
            <button className="card-button">Découvrir</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
