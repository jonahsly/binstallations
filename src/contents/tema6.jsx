import CalorQ from "../librarys/calorQ";
import CurvaRecup from "../librarys/curvaRecup";
import { TableRenderer, tablesLibrary } from "../librarys/tablesLibrary";

const tema6Content = [
    {
      id: "section1",
      title: "Provisión de Agua Caliente Domiciliaria",
      content: <>
        <h3>Transmisión de Calor en el Agua</h3>
        <CalorQ />
        <h3>Temperatura del Agua para su Uso</h3>
        <p>La temperatura del agua fría de la red o de la instalación de provisión de
          agua fría varía dependiendo de la época del año. Para usos sanitarios, es
          necesario calentar el agua fría entre 40 y 45°C.</p>
        <h3>Sistemas de Provisión</h3>
        <p>Para la alimentación de agua caliente en un edificio, se distinguen dos
          tipos de sistemas de calentamiento de agua fría.</p>
        <ol>
          <li>Sistemas Individuales</li>
          <li>Sistemas Centralizados</li>
        </ol>

      </>
    },
    {
      id: "section2",
      title: "Sistema Individual por Calefón",
      content: <>
        <p>Son artefactos para calentar agua en forma instantánea. Poseen un serpentín por
          donde entra el agua fría, la cual se va calentando progresivamente, mediante un
          quemador a gas. El quemador se enciende automáticamente cada vez que se abre una
          canilla de consumo y se apaga cuando esta se cierra. Para ello poseen una válvula
          de gas que es accionada mediante un vástago solidario a un diafragma deformable
          que divide a una cámara en dos compartimientos. Ambos compartimientos están
          conectados a un tubo venturi en línea con la alimentación de agua fría al calefón.</p>
        <p> Cuando circula un caudal de agua por el venturi, se produce un diferencial de
          presiones entre los dos compartimientos donde se encuentra el diafragma y este se
          deforma, provocando que la válvula de gas se abra, encendiendose el quemador
          principal. El caudal mínimo que debe circular por el venturi para la apertura de
          la válvula de gas es de 4 lts/m (0.067 lts/s).</p>
        Principales componentes de un calefón:
        <ul>
          <li>Quemador piloto, con llama que permanece encendida.</li>
          <li>Quemador a gas: mediante la combustión provee el calor necesario.</li>
          <li>Válvula de entrada de agua fría.</li>
          <li>Válvula de apertura de gas.</li>
          <li>Entrada y salida de agua.</li>
          <li>Salida de los gases de combustión.</li>
        </ul>
        <p>Se requiere que la presión residual del agua sea como mínimo equivalente a 2 mca,
          entre el tanque de agua y la salida del agua caliente considerada. Si la instalación
          no proporciona esa presión, ya sea por falta de altura del tanque o por restricciones
          en la circulación del agua, no se asegurá el caudal mínimo para la apertura de la
          válvula de gas y el quemador no encenderá.</p>
        <p>Poseen un dispositivo de seguridad que evita el paso de gas cuando se apaga la llama.
          Este dispositivo es llamado termocupla o par termoeléctrico. Cuando se calienta la
          unión entre dos materiales distintos, se crea una diferencia de potencial en los
          extremos no calentados (fríos) y circula, si se juntan dichos extremos, una
          corriente eléctrica. Los elementos termoeléctricos generan en una tensión muy baja
          (mV) pero suelen tener una buena capacidad de corriente.</p>
        <p>La corriente generada en base a la llama piloto es suficiente para accionar un
          solenoide que mantiene la válvula de seguridad abierta, oponiéndose a un resorte
          que tiende a cerrarla. No pueden instalarse en baños ni dormitorios.</p>
        <h3>Clasificación según el sistema de evacuación de sus gases</h3>
      <ul>
          <li>De tiro natural o cámara abierta: Estos artefactos toman el oxígeno que requieren
            para la combustión del interior del recinto en donde se encuentran instalados y
            eliminan al exterior los gases producidos, por medio de un ducto.</li>
          <li>De tiro balanceado o cámara estanca: Los de este tipo toman el oxígeno para la
            combustión a través de un ducto conectado directamente con el exterior y evacuan
            los gases producidos tras la combustión hacia fuera, mediante otro ducto.</li>
        </ul>
        <h3>Parámetros Característicos</h3>
        <ul>
          <li>Capacidad (C<sup>20°C</sup>): Caudal en litros por minuto que es capaz de calentar
          a una temperatura de 20ºC por encima de la temperatura de entrada del agua.</li>
          <li>Potencia Nominal: Cantidad de calor consumida por el calefón (kcal/hr)</li>
          <li>Rendimiento: El cociente entre la cantidad de calor efectivamente entregada
            al agua y la cantidad de calor consumida en la unidad de tiempo.</li>
        </ul>
        <p>A partir de la potencia nominal y de la capacidad del calefón se puede determinar
          la potencia útil, necesaria para elevar la temperatura del agua en 20°C. Conociendo
          la potencia útil se puede calcular el salto térmico para cualquier caudal de agua.</p>
        <h3>Normativa para la instalación de calefones</h3>
        <p>La Normas de Gas para las instalaciones internas (NAG 200) establecen las condiciones
          en que se deben instalar los calefones. Pueden instalarse en cocinas que tengan como
          mínimo un volumen de 7 m<sup>3</sup> y cumplan los requisitos de ventilación. En
          espacios para cocinar correspondientes a departamentos u oficinas de ambiente único,
          cuando estén provistos de dispositivo de seguridad por falta de llama y su consumo no
          exceda las 9.000 kcal/hr; en este caso el ambiente debe tener un volumen mínimo de
          30 m<sup>3</sup>.</p>
        <ol>
          <li>Los calefones se instalan con el quemador a una altura entre 1.50 y 1.80 metros.</li>
          <li>Las conexiones de agua fría y agua caliente deben ser con uniones desmontables.</li>
          <li>Debe intercalarse una llave de paso de agua a la entrada de agua fría.</li>
          <li>Debe instalarse una válvula de paso de gas a la entrada del calefón.</li>
          <li>Si la diferencia de altura entre la base del tanque de reserva y la salida de
            consumo más alta es menor de 4 m, debe alimentarse el calefón con una bajada
            directa sin derivaciones y con cañería de 19 mm de diámetro mínimo.</li>
        </ol>
        <h3>Dimensionamiento de las Cañerías de Distribución</h3>
        <p>Para el dimensionamiento de las cañerías de distribución de agua caliente,
          establecemos los siguientes conceptos:</p>
        <ol>
          <li>Los servicios de agua fría y caliente que concurran a un artefacto o grifería
            destinada a su mezclado deben recibir suministros con origen en la misma fuente
            (agua directa, tanque, presurizador, regulador) a efectos de proveer equilibrio
            de presiones. (Reglamento CABA).</li>
          <li>El caudal de agua caliente asignado al artefacto, es igual al caudal de agua fría.</li>
          <li>Se adopta igual simultaneidad en el uso de los artefactos.</li>
        </ol>
        En general, si la traza de la cañería de agua caliente es paralela a la traza de
        agua fría y si se utiliza el mismo sistema de cañerías, los diámetros serán iguales.
      </>
    },
    {
      id: "section3",
      title: "Sistema Individual por Termotanque",
      content:
      <>
        <p>Son artefactos acumuladores de agua caliente. Constan de un depósito acumulador
          cilíndrico interior protegido contra la corrosión y con un quemador a gas en la
          parte inferior. La transferencia de calor por la combustión del gas se realiza
          por la base del depósito y a través del conducto de evacuación de los gases de
          la combustión. El depósito acumulador debe tener una aislación térmica para evitar
          pérdidas de calor. Las características principales de funcionamiento del
          termotanque son:</p>
        <ul>
          <li>El funcionamiento es independiente de la presión de la alimentación de agua fría.</li>
          <li>El quemador del termotanque se enciende y se apaga por diferencia de temperatura.</li>
          <li>Sobre cualquier necesidad de consumo pueden instalarse en paralelo, dos, tres y
            hasta cuatro unidades en forma muy sencilla.</li>
          <li>Permite la alimentación simultánea de varios consumos de acuerdo a las necesidades,
            dependiendo de la capacidad del termotanque y de la recuperación.</li>
          <li>La temperatura va disminuyendo a medida que se consume el agua caliente y entra
            agua fría al termotanque.</li>
        </ul>
        <p>Al igual que los calefones poseen válvula de gas que permite menor o mayor ingreso de
          gas al quemador, de acuerdo a la selección de temperatura que se haga. Como elementos
          de seguridad deben poseer como mínimo:</p>
        <ul>
          <li>Dispositivo de corte de gas por falta de llama.</li>
          <li>Válvula de alivio por sobre presión en el depósito acumulador, generalmente
            4 kg/cm<sup>2</sup>, de acuerdo a la marca puede llegar a los 8 kg/cm<sup>2</sup>.</li>
        </ul>
        <p>Debido al hecho de que las altas temperaturas del agua favorecen los procesos de
          corrosión en el acero, generalmente el termotanque incorpora un ánodo de sacrificio;
          es una vara de magnesio o aluminio, que rodea un alambre de acero y está atornillado
          en el tanque por la cubierta. Cuando el depósito acumulador se llena de agua, se
          produce una reacción electrolítica, por lo que el ánodo se sacrifica para proteger
          alguna pequeña cantidad de acero eventualmente expuesto. No se recomiendan
          temperaturas de agua mayores a 70ºC.</p>
        <h3>Parámetros Característicos</h3>
        <ul>
          <li>Recuperación (C<sub>R</sub><sup>20°C</sup>): Caudal en litros por hora que el
            artefacto es capaz de calentar a una temperatura de 20°C por encima de la
            temperatura de entrada del agua.</li>
          <li>Volumen de Reserva/Capacidad: Es el volumen de agua que puede mantener a la
            temperatura establecida.</li>
          <li>Potencia Nominal: Cantidad de calor consumida por el termotanque (kcal/hr)</li>
          <li>Potencia Útil: Cantidad de calor suministrada por el termotanque (kcal/hr)</li>
          <li>Rendimiento: El cociente entre la cantidad de calor efectivamente entregada
            al agua ,y la cantidad de calor consumida por el termotanque.</li>
        </ul>
        <h3>Diseño de la Capacidad</h3>
        <p>Como se apuntara anteriormente, uno de los factores básicos a tener en cuenta en
          la selección de un termotanque es el consumo pico o de punta, es decir el máximo
          consumo simultáneo de agua caliente que es de esperar en la instalación. El
          consumo pico es influenciado principalmente por el tipo de aplicación de la
          instalación y la época estacional.</p>
        <p> Para consumos elevados la industria provee termotanques denominados de Alta
          Recuperación. Este tipo de termotanque combina las características del calefón
          con la reserva de agua caliente. La recuperación de agua caliente de estos
          termotanques puede llegar al 400% respecto de un termotanque convencional,
          dependiendo del fabricante. No obstante ello y a efectos de resolver el problema,
          se han establecido consumos que sirven de guía a la hora de seleccionar un equipo.</p>
        <h4>Diseño Empírico</h4>
        En los termotanques comunes considerando un uso normal se sugiere:
        <ul>
          <li>De una a dos personas: Termotanque de 55 lts.</li>
          <li>De dos a tres personas: Termotanque de 85 lts.</li>
          <li>De tres a cuatro personas: Termotanque de 125 lts.</li>
          <li>Más prestaciones: Termotanque de alta recuperación.</li>
        </ul>
        <TableRenderer table={tablesLibrary.capTerm} />
        <h4>Diseño por integración de las Curvas de Recuperación y Demanda</h4>
        <p>Para efectuar un diseño racional de la planta de generación de agua caliente es
          preciso conocer la demanda de agua caliente para el período más desfavorable o de
          mayor consumo. Es por ello que se debe conocerse perfectamente los hábitos de
          consumo de agua caliente, particularmente:</p>
        <ol>
          <li>Demanda máxima por uso de los artefactos instalados.</li>
          <li>Período del día de mayor consumo.</li>
        </ol>
        <p>El método para determinar la capacidad de la planta, se basa en las curvas de
          recuperación de agua caliente de la planta y en la curva de consumo de los
          artefactos. Haciendo una integración en intervalos finitos dentro del período
          de mayor consumo de ambas curvas se pueden encontrar los volúmenes acumulados
          de demanda y recuperación. Por diferencia entre los volúmenes acumulados de
          demanda y recuperación, encontramos la capacidad de la planta.</p>
        <CurvaRecup />
        Suponiendo un período de diseño de 24 horas. Se hacen las siguientes hipótesis:
        <ul>
            <li>Caudal de recuperación constante durante todo el período considerado.</li>
            <li>Caudales de consumo constantes en intervalos de tiempo dentro del período
                de diseño considerado.</li>
            <li>No existe agua caliente de reserva al inicio del período de diseño.</li>
        </ul>
        <p>La máxima diferencia entre las curvas de demanda y recuperación determina el
            volumen mínimo inicial de agua caliente que se necesita al inicio del período
            de diseño.</p>
      </>
    },
    {
      id: "section4",
      title: "Sistema Centralizado con Caldera y Tanque Intermediario",
      content:
      <>
      </>
    },
    {
      id: "section5",
      title: "Sistema Centralizado con Termotanque de Alta Recuperación",
      content:
      <>
      </>
    },
    {
      id: "section6",
      title: "Distribución de Agua Caliente Centralizada",
      content:
      <>
      </>
    }
  ];
  
  export default tema6Content;
