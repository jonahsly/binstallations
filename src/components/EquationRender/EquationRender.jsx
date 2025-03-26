// EquationRenderer.jsx
import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const EquationRenderer = ({ equation }) => {
  let renderedEquation = '';
  try {
    renderedEquation = katex.renderToString(equation, {
      throwOnError: false,
    });
  } catch (error) {
    renderedEquation = 'Error en la ecuación';
  }

  return (
    <div
      className="equation-renderer"
      dangerouslySetInnerHTML={{ __html: renderedEquation }}
    />
  );
};

export default EquationRenderer;
