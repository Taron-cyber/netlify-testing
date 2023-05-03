/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title, description, lang, meta = [] }) => {
  const metaDescription =
    description || "The Top 20 Destinations to Visit in Europe"
  const defaultTitle = "The Best Gifts for Tech Enthusiasts in 2023"

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title ? `${title} | ${defaultTitle}` : defaultTitle}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title || defaultTitle,
        },
        {
          property: "og:description",
          content: metaDescription,
          //Specifies a brief description of the content on the page.
        },
        {
          property: "og:type",
          content: "website",
          // Specifies the type of content on the page, such as a website, article, or video.
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:title",
          content: title || defaultTitle,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },

        {
          property: "og:url",
          content: "https://master--tiny-meringue-2fe479.netlify.app/",
          // Specifies the canonical URL of the page.
        },

        {
          property: "og:image",
          content:
            "https://master--tiny-meringue-2fe479.netlify.app/static/705185e5354a42a4570368356f29b7e5/dfaf6/example.avif",
          // Specifies the URL of the main image on the page.
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "600",
        },
        {
          property: "og:image:alt",
          content: "text to speech",
        },
        {
          property: "og:image:type",
          content: "image/avif",
        },
        {
          property: "og:site_name",
          content: "master--tiny-meringue",
          // Specifies the name of the website or app that the page belongs to.
        },
        {
          property: "og:locale",
          content: "en_US",
          // Specifies the locale or language of the content on the page.
        },
        // {
        //   property: "og:article:published_time",
        //   content: "2023-05-01T00:00:00+00:00",
        //   // Specifies the date and time that an article was published on the page.
        // },

        {
          property: "telegram:title",
          content: "Don't miss out on our exclusive sale - ends tomorrow",
        },
        {
          property: "telegram:card",
          content: "summary",
        },

        ...meta,
      ]}
    />
  )
}

export default SEO
