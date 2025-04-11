import React from "react";
import MathRenderer from "./MathRenderer";
import "../styles/equations.css";

const LongitudEq = () => {
    return (
    <>
        <h3>Longitud Equivalente L<sub>e</sub>:</h3>
        <p>Otra forma menos exacta aunque más práctica de calcular las pérdidas localizadas, es mediante el
        método de las longitudes equivalentes. Conceptualmente se entiende como el reemplazo del accesorio –en
        el esquema matemático de cálculo- por un tramo de cañería de igual diámetro al de la conducción y con
        una longitud llamada equivalente que provoca la misma pérdida de carga que el accesorio.
        La relación entre ambos métodos, a partir de la ecuación de Darcy Weisbach es:</p>
        <div className='equation-container'>
            <MathRenderer math={"\\Delta H_f=f\\cdot\\frac{L}{D}\\frac{V^2}{2g}=K_p \\frac{V^{2}}{2g}"}/>
            <MathRenderer math={"\K_p=f\\cdot\\frac{L_e}{d}\\Longrightarrow L_e=\\frac{K_p}{f}\\cdot d"}/>
        </div>
        <div className='variables-container'>
            <p>Donde:</p>
            <ul>
                <li><MathRenderer math={"\L_{e}"}/>: es la longitud equivalente (m)
                </li>
                <li><MathRenderer math={"\K_{P}"}/>: coeficiente adimencional
                </li>
                <li><MathRenderer math={"\{f}"}/>: el factor de fricción adimensional
                </li>
                <li><MathRenderer math={"\D"}/>: es el diámetro de la tubería(m)
                </li>
            </ul>
        </div>
    </>
    );
};

export default LongitudEq;
