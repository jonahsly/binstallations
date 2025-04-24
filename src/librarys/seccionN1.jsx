import React from "react";
import MathRenderer from "./MathRenderer";
import "./equations.css";

const SeccionN1 = () => {
    return (
    <>
        <div className='equation-container'>
            <MathRenderer math={"\S_{Necesaria}\\leqslant S_{Límite}"}/>
        </div>
    </>
    );
};

export default SeccionN1;
