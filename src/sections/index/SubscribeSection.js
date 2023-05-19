import React from "react"
import Container from "../../components/container/Container"

import "./styles/SubscribeStyle.scss"

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
        <input
          className="subscribe-input"
          type="email"
          placeholder="Enter your e-mail"
        />
        <button className="subscribe-send-btn">Send</button>
      </div>
    </Container>
  )
}

export default SubscribeSection
