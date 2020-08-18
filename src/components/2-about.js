import React from "react"

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-container">
        <div className="about-me">
          <div className="about-title">
            <h2>About</h2>
          </div>
          <p>
            {" "}
            I’m a Web Dev based in Ontario and I have been developing for 3.5, I
            pride myself on coding clean, semantic HTML, and having strong
            attention to detail. It is very important to ensure a website meets
            the design requirements, and the site functions across all major
            browsers. I am also a strong proponent of responsive design, as it
            ensures a website will adapt to all devices and browsers. Outside of
            developing websites, I enjoy reading (currently reading ghost wars
            the secret history of the CIA) , The gym, and watching sports with
            friends.
          </p>
        </div>
        {/* ------------------ */}
        <div className="about-box">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
          <div className="box">4</div>
        </div>
      </div>
    </div>
  )
}

export default About
