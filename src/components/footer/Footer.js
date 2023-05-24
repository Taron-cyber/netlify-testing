import React from "react"
import Container from "../container/Container"
import { StaticImage } from "gatsby-plugin-image"

import "./FooterStyle.scss"

const Footer = () => {
  return (
    <Container
      outerClassName="footer-container"
      innerClassName="inner-container"
    >
      <footer>
        <div className="footer-items-container">
          <div className="footer-logo-container">
            <StaticImage
              className="footer-logo-img"
              src="../../images/footer-logo.png"
              quality={80}
              alt="footer-logo"
            />
          </div>
          <div className="footer-items">
            <p>Our services</p>
            <ul>
              <li>Mobile development</li>
              <li>Back-end development</li>
              <li>Front-end development</li>
              <li>Computer vision development</li>
              <li>AI development</li>
            </ul>
          </div>

          <div className="footer-items">
            <p>Cases</p>
            <ul>
              <li>Mobile development</li>
              <li>Back-end development</li>
              <li>Front-end development</li>
              <li>Computer vision development</li>
              <li>AI development</li>
              <li>More cases</li>
            </ul>
          </div>

          <div className="footer-items">
            <p> Company</p>
            <ul>
              <li>About us</li>
              <li>Cases</li>
              <li>Services</li>
              <li>Solutions</li>
              <li>Careers</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
        <div className="social-media-container">
          <StaticImage
            className="social-media-img"
            src="../../images/behance.png"
            quality={80}
            alt="behance-logo"
          />
          <StaticImage
            className="social-media-img"
            src="../../images/instagram.png"
            quality={80}
            alt="instagram-logo"
          />

          <StaticImage
            className="social-media-img"
            src="../../images/twitter.png"
            quality={80}
            alt="twitter-logo"
          />

          <StaticImage
            className="social-media-img"
            src="../../images/facebook.png"
            quality={80}
            alt="facebook-logo"
          />
        </div>
      </footer>
    </Container>
  )
}

export default Footer
