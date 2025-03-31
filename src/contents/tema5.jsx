import EquationRender from '../components/EquationRender/EquationRender';
import { equationsLibrary } from "../librarys/equationsLibrary";
import { TableRenderer, tablesLibrary } from '../librarys/tablesLibrary';
import 'katex/dist/katex.min.css';

const tema5Content = [
    {
      id: "section1",
      title: "Reserva Total Diaria de agua potable (RTD)",
      content: <>
        <p>En un edificio que es alimentado desde la red pública de agua potable, el régimen de
          suministro se ve afectado por diferentes circunstancias que van desde la disminución
          de presión en la red de distribución hasta la interrupción total de servicio. De igual
          manera el consumo interno del edificio varía durante el día, desde un mínimo en
          determinadas horas hasta un máximo, dependiendo de las características de ocupación y
          uso del mismo.</p>
        <p>Se define la Reserva Total Diaria de agua potable, como el volumen de agua que se
          debe almacenar por día en el edificio para:</p>
        <ol>
          <li>Proveer de agua potable a la instalación, cuando en la red pública se produce un
            corte eventual del servicio.</li>
          <li>Compensar caudales, cuando los de consumo son mayores que los caudales que
            suministra la red (establecimientos públicos, educacionales, lavaderos, etc.).</li>
        </ol>
        <p>Para edificios de vivienda, la reserva total diaria se estima para un consumo de 24
          horas, bajo la consideración de que, en ese período, se pueden subsanar los
          desperfectos que imposibilitan la alimentación de agua desde la red al edificio, y
          que mantener agua almacenada por más tiempo puede tornar dudosa la potabilidad de
          esta.</p>
        <p>En general, se puede considerar según una dotación de 200 a 250 litros/persona/día
          para los usos normales de una vivienda. No obstante, la Norma específica, con carácter
          restrictivo, los volúmenes unitarios a adoptar de acuerdo al destino del edificio.</p>
        <p>En la actualidad, la racionalización del consumo de agua indica que un valor para la
          dotación estaría en el orden de los 100 lts/persona/día.</p>
        <p>La reserva total diaria se almacena en el Tanque de Reserva y en el Tanque de Bombeo,
          en ausencia de este se almacena en el Tanque de Reserva.</p>
        <h3>Compensación de Caudales de Suministro y Consumo</h3>
        <p>En un edificio se pueden presentar tres situaciones en relación a los
          caudales instantáneos de consumo de la instalación y de suministro de la red pública.
          En las dos primeras, el caudal de suministro es igual  o mayor al caudal instantáneo
          de consumo. En la última, el caudal de suministro es menor que el caudal instantáneo
          de consumo. Para este último caso se deberá prever una reserva de agua que se
          acumulará en los períodos en los cuales el caudal de suministro es mayor al de
          consumo. Dicha reserva servirá entonces para compensar caudales.</p>
        <h3>Cálculo Racional de la Reserva de Agua Potable</h3>
        <p>La determinación del volumen de reserva puede hacerse conociendo los regímenes de
          suministro y de consumo. Se siguen los siguientes pasos:</p>
        <ul>
          <li>Trazado de las curvas de suministro y consumo a lo largo de las 24 horas, para
            el día de mayor consumo.</li>
          <li>Integración de las curvas para obtener el volumen de agua de suministro y de
            consumo por cada hora del día.</li>
          <li>Determinación de la diferencia entre el volumen acumulado y el volumen consumido
            hora por hora.</li>
          <li>La capacidad de la reserva se determina como la máxima diferencia entre los
            volúmenes acumulados de suministro y consumo.</li>
        </ul>
        <h3>Calculo Simplificado de la Reserva de Agua Potable</h3>
        <p>La Normas OSN prescriben valores unitarios para la reserva de agua potable según el
          destino del edificio. Se distinguen dos casos, el primero sse trata de una Unidad de
          Vivienda completa, compuesta por baño principal, baño de servicio, pileta de cocina,
          pileta de lavar y pileta lavacopas. El segundo caso, se trata de Oficinas, negocios,
          depósitos, etc.</p>
        <TableRenderer table={tablesLibrary.rtdVivienda} />
        <TableRenderer table={tablesLibrary.rtdOficinas} />
        <p>Cuando existe bombeo, se considera la reserva total diaria igual a la suma del
          volumen del tanque de bombeo más el volumen del tanque de reserva elevado.</p>
        <p>Los casos no contemplados por la Norma, deberán analizarse particularmente según el
          destino y uso del agua, como pueden ser edificios deportivos o de recreación,
          cuarteles, que poseen instalaciones con duchas, donde la utilización suele estar muy
          definida en ciertos períodos de tiempo.</p>
        <h3>Valores mínimos de Reserva en T.B. y T.R.</h3>
        <p>La Norma OSN establece el volumen de los tanques en base a las siguientes relaciones:</p>
        <EquationRender equation={equationsLibrary.volRTD}/>
      </>,
    },
    {
      id: "section2",
      title: "Dimensionamiento de la Instalación",
      content: <>
        <h2>Presiones mínimas de trabajo de los Artefactos Sanitarios</h2>
        <h3>Presión Residual o Piezométrica</h3>
        <p>Cada artefacto sanitario funciona adecuadamente dentro de un rango de presiones,
          definido por un umbral que es la presión mínima que asegure el caudal requerido
          por el artefacto. La presión residual (también llamada presión dinámica)
          H<sub>r</sub> es la Presión resultante en la válvula del artefacto, cuando circula
          en ese punto, el caudal requerido por el artefacto.</p>
        <EquationRender equation={equationsLibrary.presDisp}/>
        <p>En aquellos artefactos en que la grifería se conecta a la cañería mediante la
          conexión flexible, se considerará la toma del artefacto, definida como el extremo
          de la instalación (normalmente un codo o la salida a 90° de una te) desde donde
          parte la conexión flexible a la válvula del artefacto. En el caso de la ducha, la
          salida del agua se produce por sobre la válvula, a una altura sobre esta de
          1,20 m. aproximadamente, entonces debemos considerar en ese punto la carga mínima.
        </p>
        <p> El calefón a gas instantáneo, requiere de un caudal mínimo para que se produzca
          la apertura de la válvula de gas del quemador. El caudal mínimo es asegurado por
          la presión mínima en el punto de consumo de agua caliente(la ducha). Este consumo
          será en la generalidad de los casos, el más comprometido hidráulicamente.</p>
        <TableRenderer table={tablesLibrary.minPresp} />
        <h3>Presión mínima estática</h3>
        <p>La Norma OSN no establece presiones mínimas piezométricas sino presiones mínimas
          estáticas. Desde el punto de vista hidráulico, para dimensionar la instalación se
          requiere fijar únicamente las cargas mínimas piezométricas en los artefactos, no
          teniendo mayor sentido fijar cargas estáticas mínimas mientras la presión estática
          diponible permita asegurar las cargas piezométricas.</p>
        <p>Cuando la alimentación de agua a la instalación se hace mediante tanque de reserva,
          este provee la presión necesaria para la distribución de agua en el edificio. Dado
          que las presiones residuales dependen de los caudales instantáneos, la Normas OSN,
          para asegurar el funcionamiento eficiente de la instalación, establece presiones
          mínimas que denominamos estáticas pues se refieren a la diferencia de cota entre el
          nivel de pelo libre del tanque de reserva y el artefacto considerado. En ciertos
          casos y con el mismo objeto, fija también diámetros mínimos. Dado que el nivel de
          pelo libre del tanque de reserva es variable, la carga mínima estática se mide desde
          el fondo del tanque de reserva, es la cota más desfavorable y segura para la carga.
          En el caso de tanques alimentados por bombeo, puede considerarse como cota segura
          el nivel en el cual arranca el equipo de bombeo, normalmente unos 20 cm. por sobre
          la base del tanque</p>
        <TableRenderer table={tablesLibrary.minPrese} />
        <p>
          <ul>El Reglamento CABA exige:
            <li>6 mca. para bajadas en columna</li>
            <li>10 mca. para válvulas y calderas duales</li>
            <li>6 mca. para bajadas mixtas a artefactos y calefones o termotanques a gas únicamente</li>
            <li>No habiendo 6,00 m. de carga, el calentador más elevado tendrá bajada independiente de 4 mca.</li>
            <li>Para carga menor de 4,00 m. no pueden instalarse calefones o termotanques a gas.</li>
          </ul>
          Se consideran bajadas en columna aquellas que surtiendo más de una unidad locativa
          se deriven de una cañería de agua corriente que corra a lo largo de una azotea.</p>
        <h3>Casos particulares</h3>
        <ul><li>Calefón</li>
            <dd>La Norma NAG 200 exige que la presión mínima de alimentación de agua fría para calefones debe ser
              la equivalente a una columna de agua de 2 m por encima de la salida más alta (comúnmente la ducha)
              (Capítulo VI, 6.7.3.1 inciso e, página 139).</dd>
          <li>Válvulas Automáticas</li>
            <dd>De la tabla anterior debe entenderse el valor dado de carga mínima para la válvula más comprometida
              hidráulicamente. En cualquier caso, deberá verificarse el valor mínimo de la carga de acuerdo a lo
              exigido por el fabricante para su producto.</dd>
        </ul>
        <h3>Presiones Máximas de Trabajo de Artefactos Sanitarios</h3>
        <p>La presión de trabajo de los artefactos sanitarios se limita superiormente a un valor máximo que la
          Norma OSN establece en 45 m, ello tiene que ver fundamentalmente con que los artefactos están diseñados
          para presiones menores. Por otro lado debe observarse que una pérdida de agua por goteo en una cañilla
          que no obtura completamente, incrementa su caudal en función de la presión. Asimismo, deberán atenderse
          siempre las especificaciones del fabricante en cuanto a la presión máxima, por ejemplo la firma FV,
          para la válvula automática de inodoro indica no sobrepasar los 4.5 kg/cm<sup>2</sup>.</p>
        <h2>Caudales Medios de los Artefactos Sanitarios</h2>
        <p>Cada artefacto sanitario tiene un consumo de agua sanitaria definido de acuerdo a su uso.
        Se han establecidos consumos medios para artefactos y grupos de artefactos.</p>
        <TableRenderer table={tablesLibrary.caudalMedio1} />
        <TableRenderer table={tablesLibrary.caudalMedio2} />
        <h2>Velocidad de circulación del agua</h2>
        <p>La velocidad del agua dentro de la cañería de distribución debe mantenerse dentro de límites acotados.
          El rango de velocidades aconsejadas es de 0,5 m/s a 2 m/s aunque algunos autores extienden el límite
          superior a 2,5 m/s y el CTE de España a 3,5 m/s para tuberías termoplásticas y multicapa.</p>
        <ul>Velocidades menores a 0,5 m/s:
          <li>Facilitan la sedimentación en las tuberías que pueden ocasionar obstrucciones.</li>
          <li>Diámetros antieconómicos.</li>
        </ul>
        <ul>Velocidades mayores a 2 m/s:
          <li>Producen gran rozamiento y ruido en las tuberías.</li>
          <li>Excesivas pérdidas de carga.</li>
          <li>Erosión en la tubería.</li>
        </ul>
        <p>No debe perderse de vista que la pérdida de carga en una tubería y sus accesorios es función del
          cuadrado de la velocidad, por lo que valores elevados de velocidad implican valores elevados de pérdidas
          de carga. En cualquier caso, tratándose de artefactos particulares deberá verificarse si el fabricante
          especifica una velocidad máxima, que en general tiene que ver con la posibilidad de erosión de los
          asientos de válvulas. En la siguiente tabla se indica el nivel de ruido en función de la velocidad.</p>
        <TableRenderer table={tablesLibrary.velocRuido} />
        <p>En el proceso de diseño de una instalación, la adopción de un cierto valor de la velocidad, dentro del
          rango recomendado, tiene consideraciones técnico-económicas. Para instalaciones de edificios en altura
          que se alimentan desde un tanque de reserva, en aquellos pisos con mayor carga estática disponible, la
          adopción de velocidades mayores supone diámetros menores y la mayor pérdida de carga que ello significa
          no afecta las presiones mínimas requeridas,</p>
        <TableRenderer table={tablesLibrary.velocRecom} />
        <h2>Pérdidas de Carga en La Instalación</h2>
        <h3>Pérdidas por Fricción</h3>
        <p>La Hidráulica provee distintas fórmulas matemáticas para el cálculo de pérdidas de carga, fórmulas
          empíricas, semi-empíricas, que son función de la velocidad de circulación, del diámetro y de las
          características de rugosidad del material, cada una de ellas indicadas para las condiciones de trabajo
          en las que han sido establecidas. Entre las fórmulas más usadas para el cálculo de las pérdidas por
          rozamiento, vamos a citar:</p>
        <EquationRender equation={equationsLibrary.darcyWeisbach}/>
        <EquationRender equation={equationsLibrary.colebrookWhite}/>
        <EquationRender equation={equationsLibrary.reyNolds}/>
        <EquationRender equation={equationsLibrary.hazenWilliams}/>
        <h3>Pérdidas Localizadas</h3>




      </>,
    },
    {
      id: "section3",
      title: "Dimensionamiento Simplificado (Norma OSN)",
      content:
      <>
        <h2>Visualización de Ecuaciones</h2>
        <TableRenderer table={tablesLibrary.diamPyQ} />
        <TableRenderer table={tablesLibrary.seccNec} />
        <TableRenderer table={tablesLibrary.seccLim} />
      </>,
    }
  ];
  
  export default tema5Content;
