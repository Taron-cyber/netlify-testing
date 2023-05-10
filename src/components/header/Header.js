import React from "react"
import { Link } from "gatsby"
import website_logo from "../../images/website-logo.png"

import "./Headerstyle.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img className="web_img" src={website_logo} />
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
        <div className="button">
          <Link to="/contact">Let's Talk</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
