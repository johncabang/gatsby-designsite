import React from "react"
import Layout from "../components/Layout"

function NotFound() {
  return (
    <Layout>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/404error.png"
          alt="site banner"
          style={{ maxWidth: "100%" }}
        />
      </div>
    </Layout>
  )
}

export default NotFound
