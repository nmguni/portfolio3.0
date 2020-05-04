import React from "react"
import SEO from "../components/seo"
import Accordion from "./Accordion"

const Banner = () => {
  return (
    <div className="banner">
      <SEO title="Mguni" />
      <div className="container">
        <div className="row">
          <div className="greating">Hello!</div>
          <div className="main-text">I`m Ndumiso Mguni.</div>
          <div className="intro">
            Hello, I am a passionate lifelong learner. What does that mean to me
            personally? It means I am a curious person who enjoys figuring out
            how things work.
            <Accordion
              content="When faced with a challenge or a ‘bug’ in a line of code, I see it as a learning opportunity. Right now, I don't know everything there is about web development but that's OK, I accept the challenge

"
              title="Learn More"
            />
          </div>
        </div>

        <div className="scroll">
          <span>scroll down</span>
        </div>
      </div>
      <div className="fixed-text">Web developer</div>
    </div>
  )
}

export default Banner
