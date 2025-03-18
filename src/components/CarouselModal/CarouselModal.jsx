import React, { useState, useEffect } from "react";
import "./CarouselModal.css";

const CarouselModal = ({ isOpen, onClose, cursos, onSelectCurso }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setActiveIndex(0);
  }, [isOpen]);

  const handleScroll = (e) => {
    e.preventDefault();
    const delta = Math.sign(e.deltaY);
    const newIndex = (activeIndex + delta + cursos.length) % cursos.length;
    setActiveIndex(newIndex);
  };

  if (!isOpen) return null;

  const visibleCursos = [
    cursos[(activeIndex - 1 + cursos.length) % cursos.length],
    cursos[activeIndex],
    cursos[(activeIndex + 1) % cursos.length],
  ];

  return (
    <div className="modal-overlay" onWheel={handleScroll}>
      <div className="modal-content carousel-modal">
        <h2 className="modal-title">Selecciona un curso</h2>
        <div className="carousel-container">
          {visibleCursos.map((curso, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 1 ? "active" : "inactive"}`}
              onClick={() => {
                if (index === 1) {
                  onSelectCurso(curso);
                  onClose();
                }
              }}
            >
              {curso.nombre}
            </div>
          ))}
        </div>
        <button className="modal-close" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default CarouselModal;