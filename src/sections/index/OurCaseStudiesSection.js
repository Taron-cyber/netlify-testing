import React from "react"
import Container from "../../components/container/Container"
import { StaticImage } from "gatsby-plugin-image"
import "./styles/OurCaseStudiesStyle.scss"

const OurCaseStudiesSection = () => {
  return (
    <Container
      outerClassName="our-case-studies-section"
      innerClassName="inner-container"
    >
      <div className="title">Lorem case Lorisonii studies</div>
      <div className="content-container">
        <div className="left-side-container">
          <div>
            <div className="content-title">Regardify</div>
            <p className="content-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <button className="see-case-study-btn">
            See case study
            <StaticImage
              className="see-case-btn-img"
              src="../../images/left-arrow.png"
              formats={["webp"]}
              quality={100}
              loading="lazy"
              alt="discovery-img"
            />
          </button>
        </div>
        <div className="right-side-container">
          <StaticImage
            className="regardify-img"
            src="../../images/regardify-img.png"
            formats={["webp"]}
            quality={100}
            loading="lazy"
            alt="discovery-img"
          />
        </div>
      </div>
      <button className="see-more-btn">See more cases</button>
    </Container>
  )
}

export default OurCaseStudiesSection
