import React from 'react'
import './About.css'

interface IProps {
  copyWhatsApp: () => void
}

const About = (props: IProps) => {
  return (
    <div className="page">
      <h2 className="page__title">Acerca de nosotros</h2>
      <h3 className="page__subtitle page__subtitle-center">
        Venta online guatemalteca de todo tipo de artículos.
      </h3>

      <div className="card card-green card-about">
        <h4 className="card__title">Cómo hacer un pedido</h4>
        <p className="card__text">
          Para elaborar un pedido con nosotros, sigue los siguientes pasos:
        </p>
        <ol className="list card__text">
          <li className="list__item">Selecciona el producto deseado</li>
          <li className="list__item">Copia el ID</li>
          <li className="list__item">
            Envíanos un mensaje por nuestro{' '}
            <span className="link" onClick={props.copyWhatsApp} role="button">
              WhatsApp
            </span>{' '}
            o por nuestra{' '}
            <a
              href="https://facebook.com/mgshopgt"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              página de Facebook
            </a>{' '}
            con el ID del producto deseado
          </li>
          <li className="list__item">
            Bríndanos{' '}
            <a href="#delivery-requisites" className="link">
              tus datos
            </a>{' '}
            para hacer tu pedido
          </li>
        </ol>
      </div>

      <div className="card card-green card-about">
        <h4 className="card__title">Forma de envío y pago</h4>
        <p className="card__text">Hacemos envíos a toda Guatemala:</p>
        <ul className="list card__text">
          <li className="list__item">
            En la capital trabajamos con pago contra entrega y en las zonas 1,
            4, 5, 9, 10 y 14 no cobramos servicio de envío.
          </li>
          <li className="list__item">
            En los departamentos trabajamos con Cargo Expreso, pago contra
            entrega y con un precio de envío de Q40.
          </li>
        </ul>
      </div>

      <div className="card card-green card-about">
        <h4 className="card__title">Requisitos del envío</h4>
        <p className="card__text" id="delivery-requisites">
          Para realizar su envío, necesito que me mande los siguientes datos:
        </p>
        <ul className="list card__text">
          <li className="list__item">Nombre de quien recibe</li>
          <li className="list__item">Número de teléfono</li>
          <li className="list__item">Dirección lo más exacta posible</li>
        </ul>
      </div>
    </div>
  )
}

export default About
