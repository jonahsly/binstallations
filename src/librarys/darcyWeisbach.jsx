import React, { useState } from "react";
import MathRenderer from "./MathRenderer";
import "./equations.css";

const DarcyWeisbach = () => {
    const [result, setResult] = useState({ dhf: "" });
    const handleCalcular = () => {
        const A = parseFloat(document.getElementById("factor").value) || 0;
        const B = parseFloat(document.getElementById("longitud").value) || 0;
        const C = parseFloat(document.getElementById("diam1").value) || 0;
        const D = parseFloat(document.getElementById("veloc").value) || 0;
    
        let dhf = A * B * D * D / ( C * 2 * 9.81 );
        setResult({ dhf: dhf.toFixed(2) });
    };
    return (
    <>
        <h3>Ecuación de Darcy-Weisbach</h3>
        <div className='equation-container'>
            <MathRenderer math={"\\Delta H_f = f \\cdot \\frac{L}{D} \\cdot \\frac{V^2}{2g}"}/>
        </div>
        <div className='variables-container'>
            <p>Donde:</p>
            <ul>
                <li><MathRenderer math={"\{f}"}/>: es el factor de fricción adimensional
                </li>
                <li><MathRenderer math={"\L"}/>: es la longitud de la cañería (m)
                </li>
                <li><MathRenderer math={"\D"}/>: es el diámetro de la tubería(m)
                </li>
                <li><MathRenderer math={"\V"}/>: es la velocidad media del agua (m/s)
                </li>
                <li><MathRenderer math={"\g"}/>: la acc. de la gravedad (m/s2)
                </li>
            </ul>
        </div>
        <div className="method-container">
            <h4>Calcular la pérdida de carga por fricción:</h4>
            <div className="input-container">
                <label>Factor de fricción:</label>
                <input id="factor" placeholder="0"/>
                <label>Longitud (m):</label>
                <input id="longitud" type="text" placeholder="0" />
                <label>Diámetro (m):</label>
                <input id="diam1" type="text" placeholder="0" />
                <label>Velocidad (m/s)</label>
                <input id="veloc" type="text" placeholder="0" />
            </div>
            <div className="calculate-container">
                <span style={{ cursor: "pointer", color: "blue" }} onClick={handleCalcular}>
                    Calcular
                </span>
                <div>Pérdida de carga: <MathRenderer math={"\\Delta H_f"}/> = {result.dhf} (mca)</div>
            </div>
        </div>
    </>
    );
};

export default DarcyWeisbach;
