import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="navbar__logo" src="/logowb.png" alt="" />
      </Link>
      <Link className="navbar__link" to="/">
        Productos
      </Link>
      <Link className="navbar__link" to="/about">
        Acerca de nosotros
      </Link>
    </nav>
  )
}

export default NavBar
