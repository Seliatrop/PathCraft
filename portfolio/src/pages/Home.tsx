import Caroussel from '../components/Caroussel';
import '../index.css';

function Home() {
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        background: 'var(--primary-black)',
        color: 'var(--text-primary)',
        paddingTop: '80px'
      }}
    >
      <div className="w-full">
        <div className="text-center mb-8 px-4">
          <h1 
            className="text-6xl font-bold mb-6"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '3px',
              background: 'linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-purple) 50%, var(--accent-blue) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradientFlow 5s ease infinite'
            }}
          >
            Tony
          </h1>
          <h2 
            className="text-xl font-semibold mb-4"
            style={{
              color: 'var(--text-secondary)',
              letterSpacing: '1px',
              maxWidth: '800px',
              margin: '0 auto 20px'
            }}
          >
            Etudiant à l'Etna en tant que développeur informatique en alternance
          </h2>
          <div 
            style={{
              width: '200px',
              height: '2px',
              margin: '0 auto 20px',
              position: 'relative',
              overflow: 'hidden',
              background: 'var(--carbon-medium)'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, var(--accent-purple), transparent)',
                animation: 'prismSweep 4s ease-in-out infinite'
              }}
            />
          </div>
          <p 
            className="max-w-2xl mx-auto"
            style={{
              color: 'var(--text-dim)',
              fontSize: '16px',
              letterSpacing: '0.5px'
            }}
          >
            Codez tant que vous pouvez !
          </p>
        </div>
        
        <Caroussel />
      </div>

      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes prismSweep {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
}

export default Home;
