import React from "react"
import Container from "../../components/container/Container"

import "./styles/DiscoveryStyle.scss"
import { StaticImage } from "gatsby-plugin-image"

const DiscoverySection = () => {
  return (
    <Container
      outerClassName="discovery-section"
      innerClassName="inner-contaner"
    >
      <div className="discovery-img-container">
        <StaticImage
          className="discovery-img"
          src="../../images/discovery-stage-img.jpg"
          quality={80}
          alt="discovery-img"
        />
      </div>
      <div className="discovery-content">
        <div className="discovery-t">
          Discovery classical Latin literature. This book is a treatise on the
          theory
        </div>
        <div className="discovery-d">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <p>
            Richard McClintock, a Latin professor at Hampden-Sydney College in
            Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the word in classical literature, discovered the undoubtable
            source.
          </p>
          <p>
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
            Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero.
          </p>
        </div>
        <button className="discovery-btn">Get a quote</button>
      </div>
      <div className="discovery-stage">
        <div className="discovery-container">
          <div className="stage-title">
            <p>Lorem Loris Loris discovery stage</p>
          </div>
          <div className="discovery-stage-items">
            <div className="items-div">
              <p className="p-numbers">01</p>
              <p>Analysis:</p>
              <ul>
                <li>Core review</li>
                <li>Product review</li>
              </ul>
            </div>
            <div className="items-div">
              <p className="p-numbers">02</p>
              <p>Documentation:</p>
              <ul>
                <li>PRD</li>
                <li>BRD</li>
                <li>Wireframes</li>
              </ul>
            </div>
            <div className="items-div">
              <p className="p-numbers">03</p>
              <p>Integration:</p>
              <ul>
                <li>Integration plan </li>
                <li>Security auditplanning</li>
                <li>R&D</li>
              </ul>
            </div>
            <div className="items-div">
              <p className="p-numbers">04</p>
              <p>Development planand release schedule</p>
            </div>
            <div className="items-div">
              <p className="p-numbers">05</p>
              <p>Development</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default DiscoverySection
