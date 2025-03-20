import React from 'react';
const tema2Content = [
  {
    id: "section1",
    title: "Nivel Piezométrico de la Red de Ditribución de Agua Potable",
    content: 
    <div>
      <p>Supongamos, a efectos prácticos, que nuestro edificio se encuentra alimentado
        por una red de distribución que a su vez es alimentada por un tanque elevado.
        Cuando no hay consumo de la red de distribución, la altura que podría alcanzar
        el agua en los edificios sería la misma que corresponde a la altura de pelo
        libre del tanque elevado que abastece la red.</p>
      <p>Denominamos a esta altura (en mca), Nivel Estático y está referido a un Plano de Comparación, cuyo valor cero
      corresponde normalmente al nivel del cordón de vereda.</p>
      <p>Cuando hay consumo, se produce la circulación del agua y esta debe vencer las resistencias que se producen en el recorrido
      hasta el punto de consumo.</p>
      <p>En su trayecto, el agua se desplaza rozando con las paredes de las cañerías con mayor o menor dificultad, cambiando
constantemente de dirección en curvas y codos. También se producen cambios en la geometría de la conducción por la
presencia de diferentes diámetros y por la existencia de elementos singulares, como válvulas, medidores, etc., que provocan
una alteración del flujo.</p>
      <p>El rozamiento en las paredes de las tuberías produce pérdidas de energía por fricción a lo largo de esta, mientras que los
cambios de dirección y la presencia de elementos singulares producen pérdidas de energía localizadas en el punto donde
se encuentra el elemento singular</p>
      <p>Con base a lo expuesto, hacemos entonces la siguiente clasificación de las pérdidas de cargas:
• Pérdidas por fricción en las cañerías.
• Pérdidas localizadas por cambios de dirección, reducción de diámetros, por válvulas de control, dispositivos de
entrada y salida, etc.</p>
      <p>El agua debe vencer todas las resistencias a su circulación consumiendo parte de la carga disponible y que está dada por la
altura del tanque.
Es por ello que el nivel que alcanza el agua cuando existe consumo, no corresponde al Nivel Estático, sino a otro más bajo
que se denomina Nivel Piezométrico o Nivel de Cargas Piezométrico.
Por lo tanto, la presión de la red pública, en el punto donde se debe hacer la conexión domiciliaria para el edificio es
variable.</p>
      <p>La mínima presión en este punto se denomina Presión de Servicio o Presión sobre Nivel de Acera.
La determinación del Nivel Piezométrico es importante y es información que debe suministrar la Empresa Prestadora del
Servicio.</p>
    </div>,
    images: ["/assets/img1.jpg", "/assets/img2.jpg"],
    video: "/assets/video1.mp4"
  },
  {
    id: "section2",
    title: "Formas de Provisión según la Presión de Servicio Disponible",
    content:
    <div> 
      <p>
      la Presión de Servicio de la red en el punto de conexión al edificio,
condiciona la forma en que se distribuirá el agua dentro del edificio.
En función de la Presión de Servicio, se distinguen las siguientes formas de Provisión:
      </p>
      <p>
      • Por Servicio Directo.
• Por Tanque de Reserva.
Con alimentación a TR directa desde la red.
Con alimentación a TR con Bombeo directo desde la red.
Con alimentación a TR con Bombeo desde tanque de bombeo.
• Por Tanque de Bombeo y Equipo Hidroneumático.
• Por Bombas de Velocidad Variable.
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

export default tema2Content;
