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
      <div className="about-wrapper">
        <div className="about-text">
          <span className="about-top-text"> who am i</span>
          <h3 className="about-mid-text">A few words about myself</h3>

          <p className="about-btm-text">
            {" "}
            I’m a Frontend Web Developer based in Ontario with 4 years
            experience (there’s is still a lot for me to learn!). My love for
            both technology and design make the web my ideal playground. Outside
            of developing websites, I enjoy reading (currently reading ghost
            wars the secret history of the CIA) , the gym, and watching sports
            with friends.
          </p>
        </div>
        <div className="about-box">
          <div className="box">
            {" "}
            <div className="box-img">
              {" "}
              <FontAwesomeIcon icon={faDesktop} size="2x" />
            </div>{" "}
            <div className="name">Frontend</div>{" "}
            <div className="description">HTML5 CSS3 SASS JavaScript React</div>{" "}
          </div>
          <div className="box">
            {" "}
            <div className="box-img">
              {" "}
              <FontAwesomeIcon icon={faServer} size="2x" />
            </div>{" "}
            <div className="name">Backend / learning</div>{" "}
            <div className="description">Node.js MongoDB GraphQL</div>{" "}
          </div>
          <div className="box">
            {" "}
            <div className="box-img">
              {" "}
              <FontAwesomeIcon icon={faEdit} size="2x" />
            </div>{" "}
            <div className="name">UI/UX</div>{" "}
            <div className="description">SEO Figma responsive design</div>{" "}
          </div>
          <div className="box">
            {" "}
            <div className="box-img">
              {" "}
              <FontAwesomeIcon icon={faCode} size="2x" />
            </div>{" "}
            <div className="name">Dev Tools</div>{" "}
            <div className="description">
              Git WordPress Material UI Bootstrap
            </div>{" "}
          </div>
        </div>
        {/* ------------------ */}
      </div>
    </div>
  )
}

export default About
