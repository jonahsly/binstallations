import React, { useState } from 'react';
import EquationRenderer from '../components/EquationRender/EquationRender';
import EquationEditor from '../components/EquationEditor/EquationEditor';

const equation1 = "y = m\\,x + b";

const ecuacionEjemplo = {
  equation: "y = m\\,x + b", // Ecuación en LaTeX
  parameters: ["m", "x", "y", "b"],

  // Función de cálculo para la ecuación lineal
  calcularLinea: (targetParam, values) => {
    // Convertir los valores ingresados a números
    const parsed = {};
    for (const key in values) {
      parsed[key] = parseFloat(values[key]);
    }
    if (targetParam === 'm') {
      if (parsed.x === 0) return "Error: x no puede ser 0";
      return (parsed.y - parsed.b) / parsed.x;
    } else if (targetParam === 'b') {
      return parsed.y - parsed.m * parsed.x;
    } else if (targetParam === 'x') {
      if (parsed.m === 0) return "Error: m no puede ser 0";
      return (parsed.y - parsed.b) / parsed.m;
    } else if (targetParam === 'y') {
      return parsed.m * parsed.x + parsed.b;
    } else {
      return "Parámetro desconocido";
    }
  },
};

const tema5Content = [
    {
      id: "section1",
      title: "Reserva Total Diaria de agua potable (RTD)",
      content: 'er',
    //  <div>
      //  <h2>Visualización de Ecuaciones</h2>
        //<EquationRenderer equation={equation1} />
  //      <EquationEditor equation={ecuacionEjemplo}
        
  //      parameters={parameters}
    //    calculateFunc={calcularLinea}
      //  title="Ecuación Lineal: y = m * x + b"
        
       // />
     // </div>,
    },

    {
      id: "section2",
      title: "Detalles Técnicos del Tema 1",
      content: 
      <div>
        <h2>Visualización de Ecuaciones</h2>
        <EquationRenderer equation={ecuacionEjemplo.formula} />
      </div>,
      images: [],
      video: null
    },
    {
      id: "section3",
      title: "Ejemplos Prácticos del Tema 1",
      content: <div>
      <EquationEditor
        equation={ecuacionEjemplo.equation}
        parameters={ecuacionEjemplo.parameters}
        calculateFunc={ecuacionEjemplo.calcularLinea}
      />
    </div>,
      images: [],
      video: null
    }
  ];
  
  export default tema5Content;
  

  


