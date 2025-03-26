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
              <h4>Tanque Hidroneumático</h4>
              <p>Consiste básicamente en un tanque hermético que consta de una membrana de goma que
                lo divide en dos compartimientos, uno para acumular agua y el otro para contener un
                cierto volumen de aire. Desde el tanque hidroneumático se alimentan la tubería de
                distribución a los distintos consumos. El volumen de aire dentro del tanque hace las
                veces de un pulmón que se comprime y descomprime cíclicamente</p>
              <h4>Principio de Funcionamiento</h4>
              <p>El agua que es aspirada por la bomba desde el tanque de bombeo, alimenta el consumo
                de la instalación y simultáneamente se inyecta al tanque hidroneumático un cierto caudal
                de agua, disminuyendo en consecuencia el volumen de aire y aumentando su presión, hasta
                un valor preestablecido que es detectado por el presóstato, el cual origina una señal que
                es utilizada para detener la bomba. La instalación queda así presurizada</p>
              <p>Cuando se origina algún consumo en la línea de distribución, esta es alimentada con el
                agua del tanque, disminuyendo progresivamente su volumen y consecuentemente también
                desciende la presión del aire hasta un valor mínimo preestablecido, actuando el presóstato
                y volviendo a arrancar la bomba.</p>
              <p>Este proceso se repite cíclicamente, mientras haya consumo en la distribución. Durante el
                período de funcionamiento de la bomba, esta debe alimentar simultáneamente, el consumo
                instantáneo de la instalación y llenar el tanque hidroneumático.</p>
              <h4>Ciclos de Bombeo</h4>
              <p>Se define como la cantidad de veces que arranca o para la bomba en una hora. Se ha
                establecido como conveniente un ciclo de bombeo que está entre 4 y 6 veces por hora. No
                bastante ello, deberán analizarse otros condicionantes como, por ejemplo, disponibilidad
                de espacio para el tanque hidroneumático en función de su tamaño, teniendo en cuenta que
                este disminuye cuando lo hace el ciclo de bombeo.</p>
              <p> Supongamos que establecemos un ciclo de 6 arranques por hora, esto significa que la
                bomba funciona durante 5 minutos y los próximos 5 minutos permanece parada, en el
                siguiente análisis, consideramos al sistema en régimen estacionario, ello significa que
                los caudales de consumo no varían en el tiempo.</p>
                Bomba en funcionamiento, duración 5 minutos:
                <ul><li>Alimenta los artefactos de consumo.</li>
                  <li>Impulsa agua al tanque hidroneumático.</li>
                  <li>Por efecto del ingreso de agua en el tanque, aumenta la presión del aire hasta el
                    valor máximo establecido y el presóstato hace parar la bomba.</li></ul>
                Bomba parada, duración 5 minutos:
                <ul><li>El consumo es abastecido por el tanque hidroneumático.</li>
                  <li>Disminuye el volumen de agua y consecuentemente desciende la presión del aire hasta
                    el valor mínimo establecido y el presóstato hace arrancar la bomba.</li></ul>
              <p>Se deduce que el volumen de agua almacenado en el tanque debe ser el necesario para
                erogar el caudal de consumo durante el tiempo en el que la bomba no funciona. Dado que
                los tiempos de funcionamiento y parada son iguales, el caudal de ingreso al tanque
                hidroneumático es igual al caudal de consumo de los artefactos y como la bomba alimenta
                simultáneamente al tanque y a los consumos, el caudal que eroga la bomba es dos veces del
                caudal de consumo. Es decir, el caudal de la bomba en el período de tiempo entre
                arranques (10 minutos), debe proporcionar agua para el consumo durante los 5 minutos de
                funcionamiento más los 5 minutos en que se encuentra parada.</p>
              <p>Si se disminuye progresivamente la capacidad del tanque para almacenar agua, aumenta el
                tiempo de funcionamiento de la bomba, en el límite, la bomba funciona permanentemente y
                el tanque ya no es necesario. Se acota, sin embargo, que la función del tanque no es
                solamente acumular agua, sino también mantener presurizada la instalación mientras no
                haya consumo. Esto es, las válvulas de los artefactos de consumo, mantienen la presión
                necesaria para asegurar instantáneamente el caudal requerido.</p>
          </li>
          <li>Por Bombas de Velocidad Variable
            <p>Estos equipos permiten regular la potencia de funcionamiento de su motor de acuerdo a la
              demanda. De esa manera, se evitan los golpes de ariete durante el arranque. La variación
              de la velocidad de giro de la bomba se logra a través de un control electrónico. Ese
              dispositivo tiene la función de varíar la frecuencia de la alimentación eléctrica que se
              dirige al motor.</p>
            <p>Existen otros mecanismos que también sirven para regular el flujo de agua, pero no tienen
              las mismas prestaciones. Los presurizadores en línea solo se encienden ante la demanda,
              pero no hay garantía de mantener la presión cuando están apagados. Por otro lado, los
              sistemas hidroneumáticos funcionan en un rango fijo de presión que no puede ser variado,
              no importa si los requerimientos son mayores o menores. Mientras, en los mecanismos con
              velocidad variable se pueden regular ambas características.</p>
              Ventajas del sistema:
            <ul><li>Sin importar la demanda de agua, siempre se tendrá la misma presión en todos los
                servicios.</li>
              <li>Estos sistemas tienen una alta eficiencia energética que permite ahorros
                considerables para las empresas.</li>
              <li>Se alarga el tiempo de vida de las bombas.</li>
              <li>Se reducen los gastos de reparación y mantenimiento.</li>
            </ul>
          </li>
        </ul>
      </p>
    </div>,
    images: [],
    video: null
  },
  {
    id: "section3",
    title: "Reserva Total Diaria de Agua Potable",
    content: 
      <div>
        <p>Se define la Reserva Total Diaria de agua potable, como el volumen de agua que se debe
          almacenar por día en el edificio para:
          <ol>
            <li>Proveer de agua potable a la instalación, cuando en la red pública se produce un
              corte eventual del servicio.</li>
            <li>Compensar caudales, cuando los de consumo son mayores que los caudales que suministra
              la red (establecimientos públicos, educacionales, lavaderos, etc.).</li>
          </ol>
          <p>Para edificios de vivienda, la reserva total diaria se estima para un consumo de 24 horas,
            bajo la consideración de que, en ese período, se pueden subsanar los desperfectos que
            imposibilitan la alimentación de agua desde la red al edificio, y que mantener agua
            almacenada por más tiempo puede tornar dudosa la potabilidad de esta. En general, se puede
            considerar según una dotación de 200 a 250 litros/persona/día para los usos normales de una
            vivienda. No obstante, la Norma específica, con carácter restrictivo, los volúmenes unitarios
            a adoptar de acuerdo al destino del edificio.</p>
          <p>En la actualidad, la racionalización del consumo de agua indica que un valor para la
            dotación estaría en el orden de los 100 lts/persona/día. La reserva total diaria se almacena
            en el Tanque de Reserva y en el Tanque de Bombeo, en ausencia de este se almacena en el
            Tanque de Reserva</p>
        </p>
      </div>,
      images: [],
    video: null
  }
];

export default tema2Content;
