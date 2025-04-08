import React from "react";
import { 
    VolRTDCalculate, 
    DarcyWeisbachCalculate,  
    ReynoldsCalculate, 
    HazenWilliamsCalculate 
} from "./calculateLibrary";

const equationsLibrary = {
    //Reserva Total Diaria
    volRTD: {
        expressions: [
            "\Vol_{TR} \\geq  \\frac{1}{3} \\cdot RTD",
            "\Vol_{TB} \\geq  \\frac{1}{5} \\cdot RTD",],
        variables: [
            "RTD: reserva total diaria [lts]",
            <div>Vol<sub>TR</sub>: volumen del tanque de reserva [lts]</div>,
            <div>Vol<sub>TB</sub>: volumen del tanque de bombeo [lts]</div>],
        constants: [],
        calculate: <VolRTDCalculate/>,
    },
    //Presión Disponible
    presDisp: {
        expressions: [
            "\P_{disp} = \\Delta H_{top} \\geqslant Σ (\\Delta H_{f} + \\Delta H_{l}) + H_{r}",],
        variables: [
            <>P<sub>disp</sub>: presión estática disponible [mca]</>,
            <>∆H<sub>top</sub>: desnivel topográfico [m]</>,
            <>∆H<sub>f</sub>: pérdida de carga por fricción [m]</>,
            <>∆H<sub>l</sub>: pérdida de carga localizada [m]</>,
            <>H<sub>r</sub>: resión residual [m]</>],
        constants: [],
    },
    // Darcy-Weisbach
    darcyWeisbach: {
        expressions: ["\\Delta H_f = f \\cdot \\frac{L}{D} \\cdot \\frac{V^2}{2g}"],
        variables: [
            <>∆h<sub>f</sub>: pérdida de carga [m]</>,
            "f: factor de fricción [adimensional]",
            "L: longitud de la tubería [m]",
            "D: diámetro de la tubería [m]",
            "V: velocidad media del agua [m/s]",
            ],
        constants: ["g: aceleración de la gravedad [m/s2]"],
        calculate: <DarcyWeisbachCalculate/>,
    },
    // Colebrook-White
    colebrookWhite: {
        expressions: ["\\frac{1}{\\sqrt{f}} = -2 \\log_{10}\\left(\\frac{\\varepsilon}{3.7\\,D} + \\frac{2.51}{Re\\,\\sqrt{f}}\\right)"],
        variables: [
            "f: factor de fricción [adimensional]",
            "Re: número de Reynolds",
            "ε: rugosidad absoluta [m]",
            "D: diámetro de la tubería"
        ],
        constants: [],
        calculate: [],
    },
    // Reynolds
   reyNolds: {
        expressions: ["\Re  = \\frac{ V \\cdot d }{ υ }"],
        variables: [
            "V: velocidad media del agua [m/s]",
            "d: síametro de la tubería [m]",
            "υ: vizcosidad cinemática del agua [m2/s]"],
        constants: [],
        calculate: <ReynoldsCalculate/>,
    },
    // Hazen-Williams
    hazenWilliams: {
        expressions: ["\\Delta H_f = 10.61 \\frac{L}{D^{4.87}} \\cdot \\,(\\frac{Q}{C})^{1.85} "],
        variables: [
            <>∆H<sub>f</sub>: pérdida de carga por fricción [m] </>,
            "L: longitud de la tubería [m]",
            "Q: caudal de la conducción [m3/s]",
            "D: diámetro de la tubería [m]",
            "C: factor adimensional según el tipo de material"
        ],
        constants: [],
        calculate: <HazenWilliamsCalculate/>,
    },
    // Coeficiente de Resitencia Kp
    coefKp: {
        expressions: ["\\Delta H_l = K_p \\frac{V^{2}}{2g}"],
        variables: [
            <>∆H<sub>l</sub>: pérdidas localizadas [m]</>,
            <>K<sub>p</sub>: coeficiente adim. que depende del accesorio </>,
            <>V: velocidad media del agua [m/s] </>
        ],
        constants: ["g: aceleración de la gravedad [m/s2]"],
    },
    // Longitud Equivalente Le
    longEq: {
        expressions: [
            "\\Delta H_f=f\\cdot\\frac{L}{D}\\frac{V^2}{2g}=K_p \\frac{V^{2}}{2g}",
            "\K_p=f\\cdot\\frac{L_e}{d}\\Longrightarrow L_e=\\frac{K_p}{f}\\cdot d"],
        variables: [
            <>L<sub>e</sub>: longitud equivalente [m]</>,
            <>K<sub>p</sub>: coef. adimensional de resistencia</>,
            <>f: factor de fricción adimensional </>,
            <>d: diámetro de la tubería [m] </>
        ],
        constants: [],
    },
    // Caudal Instalado Qt
    caudalIns: {
        expressions: [
            "\\Delta H_f=f\\cdot\\frac{L}{D}\\frac{V^2}{2g}=K_p \\frac{V^{2}}{2g}",
            "\K_p=f\\cdot\\frac{L_e}{d}\\Longrightarrow L_e=\\frac{K_p}{f}\\cdot d"],
        variables: [
            <>L<sub>e</sub>: longitud equivalente [m]</>,
            <>K<sub>p</sub>: coef. adimensional de resistencia</>,
            <>f: factor de fricción adimensional </>,
            <>d: diámetro de la tubería [m] </>
        ],
        constants: [],
    },
    // Caudal Simultáneo Qc
    caudalSim: {
        expressions: [
            "\\Delta H_f=f\\cdot\\frac{L}{D}\\frac{V^2}{2g}=K_p \\frac{V^{2}}{2g}",
            "\K_p=f\\cdot\\frac{L_e}{d}\\Longrightarrow L_e=\\frac{K_p}{f}\\cdot d"],
        variables: [
            <>L<sub>e</sub>: longitud equivalente [m]</>,
            <>K<sub>p</sub>: coef. adimensional de resistencia</>,
            <>f: factor de fricción adimensional </>,
            <>d: diámetro de la tubería [m] </>
        ],
        constants: [],
    },










    // Ecuación de Continuidad
    continuity: {
        expression: "\Q = A \\cdot V",
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
