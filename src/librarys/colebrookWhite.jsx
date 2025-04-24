import React, { useState } from "react";
import MathRenderer from "./MathRenderer";
import "./equations.css";

const ColebrookWhite = () => {
    const [result, setResult] = useState({  V: "", re: "", f: "" });

    const handleCalcular = () => {
        const Q = parseFloat(document.getElementById("caudal").value);
        const ε = parseFloat(document.getElementById("rugosidad").value);
        const D = parseFloat(document.getElementById("diámetro").value);
        
        let V = (1000 * (4 * Q) /(Math.PI * D * D) );
        let re = (V * D / (0.000001004 * 1000) );
        let f = 0.001;
        let a = 1;
        let b = 0.001;
        let error = 1;

        while (error > 0.0001) {
            let c = (a + b) / 2;
            let fa = 1 / Math.sqrt(c);
            let fb = -2 * Math.log10((ε / (3.7 * D)) + (2.51 / (re * Math.sqrt(c))));
            if ((fa - fb) > 0) {
                b = c
            } else {
                a = c
            };
            f = c;
            error = Math.abs(fa - fb);
        }
        setResult({ f: f.toFixed(4), V: V.toFixed(2), re: re.toFixed(2) });
    };

    return (
    <>
        <h3>Ecuación de Colebrook-White</h3>
        <div className='equation-container'>
            <MathRenderer math={"\\frac{1}{\\sqrt{f}} = -2 \\log_{10}\\left(\\frac{\\varepsilon}{3.7\\,D} + \\frac{2.51}{Re\\,\\sqrt{f}}\\right)"}/>
        </div>
        <div className='variables-container'>
            <p>Donde:</p>
            <ul>
                <li><MathRenderer math={"\{f}"}/>: es el factor de fricción adimensional
                </li>
                <li><MathRenderer math={"\\varepsilon"}/>: es la rugosidad absoluta (m).
                </li>
                <li><MathRenderer math={"\D"}/>: es el diámetro (m).
                </li>
                <li><MathRenderer math={"\Re"}/>: es el número de Reynolds.
                </li>
            </ul>
            <p>A su vez:</p>
            <MathRenderer math={"\Re  = \\frac{ V \\cdot D }{ υ }"} />
            <ul>
                <li><MathRenderer math={"\V"}/>: velocidad media del agua (m/s)
                </li>
                <li><MathRenderer math={"\υ"}/>: vizcosidad cinemática del agua (m²/s).
                </li>
            </ul>
            <p>
                Adoptando <MathRenderer math={"\υ"}/> ≃ 1,004 × 10⁻⁶ m²/s, se puede obtener el valor
                de <MathRenderer math={"\{f}"}/> partiendo del caudal simultáneo que circulará por la
                cañería, la rugosidad y el diámetro de la misma.
            </p>
        </div>
        <div className="method-container">
            <h4>Calcular el Factor de Fricción</h4>
            <div className="input-container">
                <label>Caudal (lts/s):</label>
                    <input id="caudal" placeholder="0"/>
                <label>Rugosidad (mm):</label>
                    <input id="rugosidad" placeholder="0" />
                <label>Diámetro (mm):</label>
                    <input id="diámetro" placeholder="0" />
            </div>
            <div className="calculate-container">
                <span style={{ cursor: "pointer", color: "blue" }} onClick={handleCalcular}>
                    Calcular
                </span>
                <div>Velocidad: <MathRenderer math={"\V"}/> = {result.V} (m/s)</div>
                <div>N° de Reynolds: <MathRenderer math={"\Re"}/> = {result.re}</div>
                <div>Factor de fricción: <MathRenderer math={"\{f}"}/> = {result.f}</div>
            </div>
        </div>
    </>
    );
};

export default ColebrookWhite;
