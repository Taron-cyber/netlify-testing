import React from "react"
import Container from "../../components/container/Container"
import { StaticImage } from "gatsby-plugin-image"

import "./styles/TeamAugmentationStyle.scss"

const TeamAugmentationSection = () => {
  return (
    <Container
      outerClassName="team-augmentation-section"
      innerClassName="inner-container"
    >
      <div className="title">Team augmentation</div>
      <div className="desc">
        Hire an individual or a custom group of professionals that will be
        formed by us and will become a dedicated part of your team
      </div>

      <div className="cards-container">
        <div className="card">
          <StaticImage
            className="our-services-img"
            src="../../images/mobile-development.png"
            quality={80}
            loading="lazy"
            alt="vectors"
          />
          <p className="card-title">Mobile app developers</p>
          <div className="span-container">
            <span>Swift</span>
            <span>ObjectiveC</span>
            <span>Java</span>
            <span>CocoaPods</span>
            <span>Kotlin</span>
            <span>ReactNative</span>
          </div>
          <button className="hire-btn">Hire</button>
        </div>
        <div className="card">
          <StaticImage
            className="our-services-img"
            src="../../images/Front.png"
            quality={80}
            loading="lazy"
            alt="vectors"
          />
          <p className="card-title">Backend developers</p>
          <div className="span-container">
            <span>Swift</span>
            <span>ObjectiveC</span>
            <span>Java</span>
            <span>CocoaPods</span>
            <span>Kotlin</span>
            <span>ReactNative</span>
          </div>
          <button className="hire-btn">Hire</button>
        </div>
        <div className="card">
          <StaticImage
            className="our-services-img"
            src="../../images/Back.png"
            quality={80}
            loading="lazy"
            alt="vectors"
          />
          <p className="card-title">Frontend developers</p>
          <div className="span-container">
            <span>Swift</span>
            <span>ObjectiveC</span>
            <span>Java</span>
            <span>CocoaPods</span>
            <span>Kotlin</span>
            <span>ReactNative</span>
          </div>
          <button className="hire-btn">Hire</button>
        </div>
        <div className="card">
          <StaticImage
            className="our-services-img"
            src="../../images/Back.png"
            quality={80}
            loading="lazy"
            alt="vectors"
          />
          <p className="card-title">AI developers </p>
          <div className="span-container">
            <span>Swift</span>
            <span>ObjectiveC</span>
            <span>Java</span>
            <span>CocoaPods</span>
            <span>Kotlin</span>
            <span>ReactNative</span>
          </div>
          <button className="hire-btn">Hire</button>
        </div>
        <div className="card">
          <StaticImage
            className="our-services-img"
            src="../../images/Back.png"
            quality={80}
            loading="lazy"
            alt="vectors"
          />
          <p className="card-title">DevOps</p>
          <div className="span-container">
            <span>Swift</span>
            <span>ObjectiveC</span>
            <span>Java</span>
            <span>CocoaPods</span>
            <span>Kotlin</span>
            <span>ReactNative</span>
          </div>
          <button className="hire-btn">Hire</button>
        </div>
      </div>

      {/* <StaticImage
        className="rev-circle-img"
        src="../../images/slider-circle.png"
        quality={80}
        loading="lazy"
        alt="slider-img"
      /> */}
    </Container>
  )
}

export default TeamAugmentationSection
