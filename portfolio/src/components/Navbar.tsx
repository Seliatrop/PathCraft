import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900">
      <div className="flex items-center justify-center p-6 lg:px-8">
        <div className="flex gap-x-12">
          <Link to="/" className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
            About
          </Link>
          <Link to="/projects" className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
            Portfolio
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
