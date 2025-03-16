import { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import ExpandableSection from '../ExpandableSection/ExpandableSection';
import './MainContent.css';

import tema1Content from '../../contents/tema1';
import tema2Content from '../../contents/tema2';
//import tema3Content from '../../contents/tema3';
//import tema4Content from '../../contents/tema4';
//import tema5Content from '../../contents/tema5';
//import tema6Content from '../../contents/tema6';
//import tema7Content from '../../contents/tema7';
//import tema8Content from '../../contents/tema8';
//import tema9Content from '../../contents/tema9';
//import tema10Content from '../../contents/tema10';
//import tema11Content from '../../contents/tema11';
//import tema12Content from '../../contents/tema12';

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
      return tema1Content;
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