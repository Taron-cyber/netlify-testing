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
      <div className="content-container green">
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
          </div>
          {/* <div className="span-container">
            <span>React</span>
            <span>Angular</span>
            <span>Electron</span>
            <span>Typescript</span>
            <span>Symfony</span>
            <span>Laravel</span>
            <span>Lumen</span>
            <span>Yii</span>
            <span>Go</span>
          </div> */}
          <button className="see-case-study-btn">
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
          </div>
          {/* <div className="span-container">
            <span>React</span>
            <span>Angular</span>
            <span>Electron</span>
            <span>Typescript</span>
            <span>Symfony</span>
            <span>Laravel</span>
            <span>Lumen</span>
            <span>Yii</span>
            <span>Go</span>
          </div> */}
          <button className="see-case-study-btn">
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
      <button className="see-more-btn">See more cases</button>
    </Container>
  )
}

export default OurCaseStudiesSection
