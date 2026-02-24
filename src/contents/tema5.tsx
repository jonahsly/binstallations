import VolumenRTD from '../librarys/volumenRTD';
import PresionRes from '../librarys/presionResidual';
import DarcyWeisbach from '../librarys/darcyWeisbach';
import ColebrookWhite from '../librarys/colebrookWhite';
import HazenWilliams from '../librarys/hazenWilliams';
import CoeficienteKp from '../librarys/coeficienteKp';
import LongitudEq from '../librarys/longitudEq';
import { TableRenderer, tablesLibrary } from '../librarys/tablesLibrary';
import CaudalInst from '../librarys/caudalIns';
import CaudalSim from '../librarys/caudalSim';
import SeccionN1 from '../librarys/seccionN1';
import SeccionN2 from '../librarys/seccionN2';

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
      </>
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
      </>
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
        <ColebrookWhite/>
        <HazenWilliams/>
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
        <CoeficienteKp />
        <LongitudEq />
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
      </>
    },
    {
      id: "section4",
      title: "Caudales de Cálculo de la Instalación",
      content:
      <>
        <CaudalInst />
        <CaudalSim />
      </>
    },
    {
      id: "section5",
      title: "Dimensionamiento Hidráulico",
      content:
      <>
        <h3>Esquema de Cálculo para el Dimensionamiento Hidráulico de la Instalación</h3>
        <p>Como en cualquier problema de ingeniería, el problema del dimensionamiento
          hidráulico, se aborda mediante un “esquema de cálculo”, entendiéndose como tal
          la idealización del problema, mediante la adopción de hipótesis de cálculo que
          simplifican la búsqueda de la solución y que conducen a un modelo matemático.
          El modelo matemático permitirá obtener la respuesta del esquema de cálculo, al
          variar los parámetros de diseño de la instalación.</p>
          <p>La instalación de distribución del agua en el edificio es una red hidráulica
            abierta y alimentada por un solo punto. Pueden existir en el edificio redes
            cerradas como por ejemplo la instalación de distribución de agua caliente
            sanitaria con retorno y la instalación de distribución de agua caliente para
            calefacción. Estas instalaciones no se tratan en este texto, sin embargo los
            conceptos que aquí se verán son aplicables en todos los casos. Para el
            dimensionado hidráulico se adopta un esquema de cálculo que supone la
            instalación integrada por partes elementales denominadas “tramos” de la
            instalación.</p>
        Un tramo de la instalación cumple con las siguientes premisas:
        <ol>
          <li>El diámetro es constante.</li>
          <li>El caudal circulante es constante.</li>
          <li>La velocidad es constante, por aplicación de la Ecuación de Continuidad.</li>
          <li>La pérdida de carga por fricción está uniformemente distribuida.</li>
        </ol>
      <h3>Definiciones</h3>
      <h4>Nodo de la instalación</h4>
      Denominamos NODO de la instalación al punto donde:
      <ul>
        <li>Se unen dos o más cañerías de igual o distinto diámetro.</li>
        <li>Se suministra de agua a la instalación.</li>
        <li>Se conecta un artefacto de consumo.</li>
      </ul>
      Los accesorios como: codos de 45º, 90º, curvas, válvulas y medidores, no generan nodos.
      <h4>Tramo de la Instalación</h4>
      Denominamos TRAMO de la instalación a la porción de cañería entre dos nodos de la instalación.
      Por cada tramo tendremos:
      <ul>
        <li>Nodo 1: inicial o de suministro.</li>
        <li>Nodo 2: final o de consumo.</li>
      </ul>
      Las fórmulas de pérdida de carga vistas anteriormente, se aplican a cada tramo de la
      instalación así definido. Las pérdidas de cargas localizadas debidas a los accesorios,
      se consideran inmediatamente después del punto donde se han producido.<br/>
      Para su cuantificación, se hace la siguiente clasificación de los tramos, según la
      ubicación relativa en la instalación:
      <ul>
        <li>Tramo de Acometida.</li>
          <dd>El nodo inicial es el punto de suministro de agua a la instalación y termina
            en un extremo de cañería.</dd>
        <li>Tramo intermedio.</li>
          <dd>Comienza con un accesorio (normalemente una tee de derivación y/o una
            reducción de diámetros), y termina en un extremo de cañería.</dd>
        <li>Tramo Terminal.</li>
          <dd>Comienza con un accesorio y termina con un accesorio, que es la toma del
            artefacto de consumo. La toma del artefacto puede ser un codo o una curva.</dd>
      </ul>
      <h3>Procedimiento de Cálculo</h3>
      <p>Es conveniente realizar un esquema tridimensional de la instalación con identificación
        del nodo de acometida/suministro, de los nodos intermedios y terminales/consumo, indicando
        los gastos asignados a cada artefacto, con acotación de las longitudes reales de tramos e
        individualización de codos, curvas, tees de derivación, válvulas, etc.</p>
      Se comienza por los tramos terminales de la instalación, sistematizando el procedimiento.
      Para cada tramo se seguirán los siguientes pasos:
      <ol>
        <li>Cálculo del caudal instalado Q<sub>t</sub>.</li>
        <li>Cálculo del caudal instantáneo Q<sub>c</sub>.</li>
        <li>Predimensionado de el díametro del tramo, adoptando una velocidad del flujo ifual a 1 m/s.</li>
        <li>Se selecciona el diámetro normalizado inmediato verificando que la velocidad real esté dentro
          de los límites adoptados.</li>
        <li>Se calculan las pérdidas de carga por fricción ∆𝐻<sub>f</sub> y localizadas ∆𝐻<sub>l</sub> del tramo.</li>
        <li>Se repite el procedimiento tramo por tramo hasta el nodo de suministro a la instalación.</li>
        <li>Se determina la perdida de carga total de todos los circuitos, desde el nodo suministro de la instalación hasta el nodo
        terminal o de conexión al artefacto.</li>
        <li>Se verifican las presiones mínimas en los consumos.</li>
      </ol>
      <h4>Presiones Mínimas en Consumos</h4>
      <ul>
          <li>CASO 1 Provisión por Servicio Directo: Se identifica el artefacto que tiene la menor presión disponible.</li>
          <dd> P<sub>disp</sub> ≥ ∓∆H<sub>top</sub> + ∑(∆H<sub>f</sub> + ∆H<sub>l</sub>) + H<sub>r</sub></dd>
          Donde ∆H<sub>top</sub> es la diferencia de altura entre el punto de suministro y el artefacto
          más comprometido hidraulicamente. Si el artefacto más comprometido está por debajo del punto
          de suministro, ∆H<sub>top</sub> se tomará como un valor negativo.
          <li>CASO 2 Provisión con Tanque Hidroneumático: Se calcula la presión de parada de la Bomba.</li>
          <dd>P<sub>min.arrq</sub> = ∆H<sub>top</sub> + ∑(∆H<sub>f</sub> + ∆H<sub>l</sub>) + H<sub>r</sub></dd>
          <li>CASO 3 Provisión desde Tanque de Rerserva: Se verifica que la presión estática disponible,
            desnivel topográfico entre la base del tanque y el artefacto, sea mayor o igual la pérdida de
            carga total del circuito más la carga mínima requerida en el artefacto.</li>
          <dd>P<sub>estática.disp</sub> = ∆H<sub>top</sub> ≥ ∑(∆H<sub>f</sub> + ∆H<sub>l</sub>) + H<sub>r</sub></dd>
        </ul>
        Si no verifica la presión, se deben aumentar los diámetros, comenzando por el tramo inicial para disminuir
        las pérdidas de carga. Cuando la instalación se alimente desde tanque de reserva, se evaluará la
        opción de aumentar la presión disponible elevándolo si fuera factible.
    </>
    },
    {
      id: "section6",
      title: "Dimensionamiento Simplificado (Norma OSN)",
      content:
      <>
        <h3>Conexión Domiciliaria</h3>
        <p>La norma estableció un procedimiento empírico para la determinación del diámetro de la
          conexión domiciliaria y que, según apunta el Ing. Dante Casale, “da resultados seguros
          frente a las determinaciones teóricas más optimistas”. Para ello es preciso conocer la
          presión de servicio de la red pública de agua potable, la presión disponible y el caudal
          de la conexión domiciliaria.</p>
        <h4>Presión de Servicio</h4>
        <p>Es la presión manométrica referida a la cota del cordón de la vereda y es un dato que
          suministra a la Empresa Prestadora del Servicio de Agua Potable.</p>
        <h4>Presión Disponible</h4>
        <ol type='a'>
          <li>En Provisión Directa a la instalación de distribución, es la presión estática en el
            artefacto de mayor cota y más alejado de uso frecuente a alimentar.</li>
          <li>En Provisión Directa a Tanque de Reserva, es la presión estática en la válvula a
            flotante.</li>
          <li>En Provisión con Tanque de Bombeo, es la presión estática en la válvula a flotante.</li>
        </ol>
        <p>Denominamos ∆H<sub>top</sub> al desnivel entre el cordón de la vereda y la cota de
          alimentación al artefacto o al tanque de reserva o al tanque de bombeo,se tienen dos
          situaciones:</p>
        <ul>
          <li>Si el artefacto o el tanque de reserva, o el tanque de bombeo se encuentra instalado por
          sobre el cordón de la vereda:</li>
          <dd>P<sub>disp</sub> = P<sub>serv</sub> - ∆H<sub>top</sub></dd>
          <li>Si el TB se encuentra instalado por debajo del cordón de la vereda:</li>
          <dd>P<sub>disp</sub> = P<sub>serv</sub> + ∆H<sub>top</sub></dd>
        </ul>
        <p>Se acota que, de acuerdo a la Norma, la Presión Disponible se redondea al valor entero,
          por exceso o por defecto que resulte más desfavorable, según sea que el artefacto o el TR
          o el TB esté por debajo del nivel del cordón de la vereda o por arriba de este.</p>
        <h4>Caudal de la Conexión</h4>
        <p>De acuerdo a la normativa "[...]para alimentación directa o de bombeo a tanques de
          reservas, la conexión debe dar entre, un mínimo de 1 hora y un máximo de 4 horas, el
          volumen de reserva,[...]". Esto es:</p>
        <p>Q<sub>conx</sub> = R.T.D. / tiempo de llenado</p>
        <h4>Diámetro de la Conexión</h4>
        <p>Con la presión disponible y el caudal de la conexión, se determina el diámetro con la
          Tabla de Presiones, Caudales y Diámetros. El diámetro dado por la tabla, es diámetro
          interno para la cañería de polietileno PEAD PN10 (sistema para la conexión domiciliaria).</p>
        <TableRenderer table={tablesLibrary.diamPyQ} />
        <h3>Cañería de Alimentación: desde Ll.P. a T.B.</h3>
        <p>El diámetro de la conexión determinado con la tabla, no depende de la longitud de cañería
          (pérdidas de carga por fricción), ni de las pérdidas localizadas en su recorrido, por lo
          tanto se entiende que la Norma ha considerado las situaciones posibles que se pueden dar
          en relación a trazas y distancias desde la red.</p>
        <p>Si bien se define la conexión domiciliaria como la cañería que va desde la red hasta la
          llave de paso. Desde el punto de vista hidraúlico, la instalación desde la red al T.B.
          constituye un único tramo, y es por esta razón que corresponde utilizar el mismo diámetro
          (o uno mayor según el sistema seleccionado), para la cañería que va desde la llave de paso
          hasta el TB</p>
        <h3>Cañerías de Bajada, Colector y Puente de Empalme</h3>
        <h4>Método de las Secciones Necesarias</h4>
        <p>Para las instalaciones que son alimentadas desde un tanque de reserva, se utiliza un
          método empírico para asignar diámetros de cañerías de bajada, colectores y puentes de
          empalme, aplicable a edificios en altura, donde los recorridos horizontales de las
          bajadas y los cambios de dirección no son significativos. Artefactos y grupos de
          artefactos tienen asignadas secciones de cañerías que denominamos Secciones Necesarias
          o Teóricas.</p>
        <TableRenderer table={tablesLibrary.seccNec} />
        <p>Cada diámetro de cañería posee una Sección Real y tiene asociada una Sección Límite.
          Conocida la Sección Necesaria de cañerías, de acuerdo a la dotación de artefactos que
          alimenta la bajada, se asigna el diámetro con la cañería cuya Sección Límite sea mayor
          o igual que la Sección Necesaria.</p>
        <SeccionN1 />
        <TableRenderer table={tablesLibrary.seccLim} />
        <h4>Sección Límite para Bajadas</h4>
        <p>Si denominamos D<sub>i</sub> a un diámetro interno cualquiera, D<sub>i+1</sub> será
        el diámetro inmediato superior y S<sub>i</sub>, S<sub>i+1</sub>, las secciones reales
        correspondientes, entonces la sección límite para el diámetro D<sub>i</sub> es:</p>
        <SeccionN2 />
        <h4>Limitaciones al Método de Secciones Necesarias</h4>
        <p>El Reglamento CABA exige la justificación hidráulica para la adopción de diámetros
          en los siguientes casos:</p>
        <ol type="a">
          <li>Bajadas cuyo desarrollo horizontal supere tres veces la carga mínima disponible.</li>
          <li>En edificios de más de 45 m de altura.</li>
          <li>En edificios cuya superficie a construir supere los 3.000 m<sup>2</sup>.</li>
          <li>Cualquier otro edificio en que dada su complejidad la autoridad de aplicación
            lo solicite.</li>
        </ol>
        <h3>Asignación de diámetros de Ruptores de Vacío</h3>
        <p>El diámetro se determina según la altura de la bajada:</p>
        <ul>
          <li>Mayor a 45 m: Un diámetro menor al de la bajada.</li>
          <li>Entre 15 y 45 m: Dos diámetros menores al de la bajada.</li>
          <li>Menor a 15 m: Tres diámetros menores al de la bajada.</li>
        </ul>
        Cualquiera sea el caso, el diámetro mínimo exigible será de 9 mm, y el diámetro
        máximo exigible, de 50 mm.
      </>
    }
  ];
  
  export default tema5Content;



