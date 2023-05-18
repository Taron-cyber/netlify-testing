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
      <div className="reviews-card-container">
        <div className="reviews-card">
          <div className="card-title">Samsung</div>
          <div className="card-d">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div className="card-avatar-container">
            <StaticImage
              className="card-avatar-img"
              src="../../images/avatar.png"
              formats={["webp"]}
              quality={100}
              loading="lazy"
              alt="avatar-img"
              style={{ objectFit: "contain" }}
            />

            <div className="name">
              Barnaby Usansky
              <div className="role">CEO & Co-founder</div>
            </div>
          </div>
        </div>
        <div className="reviews-card">
          <div className="card-title">OpenSea</div>
          <div className="card-d">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div className="card-avatar-container">
            <StaticImage
              className="card-avatar-img"
              src="../../images/avatar.png"
              formats={["webp"]}
              quality={100}
              loading="lazy"
              alt="avatar-img"
              style={{ objectFit: "contain" }}
            />

            <div className="name">
              Pablo Picasso
              <div className="role">CEO & Co-founder</div>
            </div>
          </div>
        </div>
        <div className="reviews-card">
          <div className="card-title">Google</div>
          <div className="card-d">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div className="card-avatar-container">
            <StaticImage
              className="card-avatar-img"
              src="../../images/avatar.png"
              formats={["webp"]}
              quality={100}
              loading="lazy"
              alt="avatar-img"
              style={{ objectFit: "contain" }}
            />

            <div className="name">
              Dawn Mcmanus
              <div className="role">CEO & Co-founder</div>
            </div>
          </div>
        </div>
      </div>

      <StaticImage
        className="rev-circle-img"
        src="../../images/rev-circle.png"
        formats={["webp"]}
        quality={100}
        loading="lazy"
        alt="slider-img"
        style={{ objectFit: "contain" }}
      />
    </Container>
  )
}

export default ReviewsSection
