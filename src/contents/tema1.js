import React from 'react';
const tema1Content = [
    {
      id: "section1",
      title: "El Proyecto de la Instalación Sanitaria",
      content:
        <div>
          <ol>
            <li><h4>El Proyecto debe poder ser ejecutado con los medios tecnológicos disponibles.</h4></li>
            <li><h4>Debe ser capaz de soportar las condiciones de uso normales durante su periodo de vida útil.</h4></li>
            <li><h4>En ninguna parte del edificio se debe poner en riesgo la seguridad o la salud de sus ocupantes.</h4></li>
            <li><h4>Debe proporcionar las condiciones bioambientales adecuadas para el desarrollo de las actividades a cuyo destino responde el proyecto.</h4></li>
            <li><h4>Los costos de la construcción, operación mantenimiento y reparación previsto durante la vida útil deben estar dentro de los márgenes impuestos por el comitente.</h4></li>
            <li><h4>Debe cumplir con lineamientos estéticos.</h4></li>
            <li><h4>El proyecto y la ejecución deben respetar restricciones establecidas por las Normas y los Órganos de Contralor.</h4></li>
          </ol>
        </div>,
      images: ["/assets/img1.jpg", "/assets/img2.jpg"],
      video: "/assets/video1.mp4"
    },
    {
      id: "section2",
      title: "Obras Externas de Provisión de Agua Potable",
      content:
      <div> 
        <p>
          La Provisión de Agua Potable involucra una serie de instalaciones
          y tratamientos que permiten que esta llegue a los edificios con las
          carcteríasticas exigidas por el Código Alimentario Nacional de cantidad
          y calidad necesaria para cubrir las demandas conforme al destino de los
          mismos.
        </p>
        <p>
          En términos generales vamos a decir que el tipo de Captación es 
          definido por lo que se denomina "Estudio de Identificación y Evaluación
          de Fuentes de Agua" y las íneas de tratamiento por las caracteríasticas
          físico químicas y bactereológicas del agua captada.
        </p>
        <ol>
          <li><h4>Captación.</h4>
              <ul>
                <li>Superficial: Cursos de Agua
                  <ul>
                    <li>Dentro de cauce</li>
                    <li>Fuera de cauce</li>
                    <li>Estanques</li>
                  </ul>
                </li>
                <li>Subterráneas:
                  <ul> 
                    <li>Pozos Profundos</li>
                    <li>Pozos Someros</li>
                  </ul>
                </li>
                <li>Subálveos de cursos de agua
                  <ul> 
                    <li>Dentro de cauce</li>
                    <li>Fuera de cauce</li>
                  </ul>
                </li>
                <li>Agua de lluvia</li>
              </ul>
          </li>
          <li><h4>Cañerías de Aducción:</h4>
            <dd>Conduce el agua desde la captación
            hasta el tratamiento.</dd>
          </li>
          <li><h4>Tratamiento:</h4>
            <dd>Coagulación, floculación y sedimentación,
              filtración, desinfección.</dd></li>
          <li><h4>Reserva:</h4>
            <dd>Compensación de variaciones de consumos,
              reserva y mantenimiento de presiones en la
              red de distribución.</dd>
          </li>
        </ol>
      </div>,
      images: [],
      video: null
    },
    {
      id: "section3",
      title: "El Ciclo del Agua en el Edificio",
      content: 
        <p>
          La distribución del agua en el edificio se hace en
          presión, por lo tanto, la forma en que se reseulve
          la instalación interna del edificio depende de la
          presión disponible en lared pública de agua potable.
        </p>,
        images: [],
      video: null
    },
    {
      id: "section4",
      title: "Reglamentos y Normas",
      content:
        <ul>
          <li>
            <p>Reglamento de Instalaciones Sanitarias Internas:
              Anexo Normas OSN - Ciudad de Salta</p>
          </li>
          <li>
            <p>Código de Edificación de la Ciudad de Buenos Aires:
              Anexo Reglamento sobre Instalaciones Sanitarias</p>
          </li>
        </ul>
      ,
      images: [],
      video: null
    }
  ];
  
  export default tema1Content;
  