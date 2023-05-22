import React from "react"
import Container from "../container/Container"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const CoverSection = () => (
  <Container outerClassName="top-section" innerClassName="inner-container">
    <div className="left-inner">
      <h1>
        Lorem Ipsum is simply dummy <span>text</span> of the printing and
        typesetting.
      </h1>
      <div className="descrip">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.
        </p>
      </div>
      <button className="button">
        <Link to="/contact">Let’s chat</Link>
      </button>
    </div>

    <div className="right-inner">
      <StaticImage
        className="cover-section-cube-img"
        src="../../images/cube.png"
        formats={["webp"]}
        quality={80}
        loading="lazy"
        alt="vectors"
      />
    </div>
  </Container>
)

export default CoverSection
