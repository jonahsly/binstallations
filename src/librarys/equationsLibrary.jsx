import React from "react";
import { VolRTDCalculate, DarcyWeisbachCalculate } from "./calculateLibrary";

const equationsLibrary = {
    //Reserva Total Diaria
    volRTD: {
        expressions: [
            "\Vol_{TR} \\geq  \\frac{1}{3} \\cdot RTD",
            "\Vol_{TB} \\geq  \\frac{1}{5} \\cdot RTD",],
        variables: [
            "RTD: reserva total diaria",
            <div>Vol<sub>TR</sub>: volumen del tanque de reserva</div>,
            <div>Vol<sub>TB</sub>: volumen del tanque de bombeo</div>],
        constants: [],
        calculate: <VolRTDCalculate/>,
    },
    //Presión Disponible
    presDisp: {
        expressions: [
            "\P_{disp} = \\Delta H_{top} \\geqslant Σ (\\Delta H_{f} + \\Delta H_{l}) + H_{r}",],
        variables: [
            <>∆H<sub>top</sub>: presión estática disponible </>,
            <>∆H<sub>f</sub>: pérdida de carga por fricción </>,
            <>∆H<sub>l</sub>: pérdida de carga localizada </>,
            <>H<sub>r</sub>: resión residual</>],
        constants: [],
    },
    // Darcy-Weisbach
    darcyWeisbach: {
        expressions: ["\\Delta H_f = f \\cdot \\frac{L}{D} \\cdot \\frac{V^2}{2g}"],
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
        expressions: ["\\frac{1}{\\sqrt{f}} = -2 \\log_{10}\\left(\\frac{\\varepsilon}{3.7\\,D} + \\frac{2.51}{Re\\,\\sqrt{f}}\\right)"],
        variables: ["f", "Re", "ε", "D"],
        constants: [],
    },
    // Reynolds
   reyNolds: {
        expressions: ["\Re  = \\frac{ V \\cdot d }{ υ }"],
        variables: ["V", "d", "υ"],
        constants: [],
    },
    // Hazen-Williams
    hazenWilliams: {
        expressions: ["\\Delta H_f = 10.61 \\frac{L}{D^{4.87}} \\cdot \\,(\\frac{Q}{C})^{1.85} "],
        variables: ["L", "Q", "D", "C"],
        constants: [],
    },

    // Ecuación de Continuidad
    continuity: {
        expression: "$Q = A \\cdot V$",
        variables: ["A", "V"],
        constants: [],
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
