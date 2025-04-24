import React from "react";
import MathRenderer from "./MathRenderer";
import "./equations.css";

const CaudalInst = () => {
    return (
    <>
        <h3>Caudal Instalado Q<sub>t</sub>:</h3>
        <p>Se define como Caudal Instalado a la sumatoria de los consumos asignados a los artefactos sanitarios,
        que son alimentados por el tramo que se considere.</p>
        <div className='equation-container'>
            <MathRenderer math={"Q_t = \\displaystyle\\sum_{i=1}^{n} Q_{ti}"}/>
        </div>
        <div className='variables-container'>
            <p>Donde:</p>
            <ul>
                <li><MathRenderer math={"Q_{ti}"}/>: es el caudal del artefacto
                </li>
                <li><MathRenderer math={"n"}/>: es el número de artefactos
                </li>
            </ul>
        </div>
    </>
    );
};

export default CaudalInst;
