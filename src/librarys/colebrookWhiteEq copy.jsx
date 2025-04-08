import React, { useState } from "react";
import "./calculateLibrary.css";
import MathRenderer from './MathRenderer';

const equation = {
    colWhite: {
        expressions: ["\\frac{1}{\\sqrt{f}} = -2 \\log_{10}\\left(\\frac{\\varepsilon}{3.7\\,D} + \\frac{2.51}{Re\\,\\sqrt{f}}\\right)"],
        variables: [
            "f: factor de fricción [adimensional]",
            "Re: número de Reynolds",
            "ε: rugosidad absoluta [m]",
            "D: diámetro de la tubería"
        ],
        constants: [],
        calculate: <VolRTDCalculate/>,
    },
};


function colebrookWhiteEq() {
    const [result, setResult] = useState({ f: "" });

    const handleCalcular = () => {
    // Se obtienen los valores de las entradas
    const epsilon = parseFloat(document.getElementById("input1").value);
    const ε = epsilon;
    const D = parseFloat(document.getElementById("input2").value);
    const d = D;
    const Re = parseFloat(document.getElementById("input3").value);
    const re = Re;

    console.log('hola');
    console.log(d);
    console.log(re);

    // Valor inicial para f y configuración de tolerancia para la convergencia
    let f = 0.001;
    let a = 1;
    let b = 0.001;
    let error = 1;
    let iterCount = 1;

    // Se itera hasta alcanzar la convergencia
    while (error > 0.00001) {
      
      console.log(iterCount);
      let c = (a + b) / 2;
      let fa = 1 / Math.sqrt(c);
      console.log(fa);
      let fb = -2 * Math.log10((ε / (3.7 * d)) + (2.51 / (re * Math.sqrt(c))));
      console.log(fb);
      if ((fa - fb) > 0) {
        b = c
      } else {
        a = c
      };
      f = c;
      console.log(f);
      error = Math.abs(fa - fb);
      iterCount = iterCount + 1;
    }
    setResult({ f: f.toFixed(4) });
  };



  return (
    <>


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



      <h4>Calcular Factor de Fricción (Colebrook-White)</h4>
      <div className="input-container">
        <label>Rugosidad (ε)</label>
        <input id="input1"  placeholder="0" />
        <label>Diámetro (D)</label>
        <input id="input2"  placeholder="0" />
        <label>Número de Reynolds (Re)</label>
        <input id="input3"  placeholder="0" />
      </div>
      <div className="calculate-container">
        <span
          style={{ cursor: "pointer", color: "blue" }}
          onClick={handleCalcular}
        >
          Calcular
        </span>
        <br />
        f = {result.f}
      </div>
    </>
  );
}

export default colebrookWhiteEq;





