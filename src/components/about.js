import React from "react"
import "../styles/about.scss"

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about__container">
        <div className="text__container">
          <div className="text__container--title">A Few Words About Myself</div>
          <div className="text__container--paragraph">
            I’m a Frontend Web Developer based in Ontario with 4 years
            experience (there is still a lot for me to learn!). My love for both
            technology and design make the web my ideal playground. Outside of
            developing websites, I enjoy reading (Currently reading Stalingrad
            The Fateful Siege: 1942 - 1943) , the gym, and having BBQ's with
            friends.
          </div>
        </div>
        <div className="stack__container">
          <ul>
            <li className="stack__title">Front-End</li>
            <li className="stack__tech">
              HTML5 - CSS3 - SASS - Styled Components - JavaScript - React /
              Gatsby
            </li>
          </ul>
          <ul>
            <li className="stack__title">Back-End</li>
            <li className="stack__tech">Node - MongoDB - Express</li>
          </ul>
          <ul>
            <li className="stack__title">Prototyping</li>
            <li className="stack__tech">Figma</li>
          </ul>
          <ul>
            <li className="stack__title">CMS</li>
            <li className="stack__tech">WordPress - Drupal</li>
          </ul>
          <ul>
            <li className="stack__title">Frameworks</li>
            <li className="stack__tech">Material UI - Bootstrap</li>
          </ul>
          <ul>
            <li className="stack__title"> Version Controll</li>
            <li className="stack__tech">Git / GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
