import React, { useState } from "react";
import MathRenderer from "./MathRenderer";
import "../styles/equations.css";

const CoeficienteKp = () => {
    const [result, setResult] = useState({ RTD: "", VTR: "", VTB: "" });
    const handleCalcular = () => {
        const case1 = document.getElementById("case1").value;
        const case2 = document.getElementById("case2").value;
        const q1 = parseFloat(document.getElementById("cant1").value) || 0;
        const q2 = parseFloat(document.getElementById("cant2").value) || 0;
        const q3 = parseFloat(document.getElementById("cant3").value) || 0;
        const q4 = parseFloat(document.getElementById("cant4").value) || 0;
        
        let RTD;
        if (case1 === "viviendas") {
            const multiplier = case2 === "directa" ? 850 : case2 === "bombeo" ? 600 : 0;
            RTD = multiplier * q1;
        } else if (case1 === "oficinas") {
            RTD =
                case2 === "directa"
                ? 350 * q2 + 250 * q3 + 150 * q4
                : case2 === "bombeo"
                ? 250 * q2 + 150 * q3 + 100 * q4
                : 0;
        };
        const VTR = RTD * (1 / 3);
        const VTB = RTD * (1 / 5);
        setResult({ RTD, VTR: VTR.toFixed(0), VTB: VTB.toFixed(0) });
    };
    return (
    <>
        <h3>Valores mínimos de Reserva en T.B. y T.R.</h3>
        <p>La Norma OSN establece el volumen de los tanques en base a las siguientes relaciones:</p>
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
                <label>N° de Viviendas:</label>
                    <input id="cant1" placeholder="0"/>
                <label>Cant. Baños/Toillete:</label>
                    <input id="cant2" placeholder="0"/>
                <label>Cant. Mingitorios:</label>
                    <input id="cant3" placeholder="0"/>
                <label>Cant. Lav./Piletas</label>
                    <input id="cant4" placeholder="0"/>
            </div>
            <div className="calculate-container">
                <span style={{ cursor: "pointer", color: "blue" }} onClick={handleCalcular}>
                    Calcular
                </span>
                <div>RTD = {result.RTD} lts.</div>
                <div>Vol<sub>TR</sub> ≥ {result.VTR} lts.</div>
                <div>Vol<sub>TB</sub> ≥ {result.VTB} lts.</div>
            </div>
        </div> 
    </>
    );
};

export default CoeficienteKp;
