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
      <div className="title">Lorem case studies</div>
      <div className="content-container green">
        <div className="left-side-container">
          <div>
            <div>
              <StaticImage
                className="regardify-logo"
                src="../../images/regardify-logo.png"
                quality={80}
                loading="lazy"
                alt="regardify-logo"
              />
            </div>
            <p className="content-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="span-container">
              <span>Lumen</span>
              <span>Yii</span>
              <span>Go</span>
            </div>
          </div>

          <button className="see-case-study-btn one">
            See case study
            <StaticImage
              className="see-case-btn-img"
              src="../../images/left-arrow.png"
              quality={80}
              loading="lazy"
              alt="discovery-img"
            />
          </button>
        </div>
        <div className="right-side-container">
          <StaticImage
            className="regardify-img"
            src="../../images/regardify-img.jpg"
            quality={80}
            loading="lazy"
            alt="discovery-img"
          />
        </div>
      </div>
      <div className="content-container yellow">
        <div className="left-side-container">
          <div>
            <div className="content-title">
              <StaticImage
                className="regardify-logo"
                src="../../images/regardify-logo.png"
                quality={80}
                loading="lazy"
                alt="regardify-logo"
              />
            </div>
            <p className="content-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="span-container">
              <span>UI/UX</span>
              <span>Angular</span>
              <span>Electron</span>
            </div>
          </div>

          <button className="see-case-study-btn two">
            See case study
            <StaticImage
              className="see-case-btn-img"
              src="../../images/left-arrow-black.png"
              quality={80}
              loading="lazy"
              alt="discovery-img"
            />
          </button>
        </div>
        <div className="right-side-container">
          <StaticImage
            className="regardify-img"
            src="../../images/regardify-img.jpg"
            quality={80}
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
