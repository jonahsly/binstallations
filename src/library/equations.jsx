const equations = {

  volTR: {
    expression: "\Vol_{TR} \\geq  \\frac{1}{3} \\cdot RTD",
    variables: ["RTD"],
    constants: {},
    calculate: function(RTD) {
      return RTD * (1/3);
    }
  },
  volTB: {
    expression: "\Vol_{TB} \\geq  \\frac{1}{5} \\cdot RTD",
    variables: ["RTD"],
    constants: {},
    calculate: function(RTD) {
      return RTD * (1/5);
    }
  },
  // Colebrook-White: 
  // 1/√f = -2 log10((ε/(3.7*D)) + (2.51/(Re*√f)))
  colebrookWhite: {
    expression: "\\frac{1}{\\sqrt{f}} = -2 \\log_{10}\\left(\\frac{\\varepsilon}{3.7\\,D} + \\frac{2.51}{Re\\,\\sqrt{f}}\\right)",
    variables: ["Re", "ε", "D"],
    constants: {
      coef1: 3.7,
      coef2: 2.51
    },
    calculate: function(Re, epsilon, D) {
      let f = 0.02; // Valor inicial para la fricción
      const tol = 1e-6;
      const maxIter = 100;
      for (let i = 0; i < maxIter; i++) {
        // Calcula el lado derecho de la ecuación
        let leftSide = -2 * Math.log10((epsilon / (this.constants.coef1 * D)) + (this.constants.coef2 / (Re * Math.sqrt(f))));
        let fNew = 1 / Math.pow(leftSide, 2);
        if (Math.abs(fNew - f) < tol) {
          return fNew;
        }
        f = fNew;
      }
      return f; // Si no converge, retorna el último valor calculado
    }
  },
  // Hazen-Williams:
  // hf = 10.67 * L * Q^1.852 / (C^1.852 * D^4.87)
  hazenWilliams: {
    expression: "h_f = 10.67 \\frac{L\\,Q^{1.852}}{C^{1.852}\\,D^{4.87}}",
    variables: ["L", "Q", "D", "C"],
    constants: {
      coef: 10.67,
      exponentQ: 1.852,
      exponentD: 4.87
    },
    calculate: function(L, Q, D, C) {
      return this.constants.coef * L * Math.pow(Q, this.constants.exponentQ) /
             (Math.pow(C, this.constants.exponentQ) * Math.pow(D, this.constants.exponentD));
    }
  },
  // Ecuación de Continuidad:
  // Q = A * V
  continuity: {
    expression: "$Q = A \\cdot V$",
    variables: ["A", "V"],
    constants: {},
    calculate: function(A, V) {
      return A * V;
    }
  },
  // Ecuación de Bernoulli:
  // P1 + 0.5*ρ*V1^2 + ρ*g*z1 = P2 + 0.5*ρ*V2^2 + ρ*g*z2
  bernoulli: {
    expression: "$P_1 + 0.5\\,\\rho\\,V_1^2 + \\rho\\,g\\,z_1 = P_2 + 0.5\\,\\rho\\,V_2^2 + \\rho\\,g\\,z_2$",
    variables: ["P1", "ρ", "V1", "z1", "P2", "V2", "z2", "g"],
    constants: {},
    calculate: function(P1, rho, V1, z1, P2, V2, z2, g) {
      const left = P1 + 0.5 * rho * Math.pow(V1, 2) + rho * g * z1;
      const right = P2 + 0.5 * rho * Math.pow(V2, 2) + rho * g * z2;
      return left - right; // Si retorna 0, la ecuación se cumple
    }
  },
  // Ecuación para calcular el Diámetro de una tubería:
  // Usando caudal (Q) y velocidad (V): D = √((4 * Q) / (π * V))
  // Además, se incluye una función para calcular D a partir del área A: D = √((4 * A)/π)
  diameter: {
    expression: "$D = \\sqrt{\\frac{4\\,Q}{\\pi\\,V}}$",
    variables: ["Q", "V"],
    constants: {},
    calculate: function(Q, V) {
      return Math.sqrt((4 * Q) / (Math.PI * V));
    },
    calculateFromArea: function(A) {
      return Math.sqrt((4 * A) / Math.PI);
    }
  },
// Darcy-Weisbach
darcyWeisbach: {
    expression: "h_f = f \\cdot \\frac{L}{D} \\cdot \\frac{V^2}{2g}",
    variables: ["f", "L", "D", "V", "g"],
    constants: {},
    calculate: function(f, L, D, V, g) {
      return f * (L / D) * (Math.pow(V, 2) / (2 * g));
    }
  },



};

// Componente que exporta el objeto de ecuaciones
// Este componente no renderiza nada en la interfaz, pero actúa como contenedor central
// que puede ser importado en otros componentes para renderizar, editar y calcular
// cualquiera de sus parámetros.
const EquationLibrary = () => {
  return null;
};

export { equations, EquationLibrary };
