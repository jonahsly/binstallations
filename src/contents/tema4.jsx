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
              <div className="imagen-flotante">
                <img src={img01a} /><img src={img01b} />
                <div className="texto-overlay">Abrazadera</div></div>
          </li>
          <li className="hover-item">Racord de Conexión de bronce
            <dd>Se rosca a la zbrazadera para vincular la conexión domiciliaria y la red
              de distribución de agua.</dd>
              <div className="imagen-flotante">
                <img src={img03a} /><img src={img03b} />
                <div className="texto-overlay">Abrazadera</div></div>
              </li>
          <li>Caño PEAD PN10</li>
          <li>Llave Maestra de bronce/Válv. Esférica + Vál. de Retención
            <ul>
              <li className="hover-item">Llave Maestra
                <dd>La llave maestra es una válvula de corte general que es operada por
                  la prestadora del servicio. Se instala sobre vereda o en pared sobre la
                  línea municipal en forma vertical y tiene una única dirección de flujo.
                  Es a válvula suelta, de tal forma la llave maestra es a válvula suelta,
                  ello permite que actúe como válvula de retención impidiendo el retroceso
                  del agua de la instalación a la red de distribución para evitar
                  contaminaciones. Actualmente, en Salta, la llave maestra ha sido
                  reemplazada por una válvula esférica de bronce y una válvula de
                  retención a clapeta.</dd>
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
              <li className="hover-item">Válvula de Retención a clapeta
                <dd>Como su nombre lo indica, este tipo de válvulas permiten el flujo del
                  fluido en un solo sentido, utilizando distintos mecanismos para evitar
                  el reflujo.</dd>
              </li>
            </ul>
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
          <li className="hover-item">Caja para Medidor (vereda o pared sobre L.M.)
            <div className="imagen-flotante">
              <img src={img06a} /><div className="texto-overlay">Abrazadera</div>
              <img src={img06b} />
              <div className="texto-overlay">Abrazadera</div></div>
          </li>
          <li className="hover-item">Soporte de acero inoxidable</li>
        </ol>
      </div>,
      images: ["../assets/img-abrazadera.png"],
      video: "/assets/video1.mp4"
    },
    {
      id: "section2",
      title: "Cañería troncal a Tanque de Reserva/Bombeo o Unidades Locativas",
      content: `
        Aquí se detallan aspectos técnicos, fórmulas o conceptos clave.
      `,
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
  