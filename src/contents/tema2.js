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
      <p>Denominamos a esta altura (en mca), Nivel Estático y está referido a un Plano
        de Comparación, cuyo valor cero corresponde normalmente al nivel del cordón de
        vereda.</p>
      <p>Cuando hay consumo, se produce la circulación del agua y esta debe vencer las
        resistencias que se producen en el recorrido hasta el punto de consumo.</p>
      <p>En su trayecto, el agua se desplaza rozando con las paredes de las cañerías
        con mayor o menor dificultad, cambiando constantemente de dirección en curvas
        y codos. También se producen cambios en la geometría de la conducción por la
        presencia de diferentes diámetros y por la existencia de elementos singulares,
        como válvulas, medidores, etc., que provocan una alteración del flujo.</p>
      <p>El rozamiento en las paredes de las tuberías produce pérdidas de energía por
        fricción a lo largo de esta, mientras que los cambios de dirección y la
        presencia de elementos singulares producen pérdidas de energía localizadas en
        el punto donde se encuentra el elemento singular</p>
      <p>Con base a lo expuesto, hacemos entonces la siguiente clasificación de las
        pérdidas de cargas:
        <ul>
          <li>Pérdidas por fricción en las cañerías.</li>
          <li>Pérdidas localizadas por cambios de dirección, reducción de diámetros,
            por válvulas de control, dispositivos de entrada y salida, etc.</li>
        </ul>
      </p>
      <p>El agua debe vencer todas las resistencias a su circulación consumiendo
        parte de la carga disponible y que está dada por la altura del tanque. Es
        por ello que el nivel que alcanza el agua cuando existe consumo, no
        corresponde al Nivel Estático, sino a otro más bajo que se denomina Nivel
        Piezométrico o Nivel de Cargas Piezométrico. Por lo tanto, la presión de la
        red pública, en el punto donde se debe hacer la conexión domiciliaria para
        el edificio es variable.</p>
      <p>La mínima presión en este punto se denomina Presión de Servicio o Presión
        sobre Nivel de Acera. La determinación del Nivel Piezométrico es importante
        y es información que debe suministrar la Empresa Prestadora del Servicio.</p>
    </div>,
    images: ["/assets/img1.jpg", "/assets/img2.jpg"],
    video: "/assets/video1.mp4"
  },
  {
    id: "section2",
    title: "Formas de Provisión según la Presión de Servicio Disponible",
    content:
    <div> 
      <p>La Presión de Servicio de la red en el punto de conexión al edificio,
        condiciona la forma en que se distribuirá el agua dentro del edificio.
        En función de la Presión de Servicio, se distinguen las siguientes formas
        de Provisión:
        <ul>
          <li>Por Servicio Directo
            <p>Corresponde a las instalaciones que se alimentan directamente desde la red de
              distribución, sin interposición de tanque de reserva. Esto es posible cuando se
              asegure la presión adecuada con el caudal requerido por los artefactos de consumo.
              Las Normas OSN, permitían este esquema cuando no hay ningún artefacto a una altura
              mayor de 5 m, medidos desde el nivel de la vereda. Cabe acotar, sin embargo, que la
              Reglamentación vigente exige la instalación de un tanque de reserva para las viviendas
              unifamiliares (Art. 5.1.1.)</p>
          </li>
          <li>Por Tanque de Reserva
            <p>En este esquema, la distribución de agua dentro del edificio se efectúa desde el
              tanque de reserva elevado. La altura a la que se instala el tanque de reserva debe
              ser la adecuada para presurizar la instalación en las condiciones que se verán más
              adelante. La alimentación desde la red pública al tanque de reserva elevado puede ser:</p>
            <ul>
              <li>c/alimentación directa desde la red
                <p>Si la Presión de Servicio lo permite, se alimenta el tanque ubicado una altura
                  conveniente que compense las pérdidas de carga que se producen en el tramo comprendido
                  entre el punto de conexión a la red y la válvula a flotante del tanque.</p>
              </li>
              <li>c/bombeo directo desde la red
                <p>Las Normas OSN prevén este esquema para viviendas individuales y edificios de un solo
                  piso de hasta 6 unidades locativas. Se debe asegurar que el bombeo se interrumpa
                  cuando la presión en la red disminuye por debajo de los 2.5 m, para no afectar la
                  provisión de los edificios vecinos. Para ello:
                  <ul>
                    <li>Se interpone entre la conexión y la bomba un sifón invertido con válvula de aire.</li>
                    <li>Otra variante es colocar una válvula automática que interrumpa el suministro
                      eléctrico a la bomba de agua cuando baje la presión disponible.</li>
                    <li>La bomba se instala a 10 metros sobre el nivel de la vereda.</li>
                  </ul>
                </p>
              </li>
              <li>c/bombeo dese tanque de bombeo
              <p>Es la forma más recomendada, comprende:
                  <ul>
                    <li>Un tanque de bombeo instalado en planta baja o en subsuelo.</li>
                    <li>Un juego de bombas (una de contingencia) que impulsan el agua al tanque de reserva.</li>
                    <li>La cañería de impulsión.</li>
                  </ul>
                  Las bombas funcionan automáticamente comandadas por dispositivos eléctricos para el
                  control del nivel de líquido.
                </p>
              </li>
            </ul>
          </li>
          <li>Por Tanque de Bombeo y Equipo Hidroneumático
            <p>Recordemos que una de las funciones del tanque de reserva es la de presurizar la
              instalación de distribución de agua. Cuando el diseño arquitectónico no permite la
              instalación de un tanque de reserva, la distribución se puede presurizar con un Tanque
              Hidroneumático. En este caso la instalación consta de:</p>
              <ul>
                <li>Un tanque de bombeo instalado en planta baja o en subsuelo, que contiene la
                  reserva total diaria de agua potable.</li>
                <li>Un equipo de presurización o tanque hidroneumático.</li>
                <li>La instalación de distribución de agua.</li>
              </ul>
              <h4>Tanque Hidroneumático.</h4>
              <p>Consiste básicamente en un tanque hermético que consta de una membrana de goma que
                lo divide en dos compartimientos, uno para acumular agua y el otro para contener un
                cierto volumen de aire. Desde el tanque hidroneumático se alimentan la tubería de
                distribución a los distintos consumos. El volumen de aire dentro del tanque hace las
                veces de un pulmón que se comprime y descomprime cíclicamente</p>
          </li>
          <li>Por Bombas de Velocidad Variable</li>
        </ul>
      </p>
      <p>
      
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
