import React from "react";
import MathRenderer from "./MathRenderer";
import "../styles/equations.css";

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
        <div className='equation-container'>
            <MathRenderer math={"Q_t>20\\frac{lts}{s}\\Longrightarrow Q_c=1.7Q_t^{0.21}-0.7\\frac{lts}{s}"}/>
        </div>
        <div className='equation-container'>
            <MathRenderer math={"Q_t\\leqslant20\\frac{lts}{s}\\Longrightarrow"}/>
        </div>
        <div className='equation-container'>
            <MathRenderer math={"Q_t > 20\\frac{lts}{s} \Longrightarrow"}/>
        </div>
        <div className='equation-container'>
            <MathRenderer math={""}/>
        </div>

        
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
        
        
        
        
    </>
    );
};

export default CaudalSim;
