import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container/Container"
import Header from "../components/header/Header"
import OurServicesSection from "../sections/index/OurServicesSection"
import LosAngelesSection from "../sections/index/LosAngelesSection"
import OurExecutiveTeamSection from "../sections/index/OurExecutiveTeamSection"
import TechnologyExpertsSection from "../sections/index/TechnologyExpertsSection"
import OurHistorySection from "../sections/index/OurHistorySection"
import LetsGetStartedSection from "../sections/index/LetsGetStartedSection"
import Footer from "../components/footer/Footer"

import "./page-styles/aboutStyle.scss"

const About = () => {
  return (
    <Layout>
      <Seo title="Sky Lab" />
      <Header />
      <Container outerClassName="about-page" innerClassName="inner-container">
        <div className="title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
          blandit risus. Cras malesuada vehicula nulla quis
        </div>
        <div className="desc">
          Vestibulum bibendum rhoncus auctor. Donec suscipit massa turpis, sit
          amet pharetra sem sodales eu. Vestibulum vel maximus ante. Cras
          fermentum tempor ligula, et volutpat sapien dictum id. Proin molestie
          rutrum felis eget tempus. Ut vel dolor magna. Nunc a lectus lobortis,
          vulputate orci a, tincidunt ligula. Vivamus ullamcorper quam eu quam
          posuere consectetur.
        </div>
      </Container>
      <OurServicesSection />
      <LosAngelesSection />
      <OurExecutiveTeamSection />
      <TechnologyExpertsSection />
      <OurHistorySection />
      <LetsGetStartedSection />
      <Footer />
    </Layout>
  )
}

export default About
