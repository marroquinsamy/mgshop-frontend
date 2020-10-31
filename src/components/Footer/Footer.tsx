import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="main-footer">
      <section className="company-information">
        <img src="/logowbweco.png" alt="" className="main-footer-logo" />
        <div className="footer-social">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://facebook.com/mgshopgt"
            className="footer-links"
          >
            <i className="bx bxl-facebook-circle icon"></i>
          </a>
          <i
            className="bx bxl-whatsapp icon"
            onClick={() => alert('Nuestro WhatsApp: +502 4269 5893')}
          ></i>
        </div>
      </section>
      <div className="separator"></div>
      <section className="credits">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/marroquinsamy"
          className="footer-links"
        >
          <i className="bx bxl-github icon"></i>
        </a>
        Written and developed by{' '}
        <a
          target="_blank"
          rel="noreferrer"
          className="footer-links name-link"
          href="https://github.com/marroquinsamy"
        >
          Samuel Marroquín G.
        </a>
      </section>
    </footer>
  )
}

export default Footer
