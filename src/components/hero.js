import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/hero.scss"

const Hero = ({ author }) => {
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
    <div className="hero">
      <Helmet
        title={`${data.site.siteMetadata.author} | ${data.site.siteMetadata.title}`}
      />
      <div className="hero__container">
        <div className="hero__title">Ndumiso Mguni</div>
        <div className="hero__position">Front-End Developer</div>
        <div className="hero__subtitle">
          React-Redux | JacaScript-ES6 | HTML-CSS | MongoDB | Express
        </div>
      </div>
    </div>
  )
}

export default Hero
