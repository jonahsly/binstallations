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






    doubleHeaderTable: {
        title: "Tabla con doble encabezado superior",
        // Definición de dos filas de encabezados:
        // La primera fila agrupa las columnas, la segunda muestra los subencabezados.
        headers: [
          [
            { label: "Grupo A", colSpan: 2 },
            { label: "Grupo B", colSpan: 2 }
          ],
          [
            { label: "Sub A1" },
            { label: "Sub A2" },
            { label: "Sub B1" },
            { label: "Sub B2" }
          ]
        ],
        // Filas de datos correspondientes a los 4 subencabezados
        data: [
          ["Valor A1", "Valor A2", "Valor B1", "Valor B2"],
          ["Valor A1-2", "Valor A2-2", "Valor B1-2", "Valor B2-2"]
        ]
      },
      
      // Tabla con encabezados secundarios en el lado izquierdo
      sideHeaderTable: {
        title: "Tabla con encabezados secundarios en el lado izquierdo",
        // Encabezados para las columnas de datos (excluyendo la primera columna de encabezados compuestos)
        headers: ["Dato 1", "Dato 2", "Dato 3"],
        // Filas donde la primera columna es un objeto con encabezado primario y secundario, seguido de los datos
        rows: [
          { header: { primary: "Grupo A", secondary: "Sub A1" }, data: ["10", "20", "30"] },
          { header: { primary: "Grupo A", secondary: "Sub A2" }, data: ["15", "25", "35"] },
          { header: { primary: "Grupo B", secondary: "Sub B1" }, data: ["40", "50", "60"] },
          { header: { primary: "Grupo B", secondary: "Sub B2" }, data: ["45", "55", "65"] }
        ]
      },
      // Tabla de propiedades del agua
      waterProperties: {
        title: "Propiedades del agua",
        headers: ["Propiedad", "Valor"],
        data: [
          ["Densidad", "1000 kg/m³"],
          ["Viscosidad", "1 cP"],
          ["Tensión superficial", "72 mN/m"]
        ]
      },
      // Tabla de valores de caudales de referencia
      flowRates: {
        title: "Valores de referencia de caudales",
        headers: ["Diámetro", "Caudal máximo (m³/h)"],
        data: [
          ["100 mm", "300"],
          ["150 mm", "500"],
          ["200 mm", "800"]
        ]
      }
};

// Componente que renderiza una tabla individual
const TableRenderer = ({ table }) => {
  if (!table) return null;
  // Caso 1: Tabla con encabezados secundarios (estructura con 'rows')
  if (table.rows) {
    return (
      <div style={{ marginBottom: '2rem' }}>
        <h3>{table.title}</h3>
        <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', width: '100%', maxWidth:'600px' }}>
          <thead>
            <tr>
              {/* Columna para los encabezados laterales */}
              <th style={{ backgroundColor: '#f0f0f0' }}></th>
              {table.headers.map((header, index) => (
                <th key={index} style={{ backgroundColor: '#f0f0f0' }}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td style={{ textAlign: 'left', fontWeight: 'bold' }}>
                  <div>{row.header.primary}</div>
                  <div style={{ fontSize: '0.8em', color: '#666' }}>{row.header.secondary}</div>
                </td>
                {row.data.map((cell, cellIndex) => (
                  <td key={cellIndex} style={{ textAlign: 'center' }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  // Caso 2: Tabla con doble encabezado (estructura con 'headers' anidados)
  else if (Array.isArray(table.headers) && Array.isArray(table.headers[0])) {
    return (
      <div style={{ marginBottom: '2rem' }}>
        <h3>{table.title}</h3>
        <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', width: '100%', maxWidth:'600px'  }}>
          <thead>
            {table.headers.map((headerRow, rowIndex) => (
              <tr key={rowIndex}>
                {headerRow.map((headerCell, cellIndex) => (
                  <th key={cellIndex} colSpan={headerCell.colSpan || 1} style={{ backgroundColor: '#f0f0f0' }}>
                    {headerCell.label}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.data.map((rowData, rowIndex) => (
              <tr key={rowIndex}>
                {rowData.map((cell, cellIndex) => (
                  <td key={cellIndex} style={{ textAlign: 'center' }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  // Caso 3: Tabla simple (estructura básica: headers y data)
  else {
    return (
      <div style={{ marginBottom: '2rem' }}>
        <h3>{table.title}</h3>
        <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', width: '100%', maxWidth:'600px'  }}>
          <thead>
            <tr>
              {table.headers.map((header, index) => (
                <th key={index} style={{ backgroundColor: '#f0f0f0' }}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} style={{ textAlign: 'center' }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      );
    }
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
