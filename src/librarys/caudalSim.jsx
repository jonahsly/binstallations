import React from "react";
import MathRenderer from "./MathRenderer";
import "./equations.css";

const CaudalSim = () => {
    return (
    <>
        <h3>Caudal Simultáneo Q<sub>c</sub>:</h3>
        <p>Se define como Caudal Simultáneo al CAUDAL MÁXIMO PROBABLE que circula por un dado tramo de la
        instalación, bajo una cierta simultaneidad en el uso de los artefactos que son alimentados por dicho
        tramo.</p>
        <h4>Simultaneidad de Uso de los Artefactos Sanitarios</h4>
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
        Por otro lado, "Crear un modelo exacto para predecir la demanda de una edificación es imposible y
        estudios finales que consideren el impacto de la conservación en la demanda del agua no están completos
        todavía". (Código Internacional de Instalaciones Hidráulicas y Sanitarias, 2006).<br/><br/>
        Entre los métodos semi-empíricos utilizados, particularmente en España y con antecedentes en normativa
        francesa, nos referiremos al Método del Factor de Simultaneidad, también llamado Método Racional y que ha
        sido recogido por el Reglamento de Instalaciones Sanitarias de la Ciudad Autónoma de Buenos Aires, para
        su aplicación en dimensionamiento de la instalación por métodos racionales.<br/>
        <h3>Cálculo de Caudales Simultaneos</h3>
        <h4>Método para Provisión por Servicio Directo (Normas OSN)</h4>
        <div className='equation-container'>
            <ul>
                <li>Viviendas o departamentos: Se adopta como caudal simultáneo el correspondiente a
                una vez y medio el caudal de la canilla de servicio.</li>
                <MathRenderer math={"Q_c=1.50\\cdot0.13\\frac{lts}{s}\\cong 0.60\\frac{lts}{s}"}/>
                <li>Edificios de oficina, negocios y fábricas: Conjunto de artefactos de baños y toilette se
                consideran un solo artefacto, siendo N el número de artefactos instalados.</li>
                <MathRenderer math={"Q_c=\\frac{N}{2}0.13\\frac{lts}{s}\\cong N\\cdot 0.20\\frac{lts}{s}"}/>
            </ul>
        </div>
        <h4>Método del Factor de Simultaneidad K<sub>1</sub> (Díaz Dorado)</h4>
        Es un método semi-empírico, el caudal simultáneo se determina con la expresión:
        <div className='equation-container'>
            <MathRenderer math={"Q_c = K_1 \\cdot Q_t"}/>
            <MathRenderer math={"K_1=\\frac{1}{\\sqrt{n-1}}"}/>
        </div>
        <div className='variables-container'>
            <p>Donde:</p>
            <ul>
                <li><MathRenderer math={"Q_c"}/>: es el caudal simult. (lts/s)</li>
                <li><MathRenderer math={"K_1"}/>: el coeficiente de simultaneidad</li>
                <li><MathRenderer math={"Q_t"}/>: es caudal instalado (lts/s)</li>
                <li><MathRenderer math={"n"}/>: el núm. de artefactos instalados aguas abajo del tramo</li>
            </ul>
        </div>
        Se recomienda no considerar factores de simultaneidad menores a 0.20. Cabe acotar que este
        método requiere que los caudales unitarios asignados a los artefactos de consumo, numéricamente posean
        el mismo orden de magnitud. Para los tramos de la instalación que alimenten baños, se considerará un
        solo artefacto y será el de mayor caudal instalado.
        <h4>Método del Factor de Simultaneidad K<sub>2</sub></h4>
        El caudal simultáneo se calcula según el número de unidades locativas o viviendas.
        Cuando se distribuye agua a un conjunto de viviendas o unidades locativas, es de esperar que los hábitos
        de consumo no sean iguales en cada una de ellas. Un edificio de departamentos puede tener
        la misma dotación sanitaria en todas las unidades locativas, sin embargo los usos pueden no coincidir en
        el tiempo, pues son distintas las costumbres de las personas que las habitan. Una forma de tener en cuenta
        la no simultaneidad de los consumos de agua en este tipo de edificios, es mediante la introducción de
        otro coeficiente, que indicaremos como K<sub>2</sub>, que afecta a los caudales simultáneos determinados
        medianteel coeficiente K<sub>1</sub>. El coeficiente K<sub>2</sub> se aplica a los tramos troncales de la
        instalación que alimentan a las unidades locativas o viviendas y a los tramos de bajada en un edificio en
        altura.
        <div className='equation-container'>
            <MathRenderer math={"Q_c=K_2\\displaystyle\\sum_{i=1}^{n} Q_{ci}"}/>
            <MathRenderer math={"K_2=\\frac{19+N}{10\\cdot(N+1)}"}/>
        </div>
        <div className='variables-container'>
            <p>Donde:</p>
            <ul>
                <li><MathRenderer math={"Q_{ci}"}/>: es el caudal simult. de cada unidad locativa</li>
                <li><MathRenderer math={"K_2"}/>: el coeficiente de simultaneidad</li>
                <li><MathRenderer math={"N"}/>: el núm. de unidades locativas o viviendas que alimenta el tramo</li>
            </ul>
        </div>
        <h4>Método de la Norma UNE 149.201-08</h4>
        Es un método para calcular caudales simultáneos en función del caudal instalado y del destino del
        edificio. A continuación transcribimos la formulación del caudal simultáneo, para dos destinos particulares:
        <p>- Edificios de Viviendas:</p>
        Para: <MathRenderer math={"Q_t>20\\frac{lts}{s}"}/>
        <ul><li><MathRenderer math={"Q_c=1.7Q_t^{0.21}-0.7\\frac{lts}{s}"}/></li></ul>
        Para: <MathRenderer math={"Q_t\\leqslant20\\frac{lts}{s}"}/><br/>
        Depende de los caudales instantáneos mínimos (los asignados a cada artefacto de consumo):
        <ul>
            <li><MathRenderer math={"Q_{min}<0.5\\frac{lts}{s}"}/>
                <dd><MathRenderer math={"Q_{c}=0.685\\cdot Q_t^{0.45} - 0.14\\frac{lts}{s}"}/></dd>
            </li><br/>
            <li>
                <MathRenderer math={"Q_{min}\\geqslant0.5\\frac{lts}{s}"}/>
                <dd><MathRenderer math={"Q_{t}\\leqslant 1\\frac{lts}{s}\\Longrightarrow Q_{c}=Q_{t}"}/></dd><br/>
                <dd><MathRenderer math={"Q_{t}>0.5\\frac{lts}{s}\\Longrightarrow Q_c=1.7Q_t^{0.21}-0.7\\frac{lts}{s}"}/></dd>
            </li>
        </ul>
        <p>- Edificios de Oficinas, Estaciones, Aeropuertos, Etc.:</p>
        Para: <MathRenderer math={"Q_t>20\\frac{lts}{s}"}/>
        <ul><li><MathRenderer math={"Q_c=0.4Q_t^{0.54}+0.48\\frac{lts}{s}"}/></li></ul>
        Para: <MathRenderer math={"Q_t\\leqslant20\\frac{lts}{s}"}/><br/>
        <ul>
            <li><MathRenderer math={"Q_{min}<0.5\\frac{lts}{s}"}/>
                <dd><MathRenderer math={"Q_{c}=0.685\\cdot Q_t^{0.45} - 0.14\\frac{lts}{s}"}/></dd>
            </li><br/>
            <li>
                <MathRenderer math={"Q_{min}\\geqslant0.5\\frac{lts}{s}"}/>
                <dd><MathRenderer math={"Q_{t}\\leqslant 1\\frac{lts}{s}\\Longrightarrow Q_{c}=Q_{t}"}/></dd><br/>
                <dd><MathRenderer math={"Q_{t}>0.5\\frac{lts}{s}\\Longrightarrow Q_c=1.7Q_t^{0.21}-0.7\\frac{lts}{s}"}/></dd>
            </li>
        </ul>
        <h4>Método de la Norma Chilena NCH-2.485-00</h4>
        Esta norma establece el siguiente procedimiento para la determinación de caudales instantáneos:
        <div className='equation-container'>
            <MathRenderer math={"Q_c=1.7391\\cdot{Q_t}^{0.6891}"}/>
        </div>
        <div className='variables-container'>
            <p>Donde:</p>
            <ul>
                <li><MathRenderer math={"Q_t"}/>: es el caudal instalado (lts/min)</li>
                <li><MathRenderer math={"Q_c"}/>: el caudal máximo probable (lts/min)</li>
            </ul>
        </div>
        Para aplicación de la fórmula la Norma prescribe que, para “los dos últimos artefactos de un tramo de
        ramal, el caudal máximo probable debe ser la suma de los caudales instalados de ambos”, y el “caudal
        máximo probable de un tramo de ramal en que existen tres o más artefactos debe ser, como mínimo la suma
        de los dos de mayor consumo”.
        <h4>Caudales Simultáneos cuando la instalación posee Válvulas Automáticas para inodoros</h4>
        <p>Las válvulas automáticas para inodoros descargan un gran caudal instantáneamente, puesto que al no
        disponerse de depósito, el agua se almacena en la propia cañería que alimenta la válvula. Se usan
        particularmente en sanitarios de uso público, y es recomendable que sean alimentadas por una instalación
        independiente de otros artefactos, como son inodoros con depósito, lavatorios, mingitorios, etc., en
        razón de que el caudal de desacarga de la válvula automática puede perturbar el uso de otros artefactos.
        La alimentación independiente debe hacerse desde el colector o puente de empalme del tanque de reserva.</p>
        <p>Dado el corto tiempo de funcionamiento de la válvula, en el orden de los 30 segundos, es muy baja la
        probabilidad de uso simultaneo de varias válvulas, es por ello que las Normas OSN consideran una
        válvula en funcionamiento por cada cuatro válvulas instaladas. Este criterio ha sido adoptado en
        general, por los fabricantes nacionales de válvulas automáticas.</p>
        Otro criterio aceptado es (Carnicer Royo, 1998):<br/>
        Para:
        <div className='equation-container'>
            <MathRenderer math={"n<3\\Longrightarrow Q_c=Q_{va}"}/>
        </div>
        <div className='equation-container'>
            <MathRenderer math={"3\\leqslant n<12\\Longrightarrow Q_c=2\\cdot Q_{va}"}/>
        </div>
        <div className='equation-container'>
            <MathRenderer math={"12\\leqslant n<24\\Longrightarrow Q_c=3\\cdot Q_{va}"}/>
        </div>
        <div className='equation-container'>
            <MathRenderer math={"24\\leqslant n\\Longrightarrow Q_c=4\\cdot Q_{va}"}/>
        </div>
        <div className='variables-container'>
            <p>Donde:</p>
            <ul>
                <li><MathRenderer math={"n"}/>: es la cant. de válvulas instaladas</li>
                <li><MathRenderer math={"Q_c"}/>: el caudal simultaneo</li>
                <li><MathRenderer math={"Q_{va}"}/>: el caudal de una válv. automática</li>
            </ul>
        </div>
    </>
    );
};

export default CaudalSim;
