import React from "react";
import MathRenderer from "./MathRenderer";
import "./equations.css";

const CurvaRecup = () => {
    return (
    <>
        <p>Partiendo de la expresión general del caudal:</p>
        <div className='equation-container'>
            <MathRenderer math={"\C_{recuperación}=\\frac{dV_{recuperación}}{dt} "}/>
        </div>
        <p>Despejando el diferencial de volumen e integrando respecto del tiempo se obtiene
            las curvas de recuperación y demanda de agua caliente.</p>
        <div className='equation-container'>
            <MathRenderer math={"\V_{recuperación}=\\int_{t_i}^{t_f}C_{recuperación}dt "}/>
            <MathRenderer math={"\V_{demanda}=\\int_{t_i}^{t_f}C_{demanda}dt "}/>
        </div>
        <div className='variables-container'>
            <p>Donde:</p>
            <ul>
                <li><MathRenderer math={"V_{recuperación}"}/>: es el volumen acumulado de
                recuperación de a.c. al final del periodo (t<sub>f</sub>)</li>
                <li><MathRenderer math={"V_{demanda}"}/>: es el volumen acumulado de
                demanda/consumo de a.c. al final del periodo (t<sub>f</sub>)</li>
                <li><MathRenderer math={"t_i"}/>: tiempo inicial del periodo</li>
                <li><MathRenderer math={"t_f"}/>: tiempo final del periodo</li>
                <li><MathRenderer math={"C_{recuperación}"}/>: caudal de recuperación de a.c.
                de la planta</li>
                <li><MathRenderer math={"C_{demanda}"}/>:caudal de demanda de a.c.
                de los artefactos de consumo</li>
            </ul>
        </div>
    </>
    );
};

export default CurvaRecup;
