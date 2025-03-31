import React, { useState } from "react";
import "./calculateLibrary.css";

export function VolRTDCalculate() {

  const [result, setResult] = useState({ RTD: "", VTR: "", VTB: "" });
  const handleCalcular = () => {
    const case1 = document.getElementById("case1").value;
    const case2 = document.getElementById("case2").value;
    const quan1 = parseFloat(document.getElementById("input1").value) || 0;
    const quan2 = parseFloat(document.getElementById("input2").value) || 0;
    const quan3 = parseFloat(document.getElementById("input3").value) || 0;
    const quan4 = parseFloat(document.getElementById("input4").value) || 0;

    let RTD = 0;

    if (case1 === "option1") {
      // Selecciona el multiplicador según la opción
      const multiplier = case2 === "optionA" ? 850 : case2 === "optionB" ? 600 : 0;
      RTD = multiplier * quan1;
    } else if (case1 === "option2") {
      RTD =
        case2 === "optionA"
          ? 350 * quan2 + 250 * quan3 + 150 * quan4
          : case2 === "optionB"
          ? 250 * quan2 + 150 * quan3 + 100 * quan4
          : 0;
    };
    const VTR = RTD * (1 / 3);
    const VTB = RTD * (1 / 5);

    setResult({ RTD, VTR: VTR.toFixed(0), VTB: VTB.toFixed(0) });
  };

  return (<>
      <h4>Calcular la RTD y los Volúmenes mínimos</h4>
      <div className="select-container">
        <select id="case1">
          <option value="0">Caso</option>
          <option value="option1">Viviendas</option>
          <option value="option2">Oficinas</option>
        </select>
        <select id="case2">
          <option value="0">Provisión</option>
          <option value="optionA">Directa</option>
          <option value="optionB">Bombeo</option>
        </select>
      </div>
      <div className="input-container">
          <label>N° de Viviendas:</label>
          <input id="input1" placeholder="0"/>
          <label>Cant. Baños/Toillete:</label>
          <input type="text" id="input2" placeholder="0"/>
          <label>Cant. Mingitorios:</label>
          <input type="text" id="input3" placeholder="0"/>
          <label>Cant. Lav./Piletas</label>
          <input id="input4" placeholder="0"/>
      </div>
      <div className="calculate-container">
        <span style={{ cursor: "pointer", color: "blue" }} onClick={handleCalcular}>
          Calcular
        </span>
        <div>RTD = {result.RTD} lts.</div>
        <div>Vol<sub>TR</sub> ≥ {result.VTR} lts.</div>
        <div>Vol<sub>TB</sub> ≥ {result.VTB} lts.</div>
        </div>
      </>
  );
}

export function DarcyWeisbachCalculate() {
    const [result, setResult] = useState({ dhf: "" });
 
    const handleCalcular = () => {
      const quan1 = parseFloat(document.getElementById("input1").value) || 0;
      const quan2 = parseFloat(document.getElementById("input2").value) || 0;
      const quan3 = parseFloat(document.getElementById("input3").value) || 0;
      const quan4 = parseFloat(document.getElementById("input4").value) || 0;
  
      let dhf = quan1 * quan2 * quan4 * quan4 / ( quan3 * 2 * 9.81 );

      setResult({ dhf: dhf.toFixed(2) });
    };
  
    return (<>
        <h4>Calcular Pérdida de Carga por Fricción</h4>
        <div className="input-container">
          <label>factor de fricción</label>
          <input id="input1" placeholder="0"/>
          <label>longitud</label>
          <input id="input2" type="text" placeholder="0" />
          <label>dipametro</label>
          <input id="input3" type="text" placeholder="0" />
          <label>velocidad</label>
          <input id="input4" type="text" placeholder="0" />
        </div>
        <div className="calculate-container">
          <span style={{ cursor: "pointer", color: "blue" }} onClick={handleCalcular}>
            Calcular
          </span>
          <div>∆h<sub>f</sub> ={result.dhf}</div>
        </div>
        </>
    );
}

export function ColebrookWhiteCalculate() {
  const [result, setResult] = useState({ f: "" });

  const handleCalcular = () => {
    // Se obtienen los valores de las entradas
    const epsilon = parseFloat(document.getElementById("input1").value) || 0;
    const D = parseFloat(document.getElementById("input2").value) || 0;
    const Re = parseFloat(document.getElementById("input3").value) || 0;

    // Valor inicial para f y configuración de tolerancia para la convergencia
    let f = 0.02;
    const tol = 1e-6;
    let error = Infinity;

    // Se itera hasta alcanzar la convergencia
    while (error > tol) {
      const f_old = f;
      const rhs = -2 * Math.log10((epsilon / (3.7 * D)) + (2.51 / (Re * Math.sqrt(f))));
      f = 1 / (rhs * rhs);
      error = Math.abs(f - f_old);
    }

    setResult({ f: f.toFixed(5) });
  };

  return (
    <>
      <h4>Calcular Factor de Fricción (Colebrook-White)</h4>
      <div className="input-container">
        <label>Rugosidad (ε)</label>
        <input id="input1" type="text" placeholder="0" />
        <label>Diámetro (D)</label>
        <input id="input2" type="text" placeholder="0" />
        <label>Número de Reynolds (Re)</label>
        <input id="input3" type="text" placeholder="0" />
      </div>
      <div className="calculate-container">
        <span
          style={{ cursor: "pointer", color: "blue" }}
          onClick={handleCalcular}
        >
          Calcular
        </span>
        <br />
        f = {result.f}
      </div>
    </>
  );
}

export function ReynoldsCalculate() {
  const [result, setResult] = useState({ Re: "" });

  const handleCalcular = () => {
    const rho = parseFloat(document.getElementById("input1").value) || 0;
    const V = parseFloat(document.getElementById("input2").value) || 0;
    const D = parseFloat(document.getElementById("input3").value) || 0;
    // Se asigna 1 por defecto para evitar división por cero
    const mu = parseFloat(document.getElementById("input4").value) || 1;

    const Re = (rho * V * D) / mu;
    setResult({ Re: Re.toFixed(0) });
  };

  return (
    <>
      <h4>Calcular Número de Reynolds</h4>
      <div className="input-container">
        <label>Densidad (ρ): </label>
        <input id="input1" type="text" placeholder="0" />
        <label>Velocidad (V): </label>
        <input id="input2" type="text" placeholder="0" />
        <label>Diámetro (D): </label>
        <input id="input3" type="text" placeholder="0" />
        <label>Viscosidad (μ): </label>
        <input id="input4" type="text" placeholder="0" />
      </div>
      <div className="calculate-container">
        <span
          style={{ cursor: "pointer", color: "blue" }}
          onClick={handleCalcular}
        >
          Calcular
        </span>{" "}
        Re = {result.Re}
      </div>
    </>
  );
}

export function HazenWilliamsCalculate() {
  const [result, setResult] = useState({ hf: "" });

  const handleCalcular = () => {
    const L = parseFloat(document.getElementById("input1").value) || 0;
    const Q = parseFloat(document.getElementById("input2").value) || 0;
    const C = parseFloat(document.getElementById("input3").value) || 0;
    const D = parseFloat(document.getElementById("input4").value) || 0;

    if (C === 0 || D === 0) {
      setResult({ hf: "Valores no válidos" });
      return;
    }

    const hf = 10.67 * L * Math.pow(Q, 1.852) / (Math.pow(C, 1.852) * Math.pow(D, 4.87));
    setResult({ hf: hf.toFixed(5) });
  };

  return (
    <>
      <h4>Calcular Pérdida de Carga (Hazen-Williams)</h4>
      <div className="input-container">
        <label>Longitud (L): </label>
        <input id="input1" type="text" placeholder="0" />
        <label>Caudal (Q): </label>
        <input id="input2" type="text" placeholder="0" />
        <label>Coeficiente (C): </label>
        <input id="input3" type="text" placeholder="0" />
        <label>Diámetro (D): </label>
        <input id="input4" type="text" placeholder="0" />
      </div>
      <div className="calculate-container">
        <span
          style={{ cursor: "pointer", color: "blue" }}
          onClick={handleCalcular}
        >
          Calcular
        </span>{" "}
        hf = {result.hf}
      </div>
    </>
  );
}

