import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"

export default function Home({ data }) {
  console.log(data)

  return (
    <Layout>
      <section className={header}>
        <div>
          <h3>we're a</h3>
          <h2>design,</h2>
          <h3>dev & strategy shop</h3>
          <p>web developers based in Toronto.</p>
          <Link className={btn} to="/projects">
            Portfolio Projects
          </Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "astro.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
