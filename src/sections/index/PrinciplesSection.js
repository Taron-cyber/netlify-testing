import React from "react"

import Container from "../../components/container/Container"
import arrow from "../../images/arrow.png"
import group from "../../images/group.png"
import timer from "../../images/timer.png"
import expertize from "../../images/expertize.png"
import communication from "../../images/Communication.png"

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
          <img src={arrow} alt="vectors" />
          Lorem Ipsum is simply dummy text of the
        </div>
        <div className="principles-items">
          <img src={group} alt="vectors" />
          Lorem Ipsum is simply dummy text of the
        </div>
      </div>
      <div className="items-container two">
        <div className="principles-items">
          <img src={timer} alt="vectors" />
          Lorem Ipsum is simply dummy text of the
        </div>
        <div className="principles-items">
          <img src={expertize} alt="vectors" />
          Lorem Ipsum is simply dummy text of the, Lorem Ipsum is simply dummy
          text of the, Lorem Ipsum is simply dummy text of the
        </div>
        <div className="principles-items">
          <img src={communication} alt="vectors" />
          Lorem Ipsum is simply dummy text of the
        </div>
      </div>
    </Container>
  )
}

export default PrinciplesSection
