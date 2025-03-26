import React, { useState } from 'react';
import EquationRenderer from '../EquationRender/EquationRender';


const EquationEditor = ({ equation, parameters, calculateFunc, title }) => {
    // Estado para el parámetro seleccionado para calcular
    const [targetParam, setTargetParam] = useState("");
    
    // Estado para guardar los valores de los parámetros
    const initialValues = parameters.reduce((acc, param) => {
      acc[param] = "";
      return acc;
    }, {});
    const [values, setValues] = useState(initialValues);
    
    const [result, setResult] = useState(null);
  
    // Maneja el cambio en el select para elegir el parámetro a calcular
    const handleSelectChange = (e) => {
      setTargetParam(e.target.value);
      setResult(null);
    };
  
    // Maneja el cambio en los inputs de cada parámetro
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setValues(prevValues => ({ ...prevValues, [name]: value }));
    };
  
    // Ejecuta la función de cálculo pasándole el parámetro a calcular y los valores ingresados
    const handleCalculate = () => {
      if (!targetParam) {
        alert("Selecciona el parámetro a calcular.");
        return;
      }
      
      // Verifica que se hayan ingresado los valores para todos los parámetros necesarios
      const missingValues = parameters.filter(param => param !== targetParam && values[param] === "");
      if (missingValues.length > 0) {
        alert(`Faltan valores para: ${missingValues.join(", ")}`);
        return;
      }
      
      // Llama a la función de cálculo, que debe retornar el resultado
      const res = calculateFunc(targetParam, values);
      setResult(res);
    };
  
    return (
      <div>
        <h2>{title || "Editor de Ecuaciones"}</h2>
        
        {/* Renderiza la ecuación en formato LaTeX */}
        <div>
          <h3>Ecuación:</h3>
          <EquationRenderer equation={equation} />
        </div>
  
        {/* Lista de parámetros */}
        <div>
          <h3>Parámetros:</h3>
          <ul>
            {parameters.map(param => (
              <li key={param}>{param}</li>
            ))}
          </ul>
        </div>
  
        {/* Selección del parámetro a calcular */}
        <div>
          <h3>Selecciona el parámetro a calcular:</h3>
          <select value={targetParam} onChange={handleSelectChange}>
            <option value="">-- Selecciona --</option>
            {parameters.map(param => (
              <option key={param} value={param}>{param}</option>
            ))}
          </select>
        </div>
  
        {/* Muestra los inputs solo para los parámetros que no se quieren calcular */}
        {targetParam && (
          <div style={{ marginTop: "20px" }}>
            <h3>Ingresa los valores para los demás parámetros:</h3>
            {parameters.filter(param => param !== targetParam).map(param => (
              <div key={param}>
                <label htmlFor={param}>{param}: </label>
                <input
                  id={param}
                  name={param}
                  type="number"
                  value={values[param]}
                  onChange={handleInputChange}
                  placeholder={`Valor para ${param}`}
                />
              </div>
            ))}
            <button onClick={handleCalculate}>Calcular {targetParam}</button>
          </div>
        )}
  
        {/* Muestra el resultado del cálculo */}
        {result !== null && (
          <div style={{ marginTop: "20px" }}>
            <h3>Resultado:</h3>
            <p>{targetParam} = {result}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default EquationEditor;