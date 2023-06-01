import React from "react"
import Container from "../components/container/Container"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header/Header"
import OurCaseStudiesSection from "../sections/index/OurCaseStudiesSection"
import LetsGetStartedSection from "../sections/index/LetsGetStartedSection"
import Footer from "../components/footer/Footer"

import "./page-styles/casesStyle.scss"

const Cases = () => {
  return (
    <Layout>
      <Seo title="Sky Lab" />
      <Header />
      <Container
        outerClassName="cases-page"
        innerClassName="inner-container"
      ></Container>
      <OurCaseStudiesSection />
      <LetsGetStartedSection />
      <Footer />
    </Layout>
  )
}

export default Cases
