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
    <div className="about">
      <div className="container">
        <div className="about-content">
          <h2 className="title">About me.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, deleniti repudiandae. Neque suscipit facilis animi modi
            iure magni incidunt sed numquam ex dolor veniam, maxime, quis ea
            illum. Voluptates officia labore quo. Ad eius iure ea impedit
            inventore veritatis explicabo dolores magni, quibusdam similique ut.
            Sapiente ipsam corporis sint reiciendis? <br />{" "}
          </p>
          <button className="btn">
            <a href="#">resume</a>
          </button>
        </div>
        <div className="skills-content">
          <h2 className="skill">skills</h2>
          <ul>
            <li>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              accusamus!{" "}
            </li>
            <li>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              accusamus!{" "}
            </li>
            <li>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              accusamus!{" "}
            </li>
            <li>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              accusamus!{" "}
            </li>
            <li>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              accusamus!{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box  overlay"></div>
    </div>
  )
}

export default About
