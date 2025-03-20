import React, { useState } from 'react';
import './Navbar.css';
import CarouselModal from '../CarouselModal/CarouselModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-title" onClick={openModal}>
        {"Instalaciones Sanitarias"}
      </div>
      {isModalOpen && <CarouselModal onClose={closeModal} />}
    </nav>
  );
};

export default Navbar;