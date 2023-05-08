/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "develop" || stage === "build-javascript") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /\.scss$/,
//             use: [
//               loaders.miniCssExtract(),
//               {
//                 loader: "css-loader",
//                 options: {
//                   importLoaders: 1,
//                   modules: {
//                     localIdentName: "[name]__[local]___[hash:base64:5]",
//                   },
//                 },
//               },
//               "sass-loader",
//             ],
//           },
//         ],
//       },
//     })
//   }
// }
