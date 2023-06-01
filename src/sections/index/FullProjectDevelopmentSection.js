import React from "react"
import Container from "../../components/container/Container"

import "./styles/FullProjectDevelopmentStyle.scss"
import { StaticImage } from "gatsby-plugin-image"

const FullProjectDevelopmentSection = () => {
  return (
    <Container
      outerClassName="full-project-development-section-container"
      innerClassName="inner-container"
    >
      <div className="title">Full-Project Development</div>
      <div className="desc">
        Hire a team of dedicated professionals necessary to design, develop and
        launch your project
      </div>

      <div className="cards-container">
        <div className="card">
          <div>
            <StaticImage
              className="our-services-img"
              src="../../images/mobile-development.png"
              quality={80}
              loading="lazy"
              alt="vectors"
            />
          </div>
          <div className="card-info-container">
            <p className="card-title">Lorem Ipsum</p>
            <p className="card-desc">
              We specialize in mobile applications native iOS and Android
              development. Our mobile development team is fluent with the
              platforms guidelines, UI rules and standards, while an extensive
              experience allows us to keep attention on tiny peculiarities to
              deliver powerful, user-friendly and amazing apps.
            </p>

            <div className="span-container">
              <span>React</span>
              <span>Angular</span>
              <span>TypeScript</span>
              <span>Electron</span>
            </div>

            <div className="btns-container">
              <button className="lets-chat-btn">Let’s chat</button>
              <button className="learn-more-btn">
                Learn more
                <StaticImage
                  className="learn-more-btn-arrow-icon"
                  src="../../images/left-arrow.png"
                  quality={80}
                  loading="lazy"
                  alt="left-arrow"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <StaticImage
              className="our-services-img"
              src="../../images/Back.png"
              quality={80}
              loading="lazy"
              alt="vectors"
            />
          </div>
          <div className="card-info-container">
            <p className="card-title">Lorem Ipsum</p>
            <p className="card-desc">
              We specialize in mobile applications native iOS and Android
              development. Our mobile development team is fluent with the
              platforms guidelines, UI rules and standards, while an extensive
              experience allows us to keep attention on tiny peculiarities to
              deliver powerful, user-friendly and amazing apps.
            </p>

            <div className="span-container">
              <span>React</span>
              <span>Angular</span>
              <span>TypeScript</span>
              <span>Electron</span>
            </div>

            <div className="btns-container">
              <button className="lets-chat-btn">Let’s chat</button>
              <button className="learn-more-btn">
                Learn more
                <StaticImage
                  className="learn-more-btn-arrow-icon"
                  src="../../images/left-arrow.png"
                  quality={80}
                  loading="lazy"
                  alt="left-arrow"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <StaticImage
              className="our-services-img"
              src="../../images/Ai.png"
              quality={80}
              loading="lazy"
              alt="vectors"
            />
          </div>
          <div className="card-info-container">
            <p className="card-title">Lorem Ipsum</p>
            <p className="card-desc">
              We specialize in mobile applications native iOS and Android
              development. Our mobile development team is fluent with the
              platforms guidelines, UI rules and standards, while an extensive
              experience allows us to keep attention on tiny peculiarities to
              deliver powerful, user-friendly and amazing apps.
            </p>

            <div className="span-container">
              <span>React</span>
              <span>Angular</span>
              <span>TypeScript</span>
              <span>Electron</span>
            </div>

            <div className="btns-container">
              <button className="lets-chat-btn">Let’s chat</button>
              <button className="learn-more-btn">
                Learn more
                <StaticImage
                  className="learn-more-btn-arrow-icon"
                  src="../../images/left-arrow.png"
                  quality={80}
                  loading="lazy"
                  alt="left-arrow"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <StaticImage
              className="our-services-img"
              src="../../images/computer-vision.png"
              quality={80}
              loading="lazy"
              alt="vectors"
            />
          </div>
          <div className="card-info-container">
            <p className="card-title">Lorem Ipsum</p>
            <p className="card-desc">
              We specialize in mobile applications native iOS and Android
              development. Our mobile development team is fluent with the
              platforms guidelines, UI rules and standards, while an extensive
              experience allows us to keep attention on tiny peculiarities to
              deliver powerful, user-friendly and amazing apps.
            </p>

            <div className="span-container">
              <span>React</span>
              <span>Angular</span>
              <span>TypeScript</span>
              <span>Electron</span>
            </div>

            <div className="btns-container">
              <button className="lets-chat-btn">Let’s chat</button>
              <button className="learn-more-btn">
                Learn more
                <StaticImage
                  className="learn-more-btn-arrow-icon"
                  src="../../images/left-arrow.png"
                  quality={80}
                  loading="lazy"
                  alt="left-arrow"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <StaticImage
              className="our-services-img"
              src="../../images/team.png"
              quality={80}
              loading="lazy"
              alt="vectors"
            />
          </div>
          <div className="card-info-container">
            <p className="card-title">Lorem Ipsum</p>
            <p className="card-desc">
              We specialize in mobile applications native iOS and Android
              development. Our mobile development team is fluent with the
              platforms guidelines, UI rules and standards, while an extensive
              experience allows us to keep attention on tiny peculiarities to
              deliver powerful, user-friendly and amazing apps.
            </p>

            <div className="span-container">
              <span>React</span>
              <span>Angular</span>
              <span>TypeScript</span>
              <span>Electron</span>
            </div>

            <div className="btns-container">
              <button className="lets-chat-btn">Let’s chat</button>
              <button className="learn-more-btn">
                Learn more
                <StaticImage
                  className="learn-more-btn-arrow-icon"
                  src="../../images/left-arrow.png"
                  quality={80}
                  loading="lazy"
                  alt="left-arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default FullProjectDevelopmentSection
