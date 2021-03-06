import React from "react"
import { makeStyles } from "@material-ui/core/styles"
//cons
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"

import "../styles/contact.scss"
const useStyles = makeStyles(theme => ({
  links: {
    margin: "0",
    padding: " .8rem",
    textDecoration: "none",
    color: "#fff",
    [theme.breakpoints.down(450)]: {
      padding: " .2rem",
    },
  },
  icon: {
    fontSize: "2.5rem",
    paddingTop: "1.3rem",
    "&:hover ": {
      color: "rgba(255, 255, 255, 0.579)",
    },
  },
}))
const Contact = () => {
  const classes = useStyles()
  return (
    <div id="contact" className="contact">
      <div className="contact__title">
        <h2>Get in touch</h2>
      </div>

      <div className="contact__links">
        <a
          className={classes.links}
          href="tel: 519 701 0530"
          rel="noreferrer noopener"
          target="blank"
        >
          <PhoneIcon className={classes.icon} />
        </a>
        <a
          className={classes.links}
          href="mailto: ndumiso29@gmail.com "
          rel="noreferrer noopener"
          target="blank"
        >
          <EmailIcon className={classes.icon} />
        </a>
        <a
          className={classes.links}
          href="https://twitter.com/Ndumiso_29"
          rel="noreferrer noopener"
          target="blank"
        >
          <TwitterIcon className={classes.icon} />
        </a>
        <a
          className={classes.links}
          href="https://www.linkedin.com/in/ndumiso-mguni-121b7b164/"
          rel="noreferrer noopener"
          target="blank"
        >
          <LinkedInIcon className={classes.icon} />
        </a>
        <a
          className={classes.links}
          href="https://github.com/nmguni"
          rel="noreferrer noopener"
          target="blank"
        >
          <GitHubIcon className={classes.icon} />
        </a>
      </div>

      {/* ------------ */}
    </div>
  )
}

export default Contact
