import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="The Top 20 Destinations to Visit in Europe" />
    <h1>The Best Gifts for Tech Enthusiasts in 2023</h1>

    <p>Welcome to page 2</p>

    <h2>another pic </h2>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
