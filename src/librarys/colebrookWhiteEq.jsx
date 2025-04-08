import React, { useState } from "react";
import "./calculateLibrary.css";
import MathRenderer from "../components/EquationRender/MathRenderer";

const ColebrookWhiteEq = () => {
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
                <li><MathRenderer math={"\{V}"}/>: velocidad media del agua (m/s)
                </li>
                <li><MathRenderer math={"\υ"}/>: vizcosidad cinemática del agua (m2/s).
                </li>
            </ul>
        </div>
        <div className="method-container">
            <h4>Calcular Pérdida de Carga por Fricción</h4>
            <div className="input-container">
            <label>factor de fricción</label>
            <input id="input1" placeholder="0"/>
            <label>longitud</label>
            <input id="input2" placeholder="0" />
            <label>diámetro</label>
            <input id="input3" placeholder="0" />
            <label>velocidad</label>
            <input id="input4" placeholder="0" />
            </div>
            <div className="calculate-container">
            <span style={{ cursor: "pointer", color: "blue" }} >
                Calcular
            </span>
            <div>∆h<sub>f</sub> ={}</div>
            </div>
        </div>
    </>
    );
};

export default ColebrookWhiteEq;
