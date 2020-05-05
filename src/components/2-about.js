import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "undraw_profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div id="about" className="about">
      <div className="container">
        <div className="about-content">
          <h2 className="title">About me.</h2>
          <p>
            Hi, my name is Ndumiso Mguni and I am a Web Developer. I have been
            developing for 3 years now and I have a little over a year and a
            half of professional experience. I worked at Ontario SEO as a Web
            developer. It's a small company so we only had two developers
            including myself. I worked with technologies that I have never
            worked with before, as a result, I was learning something new every
            single day and I loved it!
          </p>
          <p>
            {" "}
            I’m currently working to become more proficient with JavaScript,
            along with dipping my toe into the back end to work with Node.js and
            MongoDB. Outside of developing websites, I enjoy spending time
            reading, watching sports, the gym, and spending time with family and
            friends.
          </p>
        </div>
        <h3 className="skill">Current Stack</h3>
        <p className="stack">
          Technologies I use regularly are HTML, SCSS, JavaScript, and React.
        </p>
        <p className="stack">I am familiar with Express, SEO, Wordpress, </p>
        <p className="stack">I am currently learning Node, MongoDB </p>

        <button className="btn">
          <a href="#">resume</a>
        </button>
      </div>

      <div className="black-box"></div>
      <div className="black-box  overlay"></div>
    </div>
  )
}

export default About
