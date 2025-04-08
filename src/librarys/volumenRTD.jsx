import React, { useState } from "react";
import MathRenderer from "../components/EquationRender/MathRenderer";
import "./calculateLibrary.css";

const VolumenRTD = () => {
    const [result, setResult] = useState({ RTD: "", VTR: "", VTB: "" });
    const handleCalcular = () => {
        const case1 = document.getElementById("case1").value;
        const case2 = document.getElementById("case2").value;
        const quan1 = parseFloat(document.getElementById("input1").value) || 0;
        const quan2 = parseFloat(document.getElementById("input2").value) || 0;
        const quan3 = parseFloat(document.getElementById("input3").value) || 0;
        const quan4 = parseFloat(document.getElementById("input4").value) || 0;

        console.log(case1);
        let RTD = 0;

        if (case1 === "viviend") {
            const multiplier = case2 === "directa" ? 850 : case2 === "bombeo" ? 600 : 0;

        console.log(multiplier);

            RTD = multiplier * quan1;
        } else if (case1 === "oficinas") {
            RTD =
                case2 === "directa"
                ? 350 * quan2 + 250 * quan3 + 150 * quan4
                : case2 === "bombeo"
                ? 250 * quan2 + 150 * quan3 + 100 * quan4
                : 0;
        };
        const VTR = RTD * (1 / 3);
        const VTB = RTD * (1 / 5);

        setResult({ RTD, VTR: VTR.toFixed(0), VTB: VTB.toFixed(0) });
    };
    
    return (
    <>
        <h3>Valores mínimos de Reserva en T.B. y T.R.</h3>
        <div className='equation-container'>
            <MathRenderer math={"\Vol_{TB} \\geq  \\frac{1}{5} \\cdot RTD"}/>
            <MathRenderer math={"\Vol_{TR} \\geq  \\frac{1}{3} \\cdot RTD"}/>
        </div>
        <div className='variables-container'>
            <p>Donde:</p>
            <ul>
                <li><MathRenderer math={"\RTD"}/>: es la reserva total diária (lts).
                </li>
                <li><MathRenderer math={"\Vol_{TB}"}/>: es el volumen del tanque de bombeo (lts).
                </li>
                <li><MathRenderer math={"\Vol_{TR}"}/>: es el volumen del tanque de reserva (lts).
                </li>
            </ul>
        </div>
        <div className="method-container">
            <h4>Calcular la RTD y volúmenes mínimos:</h4>
            <div className="select-container">
                <select id="case1">
                <option value="0">Caso</option>
                <option value="viviendas">Viviendas</option>
                <option value="oficinas">Oficinas</option>
                </select>
                <select id="case2">
                <option value="0">Provisión</option>
                <option value="directa">Directa</option>
                <option value="bombeo">Bombeo</option>
                </select>
            </div>
            <div className="input-container">
                <label>N° de Viviendas:</label>
                    <input id="input1" placeholder="0"/>
                <label>Cant. Baños/Toillete:</label>
                    <input id="input2" placeholder="0"/>
                <label>Cant. Mingitorios:</label>
                    <input id="input3" placeholder="0"/>
                <label>Cant. Lav./Piletas</label>
                    <input id="input4" placeholder="0"/>
            </div>
            <div className="calculate-container">
                <span onClick={handleCalcular}>
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

export default VolumenRTD;
