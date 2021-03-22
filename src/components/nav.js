import React from "react"
import { fade, makeStyles } from "@material-ui/core/styles"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import MoreIcon from "@material-ui/icons/MoreVert"
import logo from "../images/nav-logo2.png"


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: " #ff00",
    borderBottom: "2px solid #EDD6A20F",
    color: "black",
    boxShadow: "none",
    padding: "0 8% 0 8%",
  },

  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    color: "#000",
  },

  inputRoot: {
    color: "inherit",
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  },

  links: {
    color: "#3a3e41",
    textDecoration: "none",
    fontSize: " 1rem",
    letterSpacing: "2.96px",
    textTransform: "uppercase",
    fontWeight: "bold",
    // borderBottom: "2px solid",
  },
  titleLink: {
    textDecoration: "none",
    color: "black",
  },
  logo: {
    width: "35px",

    paddingTop: "10px",
  },
}))

const Nav = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = "primary-search-account-menu"
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  // Mobile
  const mobileMenuId = "primary-search-account-menu-mobile"
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <a className={classes.links} href="/#portfolio">
          Projects
        </a>
      </MenuItem>
      <MenuItem>
        <a className={classes.links} href="/#about">
          About
        </a>
      </MenuItem>
      <MenuItem>
        <a className={classes.links} href="/#contact">
          {" "}
          Contact
        </a>
      </MenuItem>
    </Menu>
  )

  return (
    <nav>
      <div className="container">
        <AppBar className={classes.root}>
          {" "}
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            ></IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              <a className={classes.titleLink} href="/">
                {" "}
                <img alt="logo" className={classes.logo} src={logo}></img>
              </a>
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <MenuItem>
                {" "}
                <a className={classes.links} href="/#portfolio">
                  Projects
                </a>{" "}
              </MenuItem>
              <MenuItem>
                <a className={classes.links} href="/#about">
                  About
                </a>
              </MenuItem>
              <MenuItem>
                <a className={classes.links} href="/#contact">
                  Contact
                </a>
              </MenuItem>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        {renderMobileMenu}
        {renderMenu}
      </div>
    </nav>
  )
}

export default Nav
