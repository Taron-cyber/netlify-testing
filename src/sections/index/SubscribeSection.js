import React from "react"
import Container from "../../components/container/Container"

import "./styles/SubscribeStyle.scss"
import { StaticImage } from "gatsby-plugin-image"

const SubscribeSection = () => {
  return (
    <Container
      outerClassName="subscribe-section-container"
      innerClassName="inner-container"
    >
      <div className="subscribe-container">
        <div className="subscribe-container-title">
          Subscribe to our stories
        </div>
        <div className="input-btn-container">
          <input
            className="subscribe-input"
            type="email"
            placeholder="Enter your e-mail"
          />
          <button className="subscribe-send-btn">Send</button>
        </div>
      </div>
      <div className="right-inner">
        <StaticImage
          className="subscribe-circle"
          src="../../images/sub-section-img2.png"
          quality={80}
          alt="avatar-img"
        />
      </div>
    </Container>
  )
}

export default SubscribeSection
