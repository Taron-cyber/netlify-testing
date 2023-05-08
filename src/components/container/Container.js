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
          src: "https://img.freepik.com/free-vector/abstract-blue-circle-black-background-technology_1142-12714.jpg?w=1380&t=st=1683549169~exp=1683549769~hmac=93c3cae77c1af9ed7c6c3c90da10bd9d8c9dc67e85b6694cf98ee244a87e079f",
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

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </BackgroundImage>
    </Layout>
  )
}

export default Container
