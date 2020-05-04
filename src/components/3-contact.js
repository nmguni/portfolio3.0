import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Contact = () => {
  return (
    <div className="contact">
      <div className="title">
        <h2>Get in touch</h2>
      </div>
      <div className="contact-links">
        <p>
          {" "}
          Phone:
          <a href="" target="blank">
            {" "}
            519 660 0813{" "}
          </a>
        </p>
        <p>
          {" "}
          Email:{" "}
          <a href="" target="blank">
            {" "}
            ndumiso29@gmail.com
          </a>
        </p>

        <p>
          {" "}
          Awsome Reposts:{" "}
          <a href="" target="blank">
            {" "}
            Twitter
          </a>
        </p>

        <p>
          {" "}
          linkedin:{" "}
          <a href="" target="blank">
            {" "}
            linkedin
          </a>
        </p>
      </div>
    </div>
  )
}

export default Contact
