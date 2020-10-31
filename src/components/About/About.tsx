import React from 'react'
import './About.css'

const About = () => {
  return (
    <div>
      <h2 className="page-title">Acerca de nosotros</h2>
      <div className="about-container">
        <p className="about-paragraph">
          Venta online guatemalteca de todo tipo de artículos
        </p>
        <h3 className="page-subtitle">Cómo hacer un pedido</h3>
        <p className="about-paragraph">
          Para elaborar un pedido con nosotros, sigue los siguientes pasos:
        </p>
        <ol>
          <li>Selecciona el producto deseado</li>
          <li>Copia el ID</li>
          <li>
            Envíanos un mensaje por nuestro{' '}
            <span
              className="inline-link"
              onClick={() => alert('Nuestro WhatsApp: +502 4269 5893')}
            >
              WhatsApp
            </span>{' '}
            o por nuestra{' '}
            <a
              href="https://facebook.com/mgshopgt"
              className="inline-link"
              target="_blank"
              rel="noreferrer"
            >
              página de Facebook
            </a>{' '}
            con el ID del producto deseado
          </li>
          <li>
            Bríndanos{' '}
            <a href="#delivery-requisites" className="inline-link">
              tus datos
            </a>{' '}
            para hacer tu pedido
          </li>
        </ol>
        <h3 className="page-subtitle">Forma de envío y pago</h3>
        <p className="about-paragraph">Hacemos envíos a toda Guatemala:</p>
        <ul>
          <li>
            En la capital trabajamos con pago contra entrega y en las zonas 1,
            4, 5, 9, 10 y 14 no cobramos servicio de envío.
          </li>
          <li>
            En los departamentos trabajamos con Cargo Expreso, pago contra
            entrega y con un precio de envío de Q40.
          </li>
        </ul>
        <h3 className="page-subtitle">Requisitos del envío</h3>
        <p className="about-paragraph" id="delivery-requisites">
          Para realizar su envío, necesito que me mande los siguientes datos:
        </p>
        <ul>
          <li>Nombre de quien recibe</li>
          <li>Número de teléfono</li>
          <li>Dirección lo más exacta posible</li>
        </ul>
      </div>
    </div>
  )
}

export default About
