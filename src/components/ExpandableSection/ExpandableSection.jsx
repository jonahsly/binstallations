import React from 'react';
import './ExpandableSection.css';

const ExpandableSection = ({ title, isActive, onClick, children }) => {
  return (
    <div className={`expandable-section ${isActive ? 'active' : ''}`}>
      <div className="section-header" onClick={onClick}>
        <h3>{title}</h3>
      </div>
      {isActive && <div className="section-content" >{children}</div>}
    </div>
  );
};

export default ExpandableSection;