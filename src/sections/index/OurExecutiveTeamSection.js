import React from "react"
import Container from "../../components/container/Container"
import { StaticImage } from "gatsby-plugin-image"

import "./styles/OurExecutiveTeamStyle.scss"

const OurExecutiveTeamSection = () => {
  return (
    <Container
      outerClassName="our-executive-team-section"
      innerClassName="inner-container"
    >
      <div className="title">Our Loremo teamo</div>

      <div className="team-container one">
        <div className="avatar-info-container">
          <StaticImage
            className="team-section-avatar-img"
            src="../../images/team-avatar1.png"
            quality={80}
            loading="lazy"
            alt="team-avatar"
          />
          <div className="name">
            Antonio <br /> Banderas
          </div>
          <div className="role">CEO</div>
        </div>

        <div className="avatar-info-container">
          <StaticImage
            className="team-section-avatar-img"
            src="../../images/team-avatar2.png"
            quality={80}
            loading="lazy"
            alt="team-avatar"
          />
          <div className="name">
            Elizabeth <br /> II
          </div>
          <div className="role">CEO of Meta</div>
        </div>

        <div className="avatar-info-container">
          <StaticImage
            className="team-section-avatar-img"
            src="../../images/team-avatar3.png"
            quality={80}
            loading="lazy"
            alt="team-avatar"
          />
          <div className="name">
            Mikayel <br /> Smith
          </div>
          <div className="role">CEO</div>
        </div>

        <div className="avatar-info-container">
          <StaticImage
            className="team-section-avatar-img"
            src="../../images/team-avatar4.png"
            quality={80}
            loading="lazy"
            alt="team-avatar"
          />
          <div className="name">
            Kim <br /> Jong Un
          </div>
          <div className="role">CEO</div>
        </div>
      </div>
      <div className="team-container two">
        <div className="avatar-info-container">
          <StaticImage
            className="team-section-avatar-img"
            src="../../images/team-avatar1.png"
            quality={80}
            loading="lazy"
            alt="team-avatar"
          />
          <div className="name">
            Antonio <br /> Banderas
          </div>
          <div className="role">CEO</div>
        </div>

        <div className="avatar-info-container">
          <StaticImage
            className="team-section-avatar-img"
            src="../../images/team-avatar2.png"
            quality={80}
            loading="lazy"
            alt="team-avatar"
          />
          <div className="name">
            Elizabeth <br /> II
          </div>
          <div className="role">CEO of Meta</div>
        </div>

        <div className="avatar-info-container">
          <StaticImage
            className="team-section-avatar-img"
            src="../../images/team-avatar3.png"
            quality={80}
            loading="lazy"
            alt="team-avatar"
          />
          <div className="name">
            Mikayel <br /> Smith
          </div>
          <div className="role">CEO</div>
        </div>

        <div className="avatar-info-container">
          <StaticImage
            className="team-section-avatar-img"
            src="../../images/team-avatar4.png"
            quality={80}
            loading="lazy"
            alt="team-avatar"
          />
          <div className="name">
            Kim <br /> Jong Un
          </div>
          <div className="role">CEO</div>
        </div>
      </div>
    </Container>
  )
}

export default OurExecutiveTeamSection
