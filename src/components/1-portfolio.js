import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/portfolio.scss"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      bookAppSave: file(relativePath: { eq: "BookAppSave.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chatApp: file(relativePath: { eq: "chatApp.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      innerBlog: file(relativePath: { eq: "innerBlog.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      shoeShop: file(relativePath: { eq: "shoe_shop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      notesApp: file(relativePath: { eq: "notes-app.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      blogpage: file(relativePath: { eq: "blog.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      blogposts: file(relativePath: { eq: "blog_posts.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      themecart: file(relativePath: { eq: "theme_store_cart.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      themestore: file(relativePath: { eq: "theme_store.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      inps: file(relativePath: { eq: "inps.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div id="portfolio" className="portfolio__container">
      <div className="portfolio__title">Projects</div>

      {/*  DOUBLE IMG CONTAINER*/}
      <div className="portfolio__content">
        <div className="portfolio__image__container ">
          <div className="image__container">
            <Img
              alt="Theme store"
              className="image"
              fluid={data.themestore.childImageSharp.fluid}
            />
          </div>
        </div>

        <div className="portfolio__image__container ">
          <div className="image__container">
            <Img
              alt="theme cart page"
              className="image"
              fluid={data.themecart.childImageSharp.fluid}
            />
          </div>
        </div>

        <div className="double__image">
          <div className="details__title"> Theme Store </div>
          <div className="details__description">
            A web app that displays UI Themes from developers that can be
            purchased. Ratings and descriptions can be given for each theme.
          </div>
          React + Redux - Node - Express - MongoDB (MERN stack)
          <div className="details__links">
            <a
              className="link"
              href="https://github.com/nmguni/theme-store"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>{" "}
            |{" "}
            <a
              className="link"
              href="https://themestore.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview
            </a>
          </div>
        </div>
      </div>
      {/* Bottom  */}

      {/* --------------------------------------------------------------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------------------------------------------------------------- */}

      {/* Top container */}
      <div className="portfolio__content">
        <div className="portfolio__image__container ">
          <div className="image__container">
            <Img
              alt="shoe shop"
              className="image"
              fluid={data.inps.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className="portfolio__details__container">
          <div className="details__title">inps </div>
          <div className="details__description">
            Make sure images comply with SEO standards. Under 100kb and contain
            Alt texts Each page has an SEO title and Meta Description Run
            Screaming Frog crawler to audit sites for common SEO issues by
            extracting data & auditing for common SEO issues. (Find broken Links
            audit redirects, discover duplicate content, analyze page titles &
            MetaData just to name a few) My main task was to transform PDF’s
            into working pages in the succession planning section.
          </div>
          <div className="details__stack">Drupal</div>
          <div className="details__links">
            <a
              className="link"
              href="https://inps.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Site Link
            </a>
          </div>
        </div>
      </div>
      {/* Bottom  */}

      {/* --------------------------------------------------------------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------------------------------------------------------------- */}

      {/* Top container */}
      <div className="portfolio__content">
        <div className="portfolio__image__container image__container__red__bg">
          <div className="image__container">
            <Img
              alt="shoe shop"
              className="image"
              fluid={data.shoeShop.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className="portfolio__details__container">
          <div className="details__title"> Shoe Store </div>
          <div className="details__description">
            E-Commerce Website. Logged in user can add/remove items to the store
            and buy them using PayPal API. <br />{" "}
            <span style={{ fontWeight: "bold", fontSize: ".8rem" }}>
              Login Info <br /> Email: johnwick@gmail.com PW: john1234
            </span>
          </div>
          <div className="details__stack">
            React + Redux - Node - Express - MongoDB (MERN stack)
          </div>
          <div className="details__links">
            <a
              className="link"
              href="https://github.com/nmguni/shoe-store"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>{" "}
            |{" "}
            <a
              className="link"
              href="https://calm-eyrie-12447.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview
            </a>
          </div>
        </div>
      </div>
      {/* Bottom  */}

      {/* Top container */}
      <div className="portfolio__content">
        <div className="portfolio__image__container">
          <div className="image__container">
            <Img
              alt="real time chat app login"
              className="image"
              fluid={data.chatApp.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className="portfolio__details__container">
          <div className="details__title"> Realtime Chat Application</div>
          <div className="details__description">
            I used Socket.io to manage real-time web socket connections to a
            Node.js server that will allow you to communicate real-time chat
            messages to all clients connected to a single server.
          </div>
          <div className="details__stack">
            React - Express - Axios - Node.js - Socket.io
          </div>
          <div className="details__links">
            <a
              className="link"
              href="https://github.com/nmguni/-realtime-chat-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>{" "}
            |{" "}
            <a
              className="link"
              href="https://rick-morty-chat-app.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview
            </a>
          </div>
        </div>
      </div>
      {/* Bottom  */}

      {/* Top container */}
      <div className="portfolio__content">
        <div className="portfolio__image__container image__container__cyan__bg">
          <div className="image__container">
            <Img
              alt="real time chat app login"
              className="image"
              fluid={data.notesApp.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className="portfolio__details__container">
          <div className="details__title"> Notes App </div>
          <div className="details__description">
            This app allows users to post notes or reminders. Images can be
            added to notes to make them stand out. Notes and be deleted or
            edited as well as likes can be added to the notes.
          </div>
          <div className="details__stack">
            React + Redux - Node - Express - MongoDB (MERN stack)
          </div>
          <div className="details__links">
            <a
              className="link"
              href="https://github.com/nmguni/notes-app-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>{" "}
            |{" "}
            <a
              className="link"
              href="https://mern-notes-app.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview
            </a>
          </div>
        </div>
      </div>
      {/* Bottom  */}
    </div>
  )
}

export default Portfolio
