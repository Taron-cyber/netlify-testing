import * as React from "react"
import Layout from "../layout"
import { StaticImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import Seo from "../seo"
import "../container/ContainerStyle.scss"

const Container = () => {
  return (
    <Layout>
      <Seo title="The Top 20 Destinations to Visit in Europe" />
      <BackgroundImage
        className="parent-container"
        Tag="section"
        fluid={{
          src: "https://images.unsplash.com/photo-1668068810651-bfd8a7ee02ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
          sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 768px, 1024px",
        }}
        style={{ height: "100vh" }}
        alt="background img"
      >
        <div className="child-container">
          <StaticImage
            className="img"
            src="https://w.forfun.com/fetch/05/05eeb93a2e41734ecb6044146351f11e.jpeg?h=900&r=0.5"
            loading="eager"
            quality={100}
            formats={["webp"]}
            // style={{ marginBottom: `var(--space-3)` }}
            alt="img"
          />
          <h2>Some Content </h2>
          <div className="descrip">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  )
}

export default Container
