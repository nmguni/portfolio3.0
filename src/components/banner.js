import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import res from "../../public/resume/NdumisoMguniResume.pdf"

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
      <div className="banner__container">
        <div className="banner__title">I`m Ndumiso Mguni</div>
        <div className="banner__position">Front-End Developer</div>
        <div className="banner__subtitle">
          React-Redux | JacaScript-ES6 | HTML-CSS | MongoDB | Express
        </div>
        <div className="banner__resumeLink">
          {" "}
          <a
            href={res}
            className="banner__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>{" "}
        </div>
      </div>
    </div>
  )
}

export default Banner
