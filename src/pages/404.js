import React from "react"
import { Link } from "gatsby"
import "../styles/404.scss"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import lookingUp from "../images/undraw_counting_stars_rrnl.svg"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      lookingUp: file(relativePath: { eq: "undraw_counting_stars_rrnl.svg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="root">
      <SEO title="404: Not found" />
      <div className="main-content">
        <h1 className="title">Why am I here?</h1>
        <p className="description">
          It seems like the page you are looking for is no longer here.
        </p>
        <button className="btn">
          <Link to="/">take me home</Link>{" "}
        </button>
      </div>
      <div className="bg-image">
        <img className="img" height="95%" src={lookingUp} alt="" />
      </div>
    </div>
  )
}

export default NotFoundPage
