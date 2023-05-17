import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header/Header"
import Container from "../components/container/Container"
import PrinciplesSection from "../sections/index/PrinciplesSection"
import ConvenientSection from "../sections/index/ConvenientSection"
import OurServicesSection from "../sections/index/OurServicesSection"
import TechnologyExpertsSection from "../sections/index/TechnologyExpertsSection"
import DiscoverySection from "../sections/index/DiscoverySection"
import WhatDoWeOfferSection from "../sections/index/WhatDoWeOfferSection"
import LosAngelesSection from "../sections/index/LosAngelesSection"
import OurCaseStudiesSection from "../sections/index/OurCaseStudiesSection"
import ReviewsSection from "../sections/index/ReviewsSection"
import SubscribeSection from "../sections/index/SubscribeSection"

import "../sections/index/styles/main.scss"
// import * as styles from "../components/index.module.css"
// const samplePageLinks = [
//   {
//     text: "Page 2",
//     url: "page-2",
//     badge: false,
//     description:
//       "A simple example of linking to another page within a Gatsby site",
//   },
//   { text: "TypeScript", url: "using-typescript" },
//   { text: "Server Side Rendering", url: "using-ssr" },
//   { text: "Deferred Static Generation", url: "using-dsg" },
// ]

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="The Top 20 Destinations to Visit in Europe" />
      <Header />
      <CoverSection />
      <PrinciplesSection />
      <ConvenientSection />
      <OurServicesSection />
      <TechnologyExpertsSection />
      <DiscoverySection />
      <WhatDoWeOfferSection />
      <LosAngelesSection />
      <OurCaseStudiesSection />
      <ReviewsSection />
      <SubscribeSection />
    </Layout>
  )
}
export default IndexPage

const CoverSection = () => (
  <Container outerClassName="top-section">
    <h1>Lorem Ipsum is simply dummy text of the printing and typesetting.</h1>
    <div className="descrip">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy.
      </p>
    </div>
    <button className="button">
      <Link to="/contact">Let’s chat</Link>
    </button>
  </Container>
)
