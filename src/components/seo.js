/**
 * Seo component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({ title, description, meta = [] }) => {
  const metaDescription =
    description || "The Top 20 Destinations to Visit in Europe"
  const defaultTitle = "The Best Gifts for Tech Enthusiasts in 2023"

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title ? `${title} | ${defaultTitle}` : defaultTitle}
      meta={[
        {
          property: "og:locale",
          content: "en_US",
          // Specifies the locale or language of the content on the page.
        },
        {
          property: "og:type",
          content: "website",
          // Specifies the type of content on the page, such as a website, article, or video.
        },
        {
          property: "og:title",
          content: title || defaultTitle,
        },
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:description",
          content: metaDescription,
          //Specifies a brief description of the content on the page.
        },
        {
          property: "og:url",
          content: "https://master--tiny-meringue-2fe479.netlify.app/",
          // Specifies the canonical URL of the page.
        },
        {
          property: "og:site_name",
          content: "Sky Lab",
          // Specifies the name of the website or app that the page belongs to.
        },

        {
          property: "og:updated_time",
          content: "2023-05-23T15:45:52+00:00",
        },
        {
          property: "og:image",
          content:
            "https://master--tiny-meringue-2fe479.netlify.app/static/a1810a647d749e8c94cc0cf924a755e4/1f48b/website-logo.webp",
          // Specifies the URL of the main image on the page.
        },
        {
          property: "og:image:secure_url",
          content:
            "https://master--tiny-meringue-2fe479.netlify.app/static/a1810a647d749e8c94cc0cf924a755e4/1f48b/website-logo.webp",
          // Specifies the  Secure_URL of the main image on the page.
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
          name: "og:image:type",
          content: "image/webp",
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
          name: "twitter:image",
          content:
            "https://master--tiny-meringue-2fe479.netlify.app/static/a1810a647d749e8c94cc0cf924a755e4/1f48b/website-logo.webp",
        },

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
    ></Helmet>
  )
}

export default Seo
