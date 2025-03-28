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
