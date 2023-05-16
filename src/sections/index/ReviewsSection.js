import React from "react"
import Container from "../../components/container/Container"
import { StaticImage } from "gatsby-plugin-image"

import "./styles/ReviewsStyle.scss"

const ReviewsSection = () => {
  return (
    <Container
      outerClassName="reviews-section"
      innerClassName="inner-container"
    >
      <div className="reviews-title">Reviews</div>
      <StaticImage
        className="rev-img"
        src="../../images/rev-img.png"
        formats={["webp"]}
        quality={100}
        loading="lazy"
        alt="discovery-img"
      />

      <StaticImage
        className="rev-circle-img"
        src="../../images/rev-circle.png"
        formats={["webp"]}
        quality={100}
        loading="lazy"
        alt="discovery-img"
      />
    </Container>
  )
}

export default ReviewsSection
