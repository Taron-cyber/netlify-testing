import React from "react"
import Container from "../../components/container/Container"
import { StaticImage } from "gatsby-plugin-image"

import "./styles/LosAngelesStyle.scss"

const LosAngelesSection = () => {
  return (
    <Container
      outerClassName="los-angeles-section"
      innerClassName="inner-container"
    >
      <div className="content-container">
        <div className="title">
          Lorem Asia in <span>Los Angeles</span>
        </div>
        <p>
          No matter where you are in North America, Europe, or Asia, our teams
          work effectively and efficiently on your schedule. We adjust our
          business processes to make our partnership smooth for you.
        </p>
      </div>
      <div className="map-container">
        <StaticImage
          className="map-img"
          src="../../images/map.png"
          formats={["webp"]}
          quality={100}
          loading="lazy"
          alt="vectors"
        />
      </div>
    </Container>
  )
}

export default LosAngelesSection
