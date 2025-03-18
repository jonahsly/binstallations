import { useLanguage } from '../../context/LanguageContext';
import React, { useState } from "react";
import CarouselModal from "../CarouselModal/CarouselModal";
import './Navbar.css';

const cursosMock = [
  { nombre: "Curso 1", path: "/isanitarias" },
  { nombre: "Curso 2", path: "/curso2" },
  { nombre: "Curso 3", path: "/curso3" },
];


const Navbar = ({ onCursoSelect }) => {
  //const { language, setLanguage, t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">🌐</div>
      <img src="/assets/logo.svg" alt="Logo" className="logo" />
      <div className="navbar-title" onClick={() => setIsModalOpen(true)}>
        {"Instalaciones Sanitarias"}
        </div>
      <select
        className="language-switch"
        /*value={language}*/
        /*onChange={(e) => setLanguage(e.target.value)}*/
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
      <CarouselModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cursos={cursosMock}
        onSelectCurso={onCursoSelect}
      />
    </nav>
  );
};

export default Navbar;