import img01a from "../assets/acc01a.png";
import img01b from "../assets/acc01b.png";
import img02a from "../assets/acc02a.png";
import img02b from "../assets/acc02b.png";
import img03a from "../assets/acc03a.png";
import img03b from "../assets/acc03b.png";
import img04a from "../assets/acc04a.png";
import img04b from "../assets/acc04b.png";
import img05a from "../assets/acc05a.png";
import img05b from "../assets/acc05b.png";
import img06a from "../assets/acc06a.png";
import img06b from "../assets/acc06b.png";
import img07a from "../assets/acc07a.png";
import img07b from "../assets/acc07b.png";
import img08a from "../assets/acc08a.png";
import img08b from "../assets/acc08b.png";
import img09a from "../assets/acc09a.png";
import img09b from "../assets/acc09b.png";
import img10a from "../assets/acc10a.png";
import img10b from "../assets/acc10b.png";
import img11a from "../assets/acc11a.png";
import img11b from "../assets/acc11b.png";
import img11c from "../assets/acc11c.png";
import img11d from "../assets/acc11d.png";
import img12a from "../assets/acc12a.png";
import img12b from "../assets/acc12b.png";
import img13a from "../assets/acc13a.png";
import img13b from "../assets/acc13b.png";
import img13c from "../assets/acc13a.png";
import img14a from "../assets/acc14a.png";
import img14b from "../assets/acc14b.png";
import img14c from "../assets/acc14c.png";
import img14d from "../assets/acc14d.png";
import img15a from "../assets/acc15a.png";
import img15b from "../assets/acc15b.png";
import img16a from "../assets/acc16a.png";
import img16b from "../assets/acc16b.png";

import "./generalContent.css";
const tema4Content = [
    {
      id: "section1",
      title: "Conexión Domiciliaria a la Red de Distribución de Agua Potable",
      content: 
      <div>
        <p>Se define como conexión domiciliaria, al conjunto de tuberías y accesorios
          que constituyen una prolongación de la instalación interna, desde la línea
          municipal hasta la red pública de distribución de agua potable. La conexión
          domiciliaria se compone de los siguientes elementos:</p>
        <ol><li className="hover-item">Abrazadera de Conexión
            <dd>Es de PEAD para electrofusión si la cañería es de polietileno, en los
              casos que fuera de PVC, el empalme se hará mediante abrazadera de plástico
              reforzado, racord de bronce no incorporado y con sistema de ajuste tipo
              abulonado.</dd>
              <div className="imagen-flotante"><img src={img01a}/><img src={img01b}/></div>
          </li>
          <li className="hover-item">Racord de Conexión de bronce
            <dd>Se rosca a la zbrazadera para vincular la conexión domiciliaria y la red
              de distribución de agua.</dd>
              <div className="imagen-flotante"><img src={img03a}/><img src={img03b}/></div>
              </li>
          <li className="hover-item">Caño PEAD PN10
            <div className="imagen-flotante"><img src={img09a}/><img src={img09b}/></div>
          </li>
          <li className="hover-item">Llave Maestra de Bronce
            <dd>Es una válvula de corte general, operada por la prestadora del servicio.
              Tiene una única dirección de flujo y es a válvula suelta, de forma que 
              actúa como válvula de retención, impidiendo el retroceso del agua de la
              instalación a la red de distribución para evitar contaminaciones.
              Actualmente, ha sido reemplazada por una válvula esférica de bronce y una
              válvula de retención de bronce.</dd>
              <div className="imagen-flotante">
                <img src={img02a} /><img src={img02b} />
                <div className="texto-overlay">Abrazadera</div></div>
          </li >
          <li className="hover-item">Válvula Esférica de Bronce
            <dd>También llamadas de ¼ de vuelta, poseen una esfera perforada en su
              interior, que de acuerdo a la posición que adopta al ser accionada por la
              palanca, permite o no el paso del fluido.</dd>
              <div className="imagen-flotante">
                <img src={img04a}/>  <img src={img04b} />
                <div className="texto-overlay">Abrazadera</div></div>
          </li>
          <li className="hover-item">Medidor de Consumo
            <dd>Son instrumentos de medición del consumo del edificio y son provistos por
              la operadora del servicio. Son medidores totalizadores, el consumo se
              determina por la diferencia de mediciones. La prestadora especifica:
              medidor clase B, de chorro múltiple, tipo velocímetro, transmisión
              magnética, lectura directa, cuadrante seco. Caudales nominales (Qn)
              m3/h: 1,5 - 2,5 - 3,5 - 5 - 10 </dd>
              <div className="imagen-flotante">
                <img src={img05a} /><img src={img05b} />
                <div className="texto-overlay">Abrazadera</div></div>
          </li>
          <li className="hover-item">Válvula de Retención de Bronce
            <dd>Como su nombre lo indica, este tipo de válvulas permiten el flujo del
              fluido en un solo sentido, utilizando distintos mecanismos para evitar
              el reflujo.</dd>
              <div className="imagen-flotante">
                <img src={img08a}/>  <img src={img08b} />
                <div className="texto-overlay">Abrazadera</div></div>
          </li>
          <li className="hover-item">Caja para Medidor (vereda o pared sobre L.M.)
            <div className="imagen-flotante">
              <img src={img06a} /><div className="texto-overlay">Abrazadera</div>
              <img src={img06b} />
              <div className="texto-overlay">Abrazadera</div></div>
          </li>
          <li className="hover-item">Soporte de acero inoxidable  
            <div className="imagen-flotante">
              <img src={img07a}/>  <img src={img07b} />
              <div className="texto-overlay">Abrazadera</div></div>
          </li>
        </ol>
      </div>,
    },
    {
      id: "section2",
      title: "Cañería troncal a Unidades Locativas/T.R./T.B.",
      content: 
      <div>
        <p>Se define como conexión domiciliaria, al conjunto de tuberías y accesorios
          que constituyen una prolongación de la instalación interna, desde la línea
          municipal hasta la red pública de distribución de agua potable. La conexión
          domiciliaria se compone de los siguientes elementos:</p>
        <ul><li className="hover-item">Llave de Paso
            <dd>La llave de paso es una válvula de corte general del suministro de agua para permitir por ejemplo reparaciones.
Su instalación se hace sobre pared dentro del edificio y a no más de 1 m. de distancia de la línea municipal.
La llave de paso es a válvula suelta, al igual que la llave maestra, y actúa como válvula de retención impidiendo el retroceso
del agua de la instalación a la red de distribución para evitar contaminaciones.
Tiene una única dirección de flujo y se instala en forma horizontal.
Actualmente, la conexión domiciliaria prevé una válvula de retención que cumple la función de impedir el retroceso del
agua a la red, razón por la cual la llave de paso a válvula suelta se reemplaza por una válvula esférica de un cuarto de
vuelta.</dd>
              <div className="imagen-flotante"><img src={img10a}/><img src={img10b}/></div>
          </li>
          <li className="hover-item">Caño PPH/PPCR
            <div className="imagen-flotante"><img src={img16a}/><img src={img16b}/></div>
          </li>
          <li className="hover-item">Válvula Esférica de Bronce/Plástico
            <dd>Similares a las anteriores, en este caso tanto la esfera, como el cuerpo de la válvula, son de material plástico.
            Rosca H-H, con 1 media unión, con 2 medias uniones, desde 1/2" hasta 4".</dd>
              <div className="imagen-flotante"><img src={img14a}/><img src={img14b}/><img src={img14c}/><img src={img14d}/></div>
          </li>
          <li className="hover-item">Válvula Esclusa
            <dd>Las válvulas esclusa poseen una compuerta o esclusa que asciende o desciende mediante el accionamiento del vástago. La
característica de este tipo de válvulas es que la apertura o cierre de las mismas se realiza en forma lenta, evitando de esta
forma el fenómeno denominado gulpe de ariete, que puede llegar a ser nocivo en conducciones de fluidos a presión.</dd>
              <div className="imagen-flotante">
                <img src={img13a} /><img src={img13b} /><img src={img13c} />
                <div className="texto-overlay">Abrazadera</div></div>
          </li >
          <li className="hover-item">Válvula de Bronce Cuarto de Vuelta:
            <dd>Se utiliza como válvula de limpieza de tanques. Son llaves de cierre rápido.</dd>
              <div className="imagen-flotante">
                <img src={img12a}/>  <img src={img12b} />
                <div className="texto-overlay">Abrazadera</div></div>
          </li>
          <li className="hover-item">Válvulas de Retención de Pie de Bomba
            <dd>Se instala en el pie de la cañería de aspiración de la bomba a fin de evitar la pérdida de la carga de agua en esta cañería,
cuando la bomba tiene aspiración negativa.
Si esto ocurre, puede que la bomba no aspire y deba cargarse (cebado) la cañería con agua por el tapón que tiene la bomba
en el cuerpo de la turbina.</dd>
              <div className="imagen-flotante">
                <img src={img11a} /><img src={img11b} /><img src={img11c} /><img src={img11d} />
                <div className="texto-overlay">Abrazadera</div></div>
          </li>
          <li className="hover-item">Válvula a Flotante
            <dd>Se instalan en:
• Entrada de agua en el tanque de bombeo
• Entrada de agua en el tanque de reserva elevado, cuando está alimentado en forma directa.</dd>
              <div className="imagen-flotante">
                <img src={img15a}/>  <img src={img15b} />
                <div className="texto-overlay">Abrazadera</div></div>
          </li>
          <li className="hover-item">Bomba de Impulsión
            <div className="imagen-flotante">
              <img src={img06a} /><div className="texto-overlay">Abrazadera</div>
              <img src={img06b} />
              <div className="texto-overlay">Abrazadera</div></div>
          </li>
          <li className="hover-item">Control de Nivel de Líquido 
            <div className="imagen-flotante">
              <img src={img07a}/>  <img src={img07b} />
              <div className="texto-overlay">Abrazadera</div></div>
          </li>
        </ul>
      </div>,
      images: [],
      video: null
    },
    {
      id: "section3",
      title: "Ejemplos Prácticos del Tema 1",
      content: `Listado de casos prácticos o ejercicios.`,
      images: [],
      video: null
    }
  ];
  
  export default tema4Content;
  