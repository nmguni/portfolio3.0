import React from "react"
import { fade, makeStyles } from "@material-ui/core/styles"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import MoreIcon from "@material-ui/icons/MoreVert"
import logo from "../images/favicon.png"
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "rgba(255, 255, 255, 0.65)",
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
  search: {
    position: "relative",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#7a7a7a8c",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
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
    color: "#313131ea",
    textDecoration: "none",
    fontSize: " 1.2rem",
    fontWeight: "bold",
    letterSpacing: "-0.66px",
    fontFamily: "libre caslon text",
  },
  titleLink: {
    textDecoration: "none",
    color: "black",
  },
  logo: {
    width: "30px",
    opacity: ".75",
  },
}))

const Header = () => {
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
          My Work
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
    <header>
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
                  My Work
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
    </header>
  )
}

export default Header
