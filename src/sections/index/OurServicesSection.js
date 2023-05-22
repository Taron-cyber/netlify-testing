import React from "react"
import Container from "../../components/container/Container"
import { StaticImage } from "gatsby-plugin-image"

import "./styles/OurServicesStyle.scss"

const OurServicesSection = () => {
  return (
    <Container
      outerClassName="our-services-section"
      innerClassName="inner-container"
    >
      <div className="title">LOREM services</div>
      <div className="items-container one">
        <div className="services-items">
          <StaticImage
            className="our-services-img"
            src="../../images/mobile-development.png"
            formats={["webp"]}
            quality={80}
            loading="lazy"
            alt="vectors"
          />
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
        </div>
        <div className="services-items">
          <StaticImage
            className="our-services-img"
            src="../../images/Front.png"
            formats={["webp"]}
            quality={80}
            loading="lazy"
            alt="vectors"
          />
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
        </div>
        <div className="services-items">
          <StaticImage
            className="our-services-img"
            src="../../images/Back.png"
            formats={["webp"]}
            quality={80}
            loading="lazy"
            alt="vectors"
          />
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
        </div>
      </div>
      <div className="items-container two">
        <div className="services-items">
          <StaticImage
            className="our-services-img"
            src="../../images/Ai.png"
            formats={["webp"]}
            quality={80}
            loading="lazy"
            alt="vectors"
          />
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
        </div>
        <div className="services-items">
          <StaticImage
            className="our-services-img"
            src="../../images/computer-vision.png"
            formats={["webp"]}
            quality={80}
            loading="lazy"
            alt="vectors"
          />
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
        </div>
        <div className="services-items">
          <StaticImage
            className="our-services-img"
            src="../../images/team.png"
            formats={["webp"]}
            quality={80}
            loading="lazy"
            alt="vectors"
          />
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
        </div>
      </div>
    </Container>
  )
}

export default OurServicesSection
