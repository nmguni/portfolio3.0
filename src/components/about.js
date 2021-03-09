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
          <div className="about__text-top"> who am i...</div>
          <div className="about__text-mid">A few words about myself</div>

          <div className="about__text-btm">
            {" "}
            I’m a Frontend Web Developer based in Ontario with 4 years
            experience (there is still a lot for me to learn!). My love for both
            technology and design make the web my ideal playground. Outside of
            developing websites, I enjoy reading{" "}
            <span>
              (Currently reading Stalingrad The Fateful Siege: 1942 - 1943)
            </span>{" "}
            , the gym, and having BBQ's with friends.
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
