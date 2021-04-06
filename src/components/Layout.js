import React from "react"
import Navbar from "../components/Navbar"
import "../styles/global.css"

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright &copy; {new Date().getFullYear()} designsite</p>
      </footer>
    </div>
  )
}

export default Layout
