import { React, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import ExpandableSection from '../ExpandableSection/ExpandableSection';
import './MainContent.css';

import tema1Content from '../../contents/tema1';
import tema2Content from '../../contents/tema2';
import tema3Content from '../../contents/tema3';
import tema4Content from '../../contents/tema4';
import tema5Content from '../../contents/tema5';
//import tema6Content from '../../contents/tema6';

const getSectionsByTheme = (theme) => {
  switch (theme) {
    case 'tema1':
      return tema1Content;
    case 'tema2':
      return tema2Content;
    case 'tema3':
      return tema3Content;
    case 'tema4':
      return tema4Content;
    case 'tema5':
        return tema5Content;
    default:
      return [];
  }
};

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


export default MainContent;