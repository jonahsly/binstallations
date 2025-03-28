// VolRTDStructure.jsx
import React, { useState } from "react";

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
    if (case1 === "opcion1") {
      RTD = case2 === "opcionA" ? 850 * quan1 : 600 * quan1;
    } else if (case1 === "opcion2") {
      RTD =
        case2 === "opcionA"
          ? 350 * quan2 + 250 * quan3 + 150 * quan4
          : 250 * quan2 + 150 * quan3 + 100 * quan4;
    }

    const VTR = RTD * (1 / 3);
    const VTB = RTD * (1 / 5);

    setResult({ RTD, VTR: VTR.toFixed(2), VTB: VTB.toFixed(2) });
  };

  return (<>
      <h4>Calcular la RTD y los volúmenes de los tanques</h4>
      <div>
        <select id="case1">
          <option value="">Caso</option>
          <option value="opcion1">Viviendas</option>
          <option value="opcion2">Oficinas</option>
        </select>
        <select id="case2" className="hidden">
          <option value="">Provisión</option>
          <option value="opcionA">Directa</option>
          <option value="opcionB">Bombeo</option>
        </select>
      </div>
      <div id="inputs-container" className="hidden">
        <label>Cantidad de Viviendas</label>
        <input id="input1" type="text" placeholder="0" />
        <input id="input2" type="text" placeholder="0" />
        <input id="input3" type="text" placeholder="0" />
        <input id="input4" type="text" placeholder="0" />
      </div>
      <div>
        <span
          style={{ cursor: "pointer", color: "blue" }}
          onClick={handleCalcular}
        >
          Calcular
        </span>
        <div>RTD: {result.RTD}</div>
        <div>VTR: {result.VTR}</div>
        <div>VTB: {result.VTB}</div>
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
        <div id="inputs-container" className="hidden">
          <label>factor de fricción</label>
          <input id="input1" type="text" placeholder="0" />
          <label>longitud</label>
          <input id="input2" type="text" placeholder="0" />
          <label>dipametro</label>
          <input id="input3" type="text" placeholder="0" />
          <label>velocidad</label>
          <input id="input4" type="text" placeholder="0" />
        </div>
        <div>
          <span
            style={{ cursor: "pointer", color: "blue" }}
            onClick={handleCalcular}
          >
            Calcular
          </span>∆h<sub>f</sub> ={result.dhf}
        </div>
        </>
    );
}
