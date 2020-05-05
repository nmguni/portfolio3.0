import React from "react"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
//cons
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: "2rem",
    opacity: ".75",
    width: "425px",
    [theme.breakpoints.down(800)]: {
      width: "80%",
      margin: "0",
    },
  },

  links: {
    margin: "0",
    padding: " .8rem",
    textDecoration: "none",
    color: "#364f6b",
  },
  icon: {
    fontSize: "3rem",
    paddingTop: "1.3rem",
    "&:hover ": {
      color: "#3a3e41",
    },
  },
}))
const Contact = () => {
  const classes = useStyles()
  return (
    <div id="contact" className="contact">
      <div className="title">
        <h2>Get in touch</h2>
      </div>
      {/* ------------ */}
      <div className="contact-form">
        <form>
          <Paper className={classes.paper}>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="Enter-your-name" name="name" color="primary">
                Enter Your name
              </InputLabel>
              <Input type="text" name="name" id="name"></Input>
            </FormControl>
            <FormControl required fullWidth margin="normal">
              <InputLabel name="email" htmlFor="email">
                Enter Your Email
              </InputLabel>
              <Input type="email" name="email" id="email"></Input>
            </FormControl>
            <div data-netlify-recaptcha="true"></div>
            <FormControl required fullWidth margin="normal">
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
                name="message"
                variant="outlined"
              />
            </FormControl>
            <Button type="submit" variant="contained">
              Send
            </Button>
          </Paper>
        </form>
      </div>
      <div className="contact-links">
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
