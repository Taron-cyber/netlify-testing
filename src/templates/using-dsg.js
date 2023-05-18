import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingDSG = () => (
  <Layout>
    <h1>
      Hello from a <b>DSG Page</b>
    </h1>
    <p>This page is not created until requested by a user.</p>
    <p>To learn more, head over to our .</p>
    <Link to="/" aria-label="homepage">
      Go back to the homepage
    </Link>
  </Layout>
)

export const Head = () => (
  <Seo title="The Top 20 Destinations to Visit in Europe" />
)

export default UsingDSG
