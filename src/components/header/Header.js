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
            quality={80}
            loading="lazy"
            alt="header-logo"
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
            <Link to="/services">
              Services
              <StaticImage
                className="header-item-arrow"
                src="../../images/arrow-down.png"
                quality={80}
                loading="lazy"
                alt="arrow-down"
              />
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/solutions">
              Solutions{" "}
              <StaticImage
                className="header-item-arrow"
                src="../../images/arrow-down.png"
                quality={80}
                loading="lazy"
                alt="arrow-down"
              />
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/careers">Careers</Link>
          </li>
          <li className="menu-item">
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
        <button className="header-button">
          <Link to="#"> Let's Talk</Link>
        </button>
      </nav>
    </header>
  )
}

export default Header
