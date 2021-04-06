import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"

export default function Home() {
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
        <img
          src="/banner4.png"
          alt="site banner"
          style={{ maxWidth: "100%" }}
        />
      </section>
    </Layout>
  )
}
