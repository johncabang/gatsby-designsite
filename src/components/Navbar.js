import React from "react"
import { Link } from "gatsby"

function Navbar() {
  return (
    <nav>
      <h1>designsite</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar
