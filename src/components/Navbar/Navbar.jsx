import React, { useEffect, useState } from 'react';
import './Navbar.css';
import CarouselModal from '../CarouselModal/CarouselModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('theme') === 'dark';
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [darkMode]);

  return (
    <nav className="navbar">
      <button type="button" className="navbar-title" onClick={openModal}>
        Instalaciones Sanitarias
      </button>

      {isModalOpen && <CarouselModal onClose={closeModal} />}

      <button
        type="button"
        className="button-toggle"
        onClick={() => setDarkMode((prev) => !prev)}
        aria-label={darkMode ? 'Cambiar a modo dia' : 'Cambiar a modo nocturno'}
      >
        {darkMode ? 'Modo dia' : 'Modo nocturno'}
      </button>
    </nav>
  );
};

export default Navbar;
