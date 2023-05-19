import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Container from "../../components/container/Container"

import "./styles/ConvenientStyle.scss"

const ConvenientSection = () => {
  return (
    <Container
      outerClassName="convenient-section-container"
      innerClassName="inner-container"
    >
      <div className="title">Convenient Lorem Ipsum is simply</div>
      <div className="card-container">
        <div className="card one">
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
          <button className="convenient-section-button">
            <Link to="/contact">Let’s chat</Link>
          </button>
          <div className="line"></div>
          <div className="plus-div">
            <StaticImage
              className="convenient-img"
              src="../../images/plus.png"
              formats={["webp"]}
              quality={100}
              loading="lazy"
              alt="plus-icon"
            />
            when an unknown printer took a galley of type and scrambled
          </div>
        </div>
        <div className="card two">
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
          <button className="convenient-section-button">
            <Link to="/contact">Let’s chat</Link>
          </button>
          <div className="line"></div>
          <div className="plus-div">
            <StaticImage
              className="convenient-img"
              src="../../images/plus.png"
              formats={["webp"]}
              quality={100}
              loading="lazy"
              alt="plus-icon"
            />
            when an unknown printer took a galley of type and scrambled
          </div>
        </div>
      </div>
    </Container>
  )
}
export default ConvenientSection
