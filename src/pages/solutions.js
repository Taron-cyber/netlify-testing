import React from "react"
import Container from "../components/container/Container"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import FullProjectDevelopmentSection from "../sections/index/FullProjectDevelopmentSection"
import TeamAugmentationSection from "../sections/index/TeamAugmentationSection"
import LetsGetStartedSection from "../sections/index/LetsGetStartedSection"

import "./page-styles/solutionsStyle.scss"

const Solutions = () => {
  return (
    <Layout>
      <Seo title="Sky Lab" />
      <Header />
      <Container
        outerClassName="services-page"
        innerClassName="inner-container"
      >
        <div className="title">Our solutions</div>
        <div className="desc">
          In Skylab we turn your business needs and product ideas into digital
          solutions, starting from mobile applications to sophisticated
          AI-driven solutions. All of our services are accompanied by
          well-organized management and product consulting expertise.
        </div>
      </Container>
      <FullProjectDevelopmentSection />
      <LetsGetStartedSection />
      <Footer />
    </Layout>
  )
}

export default Solutions
