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
          content: "TESTING",
          // Specifies the name of the website or app that the page belongs to.
        },

        {
          property: "og:updated_time",
          content: "2023-03-15T15:45:52+00:00",
        },
        {
          property: "og:image",
          content:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATLSURBVHgB7d3xjdU4EAbwb08UQAebq+C4Dnwd0EF8FdxeBTEVQAcbKgAqeFABdGA6gA6WzPKMVk8v8YztsR2UTxrtH0nsyU8hMSHADYAHHNHKzR84opoDWDkHsHIOYOUcwMp5trHt/6W+QC/DUq+Xes7c/9+lvqJd7FIjEvKwUgZ6GZbyG3Nfq1u0ywhZr6EeUxv4BeS4LYFTcZsAm6W+Ia3ZFsA5uNWB/0Nes7WBc3GrAk/Ib7YmcAncasCvUabZWsASXLrd3aERMC2/7gXN9gAsxaUHtkED4GGpz4JmewBOwaUYVAYeIF+GOcYxt9DLiDRcikFFYOkal5q152NbAefgUgwqARvI1rj+otkWwLm4FIMKwJJGqej+PFyM4VEXuAQuxUAZeBI0SjXj+gseHznuDuVSCpdioAgsXeO6jbFiwFQj8lMSl2KgACxd4z59mK3FM8cakZ7SuBSDwsCEK1njemajXOBUZA1cikFB4AEyiGsPs7VIxpUia+FSDAoBD5AhzOD/aQWQ9o54ZIyriUsxKABsIFvjOsjjBeNzkbVxKQaZwNImLdLiBfNwkGvgUgwygCdBkz6jSSAP+BJ5FByXg0vZWqo+Zm3jO0GTHvyH2Vq8YL4t5FGwfy7uFBn/MWsbXy51EjQ7IS9eMFeJ0saNApvz9jfMhnORPeIge8JlA1Mcc0CqE9JuFz4yrkGZq7wWrgiYcicY2EOOHMO7RdrL/Fa4YmDKS/B/qXrIXnlygCkD0pBr4yYBp5zgBF64wKEH6T25Nm4ycDjBGIgUWQI8CuaW9HAtU8Jc2cCUAbK3aids35c9eMCjYM5c5CljrmzgEMkyzmMd2SMOPArmykWeCsz1mFxgihNM6lfG9ojDPBSqGLJkrhMqAFOcoKlrJ+mFx2shT4IxHCp/FyFZxl2epBccl3pFxZAnwbHufIxBRWCK9OOTE/J/AxHKnnuYBcdM52MmwTHuyfkaVAamDJCB0b657xrsRQ+z4NiTYF93MY9BA2DKgPIfAHJxQ+bC87grcxg0AqY8VzhJLm7IXGgetzK+QUPgEIc2uCFz5jxuY2yDDoCB8sgWssyJ87jIuAadAFMs2uCGzMJ5HGNMg46AYw1xKvcjwJk5j2OOZ9ARsPSzq2v1GbIPWlJ6uOcPtw1c8y+D04mdkPdeFufjT0hH/r7Uh8g+n1AotYBL4YbkIldLDeDSuCG7QNYG1sIN6R5ZE1gbN6RrZC1gKe4X5P3jH90iawCn4P6Dn0/3nHSJXBq4FW5Id8glgbVx3zP36wq5FHCNK/duqbfMfbtBLgFc87ZgsTPkXOAW91yLHSHnALd8oFnsBDkVuPVqgWKxA+QU4B5wQyw6R5YC94QbYtEx8jPBvj3ihtjzz5Gx7wvovx/5Fe4V3DNuiAX/Sq4WDvAecEMsOkOOAe8JN8SiI+Qt4D3ihlh0grz1kLsH/2nbE26IPf/kPPjUEruCOekRN8Si8ZWc+y6iZ9wQi4bIOcB7wA2xaIScCrwn3BCLBsgpwHvEDbGojCwF3jNuiF3qIypFAvw74IYU+/YsFi7w74RbNZy3aYT6CvpvoGLr7r+X+hNlchvZPoD/+e5fWxtv8ORD4SPFc/yHfdo5gJVzACvnAFbOAXxk3/kByuWsTNy6MVwAAAAASUVORK5CYII=",
          // Specifies the URL of the main image on the page.
        },
        {
          property: "og:image:secure_url",
          content:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATLSURBVHgB7d3xjdU4EAbwb08UQAebq+C4Dnwd0EF8FdxeBTEVQAcbKgAqeFABdGA6gA6WzPKMVk8v8YztsR2UTxrtH0nsyU8hMSHADYAHHNHKzR84opoDWDkHsHIOYOUcwMp5trHt/6W+QC/DUq+Xes7c/9+lvqJd7FIjEvKwUgZ6GZbyG3Nfq1u0ywhZr6EeUxv4BeS4LYFTcZsAm6W+Ia3ZFsA5uNWB/0Nes7WBc3GrAk/Ib7YmcAncasCvUabZWsASXLrd3aERMC2/7gXN9gAsxaUHtkED4GGpz4JmewBOwaUYVAYeIF+GOcYxt9DLiDRcikFFYOkal5q152NbAefgUgwqARvI1rj+otkWwLm4FIMKwJJGqej+PFyM4VEXuAQuxUAZeBI0SjXj+gseHznuDuVSCpdioAgsXeO6jbFiwFQj8lMSl2KgACxd4z59mK3FM8cakZ7SuBSDwsCEK1njemajXOBUZA1cikFB4AEyiGsPs7VIxpUia+FSDAoBD5AhzOD/aQWQ9o54ZIyriUsxKABsIFvjOsjjBeNzkbVxKQaZwNImLdLiBfNwkGvgUgwygCdBkz6jSSAP+BJ5FByXg0vZWqo+Zm3jO0GTHvyH2Vq8YL4t5FGwfy7uFBn/MWsbXy51EjQ7IS9eMFeJ0saNApvz9jfMhnORPeIge8JlA1Mcc0CqE9JuFz4yrkGZq7wWrgiYcicY2EOOHMO7RdrL/Fa4YmDKS/B/qXrIXnlygCkD0pBr4yYBp5zgBF64wKEH6T25Nm4ycDjBGIgUWQI8CuaW9HAtU8Jc2cCUAbK3aids35c9eMCjYM5c5CljrmzgEMkyzmMd2SMOPArmykWeCsz1mFxgihNM6lfG9ojDPBSqGLJkrhMqAFOcoKlrJ+mFx2shT4IxHCp/FyFZxl2epBccl3pFxZAnwbHufIxBRWCK9OOTE/J/AxHKnnuYBcdM52MmwTHuyfkaVAamDJCB0b657xrsRQ+z4NiTYF93MY9BA2DKgPIfAHJxQ+bC87grcxg0AqY8VzhJLm7IXGgetzK+QUPgEIc2uCFz5jxuY2yDDoCB8sgWssyJ87jIuAadAFMs2uCGzMJ5HGNMg46AYw1xKvcjwJk5j2OOZ9ARsPSzq2v1GbIPWlJ6uOcPtw1c8y+D04mdkPdeFufjT0hH/r7Uh8g+n1AotYBL4YbkIldLDeDSuCG7QNYG1sIN6R5ZE1gbN6RrZC1gKe4X5P3jH90iawCn4P6Dn0/3nHSJXBq4FW5Id8glgbVx3zP36wq5FHCNK/duqbfMfbtBLgFc87ZgsTPkXOAW91yLHSHnALd8oFnsBDkVuPVqgWKxA+QU4B5wQyw6R5YC94QbYtEx8jPBvj3ihtjzz5Gx7wvovx/5Fe4V3DNuiAX/Sq4WDvAecEMsOkOOAe8JN8SiI+Qt4D3ihlh0grz1kLsH/2nbE26IPf/kPPjUEruCOekRN8Si8ZWc+y6iZ9wQi4bIOcB7wA2xaIScCrwn3BCLBsgpwHvEDbGojCwF3jNuiF3qIypFAvw74IYU+/YsFi7w74RbNZy3aYT6CvpvoGLr7r+X+hNlchvZPoD/+e5fWxtv8ORD4SPFc/yHfdo5gJVzACvnAFbOAXxk3/kByuWsTNy6MVwAAAAASUVORK5CYII=",
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
          content: "image/jpeg",
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
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATLSURBVHgB7d3xjdU4EAbwb08UQAebq+C4Dnwd0EF8FdxeBTEVQAcbKgAqeFABdGA6gA6WzPKMVk8v8YztsR2UTxrtH0nsyU8hMSHADYAHHNHKzR84opoDWDkHsHIOYOUcwMp5trHt/6W+QC/DUq+Xes7c/9+lvqJd7FIjEvKwUgZ6GZbyG3Nfq1u0ywhZr6EeUxv4BeS4LYFTcZsAm6W+Ia3ZFsA5uNWB/0Nes7WBc3GrAk/Ib7YmcAncasCvUabZWsASXLrd3aERMC2/7gXN9gAsxaUHtkED4GGpz4JmewBOwaUYVAYeIF+GOcYxt9DLiDRcikFFYOkal5q152NbAefgUgwqARvI1rj+otkWwLm4FIMKwJJGqej+PFyM4VEXuAQuxUAZeBI0SjXj+gseHznuDuVSCpdioAgsXeO6jbFiwFQj8lMSl2KgACxd4z59mK3FM8cakZ7SuBSDwsCEK1njemajXOBUZA1cikFB4AEyiGsPs7VIxpUia+FSDAoBD5AhzOD/aQWQ9o54ZIyriUsxKABsIFvjOsjjBeNzkbVxKQaZwNImLdLiBfNwkGvgUgwygCdBkz6jSSAP+BJ5FByXg0vZWqo+Zm3jO0GTHvyH2Vq8YL4t5FGwfy7uFBn/MWsbXy51EjQ7IS9eMFeJ0saNApvz9jfMhnORPeIge8JlA1Mcc0CqE9JuFz4yrkGZq7wWrgiYcicY2EOOHMO7RdrL/Fa4YmDKS/B/qXrIXnlygCkD0pBr4yYBp5zgBF64wKEH6T25Nm4ycDjBGIgUWQI8CuaW9HAtU8Jc2cCUAbK3aids35c9eMCjYM5c5CljrmzgEMkyzmMd2SMOPArmykWeCsz1mFxgihNM6lfG9ojDPBSqGLJkrhMqAFOcoKlrJ+mFx2shT4IxHCp/FyFZxl2epBccl3pFxZAnwbHufIxBRWCK9OOTE/J/AxHKnnuYBcdM52MmwTHuyfkaVAamDJCB0b657xrsRQ+z4NiTYF93MY9BA2DKgPIfAHJxQ+bC87grcxg0AqY8VzhJLm7IXGgetzK+QUPgEIc2uCFz5jxuY2yDDoCB8sgWssyJ87jIuAadAFMs2uCGzMJ5HGNMg46AYw1xKvcjwJk5j2OOZ9ARsPSzq2v1GbIPWlJ6uOcPtw1c8y+D04mdkPdeFufjT0hH/r7Uh8g+n1AotYBL4YbkIldLDeDSuCG7QNYG1sIN6R5ZE1gbN6RrZC1gKe4X5P3jH90iawCn4P6Dn0/3nHSJXBq4FW5Id8glgbVx3zP36wq5FHCNK/duqbfMfbtBLgFc87ZgsTPkXOAW91yLHSHnALd8oFnsBDkVuPVqgWKxA+QU4B5wQyw6R5YC94QbYtEx8jPBvj3ihtjzz5Gx7wvovx/5Fe4V3DNuiAX/Sq4WDvAecEMsOkOOAe8JN8SiI+Qt4D3ihlh0grz1kLsH/2nbE26IPf/kPPjUEruCOekRN8Si8ZWc+y6iZ9wQi4bIOcB7wA2xaIScCrwn3BCLBsgpwHvEDbGojCwF3jNuiF3qIypFAvw74IYU+/YsFi7w74RbNZy3aYT6CvpvoGLr7r+X+hNlchvZPoD/+e5fWxtv8ORD4SPFc/yHfdo5gJVzACvnAFbOAXxk3/kByuWsTNy6MVwAAAAASUVORK5CYII=",
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
    />
  )
}

export default SEO
