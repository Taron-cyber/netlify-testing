import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header/Header"
import CoverSection from "../components/cover-section/CoverSection"
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
import LetsGetStartedSection from "../sections/index/LetsGetStartedSection"
import Footer from "../components/footer/Footer"

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
      <Seo title="The Top 20 Destinations to Visit in Europe" />
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
      <LetsGetStartedSection />
      <Footer />
    </Layout>
  )
}
export default IndexPage
