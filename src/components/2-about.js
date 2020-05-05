import React from "react"

const About = () => {
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
        <h3 className="skill">Stack</h3>
        <p className="stack">
          Technologies I use regularly are <strong>HTML</strong>,{" "}
          <strong>SCSS</strong>, <strong>JavaScript</strong>, and{" "}
          <strong>React</strong>.
        </p>
        <p className="stack">
          I am familiar with <strong>Express</strong>, <strong>SEO</strong>,{" "}
          <strong>Wordpress</strong>, <strong>Bootstrap</strong>,{" "}
          <strong>Material ui</strong>, <strong>Git</strong>
        </p>
        <p className="stack">
          I have an intest in learning <strong>MongoDB</strong>,{" "}
          <strong>Node</strong> and <strong>UX design</strong>,{" "}
        </p>
      </div>

      <div className="black-box"></div>
      <div className="black-box  overlay"></div>
    </div>
  )
}

export default About
