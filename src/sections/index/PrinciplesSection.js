import React from "react"
import Container from "../../components/container/Container"
import { StaticImage } from "gatsby-plugin-image"
import "./styles/PrinciplesStyle.scss"

const PrinciplesSection = () => {
  return (
    <Container
      outerClassName="principles-section-container"
      innerClassName="inner-container"
    >
      <div className="items-container one">
        <div className="principles-items">
          Our <br /> principles
        </div>
        <div className="principles-items">
          <StaticImage
            className="principles-img"
            src="../../images/principles-one.png"
            quality={80}
            loading="lazy"
            alt="number"
          />
          Lorem Ipsum is simply dummy text of the
        </div>
        <div className="principles-items">
          <StaticImage
            className="principles-img"
            src="../../images/principles-two.png"
            quality={80}
            loading="lazy"
            alt="number"
          />
          Lorem Ipsum is simply dummy text of the
        </div>
      </div>
      <div className="items-container two">
        <div className="principles-items">
          <StaticImage
            className="principles-img"
            src="../../images/principles-three.png"
            quality={80}
            loading="lazy"
            alt="number"
          />
          Lorem Ipsum is simply dummy text of the
        </div>
        <div className="principles-items">
          <StaticImage
            className="principles-img"
            src="../../images/principles-four.png"
            quality={80}
            loading="lazy"
            alt="number"
          />
          Lorem Ipsum is simply dummy text of the, Lorem Ipsum is simply dummy
          text of the, Lorem Ipsum is simply dummy text of the
        </div>
        <div className="principles-items">
          <StaticImage
            className="principles-img"
            src="../../images/principles-five.png"
            quality={80}
            loading="lazy"
            alt="number"
          />
          Lorem Ipsum is simply dummy text of the
        </div>
      </div>
    </Container>
  )
}

export default PrinciplesSection
