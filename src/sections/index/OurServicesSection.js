import React from "react"
import Container from "../../components/container/Container"
import people from "../../images/people.png"
import circle from "../../images/circle.png"
import conection from "../../images/conection.png"
import cubs from "../../images/cubs.png"
import phone from "../../images/phone.png"
import ai from "../../images/ai.png"

import "./styles/OurServicesStyle.scss"

const OurServicesSection = () => {
  return (
    <Container
      outerClassName="our-services-section"
      innerClassName="inner-container"
    >
      <div className="title">LOREM services</div>
      <div className="items-container one">
        <div className="services-items">
          <img src={phone} alt="vectors" />
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
        </div>
        <div className="services-items">
          <img src={circle} alt="vectors" />
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
        </div>
        <div className="services-items">
          <img src={conection} alt="vectors" />
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
        </div>
      </div>
      <div className="items-container two">
        <div className="services-items">
          <img src={ai} alt="vectors" />
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
        </div>
        <div className="services-items">
          <img src={cubs} alt="vectors" />
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
        </div>
        <div className="services-items">
          <img src={people} alt="vectors" />
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
        </div>
      </div>
    </Container>
  )
}

export default OurServicesSection
