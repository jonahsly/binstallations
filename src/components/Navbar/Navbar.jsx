import React, { useState, useEffect } from 'react';
import './Navbar.css';
import CarouselModal from '../CarouselModal/CarouselModal';
import '../../styles/global.css';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="navbar-title" onClick={openModal}>
        {"Instalaciones Sanitarias"}
      </div>
      {isModalOpen && <CarouselModal onClose={closeModal} />}
      <button
      className="button-toggle"
      onClick={() => setDarkMode(prev => !prev)}
    >
      {darkMode ? '🌞 Light' : '🌙 Dark'}
    </button>
    </nav>
  );
};

export default Navbar;