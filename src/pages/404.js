import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"

function NotFound({ data }) {
  console.log(data + " 404page")
  return (
    <Layout>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
    </Layout>
  )
}

export default NotFound

export const query = graphql`
  query ErrorImage {
    file(relativePath: { eq: "404error.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
