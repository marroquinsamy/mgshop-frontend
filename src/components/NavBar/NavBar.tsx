import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link className="link" to="/">
          Productos
        </Link>
        <Link className="link" to="/about">
          Acerca de nosotros
        </Link>
      </nav>
    </div>
  )
}

export default NavBar
