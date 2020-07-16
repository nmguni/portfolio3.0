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
        <div className="project-name">Blog</div>
        <div className="section">
          <div className="image-row">
            <div className="left">
              <Img
                alt="Blog home page"
                className="img"
                fluid={data.blog.childImageSharp.fluid}
              />
            </div>

            <div className="right">
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
          website generator like Gatsby seemed like the best fit! <br /> I built
          this blog to write about various topics in Front-End Development, and
          the best way to learn something is by teaching it to others!{" "}
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
        </div>

        <p className="stack">Gatsby - React</p>

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

        {/* <div className="single-img">
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
              As a developer, I am a life long learner and whats a better place
              to document my journey than a blog. I challenged my self to post
              One blog a week, and as I get comfortable I hope to increase it in
              the future.
            </p>
            <div className="links">
              {" "}
              <a
                className="port-link"
                href="https://github.com/nmguni/blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                code
              </a>{" "}
              |{" "}
              <a
                className="port-link"
                href="https://mguniblog.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                preview
              </a>
            </div>{" "}
            <p className="stack">Gatsby - SCSS</p>
          </div>
        </div> */}

        <div className="double-image">
          <div className="project-name"> Malcolm & Martin</div>
          <div className="section">
            <div className="image-row">
              <div>
                <Img
                  alt="malcolm x biography"
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
            I was looking for information on Malcolm X when I stumbled upon the{" "}
            <a
              target="_blank"
              className="body-link"
              rel="noopener noreferrer"
              href=" https://www.malcolmx.com/"
            >
              Malcolm X biography
            </a>{" "}
            website. The website is packed with information but where it lacked
            was the design. I opted out of using any frameworks and just focused
            on HTML SCSS and some JavaScript for GSAP animations. I have a lot
            of fun building this site so I decided to build a header with pure
            HTML/SCSS about Martin Luther King Jr.
          </p>
          <div className="links">
            {" "}
            <a
              className="port-link"
              href="https://github.com/nmguni/malcolmx"
              target="_blank"
              rel="noopener noreferrer"
            >
              code malcolm
            </a>{" "}
            --{" "}
            <a
              className="port-link"
              href="https://github.com/nmguni/mlk"
              target="_blank"
              rel="noopener noreferrer"
            >
              code Martin
            </a>{" "}
            |{" "}
            <a
              className="port-link"
              href="https://malcomx.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              preview malcolm
            </a>{" "}
            --{" "}
            <a
              className="port-link"
              href="https://martin-luther.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              preview Martin
            </a>
          </div>{" "}
          <p className="stack">HTML - SCSS - GSAP3.0 - Parcel</p>
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
              The go too place for my protein powder is{" "}
              <a
                target="_blank"
                className="body-link"
                rel="noopener noreferrer"
                href="https://www.spartannutrition.ca/"
              >
                Spartan Nutrition
              </a>{" "}
              . Recently I went to their website for the first time to check out
              some products and was disappointed at what I saw. ( As a developer
              I have become very critical of any website I go to :P ) I decided
              to rebuild the site but give it a modern minimalistic design.
            </p>
            <div className="links">
              {" "}
              <a
                className="port-link"
                href="https://github.com/nmguni/spartan-nutrition2.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                code
              </a>{" "}
              |{" "}
              <a
                className="port-link"
                href="https://spartan-nutrition.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                preview
              </a>
            </div>{" "}
            <p className="stack">React - SCSS - Material ui- Maps Api</p>
          </div>
        </div>
        {/* ------------------------------------------ */}
        <div className="double-image"></div>
      </div>
    </div>
  )
}

export default Portfolio
