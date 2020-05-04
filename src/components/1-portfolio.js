import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      malcomx: file(relativePath: { eq: "malcomX.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      martin: file(relativePath: { eq: "martin-luther.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      evernote: file(relativePath: { eq: "evernote.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spartan: file(relativePath: { eq: "spartan.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      covid: file(relativePath: { eq: "covid19.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      graph: file(relativePath: { eq: "graph.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      recipe: file(relativePath: { eq: "recipe.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      insideNote: file(relativePath: { eq: "evernote-inside.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blog: file(relativePath: { eq: "blog.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="Portfolio">
      <div className="title">Portfolio</div>
      <div className="port-container">
        <div className="project-name"> Evernote Clone</div>
        <div className="section">
          <div className="image-row">
            <div className="left">
              <Img
                alt="evernote note taking app login"
                className="img"
                fluid={data.evernote.childImageSharp.fluid}
              />
            </div>

            <div className="right">
              <Img
                alt="evernote note taking app inside"
                className="img"
                fluid={data.insideNote.childImageSharp.fluid}
              />
            </div>
          </div>
        </div>
        <p className="bodyText">
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
        </p>
        <div className="links">
          <a
            className="port-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            code
          </a>{" "}
          |{" "}
          <a
            className="port-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            preview
          </a>
        </div>

        <p className="stack">HTML - SCSS - JavaScript- GSAP3.0 - Parcel</p>

        <div className="single-img">
          <div className="right">
            <Img
              alt="food recipe searching app"
              className="img2"
              fluid={data.recipe.childImageSharp.fluid}
            />
          </div>
          <div className="left">
            <div className="project-name"> Recipe App</div>
            <p className="bodyText">
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit
            </p>
            <div className="links">
              {" "}
              <a
                className="port-link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                code
              </a>{" "}
              |{" "}
              <a
                className="port-link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                preview
              </a>
            </div>{" "}
            <p className="stack">HTML - SCSS - JavaScript- GSAP3.0 - Parcel</p>
          </div>
        </div>

        <div className="double-image">
          <div className="project-name"> Covid-19 Info / Tracker</div>
          <div className="section">
            <div className="image-row">
              <div className="left">
                <Img
                  alt="covid 19 information"
                  className="img"
                  fluid={data.covid.childImageSharp.fluid}
                />
              </div>

              <div className="right">
                <Img
                  alt="covid 19 tracking graph"
                  className="img"
                  fluid={data.graph.childImageSharp.fluid}
                />
              </div>
            </div>
          </div>
          <p className="bodyText">
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </p>
          <div className="links">
            <a
              className="port-link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              code
            </a>{" "}
            |{" "}
            <a
              className="port-link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              preview
            </a>
          </div>
          <p className="stack">HTML - SCSS - JavaScript- GSAP3.0 - Parcel</p>
        </div>

        <div className="single-img">
          <div className="right">
            <Img
              alt="personal blog"
              className="img2"
              fluid={data.blog.childImageSharp.fluid}
            />
          </div>
          <div className="left">
            <div className="project-name"> Blog</div>
            <p className="bodyText">
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit
            </p>
            <div className="links">
              {" "}
              <a
                className="port-link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                code
              </a>{" "}
              |{" "}
              <a
                className="port-link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                preview
              </a>
            </div>{" "}
            <p className="stack">HTML - SCSS - JavaScript- GSAP3.0 - Parcel</p>
          </div>
        </div>

        <div className="double-image">
          <div className="project-name"> Malcom & Martin</div>
          <div className="section">
            <div className="image-row">
              <div>
                <Img
                  alt="malcom x biography"
                  className="img"
                  fluid={data.malcomx.childImageSharp.fluid}
                />
              </div>
              <div>
                <Img
                  alt="martin luther king jr"
                  className="img"
                  fluid={data.martin.childImageSharp.fluid}
                />
              </div>
            </div>
          </div>
          <p className="bodyText">
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </p>
          <div className="links">
            {" "}
            <a
              className="port-link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              code
            </a>{" "}
            |{" "}
            <a
              className="port-link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              preview
            </a>
          </div>{" "}
          <p className="stack">HTML - SCSS - JavaScript- GSAP3.0 - Parcel</p>
        </div>
        <div className="single-img">
          <div className="right">
            <Img
              alt="spartan nutrition suplement website"
              className="img2"
              fluid={data.spartan.childImageSharp.fluid}
            />
          </div>
          <div className="left">
            <div className="project-name"> Spartan Nutrition</div>
            <p className="bodyText">
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit
            </p>
            <div className="links">
              {" "}
              <a
                className="port-link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                code
              </a>{" "}
              |{" "}
              <a
                className="port-link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                preview
              </a>
            </div>{" "}
            <p className="stack">HTML - SCSS - JavaScript- GSAP3.0 - Parcel</p>
          </div>
        </div>
        {/* ------------------------------------------ */}
        <div className="double-image"></div>
      </div>
    </div>
  )
}

export default Portfolio
