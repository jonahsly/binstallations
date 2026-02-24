import React from 'react';
import './ExpandableSection.css';

type ExpandableSectionProps = {
  title: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  children?: React.ReactNode;
};

const ExpandableSection: React.FC<ExpandableSectionProps> = ({ title, isActive, onClick, children }) => {
  return (
    <div className={`expandable-section ${isActive ? 'active' : ''}`}>
      <div className="section-header" onClick={onClick}>
        <h3>{title}</h3>
      </div>
      {isActive && <div className="section-content">{children}</div>}
    </div>
  );
};

export default ExpandableSection;

