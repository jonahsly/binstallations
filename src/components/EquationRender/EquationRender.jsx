// EquationRenderer.jsx
import React, { useState } from 'react';
import MathRenderer from './MathRenderer';

const EquationRenderer = ({ equation }) => {
  // Extraer los métodos de cálculo (aquellos cuyo nombre inicia con "calculate")
  const calcMethods = Object.keys(equation).filter(key => key.startsWith('calculate'));
  const [selectedMethod, setSelectedMethod] = useState(calcMethods[0] || null);

  // Por defecto, usamos la lista de variables definida en la ecuación.
  // Nota: En el caso de la ecuación de diámetro, si se elige el método "calculateFromArea"
  // se sobreentiende que la variable requerida es "A" en lugar de ["Q", "V"].
  let requiredVariables = equation.variables;
  if (equation.diameter && selectedMethod === 'calculateFromArea') {
    requiredVariables = ['A'];
  }

  // Estado para almacenar los valores ingresados para las variables
  const initialInputs = {};
  requiredVariables.forEach(varName => {
    initialInputs[varName] = '';
  });
  const [inputs, setInputs] = useState(initialInputs);

  // Estado para las constantes. Si el valor de la constante es un array, se permite elegir.
  const initialConsts = {};
  Object.keys(equation.constants).forEach(constKey => {
    const value = equation.constants[constKey];
    initialConsts[constKey] = Array.isArray(value) ? value[0] : value;
  });
  const [constInputs, setConstInputs] = useState(initialConsts);

  const [result, setResult] = useState(null);

  // Maneja el cambio de valor en los inputs de variables
  const handleInputChange = (e, varName) => {
    setInputs({
      ...inputs,
      [varName]: e.target.value
    });
  };

  // Maneja el cambio de selección en las constantes (si hay varias opciones)
  const handleConstChange = (e, constKey) => {
    setConstInputs({
      ...constInputs,
      [constKey]: e.target.value
    });
  };

  // Maneja el cambio del método de cálculo (o parámetro a calcular)
  const handleMethodChange = (e) => {
    setSelectedMethod(e.target.value);
    // Reiniciar los inputs según las variables requeridas por el método elegido.
    let newRequired = equation.variables;
    if (equation.diameter && e.target.value === 'calculateFromArea') {
      newRequired = ['A'];
    }
    const newInputs = {};
    newRequired.forEach(varName => {
      newInputs[varName] = '';
    });
    setInputs(newInputs);
    setResult(null);
  };

  // Función para ejecutar el cálculo
  const handleCalculate = () => {
    // Convertir cada input a número (se espera que la función de cálculo trabaje con números)
    const numInputs = requiredVariables.map(varName => parseFloat(inputs[varName]));
    // Si la función de cálculo utiliza internamente las constantes definidas en el objeto,
    // no es necesario pasarlas, pero se puede adaptar si fuera el caso.
    if (selectedMethod && typeof equation[selectedMethod] === 'function') {
      const calcResult = equation[selectedMethod](...numInputs);
      setResult(calcResult);
    }
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', marginBottom: '1rem' }}>
      {/* Renderizar la expresión LaTeX usando MathRenderer */}
      <div style={{ marginBottom: '1rem' }}>
        <MathRenderer math={equation.expression} />
      </div>

      {/* Variables y Constantes en dos columnas */}
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ flex: 1 }}>
          <h3>Variables</h3>
          {requiredVariables.map(varName => (
            <div key={varName} style={{ marginBottom: '0.5rem' }}>
              <label style={{ marginRight: '0.5rem' }}>{varName}:</label>
              <input
                type="number"
                value={inputs[varName]}
                onChange={(e) => handleInputChange(e, varName)}
              />
            </div>
          ))}
        </div>

        <div style={{ flex: 1 }}>
          <h3>Constantes</h3>
          {Object.keys(equation.constants).map(constKey => {
            const value = equation.constants[constKey];
            return (
              <div key={constKey} style={{ marginBottom: '0.5rem' }}>
                <label style={{ marginRight: '0.5rem' }}>{constKey}:</label>
                {Array.isArray(value) ? (
                  <select
                    value={constInputs[constKey]}
                    onChange={(e) => handleConstChange(e, constKey)}
                  >
                    {value.map((val, idx) => (
                      <option key={idx} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                ) : (
                  <span>{value}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <h3>Seleccionar método de cálculo</h3>
        {calcMethods.length > 1 ? (
          <select value={selectedMethod} onChange={handleMethodChange}>
            {calcMethods.map((method, idx) => (
              <option key={idx} value={method}>
                {method}
              </option>
            ))}
          </select>
        ) : (
          <div>{selectedMethod}</div>
        )}
      </div>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={handleCalculate}>Calcular</button>
      </div>

      {result !== null && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Resultado:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default EquationRenderer;
