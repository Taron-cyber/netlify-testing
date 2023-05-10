import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../layout"
import Seo from "../seo"
import Header from "../header/Header"

import "../container/ContainerStyle.scss"

const Container = () => {
  return (
    <Layout>
      <Seo title="The Top 20 Destinations to Visit in Europe" />
      <div className="outer-container">
        <Header />
        <div className="inner-container">
          <StaticImage
            className="img"
            src="https://w.forfun.com/fetch/05/05eeb93a2e41734ecb6044146351f11e.jpeg?h=900&r=0.5"
            loading="lazy"
            quality={100}
            formats={["webp"]}
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
      </div>
    </Layout>
  )
}

export default Container
