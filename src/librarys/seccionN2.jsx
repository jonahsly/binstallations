import React from "react";
import MathRenderer from "./MathRenderer";
import "../styles/equations.css";

const SeccionN2 = () => {
    return (
    <>
        <h4>Sección Límite para Bajadas</h4>
        <p>Si denominamos D<sub>i</sub> a un diámetro interno cualquiera, D<sub>i+1</sub> será el
        diámetro inmediato superior y S<sub>i</sub>, S<sub>i+1</sub>, las secciones reales
        correspondientes, entonces la sección límite para el diámetro D<sub>i</sub> es:</p>
        <div className='equation-container'>
            <MathRenderer math={"\S_{Límite}=S_{i}+\\frac{S_{i+1}-S_{i}}{3}"}/>
        </div>
        <h4>Sección Límite para Colectores y Puentes de Empalme</h4>
        <p>Si denominamos Di a un diámetro interno cualquiera, Di+1 será el diámetro inmediato superior y Si, Si+1, las secciones reales
            correspondientes:
            La Sección Límite para el Diámetro Di, es:</p>
        <div className='equation-container'>
            <MathRenderer math={"\S_{Límite}=S_{i}+\\frac{S_{i+1}-S_{i}}{4}"}/>
        </div>
        <p>Con este procedimiento se pueden determinar las secciones límites para cualquier sistema de cañerías, conociendo sus
        diámetros internos.</p>
        <h4>Sección Necesaria de Colectores y Puentes de Empalme</h4>
        <p>La sección necesaria depende de las secciones de las bajadas. Como sección de bajada se
            adopta el menor valor entre la sección teórica y la sección adoptada (la del sistema).</p>
        <>Para dos bajadas:</>
        <div className='equation-container'>
            <MathRenderer math={"\S_{Necesaria}=S_{1}+S_{2}"}/>
        </div>
        <>Para más de dos bajadas:</>
        <div className='equation-container'>
            <MathRenderer math={"\S_{Necesaria}=S_{Mayor}+\\frac{1}{2}[(\\sum S_{i})-S_{Mayor}]"}/>
        </div>
        <p>Calculada la sección necesaria, la asignación del diámetro se hace con la cañería cuya
            sección límite sea mayor o igual que la sección necesaria.</p>
    </>
    );
};

export default SeccionN2;
