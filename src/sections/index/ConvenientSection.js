import React from "react"
import { Link } from "gatsby"
import Container from "../../components/container/Container"
import plus from "../../images/plus.png"

import "./styles/ConvenientStyle.scss"

const ConvenientSection = () => {
  return (
    <Container
      outerClassName="convenient-section-container"
      innerClassName="inner-container"
    >
      <div className="title">Convenient Lorem Ipsum is simply</div>
      <div className="card-container">
        <div className="card one">
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
          <div className="button">
            <Link to="/contact">Let's Talk</Link>
          </div>
          <div className="line"></div>
          <div className="plus-div">
            <img src={plus} alt="plus-icon" />
            when an unknown printer took a galley of type and scrambled
          </div>
        </div>
        <div className="card two">
          <p className="card-title">Lorem Ipsum</p>
          <p>
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
          <div className="button">
            <Link to="/contact">Let's Talk</Link>
          </div>
          <div className="line"></div>
          <div className="plus-div">
            <img src={plus} alt="plus-icon" />
            when an unknown printer took a galley of type and scrambled
          </div>
        </div>
      </div>
    </Container>
  )
}
export default ConvenientSection
