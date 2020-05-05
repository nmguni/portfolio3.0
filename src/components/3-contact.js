import React from "react"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
//cons
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: "2rem",
    opacity: ".75",
    width: "100%",
    [theme.breakpoints.down(800)]: {
      width: "80%",
      margin: "0",
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "4rem",
    [theme.breakpoints.down(1000)]: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridGap: "1rem",
    },
  },

  list: {
    listStyle: "none",
    lineHeight: "3rem",
    fontSize: "1.4rem",
    color: "#3a3e41;",
    fontWeight: "bold",
    margin: "0",
  },

  links: {
    margin: "0",
    padding: " .5rem",
    textDecoration: "none",
    color: "#364f6b",
  },
  icon: {
    fontSize: "3rem",
    paddingTop: "1rem",
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
      <div className={classes.grid}>
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
                id="message"
                variant="outlined"
              />
            </FormControl>
            <Button type="submit" variant="contained">
              Send
            </Button>
          </Paper>
        </form>
        <div>
          <ul className={classes.list}>
            <li>
              Phone:
              <a
                className={classes.links}
                href="tel: 519 660 0813"
                rel="noreferrer noopener"
                target="blank"
              >
                519-660-0813
              </a>
            </li>
            <li>
              Email:
              <a
                className={classes.links}
                href="mailto: ndumiso29@gmail.com "
                rel="noreferrer noopener"
                target="blank"
              >
                ndumiso29@gmail.com
              </a>
            </li>

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
          </ul>
        </div>
      </div>

      {/* ------------ */}
    </div>
  )
}

export default Contact
