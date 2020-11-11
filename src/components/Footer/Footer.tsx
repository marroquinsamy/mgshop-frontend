import React from 'react'
import './Footer.css'

interface IProps {
  copyWhatsApp: () => void
}

const Footer = (props: IProps) => {
  return (
    <footer className="footer">
      <section className="company-information">
        <img
          src="/logowbweco.png"
          alt=""
          className="company-information__logo"
        />
        <section className="company-information__section">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://facebook.com/mgshopgt"
            className="footer__link"
          >
            <i className="bx bxl-facebook-circle footer__icon"></i>
          </a>
          <i
            className="bx bxl-whatsapp footer__icon"
            onClick={props.copyWhatsApp}
          ></i>
        </section>
      </section>
      <div className="separator"></div>
      <section className="credits">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/marroquinsamy"
          className="footer__link"
        >
          <i className="bx bxl-github footer__icon"></i>
        </a>
        Written and developed by
        <a
          target="_blank"
          rel="noreferrer"
          className="footer__link"
          href="https://github.com/marroquinsamy"
        >
          Samuel Marroquín G.
        </a>
      </section>
    </footer>
  )
}

export default Footer
