import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import ExpandableSection from '../ExpandableSection/ExpandableSection';
import './MainContent.css';

import tema1Content from '../../contents/tema1';
import tema2Content from '../../contents/tema2';
import tema3Content from '../../contents/tema3';
import tema4Content from '../../contents/tema4';
import tema5Content from '../../contents/tema5';
import tema6Content from '../../contents/tema6';

type ContentSection = {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

// Centralized theme map used by both content rendering and fallback checks.
const sectionsByTheme: Record<string, ContentSection[]> = {
  tema1: tema1Content,
  tema2: tema2Content,
  tema3: tema3Content,
  tema4: tema4Content,
  tema5: tema5Content,
  tema6: tema6Content,
};

const getSectionsByTheme = (theme: string): ContentSection[] => sectionsByTheme[theme] ?? [];

const MainContent: React.FC = () => {
  const { selectedCourse, selectedTheme } = useAppContext();
  const sections = getSectionsByTheme(selectedTheme);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Collapse open section when the user switches to a different theme.
  useEffect(() => {
    setActiveIndex(null);
  }, [selectedTheme]);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  if (selectedCourse !== 'sanitaria') {
    return (
      <div className="main-content">
        <section className="coming-soon-panel">
          <h2>Proximamente</h2>
          <p>El contenido de este curso aun no esta disponible.</p>
          <p>Selecciona "Instalaciones Sanitarias" desde el titulo para volver al material actual.</p>
        </section>
      </div>
    );
  }

  if (sections.length === 0) {
    return (
      <div className="main-content">
        <section className="coming-soon-panel">
          <h2>Contenido no disponible</h2>
          <p>El tema seleccionado todavia no tiene material publicado.</p>
        </section>
      </div>
    );
  }

  return (
    <div className="main-content">
      {sections.map((section, index) => (
        <ExpandableSection
          key={section.id}
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
