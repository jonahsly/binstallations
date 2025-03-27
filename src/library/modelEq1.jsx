// equationsLibrary.jsx
const equationsLibrary = [
    {
      id: "eq1",
      expresiones: [
        "\\frac{a}{b} = c",
        "d = e + f"
      ],
      variables: {
        a: { valor: 1, constante: false },
        b: { valor: 2, constante: true },
        c: { valor: 0, constante: false },
        e: { valor: 3, constante: false },
        f: { valor: 4, constante: false },
        d: { valor: 0, constante: false },
      },
      tipo: "sistema",
      // Podrías referenciar una función de cálculo específica o un identificador
      metodoCalculo: "calcularSistema"
    },
    {
      id: "eq2",
      expresiones: ["x^2 + y^2 = z^2"],
      variables: {
        x: { valor: 3, constante: false },
        y: { valor: 4, constante: false },
        z: { valor: 0, constante: false }
      },
      tipo: "simple",
      metodoCalculo: "calcularSimple"
    }
  ];
  
  export default equationsLibrary;
  