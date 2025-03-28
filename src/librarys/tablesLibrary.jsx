// tablesLibrary.jsx
import React from 'react';

// Definición de las tablas de referencia
const tablesLibrary = {

    rtdVivienda: {
        title: "Vivienda Completa",
        // Definición de dos filas de encabezados:
        // La primera fila agrupa las columnas, la segunda muestra los subencabezados.
        headers: ["Provisión", "Vol. de Reserva"],
        data: [
            ["Directa", "850 lts."],
            ["Bombeo", "600 lts."]
        ]
    },
    rtdOficinas: {
        title: "Oficinas, negoción, depósitos, etc.",
        // Definición de dos filas de encabezados:
        // La primera fila agrupa las columnas, la segunda muestra los subencabezados.
        headers: ["Provisión", "Baño o Toillet", "Mingitorio", "Lavatorio o Pileta de cocina/lavar"],
        data: [
            ["Directa", "350 lts.", "250 lts.", "150 lts."],
            ["Bombeo", "250 lts.", "150 lts.", "100 lts."]
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
