import React from "react"
import Header from "../components/Header"

const pp = () => {
  return (
    <>
      <Header />
      <div
        className="df fdc main-container"
        style={{ margin: "2rem auto 1rem auto" }}
      >
        <h2>Política de privacidad</h2>
        <h3>Introducción</h3>
        <p>
          Proteger su información privada es nuestra prioridad. Esta Declaración
          de Privacidad se aplica al Sitio y rige la recopilación y el uso de
          datos. Al utilizar el sitio web margingesualdo.dev (en adelante
          "MGD"), usted acepta las prácticas relacionadas con los datos que se
          describen en esta declaración.
        </p>
        <h3>Recopilación de su información personal</h3>
        <p>
          Si compra productos y servicios de MGD, no recopilamos información de
          facturación y tarjeta de crédito. La transacción de compra se
          encuentra delegada en terceros. MGD no es responsable de las
          declaraciones de privacidad u otro contenido en sitios web fuera del
          sitio web de MGD.
        </p>{" "}
        <h3>Uso de su información personal</h3>{" "}
        <p>
          MGD recopila y utiliza su información personal para brindar los
          servicios que ha solicitado. MGD también puede usar su información de
          identificación personal para informarle de otros productos o servicios
          disponibles de MGD. MGD también puede comunicarse con usted a través
          de encuestas para realizar una investigación sobre su opinión sobre
          los servicios actuales o sobre los posibles nuevos servicios que se
          pueden ofrecer. MGD no vende, alquila ni cede sus listas de Usuarios a
          terceros. MGD divulgará su información personal, sin previo aviso,
          solo si así lo requiere la ley o si cree de buena fe que dicha acción
          es necesaria para: (a) cumplir con los edictos de la ley o cumplir con
          el proceso legal presentado a MGD; (b) proteger y defender los
          derechos o propiedad de MGD; y, (c) actuar de acuerdo con las
          circunstancias exigentes para proteger la seguridad personal de los
          usuarios de MGD o del público.
        </p>{" "}
        <h3>¿Cómo elimino mi información personal de la aplicación?</h3>{" "}
        <p>
          Para eliminar la información personal podrás hacerlo desde la sección
          "Mi Perfil" de tu menú de usuario. Allí tendrás que presionar el botón
          "Eliminar mis datos personales" (nombre, apellido e imagen), y luego
          presionar el botón de "Guardar cambios". Solo conservaremos tu correo
          electrónico porque es el dato que nos permite vincularte a toda tu
          información transaccional dentro de MGD. De esta manera, cuando
          decidas volver a la aplicación, no habrás perdido el acceso a tus
          cursos.
        </p>{" "}
        <h3>Información recopilada automáticamente MGD</h3>{" "}
        <p>
          {" "}
          MGD puede recopilar automáticamente información sobre el hardware y el
          software de su computadora. Esta información puede incluir: su
          dirección IP, tipo de navegador, nombres de dominio, tiempos de acceso
          y direcciones de sitios web de referencia. Esta información se utiliza
          para el funcionamiento del servicio, para mantener la calidad del
          servicio y para proporcionar estadísticas generales sobre el uso del
          sitio web de MGD. MGD utiliza tanto cookies de origen (que son
          establecidas por nuestro sitio web cuando se visita) como cookies de
          terceros (que son configuradas por un servidor ubicado fuera del
          dominio de nuestro sitio web). Algunas cookies son necesarias para que
          el sitio web de MGD funcione correctamente. Por ejemplo, utilizamos
          cookies para autenticarlo. Cuando inicia sesión en nuestra plataforma,
          se establecen cookies de autenticación que nos permiten saber quién es
          usted durante una sesión de navegación. Estas cookies también
          facilitan la . Tiene la posibilidad de aceptar o rechazar estas
          cookies. La mayoría de los navegadores web de escritorio aceptan
          automáticamente las cookies, pero normalmente puede modificar la
          configuración de su navegador para rechazar las cookies si lo
          prefiere. Si opta por rechazar las cookies, es posible que no pueda
          disfrutar por completo de las funciones de los servicios de MGD.
        </p>
      </div>
      <style jsx>{`
        .main-container {
          width: 50vw;
        }

        h2 {
          text-align: center;
          text-transform: uppercase;
        }

        p {
          margin-top: 0.3rem;
        }

        h3 {
          margin-bottom: 0.5rem;
          text-decoration: underline;
        }

        @media (max-width: 1000px) {
          .main-container {
            width: 95vw;
          }
        }
      `}</style>
    </>
  )
}

export default pp
