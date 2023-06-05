import React from "react"
import Container from "../components/container/Container"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import WhyWorkAtSkyLabSection from "../sections/index/WhyWorkAtSkyLabSection"

import "./page-styles/careersStyle.scss"

const Careers = () => {
  return (
    <Layout>
      <Seo title="Sky Lab" />
      <Header />
      <Container outerClassName="careers-page" innerClassName="inner-container">
        <div className="title">We need more team members</div>
        <div className="desc">
          Join us to make the world a better place together
        </div>

        <div className="info-container">
          <div className="role-address-container">
            <div className="role">
              Head of marketing
              <div className="address">Sunnyvale, CA, USA or remote</div>
            </div>
            <div className="span-container">
              <span>React</span>
              <span>Angular</span>
              <span>TypeScript</span>
              <span>Electron</span>
              <span>React</span>
              <span>Angular</span>
              <span>TypeScript</span>
              <span>Electron</span>
            </div>
          </div>
          <div className="role-address-container">
            <div className="role">
              Senior Node.js developerg
              <div className="address">Remote</div>
            </div>
            <div className="span-container">
              <span>React</span>
              <span>Angular</span>
              <span>TypeScript</span>
              <span>Electron</span>
              <span>React</span>
            </div>
          </div>
          <div className="role-address-container">
            <div className="role">
              Sales Development Representative
              <div className="address">USA/Canada</div>
            </div>
            <div className="span-container">
              <span>React</span>
              <span>Angular</span>
            </div>
          </div>
        </div>
      </Container>
      <WhyWorkAtSkyLabSection />
      <Footer />
    </Layout>
  )
}

export default Careers
