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

      notesApp: file(relativePath: { eq: "notes_app.jpg" }) {
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
              alt="My library book app"
              className="image"
              fluid={data.bookAppSave.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className="portfolio__details__container">
          <div className="details__title">Library </div>
          <div className="details__description">
            This app allows you to add books by the author's name and save a
            picture of the book in the image gallery. Page count, description,
            and publish date can be added to each book. There is an option to
            edit, add or delet books.
          </div>
          <div className="details__stack">MongoDB - Express - ejs</div>
          <div className="details__links">
            <a
              className="link"
              href="https://github.com/nmguni/book-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>{" "}
            |{" "}
            <a
              className="link"
              href="https://my-library-books.herokuapp.com/"
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

      {/* Top container */}
      <div className="portfolio__content">
        <div className="portfolio__image__container image__container__blue__bg">
          <div className="image__container">
            <Img
              alt="My blog"
              className="image"
              fluid={data.innerBlog.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className="portfolio__details__container">
          <div className="details__title"> Blog </div>
          <div className="details__description">
            I built this blog to write about various topics in Front-End
            Development, and the best way to learn something is by teaching it
            to others!{" "}
          </div>
          <div className="details__stack">Gatsby - React</div>
          <div className="details__links">
            <a
              className="link"
              href="https://github.com/nmguni/personal-blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>{" "}
            |{" "}
            <a
              className="link"
              href="https://devblogmguni.com"
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
