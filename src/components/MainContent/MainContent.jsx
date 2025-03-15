import { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import ExpandableSection from '../ExpandableSection/ExpandableSection';
import './MainContent.css';

const MainContent = () => {
  const { selectedTheme } = useAppContext();
  const sections = getSectionsByTheme(selectedTheme);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="main-content">
      {sections.map((section, index) => (
        <ExpandableSection
          key={index}
          title={section.title}
          isActive={activeIndex === index}
          onClick={() => handleToggle(index)}
        >
          {section.content}
        </ExpandableSection>
      ))}
    </div>
  );
};

const getSectionsByTheme = (theme) => {
  switch (theme) {
    case 'tema1':
      return [
        { title: 'Introducción', content: <p>Contenido introductorio.</p> },
        { title: 'Detalles técnicos', content: <img src="https://via.placeholder.com/400x200" alt="imagen" /> },
        { title: 'Video demostrativo', content: <video controls src="https://www.w3schools.com/html/mov_bbb.mp4" width="400" /> },
      ];
    case 'tema2':
      return [
        { title: 'Resumen', content: <p>Resumen del tema 2.</p> },
        { title: 'Galería', content: <img src="https://via.placeholder.com/400x200" alt="galeria" /> },
        { title: 'Notas', content: <p>Notas adicionales.</p> },
      ];
    default:
      return [];
  }
};

export default MainContent;