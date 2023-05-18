import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./Headerstyle.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <StaticImage
            className="web_logo"
            src="../../images/website-logo.png"
            formats={["webp"]}
            quality={100}
            loading="lazy"
            alt="header-logo"
            style={{ objectFit: "contain" }}
          />
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
