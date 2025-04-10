import React from "react";

const equationsLibrary = {
   
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
};

export {equationsLibrary};
