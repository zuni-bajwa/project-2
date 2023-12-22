import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";

import '../header/Header.css'
const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/logp.png" alt="" height={50}  width={60}/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <AiOutlineMenu />

        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/Men">Men</NavLink>
            </li>
            <li>
              <NavLink to="/Women">Women</NavLink>
            </li>
            <li>
              <NavLink to="/Kids">Kids</NavLink>
            </li>
            <li>
              <NavLink to="/Cart">See Cart</NavLink>
            </li>
            <li className='cart1'>
              <NavLink to="/Log" >Login</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header