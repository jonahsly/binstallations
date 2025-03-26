import React, { useState } from 'react';
import EquationRenderer from '../components/EquationRender/EquationRender';
import EquationEditor from '../components/EquationEditor/EquationEditor';

const equation1 = "y = m\\,x + b";
const ecuacionEjemplo = {
  formula: "y = mx + b",
  parametros: ["m", "b", "x"]
};



const tema5Content = [
    {
      id: "section1",
      title: "Reserva Total Diaria de agua potable (RTD)",
      content: 
      <div>
        <h2>Visualización de Ecuaciones</h2>
        <EquationRenderer equation={equation1} />
        <EquationEditor equation={ecuacionEjemplo}/>
      </div>,
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
      content: `Listado de casos prácticos o ejercicios.`,
      images: [],
      video: null
    }
  ];
  
  export default tema5Content;
  

  


