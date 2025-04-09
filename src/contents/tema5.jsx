import EquationRender from '../components/EquationRender/EquationRender';
import VolumenRTD from '../librarys/volumenRTD.jsx';
import PresionRes from '../librarys/presiónResidual.jsx';
import DarcyWeisbach from '../librarys/darcyWeisbach.jsx';
import ColebrookWhite from '../librarys/colebrookWhite.jsx';


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
          destino del edificio. Se distinguen dos casos, el primero se trata de una Unidad de
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
        <VolumenRTD/>
      </>,
    },
    {
      id: "section2",
      title: "Parámetros de Diseño de la Instalación",
      content: <>
        <h2>Presiones mínimas de trabajo de los Artefactos Sanitarios</h2>
        <PresionRes />
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
        No debe perderse de vista que la pérdida de carga en una tubería y sus accesorios es función del
          cuadrado de la velocidad, por lo que valores elevados de velocidad implican valores elevados de pérdidas
          de carga. En cualquier caso, tratándose de artefactos particulares deberá verificarse si el fabricante
          especifica una velocidad máxima, que en general tiene que ver con la posibilidad de erosión de los
          asientos de válvulas. En la siguiente tabla se indica el nivel de ruido en función de la velocidad.
        <TableRenderer table={tablesLibrary.velocRuido} />
          En el proceso de diseño de una instalación, la adopción de un cierto valor de la velocidad, dentro del
          rango recomendado, tiene consideraciones técnico-económicas. Para instalaciones de edificios en altura
          que se alimentan desde un tanque de reserva, en aquellos pisos con mayor carga estática disponible, la
          adopción de velocidades mayores supone diámetros menores y la mayor pérdida de carga que ello significa
          no afecta las presiones mínimas requeridas.
        <TableRenderer table={tablesLibrary.velocRecom} />
      </>,
    },
    {
      id: "section3",
      title: "Pérdidas de Carga",
      content:
      <>
        <h2>Pérdidas de Carga en La Instalación</h2>
        <h3>Pérdidas por Fricción</h3>
        La Hidráulica provee distintas fórmulas matemáticas para el cálculo de pérdidas de carga, fórmulas
          empíricas, semi-empíricas, que son función de la velocidad de circulación, del diámetro y de las
          características de rugosidad del material, cada una de ellas indicadas para las condiciones de trabajo
          en las que han sido establecidas. Entre las fórmulas más usadas para el cálculo de las pérdidas por
          rozamiento, vamos a citar:
        <DarcyWeisbach />
        Para régimen turbulento, el cual es el caso típico de la conducción de agua en la instalación, el factor
        de fricción se puede calcular mediante la expresión de:
        <h4>Colebrook-White:</h4>
        <ColebrookWhite/>
        <h4>Hazen-Williams:</h4>
        <EquationRender equation={equationsLibrary.hazenWilliams}/><br/>
        Las fórmulas anteriormente citadas, se aplican a una parte elemental de la instalación, que
        denominaremos “tramo” (ver 0) y cuyas características principales son:
        <ol>
          <li>El diámetro es constante.</li>
          <li>El caudal circolante es constante.</li>
          <li>La velocidad es constante, por aplicación de la ecuación de continuidad.</li>
        </ol>
        <h3>Pérdidas Localizadas:</h3>
        A efectos del dimensionado de la instalación, consideramos accesorio a todo elemento que produzca una
        pérdida de carga localizada en la instalación. A continuación se tratarán los métodos para cuantificar
        las pérdidas de carga localizadas.
        <h4>Método Individual</h4>
        Este método se aplica a ciertos accesorios, como por ejemplo el medidor, que cuya pérdida de carga es
        función del caudal de agua. En estos casos, hay que recurrir a las especificaciones del fabricante.
        <h4>Coeficiente de Resistencia K<sub>P</sub>:</h4>
        Con este método, las pérdidas localizadas se calculan como fracción de la energía cinética,
        inmediatamente aguas abajo del punto donde se producen. De la hidráulica se sabe que las pérdidas
        localizadas se pueden determinar con la expresión:<br/>
        <br/><EquationRender equation={equationsLibrary.coefKp}/>
        <h4>Longitud Equivalente L<sub>e</sub>:</h4>
        Otra forma menos exacta aunque más práctica de calcular las pérdidas localizadas, es mediante el
        método de las longitudes equivalentes. Conceptualmente se entiende como el reemplazo del accesorio –en
        el esquema matemático de cálculo- por un tramo de cañería de igual diámetro al de la conducción y con
        una longitud llamada equivalente que provoca la misma pérdida de carga que el accesorio.
        La relación entre ambos métodos, a partir de la ecuación de Darcy Weisbach es:<br/><br/>
        <EquationRender equation={equationsLibrary.longEq}/><br/>
        Por lo tanto se entiende que la asimilación del factor 𝐾𝑝/𝑓 como constante, es una ponderación, puesto
        que f depende del número de Reynolds y este a su vez de la velocidad del flujo.
        Se utilizan tablas en las que longitudes equivalentes se expresan en función del diámetro del accesorio,
        o bien directamente se da la longitud equivalente para el accesorio de acuerdo a su diámetro.<br/><br/>
        Como aproximación también, la longitud equivalente de los accesorios puede calcularse directamente como
        un porcentaje de la longitud de la cañería. Este porcentaje depende fundamentalmente de la cantidad de
        accesorios que posea la instalación.
        El Documento Básico HS Salubridad del Código Técnico de Edificación de España, indica que se puede
        considerar como longitud equivalente entre un 20% y un 30% de la longitud real de la cañería. Dado que
        la pérdida de carga por fricción es función lineal de la longitud, entonces la pérdida carga localizada
        será este porcentaje de la pérdida de carga por fricción. <br/><br/> La Norma UNE 149201 - 2008 aconseja
        que cuando la instalación tiene válvulas de retención, contadores, filtros, se deben determinar las
        pérdidas de carga de estos accesorios en forma individual.
      </>,
    },
    {
      id: "section4",
      title: "Caudales de Cálculo",
      content:
      <>
        <h3>Caudales de Cálculo de la Instalación:</h3>
        <h4>Caudal Instalado Q<sub>t</sub></h4>
        Se define como Caudal Instalado a la sumatoria de los consumos asignados a los artefactos sanitarios,
        que son alimentados por el tramo que se considere.
        <EquationRender equation={equationsLibrary.caudalIns}/>
        <h4>Caudal Simultáneo Q<sub>c</sub></h4>
        Se define como Caudal Simultáneo al CAUDAL MÁXIMO PROBABLE que circula por un dado tramo de la
        instalación, bajo una cierta simultaneidad en el uso de los artefactos que son alimentados por dicho
        tramo.
        <EquationRender equation={equationsLibrary.caudalSim}/>
        <h3>Simultaneidad de Uso de los Artefactos Sanitarios</h3>
        En una vivienda o edificio de viviendas, es muy baja la probabilidad de que todos los artefactos
        instalados, estén en funcionamiento simultáneamente. Un ejemplo de esto es el del baño completo, que
        posee cuatro artefactos instalados, ducha, inodoro, bidé y lavatorio, de los cuales, (en la generalidad
        de los casos), solamente uno estará en funcionamiento. Es decir, habrá un artefacto en funcionamiento
        sobre cuatro instalados.<br/><br/>
        Si ampliamos la instalación a un departamento completo, puede existir la probabilidad de que además del
        funcionamiento de un artefacto de baño, también se use la pileta de cocina o la pileta de lavar o bien
        ambas simultáneamente. Si seguimos ampliando la instalación al edificio de departamentos, el problema
        de determinar cuáles y cuantos artefactos, y en que períodos de tiempo se usan simultáneamente, se torna
        complejo. Y como consecuencia de ello, es también compleja la determinación de los caudales circulantes
        por la instalación.<br/><br/>
        Existirán edificios con destinos particulares, donde se tendrá certeza, en algunos casos, sobre
        el uso simultáneo de los artefactos y el tiempo de duración. Por ejemplo, edificios como
        escuelas y cuarteles suponen un uso intensivo de las instalaciones en ciertos períodos de tiempo, por
        lo cual el caudal instantáneo puede ser igual al caudal instalado. Existen varios métodos para considerar
        la simultaneidad de los consumos que se pueden agrupar de la siguiente manera:
        <ul>
          <li>Métodos Probabilísticos</li>
          <li>Métodos Empíricos</li>
          <li>Métodos Semi-empíricos</li>
        </ul>
        Cabe aclarar que, siendo las Normas OSN, normas de carácter empírico, no tratan analíticamente el problema
        de la simultaneidad en distribución de agua. No obstante, dada la complejidad del problema cuando se trata
        de alimentar muchos artefactos, quedará a responsabilidad del proyectista, la utilización de uno u otro
        método conjuntamente con su criterio profesional y experiencia. En este sentido, el Código Técnico de la
        Edificación de España (Documento Básico HS4, 4.21. Dimensionado de los tramos), prescribe que el
        establecimiento de los coeficientes de simultaneidad de cada tramo debe hacerse de acuerdo con un criterio
        adecuado, sin indicar uno en particular, por lo tanto, es el proyectista quien debe decidir sobre este
        tema.<br/><br/>
        Por otro lado, “Crear un modelo exacto para predecir la demanda de una edificación es imposible y
        estudios finales que consideren el impacto de la conservación en la demanda del agua no están completos
        todavía”. (Código Internacional de Instalaciones Hidráulicas y Sanitarias, 2006).<br/><br/>
        Entre los métodos semi-empíricos utilizados, particularmente en España y con antecedentes en normativa
        francesa, nos referiremos al Método del Factor de Simultaneidad, también llamado Método Racional y que ha
        sido recogido por el Reglamento de Instalaciones Sanitarias de la Ciudad Autónoma de Buenos Aires, para
        su aplicación en dimensionamiento de la instalación por métodos racionales.<br/>
        <h3>Cálculo de Caudales Simultaneos</h3>
        <h4>Método para Provisión por Servicio Directo (Normas OSN)</h4>
        Para la determinación se distinguen dos casos:
        <ul>
          <li>Viviendas o departamentos(1): Se adopta como caudal simultáneo (Q<sub>c</sub>), el correspondiente a
          una vez y medio el caudal de la canilla de servicio, esto es</li>
          <dd>Q<sub>c</sub> = 1.5x0.13 𝑠 0.20𝑙𝑡𝑠 𝑠</dd>
          <li>Edificios de oficina, negocios y fábricas: Siendo N es el número de artefactos instalados. Conjuntos
            de artefactos de baños y toilette, se consideran un solo artefacto</li>
          <dd>𝑄𝑐 = 𝑁 2 0.13 𝑙𝑡𝑠 𝑠</dd>
        </ul>
        
        
        
        
        <h4>Método del Factor de Simultaneidad K<sub>1</sub></h4>
        Es un método semi-empírico, el Caudal Simultáneo se determina con la expresión (Díaz Dorado, 2005):
        𝑄𝑐 = 𝐾1𝑄𝑡 (41)
        Donde:
        Qc=Caudal Simultáneo en [lts/s]
        K1= Factor de Simultaneidad, adimensional
        Qt= Caudal Instalado en [lts/s]
        El factor de simultaneidad es menor que la unidad y se calcula con la siguiente expresión:
        𝐾1 = 1 √𝑛 − 1 (42)
        Donde n es el número de artefactos aguas abajo del tramo de cañería considerado y que definen el caudal
        instalado. Se recomienda no considerar factores de simultaneidad menores a 0.20. Cabe acotar que este
        método requiere que los caudales unitarios asignados a los artefactos de consumo, numéricamente posean
        el mismo orden de magnitud. Para los tramos de la instalación que alimenten baños, se considerará un
        solo artefacto y será el de mayor caudal instalado.
        <h4>Método del Factor de Simultaneidad K<sub>2</sub></h4>
        Según el número de unidades locativas o viviendas
        Cuando se distribuye agua a un conjunto de viviendas o unidades locativas, es de esperar que los hábitos
        de consumo no sean iguales en cada una de ellas. Un edificio de departamentos, por ejemplo, puede tener
        la misma dotación sanitaria en todas las unidades locativas, sin embargo los usos pueden no coincidir en
        el tiempo, pues son distintas las costumbres de las personas que las habitan. Una forma de tener en cuenta
        la no simultaneidad de los consumos de agua en este tipo de edificios, es mediante la introducción de
        otro coeficiente, que indicaremos como K2, que afecta a los caudales simultáneos determinados mediante
        el coeficiente K1, El coeficiente K2 se aplica a los tramos troncales de la instalación que alimentan a
        las unidades locativas o viviendas y a los tramos de bajada en un edificio en altura.
        Se determina con la expresión:
        𝐾2 = 19 + 𝑁 10(𝑁 + 1) (43)
        Donde N es el número de unidades locativas o viviendas que alimenta el tramo que se está dimensionando.
        <h4>Método de la Norma UNE 149.201-08</h4>
        Es un método para calcular caudales simultáneos en función del caudal instalado y del destino del
        edificio. A continuación transcribimos la formulación del caudal simultáneo, para dos destinos particulares:
        -Edificios de Viviendas:<br/>
        
        Para 𝑄𝑡 mayor a 20 𝑙𝑡𝑠/𝑠 𝑄𝑐 = 1.7𝑥 (𝑄𝑡)0.21 − 0.7 𝑙𝑡𝑠/𝑠
        Para 𝑄𝑡 ≤ 20 𝑙𝑡𝑠/𝑠 dependiendo de los caudales instantáneos mínimos:
        Si todo 𝑄𝑚í𝑛 es menor a 0,5 𝑙𝑡𝑠/𝑠 𝑄𝑐 = 0.682𝑥 (𝑄𝑇)0.45 − 0.14 𝑙𝑡𝑠/𝑠
        𝑄𝑡 ≤ 1 𝑙𝑡𝑠/𝑠 𝑄𝑐 = 𝑄𝑡 𝑁𝑜 𝑠𝑖𝑚𝑢𝑙𝑡𝑎𝑛𝑒𝑖𝑑𝑎𝑑
Si algún 𝑄𝑚í𝑛 ≥ 0.5 𝑙𝑡𝑠/𝑠
Qt=1.75 lts/s
n=12
K1=0.302
Qc=0.53 lts/s
2º P
N=2
K
2=0.70
Qc=0.74 lts/s
N=4
K
2=0.46
Qc=0.97 lts/s
1º P
Qt=1.75 lts/s
n=12
K1=0.302
Qc=0.53 lts/s
4º P
Qt=1.75 lts/s
n=12
K1=0.302
Qc=0.53 lts/s
N=3
K2=0.55
Qc=0.87 lts/s
3º P
TANQUE DE RESERVA
Qt=1.75 lts/s
n=12
K1=0.302
Qc=0.53 lts/s
N=1
K2=1
Qc=0.53 lts/sIng. Gustavo L. Lazarte-Ing. Viviana B. Sánchez 52 /63
𝑄𝑡 mayor que 1 𝑙𝑡𝑠/𝑠 𝑄𝑐 = 1.7𝑥 (𝑄𝑡)0.21 − 0.7 𝑙𝑡𝑠/𝑠
Qmín en [lts/s], es el caudal asignado a cada artefacto de consumo.
Edificios de Oficinas, Estaciones, Aeropuertos, Etc.
Para 𝑄𝑡 mayor que 20 𝑙𝑡𝑠/𝑠 𝑄𝑐 = 0.4𝑥 (𝑄𝑡)0.54 + 0.48 𝑙𝑡𝑠/𝑠
Para 𝑄𝑡 ≤ 20 𝑙𝑡𝑠/𝑠 dependiendo de los caudales instantáneos mínimos:
Si todo 𝑄𝑚í𝑛 menor que 0.5 𝑙𝑡𝑠/𝑠 𝑄𝑐 = 0.682𝑥 (𝑄𝑇)0.45 − 0.14 𝑙𝑡𝑠/𝑠
𝑄𝑡 ≤ 1 𝑙𝑡𝑠/𝑠 𝑄𝑐 = 𝑄𝑡 𝑁𝑜 𝑠𝑖𝑚𝑢𝑙𝑡𝑎𝑛𝑒𝑖𝑑𝑎𝑑
Si algún 𝑄𝑚í𝑛 ≥ 0.5 𝑙𝑡𝑠/𝑠
𝑄𝑡 mayor que 1 𝑙𝑡𝑠/𝑠 𝑄𝑐 = 1.7𝑥 (𝑄𝑡)0.21 − 0.7 𝑙𝑡𝑠/𝑠

<h4>Método de la Norma Chilena NCH-2.485-00</h4>
La Norma Chilena NCh2485.Of2000, establece el siguiente procedimiento para la determinación de caudales instantáneos:
𝑄𝑐 = 1.7391𝑥𝑄𝑇0.6891
Donde:
QT= caudal instalado en [lts/min]
Qc=caudal máximo probable en [lts/min]
Para aplicación de la fórmula, la Norma prescribe que, para “los dos últimos artefactos de un tramo de ramal, el caudal
máximo probable debe ser la suma de los caudales instalados de ambos”.
Y el “caudal máximo probable de un tramo de ramal en que existen tres o más artefactos debe ser, como mínimo la suma
de los dos de mayor consumo”.
<h4>Caudales Simultáneos cuando la instalación posee Válvulas Automáticas para inodoros</h4>  
Las válvulas automáticas para inodoros descargan un gran caudal instantáneamente, puesto que al no disponerse de
depósito, el agua se almacena en la propia cañería que alimenta la válvula.
Se usan particularmente en sanitarios de uso público, y es recomendable que sean alimentadas por una instalación
independiente de otros artefactos, como son inodoros con depósito, lavatorios, mingitorios, etc., en razón de que el caudal
de desacarga de la válvula automática puede perturbar el uso de otros artefactos. La alimentación independiente debe
hacerse desde el colector o puente de empalme del tanque de reserva.
Dado el corto tiempo de funcionamiento de la válvula, en el orden de los 30 segundos, es muy baja la probabilidad de uso
simultaneo de varias válvulas, es por ello que las Normas OSN consideran una válvula en funcionamiento por cada cuatro
válvulas instaladas. Este criterio ha sido adoptado en general, por los fabricantes nacionales de válvulas automáticas.
Otro criterio aceptado es (Carnicer Royo, 1998):
1 Válvula automática si la instalación tiene un número inferior a 3.Ing. Gustavo L. Lazarte-Ing. Viviana B. Sánchez 53 /63
2 Válvulas automáticas si la instalación tiene un número entre 3 y 12
3 Válvulas automáticas si la instalación tiene un número entre 12 y 24.
4 Válvulas automáticas si la instalación tiene un número mayor a 24
      </>,
    },
    {
      id: "section5",
      title: "Dimensionamiento Simplificado (Norma OSN)",
      content:
      <>
        
      </>,
    }
  ];
  
  export default tema5Content;
