import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Caroussel.css';
import bannerAboutMe from '../assets/banner_about-me.png';
import bannerPortfolio from '../assets/banner_portfolio.png';
import p_portfolio from '../assets/project_portfolio.png';

interface CarouselItem {
    id: number;
    title: string;
    description: string;
    image: string;
    tech: string[];
    link: string;
}

const carouselData: CarouselItem[] = [
    {
        id: 1,
        title: 'Ancien Portfolio',
        description: 'Voici mon ancien portfolio réalisé en 2023 pour présenter mes compétences et projets.',
        image: p_portfolio,
        tech: [],
        link: 'https://github.com/Seliatrop/Portfolio'
    },
    {
        id: 2,
        title: 'Portfolio',
        description: 'Explorez mes projets et réalisations dans le développement web et logiciel.',
        image: bannerPortfolio,
        tech: [],
        link: '/projects'
    }
];

export default function Caroussel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + carouselData.length) % carouselData.length
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        };
        
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const getCardStyle = (index: number) => {
        const offset = index - currentIndex;
        const absOffset = Math.abs(offset);
        const isMobile = window.innerWidth <= 768;
        const spacing = isMobile ? 280 : 400;
        
        if (absOffset === 0) {
            return {
                transform: 'translate(-50%, -50%) translateZ(0) scale(1)',
                opacity: 1,
                zIndex: 10
            };
        } else if (absOffset === 1) {
            const direction = offset > 0 ? 1 : -1;
            const rotation = isMobile ? 25 : 30;
            const scale = isMobile ? 0.88 : 0.85;
            return {
                transform: `translate(-50%, -50%) translateX(${direction * spacing}px) translateZ(-200px) rotateY(${-direction * rotation}deg) scale(${scale})`,
                opacity: 0.8,
                zIndex: 5
            };
        } else {
            return {
                transform: 'translate(-50%, -50%) translateZ(-500px) scale(0.5)',
                opacity: 0,
                zIndex: 1
            };
        }
    };

    return (
        <section className="carousel-section">
            <div className="carousel-wrapper">
                <div className="carousel-stage">
                    {carouselData.map((item, index) => (
                        <div
                            key={item.id}
                            className="carousel-card"
                            style={getCardStyle(index)}
                        >
                            <div className="carousel-card-inner">
                                <div className="card-number">0{item.id}</div>
                                
                                <div className="card-image-placeholder">
                                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                
                                <h3 className="card-title">{item.title}</h3>
                                
                                <p className="card-description">
                                    {item.description}
                                </p>
                                
                                <div className="card-tech-badges">
                                    {item.tech.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                {item.link.startsWith('http') ? (
                                    <a href={item.link} className="card-cta-link card-cta" target="_blank" rel="noopener noreferrer">Explorer</a>
                                ) : (
                                    <Link to={item.link} className="card-cta-link card-cta">Explorer</Link>
                                )}
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={prevSlide}
                        className="carousel-nav-btn prev"
                        aria-label="Previous slide"
                    >
                        ‹
                    </button>
                    <button
                        onClick={nextSlide}
                        className="carousel-nav-btn next"
                        aria-label="Next slide"
                    >
                        ›
                    </button>

                    <div className="carousel-indicators-wrapper">
                        {carouselData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`carousel-indicator ${
                                    index === currentIndex ? 'active' : ''
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}