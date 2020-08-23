import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Banner = ({ author }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <div className="banner">
      <Helmet
        title={`${data.site.siteMetadata.author} | ${data.site.siteMetadata.title}`}
      />
      <div className="container">
        <div className="row">
          <div className="greating">Hello!</div>
          <div className="main-text">I`m Ndumiso Mguni</div>
          <div className="intro">
            A passionate lifelong learner. What does that mean to me personally?
            It means I am a curious person who enjoys figuring out how things
            work.
          </div>
        </div>

        <div className="scroll">
          <span>frontend developer</span>
        </div>
      </div>
      <div className="fixed-text">MERN</div>
    </div>
  )
}

export default Banner
