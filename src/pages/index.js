import * as React from "react"
import Container from "../components/container/Container"
import Layout from "../components/layout"
// import * as styles from "../components/index.module.css"

// const samplePageLinks = [
//   {
//     text: "Page 2",
//     url: "page-2",
//     badge: false,
//     description:
//       "A simple example of linking to another page within a Gatsby site",
//   },
//   { text: "TypeScript", url: "using-typescript" },
//   { text: "Server Side Rendering", url: "using-ssr" },
//   { text: "Deferred Static Generation", url: "using-dsg" },
// ]

const IndexPage = () => {
  return (
    <Layout>
      <Container />
    </Layout>
  )
}
export default IndexPage
