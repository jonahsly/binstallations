// EquationRenderer.jsx
import React from 'react';
import MathRenderer from './MathRenderer';
import "./EquationRender.css"

const EquationRenderer = ({ equation }) => {
  return (
    <>
      <div className='equation-container'>
        {equation.expressions.map(varName => (
            <div className="variable-name">
              <MathRenderer math={varName}/>
            </div>
          ))}
      </div>
      <div className='variables-container'>
        <p>Donde:</p>
        {equation.variables.map(varName => (
            <div className="variable-name">{varName}</div>
          ))}
      </div>
      <div className='constants-container'>
        {equation.constants.map(varName => (
            <div className="constant-name">{varName}</div>
          ))}
      </div>
      <div className="method-container">
        {equation.calculate}
      </div>
    </>
  );
};

export default EquationRenderer;
