import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="The Top 20 Destinations to Visit in Europe" />
    <h1>The Best Gifts for Tech Enthusiasts in 2023</h1>

    <p>Welcome to page 2</p>

    <StaticImage
      src="https://images.pexels.com/photos/6054896/pexels-photo-6054896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      loading="eager"
      width={600}
      height={400}
      quality={100}
      formats={["webp"]}
      alt="aaaaa"
      style={{ marginBottom: `var(--space-3)` }}
    />
    <br />
    <h2>another pic </h2>
    <StaticImage
      src="https://images.pexels.com/photos/6109101/pexels-photo-6109101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      loading="eager"
      width={600}
      height={400}
      quality={100}
      formats={["webp"]}
      alt="aaaa"
      style={{ marginBottom: `var(--space-3)` }}
    />
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
