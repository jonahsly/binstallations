import React from "react";
import MathRenderer from "./MathRenderer";
import "../styles/equations.css";

const PresionRes = () => {
    return (
    <>
        <h3>Presión Residual o Piezométrica</h3>
          Cada artefacto sanitario funciona adecuadamente dentro de un rango de presiones,
          definido por un umbral que es la presión mínima que asegure el caudal requerido
          por el artefacto. La presión residual (también llamada presión dinámica)
          H<sub>r</sub> es la Presión resultante en la válvula del artefacto, cuando circula
          en ese punto, el caudal requerido por el artefacto.<br/><br/>
        
        <div className='equation-container'>
            <MathRenderer math={"\P_{disp} = \\Delta H_{top} \\geqslant Σ (\\Delta H_{f} + \\Delta H_{l}) + H_{r}"}/>
        </div>
        <div className='variables-container'>
            <p>Donde:</p>
            <ul>
                <li><MathRenderer math={"\P_{disp}"}/>: es la presión disponible (mca)
                </li>
                <li><MathRenderer math={"\\Delta H_{top}"}/>: es el desnivel topográfico (m)
                </li>
                <li><MathRenderer math={"\\Delta H_{f}"}/>: es la pérdida de carga por fricción (m)
                </li>
                <li><MathRenderer math={"\\Delta H_{l}"}/>: es la pérdida de carga localizada (m)
                </li>
                <li><MathRenderer math={"\\Delta H_{r}"}/>: es la presión residual (m)
                </li>
            </ul>
        </div> 
    </>
    );
};

export default PresionRes;
