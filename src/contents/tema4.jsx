import img01a from "../assets/img.af/acc01a.png";
import img01b from "../assets/img.af/acc01b.png";
import img02a from "../assets/img.af/acc02a.png";
import img02b from "../assets/img.af/acc02b.png";
import img03a from "../assets/img.af/acc03a.png";
import img03b from "../assets/img.af/acc03b.png";
import img04a from "../assets/img.af/acc04a.png";
import img04b from "../assets/img.af/acc04b.png";
import img05a from "../assets/img.af/acc05a.png";
import img05b from "../assets/img.af/acc05b.png";
import img06a from "../assets/img.af/acc06a.png";
import img06b from "../assets/img.af/acc06b.png";
import img07a from "../assets/img.af/acc07a.png";
import img07b from "../assets/img.af/acc07b.png";
import img08a from "../assets/img.af/acc08a.png";
import img08b from "../assets/img.af/acc08b.png";
import img09a from "../assets/img.af/acc09a.png";
import img09b from "../assets/img.af/acc09b.png";
import img10a from "../assets/img.af/acc10a.png";
import img10b from "../assets/img.af/acc10b.png";
import img11a from "../assets/img.af/acc11a.png";
import img11b from "../assets/img.af/acc11b.png";
import img11c from "../assets/img.af/acc11c.png";
import img11d from "../assets/img.af/acc11d.png";
import img12a from "../assets/img.af/acc12a.png";
import img12b from "../assets/img.af/acc12b.png";
import img13a from "../assets/img.af/acc13a.png";
import img13b from "../assets/img.af/acc13b.png";
import img13c from "../assets/img.af/acc13a.png";
import img14a from "../assets/img.af/acc14a.png";
import img14b from "../assets/img.af/acc14b.png";
import img14c from "../assets/img.af/acc14c.png";
import img14d from "../assets/img.af/acc14d.png";
import img15a from "../assets/img.af/acc15a.png";
import img15b from "../assets/img.af/acc15b.png";
import img16a from "../assets/img.af/acc16a.png";
import img16b from "../assets/img.af/acc16b.png";
import img17a from "../assets/img.af/acc17a.png";
import img17b from "../assets/img.af/acc17b.png";
import img17c from "../assets/img.af/acc17c.png";
import img18a from "../assets/img.af/acc18a.png";
import img18b from "../assets/img.af/acc18b.png";
import img18c from "../assets/img.af/acc18c.png";
import img19a from "../assets/img.af/acc19a.png";
import img19b from "../assets/img.af/acc19b.png";
import img19c from "../assets/img.af/acc19c.png";
import img20a from "../assets/img.af/acc20a.png";
import img20b from "../assets/img.af/acc20b.png";
import img21a from "../assets/img.af/acc21a.png";

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
        <p>Cuando la presión disponible en la red lo permite, la alimentación a unidades locativas
          que conforman un conjunto habitacional, normalmente desarrollado en planta baja, se puede
          hacer en provisión directa desde la red. En este caso, desde la llave de paso, sale una
          cañería troncal que alimenta las unidades locativas y cumple con los mismos requisitos
          que la cañería de alimentación a TR o TB. En cualquiera de los casos, se encuentran los
          siguientes elementos:</p>
        <ul><li className="hover-item">Llave de Paso
            <dd>Es una válvula de corte general del suministro de agua para permitir por ejemplo
              reparaciones. Su instalación se hace sobre pared dentro del edificio y a no más de
              1 m. de distancia de la línea municipal. Es a válvula suelta, actúa como válvula
              de retención impidiendo el retroceso del agua. Tiene una única dirección de flujo
              y se instala en forma horizontal. Actualmente, se la reemplaza por una válvula
              esférica de ¼ de vuelta.</dd>
              <div className="imagen-flotante"><img src={img10a}/><img src={img10b}/></div>
          </li>
          <li className="hover-item">Caño PPH/PPCR
            <div className="imagen-flotante"><img src={img16a}/><img src={img16b}/></div>
          </li>
          <li className="hover-item">Válvula Esférica de Bronce/Plástico
            <dd>También llamadas de ¼ de vuelta, poseen una esfera perforada en su interior, que
              de acuerdo a la posición que adopta al ser accionada por la palanca, permite o no
              el paso del fluido. La esfera, como el cuerpo de la válvula pueden ser de bronce o
              plástico (Rosca H-H, con 1 media unión, con 2 medias uniones, desde 1/2" hasta 4").</dd>
              <div className="imagen-flotante">
                <img src={img14a}/><img src={img14b}/><img src={img14c}/><img src={img14d}/>
              </div>
          </li>
          <li className="hover-item">Válvula Esclusa
            <dd>Las válvulas esclusas poseen una compuerta o esclusa que asciende o desciende
              mediante el accionamiento del vástago. La característica de este tipo de válvulas
              es que la apertura o cierre de las mismas se realiza en forma lenta, evitando de
              el fenómeno denominado golpe de ariete.</dd>
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
          <li className="hover-item">Válvula de Retención de Pie de Bomba
            <dd>Se instala en el pie de la cañería de aspiración de la bomba a fin de evitar la
              pérdida de carga de agua , cuando la bomba tiene aspiración negativa. Si esto
              ocurre, puede que la bomba no aspire y deba cargarse (cebado) la cañería con agua
              por el tapón que tiene la bomba en el cuerpo de la turbina.</dd>
              <div className="imagen-flotante">
                <img src={img11a} /><img src={img11b} /><img src={img11c} /><img src={img11d} />
                <div className="texto-overlay">Abrazadera</div></div>
          </li>
          <li className="hover-item">Válvula a Flotante
            <dd>Se instala en la entrada de agua en el tanque de bombeo; en la entrada de agua
              en el tanque de reserva cuando está alimentado en forma directa.</dd>
              <div className="imagen-flotante">
                <img src={img15a}/>  <img src={img15b} />
                <div className="texto-overlay">Abrazadera</div></div>
          </li>
          <li className="hover-item">Bomba de Impulsión
            <p>Es el elemento de la instalación encargado de mover el agua y suministrarle
              presión. La bomba más utilizada en las instalaciones de provisión de agua en
              edificios es la bomba centrífuga. Posee un motor eléctrico cuyo eje se encuentra
              acoplado al rodete de bomba. El rodete se aloja en una cámara estanca con una
              entrada de agua o ASPIRACIÓN y una salida de agua o IMPULSIÓN. La bomba de
              impulsión se utiliza para:
              <ul><li>Elevar el agua directamente desde la red al tanque de reserva.</li>
                <li>Elevar el agua desde el tanque de bombeo al tanque de reserva.</li>
                <li>Inyectar agua a presión en la instalación de distribución en complemento
                  con el tanque hidroneumático.</li>
              </ul>
              Se instalan respecto del depósito de agua de dos formas:
              <ul><li>ASPIRACIÓN POSITIVA: El eje de la bomba por debajo del depósito de agua,
                la cañería de aspiración se encuentrallena de agua.</li>
                <li>ASPIRACIÓN NEGATIVA: El eje por arriba del depósito de agua, en este caso
                  se debe asegurar que la cañería de aspiración tenga agua, mediante una
                  válvula de retención instalada al pie de la cañería .</li>
              </ul>
              Cada bomba tiene su Curva de Funcionamiento especificada por el fabricante.</p>
            <div className="imagen-flotante">
              <img src={img17a} /><div className="texto-overlay">Abrazadera</div>
              <img src={img17b} /><img src={img17c} />
              <div className="texto-overlay">Abrazadera</div></div>
          </li>
          <li>Control de Nivel de Líquido
          <p>Es un dispositivo eléctrico, que actúa sobre el circuito de mando del contactor
            de alimentación a la bomba de impulsión. De conformidad con la reglamentación
            vigente sobre las instalaciones eléctricas, el circuito de mando del contactor se 
            alimenta con muy baja tensión (menor o igual a 24 volt). Actúa para:
              <ol><li>Arrancar la bomba cuando el tanque de reserva alcanza un nivel mínimo
                prefijado (tanque de reserva vacío).</li>
                <li>Parar la bomba cuando el tanque de reserva alcanza el nivel máximo
                  prefijado (tanque de reserva lleno).</li>
                <li>Parar la bomba cuando el tanque de bombeo alcanza el nivel mínimo prefijado
                  (tanque de bombeo vacío).</li>
              </ol>
              <ul><li>Control de Nivel con interruptor eléctricos: Posee un interruptor
                eléctrico en serie con la alimentación eléctrica a la bobina del contactor.
                <ul>
                  <li className="hover-item">Tipo boya deslizante
                  <div className="imagen-flotante">
              <img src={img18a}/>  <img src={img18b} /><img src={img18c} />
              <div className="texto-overlay">Abrazadera</div></div>
                  </li>
                  <li className="hover-item">Tipo boya hermético
                  <div className="imagen-flotante">
              <img src={img19a}/>  <img src={img19b} /><img src={img19c} />
              <div className="texto-overlay">Abrazadera</div></div>
                  </li>
                  <li className="hover-item">A tanza
                  <div className="imagen-flotante">
              <img src={img20a}/>  <img src={img20b} />
              <div className="texto-overlay">Abrazadera</div></div>
                  </li>
                </ul>
                </li>
                <li className="hover-item">Control de Nivel con electrodos: Constan de electrodos que sumergidos en el
                  agua, y por efecto de la continuidad eléctrica de esta, cierran un circuito que
                  combinado con un dispositivo electrónico, actúa sobre la bobina de mando del
                  contactor.
                  <div className="imagen-flotante">
              <img src={img21a}/>
              <div className="texto-overlay">Abrazadera</div></div></li>
              </ul>
          </p>
          </li>
        </ul>
      </div>,
      images: [],
      video: null
    },
    {
      id: "section3",
      title: "Tanque de Reserva (TR)",
      content: 
      <div>El tanque de reserva es un depósito de agua que posee características constructivas
            particulares destinadas a preservar la potabilidad del agua y permitir las tareas de
            limpieza y mantenimiento. Se construyen o se instalan en techos o azoteas, por sobre
            los locales que poseen artefactos sanitarios. En los edificios destinados a vivienda
            familiar, el Reglamento de Instalaciones Sanitarias Internas obliga a la instalación
            de un tanque de reserva. En este caso y dependiendo de la presión disponible de la
            red, puede integrarse la instalación con un tanque de bombeo. Es recomendable sin
            embargo que, aun cuando no fuere exigible, la instalación posea tanque de reserva.
          <ul><li>Funciones del Tanque de Reserva</li>
            <p><ol>
              <li>Proveer de agua potable a la instalación, cuando en la red pública se produce
                un corte eventual del servicio de agua potable.</li>
              <li>Proveer de la presión necesaria a la instalación, para el funcionamiento de los
                distintos artefactos que componen la componen.</li>
              </ol></p>
        <li>Características constructivas de los tanques de reserva</li>
        <p>Los tanques de reserva pueden ser ejecutados in situ de hormigón armado y deben cumplir
          con las siguientes características constructivas.</p>
        <ul><li>Las intersecciones internas de paredes y muros se terminan con un chaflán a 45°.
          El fondo tiene pendiente 1:10 hacia la descarga.</li>
          <li>Se impermeabilizan interiormente con revoque impermeable (revoque cementicio con
            adición de hidrófugo o bien con morteros hidrófugos premezclados). La técnica habitual
            para esta tarea requiere que el revoque impermeable se ejecute sin solución de
            continuidad, en una sola etapa, y en lo posible inmediatamente después del desencofrado,
            con espesores no superior a los 2 cm., con el objeto evitar o minimizar la aparición de
            fisuras Siendo el revoque impermeable una capa aplicada muy rígida y susceptible de
            fisuración, se deberá completar la impermeabilización del paramento con una pintura
            impermeable que no afecte la potabilidad del agua y que a su vez no sea afectada por el
            cloro residual.</li>
          <li>Cuando la reserva de agua supere los 4.000 litros, se debe dividir en dos
            compartimientos. La industria provee tanques prefabricados de materiales plásticos,
            como polietileno y fibra de vidrio, en capacidades que varían de 400 litros hasta
            35.000 litros según el fabricante. Así también se fabrican en acero inoxidable.</li>
          <p>Cualquiera sea el material con que se fabriquen, poseen componentes adicionales que
            complementan la función del tanque de reserva.</p>
          <li>Ventilete: es un caño que conectado en la parte superior del tanque y terminando con
            curva hacia abajo, tiene como objeto evitar variaciones de la presión interna del tanque
            cuando aumenta o disminuye del nivel de agua, manteniendo su interior a presión
            atmosférica. En el extremo del ventilete se debe colocar una malla fina de bronce u otro
            material apto para la intemperie, para evitar el ingreso de insectos.</li>
          <li>Tapa de cierre hermético en la parte superior.</li>
          <li>Válvula de desagüe y limpieza en el extremo del colector.</li>
        </ul>
        <p>El tanque de reserva tiene que cumplir, además, con una serie de disposiciones
          constructivas que están claramente especificadas por la Norma (páginas 21 y 121)</p>
        </ul>
      </div>,
      images: [],
      video: null
    },
    {
      id: "section4",
      title: "Tanque de Bombeo (TB)",
      content: 
      <div>El tanque de bombeo es un depósito de agua que posee características constructivas
        similares al tanque de reserva. Se construye o instala normalmente en planta baja y subsuelos
        y cumple con las siguientes funciones:
        <ul><li>Servir de cámara de bombeo o pozo de bombeo a la instalación de elevación de agua al
          tanque de reserva elevado.</li>
          <li>Complementar con su volumen útil y en conjunto con el tanque elevado, la reserva total
            diaria del edificio.</li>
          <li>De acuerdo al destino del edificio, puede además almacenar la Reserva de Agua Contra
            Incendios.</li></ul>
        <p>La alimentación se hace con conexión exclusiva desde la red y a una cota tal que pueda ser
          alimentado en forma directa de acuerdo a la presión disponible en la red. Cuando el diámetro
          de la conexión supera los 0,032 m., se debe intercalar un sifón invertido a 2,5 m de altura
          con ruptor de vacío. Esto se debe a la siguiente razón: un diámetro mayor a 0,032 m supone
          un gran consumo de agua en el edificio y cuando en la red pública disminuye la presión por
          debajo de 2,5 mca, queda restringido el ingreso de agua debido a que el ruptor de vacío deja
          ingresar aire a la conexión domiciliaria, no perjudicando a otros usuarios de la red.</p>
        <p>En edificios que (según el destino), requieran de un Sistema de Hidrantes y Bocas de
          Incendio, el tanque de bombeo puede constituir la fuente de agua para la lucha contra
          incendios. En este caso, se denomina Tanque de Bombeo Mixto y la instalación de bombeo al
          tanque de reserva de agua sanitaria, presenta un arreglo particular mediante un sifón
          invertido y ruptor de vacío en la aspiración de la bomba, con el objeto de asegurar la
          reserva de agua contra incendios en forma permanente.
        </p>
        <p>Siendo el Tanque de Bombeo Mixto, un componente fundamental del sistema de lucha contra
          incendios, posee características particulares en relación al tipo de material de construcción
          y su ubicación en el edificio. La normativa de aplicación a Sistemas de Hidrantes, restringe
          el uso de tanques plásticos, indicando que estos solo se pueden ubicar a más de 20 m. del
          edificio a proteger o en <dd>“salas que conformen un sector de incendios, con una resistencia
          mínima al fuego de 120 minutos (RF120), en paredes y techos”</dd> *(Norma IRAM 3597-2013,
          página 14)-(ACI 216.1-97 / TMS 0216.1-97).
        </p></div>,
      images: [],
      video: null
    },
    {
      id: "section5",
      title: "Colector",
      content: 
      <div><p>El colector es la cañería que, partiendo de la base del tanque de reserva, permite la
        conexión de las diferentes bajadas de alimentación a los artefactos de consumo. Posee un
        único diámetro y se integra en su extremo con una válvula de limpieza instalada en línea
        directa con la brida para permitir la rápida salida del agua cuando se limpia el tanque.</p>
        <p>Posee además una válvula de corte general que independiza toda la instalación de distribución,
        siendo conveniente que se prevea el desarmado y su independización a partir de la llave de corte
        general, mediante uniones dobles o uniones bridadas.</p></div>,
      images: [],
      video: null
    },
    {
      id: "section6",
      title: "Puente de Empalme",
      content: 
      <div><p>Cuando el tanque de reserva tiene dos compartimientos o bien se compone de varios tanques
        independientes, los colectores de cada uno ellos se interconectan mediante una cañería denominada
        puente de empalme. El puente de empalme posee válvulas de corte en cada extremo, que permiten la
        limpieza o reparación de los compartimientos, sin suprimir la alimentación a la instalación. Al
        igual que el colector, su construcción debe prever el desarme mediante uniones dobles o bridadas.
        </p></div>,
      images: [],
      video: null
    },
    {
      id: "section7",
      title: "Ruptor de Vacío",
      content: 
      <div><p>Es un dispositivo de seguridad que impide el ingreso de agua contaminada a la instalación,
        cuando la bajada de agua alimenta consumos ubicados en diferentes pisos y estos tienen instalados
        artefactos denominados peligrosos como el bidé.
        <p>Supongamos la siguiente situación; desde el tanque de reserva alimentamos con una bajada
          diferentes pisos de un edificio, si se cierra la llave de paso de la bajada de tanque, la
          cañería queda llena de agua mientras no se use ningún artefacto.</p>
        <p>Cuando se abren dos canillas en diferentes pisos, en principio sale agua por la dos, mientras
          el nivel del pelo libre de agua en la bajada esté por sobre el nivel de las dos canillas. Se
          observa que el pelo libre de agua dentro de la bajada va disminuyendo en la medida en que sale
          agua de las canillas y consecuentemente, entre el pelo libre del agua y la llave de paso se
          genera una presión por debajo de la atmosférica.</p>
        <p>Cuando el nivel de pelo libre de agua en la bajada está por debajo de la cañilla del piso
          superior, mientras que en la canilla del piso inferior sale agua, por la canilla del piso
          superior entra aire si esta se encuentra abierta.</p>
        <p>Si la canilla del piso superior está sumergida y abierta, como puede ser el caso de un bidé
          con lluvia inferior, que se encuentra con la descarga tapada y el cuenco con agua que está
          contaminada, esta puede ingresar a la cañería por efecto de la presión negativa en la bajada.</p>
        <p>Es por ello que, aguas abajo de la llave de paso de la bajada, se deriva un ramal que se eleva
          por arriba de la tapa del tanque y se remata con un ventilete que permite el ingreso de aire
          cuando la llave de paso de cierra, para mantener a presión atmósfera la cañería de bajada 
          (por arriba del nivel de pelo libre), evitando de esta forma la succión del agua contaminada
          contenida en el artefacto peligroso.</p>
        <p>El ramal así conformado se denomina Ruptor de Vacío.</p></p></div>,
      images: [],
      video: null
    }
  ];
  
  export default tema4Content;
  