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
    <div className="philosophy-pillars">
      {cardsData.map((card) => (
        <Link key={card.id} to={card.link} className="pillar" style={{ textDecoration: 'none' }}>
          <div className="pillar-icon">{card.icon}</div>
          <h3 className="pillar-title">{card.title}</h3>
          <p className="pillar-description">{card.description}</p>
        </Link>
      ))}
    </div>
  );
}
