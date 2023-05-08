import * as React from "react"
import Layout from "../layout"
import { StaticImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import Seo from "../seo"
// import "../container/ContainerStyle.scss"

const Container = () => {
  return (
    <Layout>
      <Seo title="The Top 20 Destinations to Visit in Europe" />
      <BackgroundImage
        className="big-container"
        Tag="section"
        fluid={{
          src: "https://images3.alphacoders.com/823/82317.jpg",
          sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 768px, 1024px",
        }}
        style={{ height: "100vh" }}
      >
        <h1> Hello World!</h1>
        <StaticImage
          src="https://w.forfun.com/fetch/05/05eeb93a2e41734ecb6044146351f11e.jpeg?h=900&r=0.5"
          loading="eager"
          width={200}
          height={200}
          quality={100}
          formats={["webp"]}
          style={{ marginBottom: `var(--space-3)` }}
        >
          aaaaaaaaaaaaaaaaaaaaaa
        </StaticImage>
      </BackgroundImage>
    </Layout>
  )
}

export default Container
