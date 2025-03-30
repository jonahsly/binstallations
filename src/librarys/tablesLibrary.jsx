import React from 'react';

const tablesLibrary = {

    rtdVivienda: {
        title: "Vivienda Completa",
        headers: ["Provisión", "Vol. de Reserva"],
        data: [
            ["Directa", "850 lts."],
            ["Bombeo", "600 lts."]
        ]
    },
    rtdOficinas: {
        title: "Oficinas, negoción, depósitos, etc.",
        headers: ["Provisión", "Baño o Toillet", "Mingitorio", "Lavatorio o Pileta de cocina/lavar"],
        data: [
            ["Directa", "350 lts.", "250 lts.", "150 lts."],
            ["Bombeo", "250 lts.", "150 lts.", "100 lts."]
        ]
    },
    minPresp: {
      title: "Cargas Piezométricas Mínimas (Reglamento CABA)",
      headers: ["Artefactos", "Presión residual mínima"],
      data: [
        ["I.P./L./Be./P.C./P.L./Du.", "6 mca."],
        ["Ming. c/v.a.", "10 mca."],
        ["I.P. c/v.a.", "10 mca."]
    ]
    },
    minPrese: {
      title: "Cargas Estáticas Mínimas (Norma OSN)",
      headers: ["Designación de la Bajada", "Presión estática mínima"],
      data: [
        ["alimenta más de 1 U.Loc., por azotea.", "4 mca."],
        ["d = 50 mm. alimenta a válv. automáticas/más de 1 U.Loc, por azotea.", "2,5 mca."],
        ["bajada mixta a artefactos y calefones a gas", "4 mca."],
        ["d = 19 exclusiva a calefón a gas", "2 mca."],
        ["alimenta 1 solo artefacto o recinto con artefactos.", "0,5 mca."],
        ["alimenta artefactos de una misma U.Loc. en la misma planta, pero en distintos ambientes.", "2 mca."],
        ["d = 25 mm. a válv. automáticas.", "5,5 mca."],
        ["d = 32 mm. a válv. automáticas.", "3,5 mca."],
        ["d = 32 mm. a válv. automáticas.", "2,5 mca."],
        ["d = 50 mm. a válv. automáticas.", "2,5 mca."],
        ["Canilla de servicio de uso poco frecuente (azotea, terraza, etc.).", "---"],
    ]
    },
    caudalMedio1: {
      title: "Consumo Medio de Artefactos Sanitarios (Díaz Dorado, M.)",
      headers: ["Artefacto", "Caudal [lts/s]"],
      data: [
        ["Canilla de Servicio", "0,13"],
        ["Lavatorio", "0,10"],
        ["Bañera", "0,20 - 0,30"],
        ["Ducha", "0,15"],
        ["Inodoro c/Depósito", "0,10"],
        ["Inodoro c/Válv. Automática", "1,50 - 2,00"],
        ["Bidé", "0,10"],
        ["Pileta de Cocina", "0,15"],
        ["Pileta de Cocina (restaurante)", "0,30"],
        ["Pileta de Lavar", "0,30"],
        ["Máquina de Lavar", "0,20"],
        ["Mingitorio", "0,10"],
    ]
    },
    caudalMedio2: {
      title: "Consumo Medio de Artefactos Sanitarios (Reglamento CABA)",
      headers: ["Artefacto", "Caudal [lts/s]"],
      data: [
        ["Canilla de Servicio", "0,13"],
        ["Lavatorio", "0,20"],
        ["Bañera", "0,30"],
        ["Ducha", "0,30"],
        ["Inodoro c/Depósito", "0,20"],
        ["Inodoro c/Válv. Automática", "1,50"],
        ["Bidé", "0,20"],
        ["Pileta de Cocina", "0,20"],
        ["Pileta de Cocina (restaurante)", "0,30"],
        ["Pileta de Lavar", "0,20"],
        ["Máquina de Lavar", "0,20"],
        ["Mingitorio", "0,20"],
    ]
    },
    velocRuido: {
      title: "Nivel de ruido en función de la Velocidad (Carnicer Royo)",
      headers: ["Velocidad [m/s]", "Nivel de Ruido"],
      data: [
        ["≤ 0,50", "Silencioso"],
        ["0,50 - 1,50", "Poco Ruidoso"],
        ["1,50 - 2,00", "Ruidoso"],
        ["≥ 2,00 ", "Muy Ruidoso"],
    ]
    },
    velocRecom: {
      title: "Velocidad recomendada en función de la Presión Estática disponible (Carnicer Royo)",
      headers: ["Presión [mca]", "Velocidad [m/s]"],
      data: [
        ["1 - 5", "0,13"],
        ["5 - 10", "0,20"],
        ["10 - 20", "0,30"],
        ["≥ 20 ", "0,30"],
    ]
    },
    diamPyQ: {
      title: "Conexión Domiciliaria según la presión disponible y el caudal de conexión.",
      headers: [["D [mm]", "13", "19", "25", "32", "38", "50", "60", "75"],
        [<>P<sub>disp</sub> [mca]</>, { label: "Q [lts/s]", colspan: 8 }],],
        data: [
          ["4", "0,24", "0,52", "1,06", "1,80", "2,84", "5,08", "7,85", "10,39"],
          ["5", "0,28", "0,60", "1,18", "2,02", "3,19", "5,70", "8,81", "11,65"],
          ["6", "0,33", "0,66", "1,30", "2,22", "3,51", "6,26", "9,68", "12,81"],
          ["7", "0,35", "0,72", "1,41", "2,40", "3,79", "6,77", "10,46", "13,85"],
          ["8", "0,37", "0,75", "1,48", "2,53", "4,00", "7,13", "11,03", "14,60"],
          ["9", "0,40", "0,78", "1,56", "2,67", "4,22", "7,46", "11,64", "15,41"],
          ["10", "0,42", "0,81", "1,63", "2,79", "4,41", "7,87", "12,15", "16,10"],
          ["11", "0,44", "0,84", "1,69", "2,91", "4,60", "8,21", "12,69", "16,79"],
          ["12", "0,46", "0,87", "1,75", "3,03", "4,79", "8,54", "13,21", "17,48"],
          ["13", "0,48", "0,90", "1,81", "3,15", "4,98", "8,88", "13,73", "18,17"],
          ["14", "0,49", "0,93", "1,87", "3,24", "5,12", "9,14", "14,13", "18,69"],
          ["15", "0,51", "0,96", "1,92", "3,32", "5,50", "9,36", "14,47", "19,16"],
          ["16", "0,52", "0,99", "1,97", "3,40", "5,37", "9,59", "14,82", "19,62"],
          ["17", "0,54", "1,02", "2,01", "3,49", "5,51", "9,84", "15,22", "20,14"],
          ["18", "0,55", "1,05", "2,08", "3,57", "5,64", "10,07", "15,56", "20,60"],
          ["19", "0,57", "1,08", "2,13", "3,65", "5,77", "10,29", "15,91", "21,06"],
          ["20", "0,58", "1,11", "2,18", "3,73", "5,89", "10,52", "16,26", "21,52"],
          ["21", "0,60", "1,14", "2,23", "3,82", "6,04", "10,77", "16,65", "22,04"],
          ["22", "0,61", "1,17", "2,29", "3,90", "6,16", "11,00", "17,00", "22,50"],
          ["23", "0,62", "1,19", "2,33", "3,97", "6,27", "11,19", "17,31", "22,91"],
          ["24", "0,63", "1,21", "2,38", "4,05", "6,40", "11,42", "17,66", "23,37"],
          ["25", "0,64", "1,22", "2,42", "4,12", "6,51", "11,62", "17,96", "23,77"],
          ["26", "0,65", "1,24", "2,47", "4,20", "6,64", "11,84", "18,31", "24,23"],
          ["27", "0,67", "1,26", "2,51", "4,27", "6,75", "12,04", "18,62", "24,64"],
          ["28", "0,68", "1,28", "2,55", "4,35", "6,87", "12,27", "18,97", "25,10"],
          ["29", "0,69", "1,30", "2,59", "4,42", "6,98", "12,46", "19,27", "25,50"],
          ["30", "0,70", "1,32", "2,62", "4,50", "7,11", "12,69", "19,62", "25,96"],
          ["31", "0,71", "1,34", "2,66", "4,57", "7,22", "12,89", "19,92", "26,37"],
          ["32", "0,72", "1,36", "2,70", "4,65", "7,35", "13,11", "20,27", "26,83"],
          ["33", "0,73", "1,37", "2,74", "4,72", "7,46", "13,31", "20,58", "27,23"],
          ["34", "0,74", "1,39", "2,77", "4,80", "7,58", "13,54", "20,93", "27,70"],
          ["35", "0,76", "1,41", "2,81", "4,87", "7,69", "13,73", "21,93", "28,10"]
        ]        
    },
    seccNec: {
      title: "Secciones Necesarias o Teóricas.",
      headers: [[
        "Alimentación",
        "Bajadas de Tanque a Artefactos [cm2]",
        "Cañerías de Distribución de Agua Caliente [cm2]"],
      ],
      data: [
          ["Cada L./P.L.M (fuera de recinto de I); fuente de beber o Salv. en edificios públicos.",
            "0,27", "0,18"],
          ["Cada W.C./Toilette; DAM en edificios públicos; C.S/artefacto de poco uso",
            "0,36", "0,27"],
          ["Un solo artefacto",
            "0,44", "0,36"],
          ["B° ppal./de servicio; P.C., P.L., P.L.C.",
            "0,53", "0,44"],
          ["B° ppal./de servicio y P.C., P.L., P.L.C.; B° ppal. y de servicio",
            "0,62", "0,53"],
          ["Dpto. completo (B° ppal. y de servicio, P.C., P.L. y P.L.C.",
            "0,71", "0,62"],
          [{ label: "Los valores en esta tabla servirán de base para el cálculo de las distintas combinaciones de servicioss que pudieran presentarse.", colspan: 3 }]
        ]        
    },
    seccLim: {
      title: "Secciones Límites y Reales.",
      headers: [[
          { label: "Sección Límite [cm2]", colspan: 2 },
          "Sección Real",
          { label: "Diámetro Nominal", colspan: 2 }
        ],
        [ "Bajada", "Colector", "[cm2]", "[pulg]", "[mm]"] 
      ],
      data: [
          ["1,80", "1,67", "1,27", "½", "13"],
          ["3,59", "3,41", "2,85", "¾", "19"],
          ["6,02", "5,78", "5,07", "1", "25"],
          ["9,08", "8,79", "7,92", "1¼", "32"],
          ["14,36", "13,62", "11,40", "1½", "38"],
          ["24,07", "23,12", "20,27", "2", "51"],
          ["36,31", "35,15", "31,67", "2½", "63"],
          ["57,42", "54,47", "45,60", "3", "75"],
          ["97,27", "92,47", "81,07", "4", "100"],
          ["145,26", "140,62", "126,68", "5", "125"],
          ["204,38", "198,89", "182,42", "6", "150"]
        ]
    },      
};

const TableRenderer = ({ table }) => {
  if (!table) return null;

  const renderCell = (cell, type = "td", key) => {
    const Tag = type;

    if (typeof cell === "object" && (cell.label || cell.colspan || cell.rowspan)) {
      return (
        <Tag
          key={key}
          colSpan={cell.colspan || 1}
          rowSpan={cell.rowspan || 1}
          style={{
            backgroundColor: type === "th" ? "#f0f0f0" : undefined,
            textAlign: "center",
            padding: "8px",
            minWidth: "50px",
            maxWidth: "150px",
            wordBreak: "break-word",
          }}
        >
          {cell.label}
        </Tag>
      );
    } else {
      return (
        <Tag
          key={key}
          style={{
            backgroundColor: type === "th" ? "#f0f0f0" : undefined,
            textAlign: "center",
            padding: "8px",
            minWidth: "50px",
            maxWidth: "150px",
            wordBreak: "break-word",
          }}
        >
          {cell}
        </Tag>
      );
    }
  };

  return (
    <div style={{ marginBottom: "2rem", overflowX: "auto" }}>
      <h3>{table.title}</h3>
      <table
        border="1"
        cellPadding="5"
        style={{
          borderCollapse: "collapse",
          width: "100%",
          tableLayout: "auto",
        }}
      >
        <thead>
          {Array.isArray(table.headers) && Array.isArray(table.headers[0]) ? (
            table.headers.map((headerRow, rowIndex) => (
              <tr key={rowIndex}>
                {headerRow.map((cell, cellIndex) => renderCell(cell, "th", cellIndex))}
              </tr>
            ))
          ) : (
            <tr>
              {table.headers.map((header, index) => renderCell(header, "th", index))}
            </tr>
          )}
        </thead>
        <tbody>
          {table.data.map((rowData, rowIndex) => (
                <tr key={rowIndex}>
                  {rowData.map((cell, cellIndex) => renderCell(cell, "td", cellIndex))}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

const TablesLibrary = () => {
  return (
    <div>
      {Object.keys(tablesLibrary).map((key) => (
        <TableRenderer key={key} table={tablesLibrary[key]} />
      ))}
    </div>
  );
};

export { tablesLibrary, TableRenderer, TablesLibrary };
