import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import CarouselModal from '../CarouselModal/CarouselModal';
import { useAppContext } from '../../context/AppContext';

const courseLabels = {
  sanitaria: 'Instalaciones Sanitarias',
  incendio: 'Instalacion contra Incendio',
  gas: 'Instalacion de Gas',
};

const courseRoutes = {
  sanitaria: '/sanitaria',
  incendio: '/incendio',
  gas: '/gas',
};

const Navbar = () => {
  const navigate = useNavigate();
  const { selectedCourse, setSelectedCourse } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('theme') === 'dark';
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleSelectCourse = (courseId) => {
    setSelectedCourse(courseId);
    navigate(courseRoutes[courseId] ?? '/sanitaria');
    closeModal();
  };

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [darkMode]);

  return (
    <nav className="navbar">
      <button type="button" className="navbar-title" onClick={openModal}>
        {courseLabels[selectedCourse] ?? courseLabels.sanitaria}
      </button>

      {isModalOpen && (
        <CarouselModal selectedOption={selectedCourse} onSelect={handleSelectCourse} onClose={closeModal} />
      )}

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
