import React from "react"

const About = () => {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-stack">
            <div className="stack-list">
              <p>Proficient</p>
              <p className="stack-item">JavaScript</p>
              <p className="stack-item">React</p>
              <p className="stack-item">HTML / SCSS</p>
              <p className="stack-item">Material ui </p>
              <p className="stack-item">SEO</p>
            </div>

            <div className="stack-list">
              <p>Developing</p>
              <p className="stack-item">Node</p>
              <p className="stack-item">Express</p>
              <p className="stack-item">MongoDB</p>
            </div>
          </div>

          <div className="text-section">
            <h2 className="title">About me.</h2>

            <p>
              {" "}
              Hi, my name is Ndumiso Mguni but you can call me miso for short.{" "}
            </p>
            <p>
              {" "}
              I’m a Web Dev based in Ontario and I have been developing for 3.5
              years.
            </p>
            <p>
              {" "}
              I pride myself on coding clean, semantic HTML, and having strong
              attention to detail. It is very important to ensure a website
              meets the design requirements, and the site functions across all
              major browsers. I am also a strong proponent of responsive design,
              as it ensures a website will adapt to all devices and browsers.
            </p>

            <p>
              {" "}
              Outside of developing websites, I enjoy reading (currently reading
              ghost wars the secret history of the CIA) , The gym, and watching
              sports with friends.
            </p>
          </div>
        </div>
      </div>

      <div className="black-box"></div>
      <div className="black-box  overlay"></div>
    </div>
  )
}

export default About
