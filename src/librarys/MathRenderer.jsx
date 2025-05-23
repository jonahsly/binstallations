// MathRenderer.jsx
import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const MathRenderer = ({ math }) => {
  const html = katex.renderToString(math, {
    throwOnError: false, // Evita errores en caso de que la expresión tenga algún inconveniente
  });
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MathRenderer;
