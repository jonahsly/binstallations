import React, { useState, useEffect } from "react";
import "./CarouselModal.css";

const pages = ["isanitarias", "contra incendio", "inst. de gas", "ieléctrica","vias","otro curso","laminares"]

const CarouselModal = ({ options = pages, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = options.length;
  const prev = (currentIndex - 1 + total) % total;
  const next = (currentIndex + 1) % total;

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") moveUp();
    if (e.key === "ArrowDown") moveDown();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0) moveDown();
      else moveUp();
    };
    document.addEventListener("wheel", handleWheel);
    return () => document.removeEventListener("wheel", handleWheel);
  });

  const moveUp = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + options.length) % options.length);
  };

  const moveDown = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % options.length);
  };

  return (
    <div className="modal">
      <div className="close-btn" onClick={onClose}>✕</div>
      <div className="menu-wrapper">
        <div className="menu-container">
          <div className="menu-option inactive">{options[prev]}</div>
          <div className="menu-option active" >{options[currentIndex]}</div>
          <div className="menu-option inactive">{options[next]}</div>
        </div>
      </div>
    </div>
  );
};

export default CarouselModal;