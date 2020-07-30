import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      socialLogin: file(relativePath: { eq: "socialLogin.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      socialPost: file(relativePath: { eq: "socialPost.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      jobSearch: file(relativePath: { eq: "jobSearch.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jobSearchOpen: file(relativePath: { eq: "jobSearchOpen.jpg" }) {
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
      chatApp: file(relativePath: { eq: "chatApp.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chat: file(relativePath: { eq: "chat.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      innerBlog: file(relativePath: { eq: "inner-blog.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hackerNews: file(relativePath: { eq: "News-Reader.png" }) {
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
    <div id="portfolio" className="Portfolio">
      <div className="title">Portfolio</div>

      <div className="port-container">
        <div className="project-name">Social Media Forum</div>
        <div className="section">
          <div className="image-row">
            <div className="left">
              <Img
                alt="developer jokes social media forum"
                className="img"
                fluid={data.socialLogin.childImageSharp.fluid}
              />
            </div>

            <div className="right">
              <Img
                alt="joks forum"
                className="img"
                fluid={data.socialPost.childImageSharp.fluid}
              />
            </div>
          </div>
        </div>
        <p className="bodyText">
          This App is built with the MERN + G + Apollo stack it allows users to
          register and login to make posts in a forum. We can like and comment
          on other user's posts as well as delete our posts.
        </p>
        <div className="links">
          <a
            className="port-link"
            href="https://github.com/nmguni/mern-client"
            target="_blank"
            rel="noopener noreferrer"
          >
            code
          </a>{" "}
          |{" "}
          <a
            className="port-link"
            href="https://mern-jokes-forum.netlify.app/register"
            target="_blank"
            rel="noopener noreferrer"
          >
            preview
          </a>
        </div>
        <p className="stack">MERNG - MongoDB Express React Node GraphQL</p>

        <div className="double-image">
          <div className="project-name">Real Time Chat App</div>
          <div className="section">
            <div className="image-row">
              <div className="left">
                <Img
                  alt="real time chat app login"
                  className="img"
                  fluid={data.chatApp.childImageSharp.fluid}
                />
              </div>

              <div className="right">
                <Img
                  alt="real time chat app "
                  className="img"
                  fluid={data.chat.childImageSharp.fluid}
                />
              </div>
            </div>
          </div>
          <p className="bodyText">
            Realtime Chat Application. React on the front end, with NodeJS +
            Socket.io web socket library on the back end
          </p>
          <div className="links">
            <a
              className="port-link"
              href="https://github.com/nmguni/-realtime-chat-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              code
            </a>{" "}
            |{" "}
            <a
              className="port-link"
              href="https://rick-morty-chat-app.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              preview
            </a>
          </div>
          <p className="stack">React - Express - Axios - Node.js - Socket.io</p>
        </div>

        <div className="double-image">
          <div className="project-name">Job Search API</div>
          <div className="section">
            <div className="image-row">
              <div className="left">
                <Img
                  alt="Github Hub API"
                  className="img"
                  fluid={data.jobSearchOpen.childImageSharp.fluid}
                />
              </div>

              <div className="right">
                <Img
                  alt="Job search GitHub Api"
                  className="img"
                  fluid={data.jobSearch.childImageSharp.fluid}
                />
              </div>
            </div>
          </div>
          <p className="bodyText">
            Job search App using GitHub jobs API, with search, filter, and
            pagination.
          </p>
          <div className="links">
            <a
              className="port-link"
              href="https://github.com/nmguni/job-search"
              target="_blank"
              rel="noopener noreferrer"
            >
              code
            </a>{" "}
            |{" "}
            <a
              className="port-link"
              href="https://react-job-search.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              preview
            </a>
          </div>
          <p className="stack">React - Axios - React Bootstrap</p>
        </div>

        <div className="single-img">
          <div className="right">
            <Img
              alt="Hackernews"
              className="img2"
              fluid={data.hackerNews.childImageSharp.fluid}
            />
          </div>
          <div className="left">
            <div className="project-name"> Hacker News Clone</div>
            <p className="bodyText">
              Hacker News is an awesome site but where it lacks is the design.
              As a Web Developer, I decided to challenge myself and give it a
              facelift.
            </p>
            <div className="links">
              {" "}
              <a
                className="port-link"
                href="https://github.com/nmguni/hackernews-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                code
              </a>{" "}
              |{" "}
              <a
                className="port-link"
                href="https://hackernews-api-clone.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                preview
              </a>
            </div>{" "}
            <p className="stack">
              React - Express - Axios - Styled Components - firebase - ejs
            </p>
          </div>
        </div>

        <div className="double-image">
          <div className="project-name"> COVID-19 Info / Tracker</div>
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
            The home page contains educational information about COVID-19 all
            sourced from the CDC, WHO, and Canada.ca. The second page is a graph
            representing infections vs deaths from t COVID-19. With the
            drop-down, you can select a graph representing the world or a
            specific country.
          </p>
          <div className="links">
            <a
              className="port-link"
              href="https://github.com/nmguni/covid19-tracker-graph"
              target="_blank"
              rel="noopener noreferrer"
            >
              code
            </a>{" "}
            |{" "}
            <a
              className="port-link"
              href="https://covid19-info-chart.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              preview
            </a>
          </div>
          <p className="stack">React - Scss - Axios - Material ui - Chart.js</p>
        </div>

        {/* --------------------- */}

        <div className="double-image">
          <div className="project-name">Blog</div>
          <div className="section">
            <div className="image-row">
              <div>
                <Img
                  alt="Blog home page"
                  className="img"
                  fluid={data.blog.childImageSharp.fluid}
                />
              </div>
              <div>
                <Img
                  alt="Blogs Page"
                  className="img"
                  fluid={data.innerBlog.childImageSharp.fluid}
                />
              </div>
            </div>
          </div>
          <p className="bodyText">
            I wanted something fast and with good SEO for my blog, so a static
            website generator like Gatsby seemed like the best fit! <br /> I
            built this blog to write about various topics in Front-End
            Development, and the best way to learn something is by teaching it
            to others!{" "}
          </p>
          <div className="links">
            <a
              className="port-link"
              href="https://github.com/nmguni/personal-blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              code
            </a>{" "}
            |{" "}
            <a
              className="port-link"
              href="https://devblogmguni.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              preview
            </a>
          </div>{" "}
          <p className="stack">Gatsby - React</p>
        </div>

        {/* ------------------------------------------ */}
        <div className="double-image"></div>
      </div>
    </div>
  )
}

export default Portfolio
