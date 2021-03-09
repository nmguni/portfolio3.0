import React from "react"
import "../styles/styles.scss"

// Import Components
import Nav from "../components/nav"
import Hero from "../components/hero"
import Portfolio from "../components/portfolio"
import About from "../components/about"
import Contact from "../components/contact"

const IndexPage = () => (
  <div>
    <Nav />
    <Hero />
    <Portfolio />
    <About />
    <Contact />
  </div>
)

export default IndexPage
