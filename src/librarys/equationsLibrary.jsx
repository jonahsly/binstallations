import React from "react";
import { VolRTDCalculate, DarcyWeisbachCalculate } from "./calculateLibrary";

const equationsLibrary = {
    //Reserva Total Diaria
    volRTD: {
        expressions: [
            "\Vol_{TR} \\geq  \\frac{1}{3} \\cdot RTD",
            "\Vol_{TB} \\geq  \\frac{1}{5} \\cdot RTD",],
        variables: [
            "RTD: Reserva total diaria",
            <div>Vol<sub>TR</sub>: volumen del tanque de reserva</div>,
            <div>Vol<sub>TB</sub>: volumen del tanque de bombeo</div>],
        constants: [],
        calculate: <VolRTDCalculate/>,
    },
    // Darcy-Weisbach
    darcyWeisbach: {
        expressions: ["\\Delta h_f = f \\cdot \\frac{L}{D} \\cdot \\frac{V^2}{2g}"],
        variables: [
            <>∆h<sub>f</sub>: pérdida de carga</>,
            "f: factor de fricción",
            "L: longitud de la tubería",
            "D: diámetro de la tubería",
            "V: velocidad media del agua",
            ],
        constants: ["g: aceleración de l gravedad"],
        calculate: <DarcyWeisbachCalculate/>,
    },
    // Colebrook-White
    colebrookWhite: {
        expression: "\\frac{1}{\\sqrt{f}} = -2 \\log_{10}\\left(\\frac{\\varepsilon}{3.7\\,D} + \\frac{2.51}{Re\\,\\sqrt{f}}\\right)",
        variables: ["Re", "ε", "D"],
        constants: {coef1: 3.7, coef2: 2.51},
        calculate: '',
    },
    // Hazen-Williams
    hazenWilliams: {
        expression: "h_f = 10.67 \\frac{L\\,Q^{1.852}}{C^{1.852}\\,D^{4.87}}",
        variables: ["L", "Q", "D", "C"],
        constants: {coef: 10.67, exponentQ: 1.852, exponentD: 4.87},
        calculate: '',
    },
    // Ecuación de Continuidad
    continuity: {
        expression: "$Q = A \\cdot V$",
        variables: ["A", "V"],
        constants: {},
        calculate: '',
    },
    // Ecuación de Bernoulli
    bernoulli: {
        expression: "$P_1 + 0.5\\,\\rho\\,V_1^2 + \\rho\\,g\\,z_1 = P_2 + 0.5\\,\\rho\\,V_2^2 + \\rho\\,g\\,z_2$",
        variables: ["P1", "ρ", "V1", "z1", "P2", "V2", "z2", "g"],
        constants: {},
        calculate: '',
    },
    // Ecuación para calcular el Diámetro de una tubería
    diameter: {
        expression: "$D = \\sqrt{\\frac{4\\,Q}{\\pi\\,V}}$",
        variables: ["Q", "V"],
        constants: {},
        calculate: '',
    },
    
};

export {equationsLibrary};
  








const equations = {
    
    
    
  
  
  
  };
  
  // Componente que exporta el objeto de ecuaciones
  // Este componente no renderiza nada en la interfaz, pero actúa como contenedor central
  // que puede ser importado en otros componentes para renderizar, editar y calcular
  // cualquiera de sus parámetros.
  const EquationLibrary = () => {
    return null;
  };
  
  export { equations, EquationLibrary };
  