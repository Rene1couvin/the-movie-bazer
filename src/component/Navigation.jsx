import React, { useState } from 'react';
import Logo from '../assets/logo.png';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-4 md:px-12 py-4">
      <div className="text-lg font-bold">
        <img src={Logo} alt="Logo" className="h-10" />
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="block text-white focus:outline-none">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M4 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
      <ul className={`md:flex space-x-16 ${menuOpen ? 'block' : 'hidden'}`}>
        <li><a href="/" className="text-white hover:text-gray-900">Home</a></li>
        <li><a href="/explore" className="text-white hover:text-gray-900">Explore</a></li>
        <li><a href="/genre" className="text-white hover:text-gray-900">Genre</a></li>
        <li><a href="/news" className="text-white hover:text-gray-900">News</a></li>
        <li><a href="/movies" className="text-white hover:text-gray-900">Movies</a></li>
        <li><a href="/tvshows" className="text-white hover:text-gray-900">TV Shows</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
