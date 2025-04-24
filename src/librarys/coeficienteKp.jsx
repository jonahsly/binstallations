import React, { useState } from "react";
import MathRenderer from "./MathRenderer";
import "./equations.css";

const CoeficienteKp = () => {
    const [result, setResult] = useState({ dhl: "" });
    const handleCalcular = () => {
        const KP = parseFloat(document.getElementById("kP").value) || 0;
        const V = parseFloat(document.getElementById("velkP").value) || 0;
    
        let dhl = KP * V * V / ( 2 * 9.81 );
        setResult({ dhl: dhl.toFixed(2) });
    };
    return (
    <>
        <h3>Coeficiente de Resistencia K<sub>P</sub>:</h3>
        <p>Con este método, las pérdidas localizadas se calculan como fracción de la energía cinética,
            inmediatamente aguas abajo del punto donde se producen. De la hidráulica se sabe que las pérdidas
            localizadas se pueden determinar con la expresión:</p>
        <div className='equation-container'>
            <MathRenderer math={"\\Delta H_l = K_p \\frac{V^{2}}{2g}"}/>
        </div>
        <div className='variables-container'>
            <p>Donde:</p>
            <ul>
                <li><MathRenderer math={"\K_{P}"}/>: coeficiente adim. que depende del accesorio
                </li>
                <li><MathRenderer math={"\V"}/>: es la velocidad media del agua (m/s)
                </li>
            </ul>
        </div>
        <div className="method-container">
            <h4>Calcular la perdida localizada:</h4>
            <div className="input-container">
                <label>Coeficiente <MathRenderer math={"\K_{P}"}/>:</label>
                    <input id="kP" placeholder="0"/>
                <label>Velocidad :</label>
                    <input id="velkP" placeholder="0 m/s"/>
            </div>
            <div className="calculate-container">
                <span style={{ cursor: "pointer", color: "blue" }} onClick={handleCalcular}>
                    Calcular
                </span>
                <div>Pérdida de carga: <MathRenderer math={"\\Delta H_l = "}/> = {result.dhl} (mca)</div>
            </div>
        </div> 
    </>
    );
};

export default CoeficienteKp;
