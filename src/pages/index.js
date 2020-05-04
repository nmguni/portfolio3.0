import React from "react"
import "../styles/styles.scss"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// Import Components
import Header from "../components/header"
import Banner from "../components/Banner"
import Portfolio from "../components/1-portfolio"
import About from "../components/2-about"
import Contact from "../components/3-contact"

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <Portfolio />
    <About />
    <Contact />
  </div>
)

export default IndexPage
