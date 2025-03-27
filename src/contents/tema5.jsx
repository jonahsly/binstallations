import EquationRender from '../components/EquationRender/EquationRender';
import {equations} from "../library/equations";
import 'katex/dist/katex.min.css';
import { TableRenderer, tablesLibrary } from '../library/tables';

const tema5Content = [
    {
      id: "section1",
      title: "Reserva Total Diaria de agua potable (RTD)",
      content: <div>
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
        <ul>
          <li><h3>Cálculo Racional de la Reserva de Agua Potable</h3>
            <p>La determinación del volumen de reserva puede hacerse conociendo los regímenes de
              suministro y de consumo. Se siguen los siguientes pasos:
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
            </p>
          </li>
          <li><h3>Calculo Simplificado de la Reserva de Agua Potable</h3>
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
          </li>
        </ul>
        <h3>Valores mínimos de Reserva en T.B. y T.R.</h3>
        <p>La Norma OSN establece el volumen de los tanques en base a las siguientes relaciones:</p>
        <EquationRender equation={equations.volTR} />
        <EquationRender equation={equations.volTB} />
      </div>,
    },

    {
      id: "section2",
      title: "Detalles Técnicos del Tema 1",
      content: 
      <div>
        <h2>Visualización de Ecuaciones</h2>
        <EquationRender equation={equations.darcyWeisbach} />
        <TableRenderer table={tablesLibrary.flowRates} />
      </div>,
      images: [],
      video: null
    },
    {
      id: "section3",
      title: "Ejemplos Prácticos del Tema 1",
      content: "",
      images: [],
      video: null
    }
  ];
  
  export default tema5Content;
  

  


