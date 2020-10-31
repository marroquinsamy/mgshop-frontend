import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="main-navbar">
      <Link to="/">
        <img className="main-navbar-logo" src="/logowb.png" alt="" />
      </Link>
      <Link className="main-navbar-link" to="/">
        Productos
      </Link>
      <Link className="main-navbar-link" to="/about">
        Acerca de nosotros
      </Link>
    </nav>
  )
}

export default NavBar
