import React from "react"
import { Link } from "gatsby"
import website_logo from "../../images/website-logo.png"

import "./Headerstyle.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img className="web_logo" src={website_logo} alt="logo" />
        </Link>
      </div>
      <nav className="menu">
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="menu-item">
            <Link to="/cases">Cases</Link>
          </li>
          <li className="menu-item">
            <Link to="/services">Services</Link>
          </li>
          <li className="menu-item">
            <Link to="/solutions">Solutions</Link>
          </li>
          <li className="menu-item">
            <Link to="/careers">Careers</Link>
          </li>
          <li className="menu-item">
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
        <button className="header-button">
          <Link to="/contact">Let's Talk</Link>
        </button>
      </nav>
    </header>
  )
}

export default Header
