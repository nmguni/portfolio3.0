import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faServer,
  faDesktop,
  faCode,
  faEdit,
} from "@fortawesome/free-solid-svg-icons"

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about__wrapper">
        <div className="about__text">
          <div className="about__top__text"> who am i...</div>
          <div className="about__mid__text">A few words about myself</div>

          <div className="about__btm__text">
            {" "}
            I’m a Frontend Web Developer based in Ontario with 4 years
            experience (there’s is still a lot for me to learn!). My love for
            both technology and design make the web my ideal playground. Outside
            of developing websites, I enjoy reading (currently reading ghost
            wars the secret history of the CIA) , the gym, and watching sports
            with friends.
          </div>
        </div>
        <div className="about__box">
          <div className="box">
            {" "}
            <div className="box__img">
              {" "}
              <FontAwesomeIcon icon={faDesktop} size="2x" />
            </div>{" "}
            <div className="name">Frontend</div>{" "}
            <div className="description">
              HTML5 - CSS3 SASS - JavaScript - React - Redux
            </div>{" "}
          </div>
          <div className="box">
            {" "}
            <div className="box__img">
              {" "}
              <FontAwesomeIcon icon={faServer} size="2x" />
            </div>{" "}
            <div className="name">Backend / Developing</div>{" "}
            <div className="description">Node - MongoDB - Express </div>{" "}
          </div>
          <div className="box">
            {" "}
            <div className="box__img">
              {" "}
              <FontAwesomeIcon icon={faEdit} size="2x" />
            </div>{" "}
            <div className="name">Prototyping / Version Controll</div>{" "}
            <div className="description">Figma Git - Git Hub</div>{" "}
          </div>
          <div className="box">
            {" "}
            <div className="box__img">
              {" "}
              <FontAwesomeIcon icon={faCode} size="2x" />
            </div>{" "}
            <div className="name">CMS / CSS Frameworks</div>{" "}
            <div className="description">
              WordPress - Material UI - Bootstrap - Gatsby
            </div>{" "}
          </div>
        </div>
        {/* ------------------ */}
      </div>
    </div>
  )
}

export default About
