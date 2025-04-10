import React, { useState } from "react";
import MathRenderer from "./MathRenderer";
import "../styles/equations.css";

const HazenWilliams = () => {
    const [result, setResult] = useState({ hf: "" });
    const handleCalcular = () => {
        const Q = parseFloat(document.getElementById("cuadalH").value) || 0;
        const L = parseFloat(document.getElementById("longH").value) || 0;
        const D = parseFloat(document.getElementById("diamH").value) || 0;
        const C = parseFloat(document.getElementById("coefC").value) || 0;

        if (C === 0 || D === 0) {
            setResult({ hf: "Valores no válidos" });
            return;
        };

        const hf = 10.67 * L * Math.pow(Q, 1.852) / (Math.pow(C, 1.852) * Math.pow(D, 4.87));
        setResult({ hf: hf.toFixed(5) });
    };
    return (
    <>
        <h3>Ecuación de Hazen-Williams:</h3>
        <div className='equation-container'>
            <MathRenderer math={"\\Delta H_f = 10.61 \\frac{L}{D^{4.87}} \\cdot \\,(\\frac{Q}{C})^{1.85} "}/>
        </div>
        <div className='variables-container'>
            <p>Donde:</p>
            <ul>
                <li><MathRenderer math={"\Q"}/>: caudal de la tubería (m3/s)
                </li>
                <li><MathRenderer math={"\L"}/>: longitud de la cañería (m)
                </li>
                <li><MathRenderer math={"\D"}/>: es el diámetro (m)
                </li>
                <li><MathRenderer math={"\C"}/>: factor adimensional según el tipo de material
                </li>
            </ul>
        </div>
        <div className="method-container">
            <h4>Calcular la pérdida de carga por fricción:</h4>
            <div className="input-container">
                <label>Caudal (m3/s): </label>
                    <input id="caudalH" type="text" placeholder="0" />
                <label>Longitud (m): </label>
                    <input id="longH" type="text" placeholder="0" />
                <label>Diámetro (m): </label>
                    <input id="diamH" type="text" placeholder="0" />
                <label>Coef. C: </label>
                    <input id="coefC" type="text" placeholder="0" />
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

export default HazenWilliams;
