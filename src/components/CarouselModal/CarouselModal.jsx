import React, { useEffect, useRef, useState } from "react";
import "./CarouselModal.css";

const pages = [
  { id: "sanitaria", label: "Instalacion Sanitaria" },
  { id: "incendio", label: "Instalacion contra Incendio" },
  { id: "gas", label: "Instalacion de Gas" },
];

const SWIPE_THRESHOLD = 30;

const CarouselModal = ({ options = pages, selectedOption = "sanitaria", onSelect, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(() => {
    const initialIndex = options.findIndex((option) => option.id === selectedOption);
    return initialIndex >= 0 ? initialIndex : 0;
  });
  const touchStartYRef = useRef(null);
  const touchMovedRef = useRef(false);

  const total = options.length;
  const prev = (currentIndex - 1 + total) % total;
  const next = (currentIndex + 1) % total;

  useEffect(() => {
    const nextIndex = options.findIndex((option) => option.id === selectedOption);
    if (nextIndex >= 0) setCurrentIndex(nextIndex);
  }, [options, selectedOption]);

  const moveUp = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  const moveDown = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") moveUp();
      if (event.key === "ArrowDown") moveDown();
      if (event.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, total]);

  const handleWheel = (event) => {
    event.preventDefault();
    if (event.deltaY > 0) moveDown();
    else moveUp();
  };

  const handleTouchStart = (event) => {
    touchStartYRef.current = event.touches[0]?.clientY ?? null;
    touchMovedRef.current = false;
  };

  const handleTouchMove = (event) => {
    if (touchMovedRef.current || touchStartYRef.current == null) return;

    const currentY = event.touches[0]?.clientY;
    if (typeof currentY !== "number") return;

    const deltaY = touchStartYRef.current - currentY;
    if (Math.abs(deltaY) < SWIPE_THRESHOLD) return;

    if (deltaY > 0) moveDown();
    else moveUp();

    touchMovedRef.current = true;
  };

  const handleTouchEnd = () => {
    touchStartYRef.current = null;
    touchMovedRef.current = false;
  };

  const handleSelectCurrent = () => {
    const selected = options[currentIndex];
    if (selected) onSelect?.(selected.id);
  };

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="Seleccion de curso">
      <button type="button" className="close-btn" onClick={onClose} aria-label="Cerrar modal">
        ×
      </button>
      <div
        className="menu-wrapper"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="menu-container">
          <button type="button" className="menu-option inactive" onClick={moveUp}>
            {options[prev]?.label}
          </button>
          <button type="button" className="menu-option active" onClick={handleSelectCurrent}>
            {options[currentIndex]?.label}
          </button>
          <button type="button" className="menu-option inactive" onClick={moveDown}>
            {options[next]?.label}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselModal;
