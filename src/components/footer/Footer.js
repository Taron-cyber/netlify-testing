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
              formats={["webp"]}
              quality={100}
              loading="lazy"
              alt="footer-logo"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="footer-items">
            <ul>
              Our services
              <li>Mobile development</li>
              <li>Back-end development</li>
              <li>Front-end development</li>
              <li>Computer vision development</li>
              <li>AI development</li>
            </ul>
          </div>

          <div className="footer-items">
            <ul>
              Cases
              <li>Mobile development</li>
              <li>Back-end development</li>
              <li>Front-end development</li>
              <li>Computer vision development</li>
              <li>AI development</li>
              <li>More cases</li>
            </ul>
          </div>

          <div className="footer-items">
            <ul>
              Company
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
            formats={["webp"]}
            quality={100}
            loading="lazy"
            alt="behance-logo"
            style={{ objectFit: "contain" }}
          />
          <StaticImage
            className="social-media-img"
            src="../../images/instagram.png"
            formats={["webp"]}
            quality={100}
            loading="lazy"
            alt="instagram-logo"
            style={{ objectFit: "contain" }}
          />

          <StaticImage
            className="social-media-img"
            src="../../images/twitter.png"
            formats={["webp"]}
            quality={100}
            loading="lazy"
            alt="twitter-logo"
            style={{ objectFit: "contain" }}
          />

          <StaticImage
            className="social-media-img"
            src="../../images/facebook.png"
            formats={["webp"]}
            quality={100}
            loading="lazy"
            alt="facebook-logo"
            style={{ objectFit: "contain" }}
          />
        </div>
      </footer>
    </Container>
  )
}

export default Footer
