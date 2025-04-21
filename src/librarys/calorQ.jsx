import React from "react";
import MathRenderer from "./MathRenderer";
import "../styles/equations.css";

const CalorQ = () => {
    return (
    <>
        <p>Recordemos la expresión fundamental para que el agua aumente de temperatura por efecto de la
        adición de calor:</p>
        <div className='equation-container'>
            <MathRenderer math={"Q=C_e M \\Delta t"}/>
        </div>
        <div className='variables-container'>
            <p>Donde:</p>
            <ul>
                <li><MathRenderer math={"\Q"}/>: es la cantidad de calor suministrado (kcal)
                </li>
                <li><MathRenderer math={"\C_e = 1 [\\frac{kcal}{kg\\cdot°C}]"}/>: calor específico del agua 
                </li>
                <li><MathRenderer math={"\M"}/>: es la masa de agua a la que se le cuministra calor (kg)
                </li>
                <li><MathRenderer math={"\\Delta t"}/>: es el salto térmico (°C)
                </li>
            </ul>
        </div>
        <p>Si se adopta que 1 kg de agua ocupa un columen de 1 lits, entonces:</p>
        <div className='equation-container'>
            <MathRenderer math={"C_e = 1 [\\frac{kcal}{kg\\cdot°C}] = 1 [\\frac{kcal}{lts\\cdot°C}]"}/>
            <MathRenderer math={"Q=C_e V \\Delta t"}/>
        </div>
        <p>Donde: <MathRenderer math={"\V"}/> es el volumen de agua (lts)</p>
        <h4>Potencia Útil</h4>
        <p>Se define como la cantidad de calor por unidad de tiempo que el artefacto productor de
            calor le entrega al caudal de agua, para que esta aumente su temperatura en ∆t</p>
        <div className='equation-container'>
            <MathRenderer math={"P_U=\\frac{Q}{t}=\\frac{C_e V \\Delta t}{t}=C_e C \\Delta t"}/>
        </div>
        <div className='variables-container'>
            <p>Donde:</p>
            <ul>
                <li><MathRenderer math={"\P_U"}/>: es la potencia útil (kcal/hr)
                </li>
                <li><MathRenderer math={"\C"}/>: es el caudal de agua (lts/hr) 
                </li>
            </ul>
        </div>
        <h4>Potencia Nominal</h4>
        <p>Es la cantidad de calor por unidad de tiempo, consumida por el artefacto productor de
            calor (o suministrada por el combustible) para que el caudal de agua aumente su
            temperatura en ∆t. Si se considera que el artefacto productor de agua caliente,
            tiene un rendimiento en la transferencia de calor menor que la unidad:</p>
        <div className='equation-container'>
            <MathRenderer math={"P_N=\\frac{P_U}{η}=\\frac{C_e C \\Delta t}{η}"}/>
        </div>
        <div className='variables-container'>
            <p>Donde:</p>
            <ul>
                <li><MathRenderer math={"\P_N"}/>: es la potencia nominal (kcal/hr)
                </li>
                <li><MathRenderer math={"\η"}/>: es el rendimiento del artefacto
                </li>
            </ul>
        </div>
    </>
    );
};

export default CalorQ;
