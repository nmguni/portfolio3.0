import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/portfolio.scss"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      shoeShop: file(relativePath: { eq: "shoe_shop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shoeShopshoe: file(relativePath: { eq: "shoe_shop_shoe.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      notesApp: file(relativePath: { eq: "notes-app.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      themecart: file(relativePath: { eq: "theme_store_cart.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      themestore: file(relativePath: { eq: "theme_store.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      inps: file(relativePath: { eq: "inps.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      sigma: file(relativePath: { eq: "sigma.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      orthodontics: file(relativePath: { eq: "orthodontics.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      soleScience: file(relativePath: { eq: "soleScience.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div id="portfolio" className="portfolio__container">
      <div className="portfolio__title">Projects</div>

      {/* Top container */}
      <div className="portfolio__content">
        <div className="portfolio__image__container ">
          <div className="image__container">
            <Img
              alt="inps"
              className="image"
              fluid={data.inps.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className="portfolio__details__container">
          <div className="details__title">Inps </div>
          <div className="details__description">
            <ul>
              <li>
                {" "}
                My main task was to transform PDF’s into working pages for the
                Canadian, US, and Mexican Sites
              </li>
              <li>
                {" "}
                Page rebuilds were completed for all the Rail, Graphic, Transit,
                OEM, and Fleet Solutions pages.
              </li>
              <li>Optimized images in compliance with SEO standards.</li>
              <li>
                Screaming Frog crawler to audit sites for common SEO issues by
                extracting data & auditing for common SEO issues. (Find broken
                Links audit redirects, discover duplicate content, analyze page
                titles & MetaData just to name a few)
              </li>
              <li>
                <div className="details__stack"> Built With Drupal</div>
              </li>
            </ul>
          </div>

          <div className="details__links">
            <a
              className="link"
              href="https://inps.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Site Link
            </a>
          </div>
        </div>
      </div>
      {/* Bottom  */}

      {/* Top container */}
      <div className="portfolio__content">
        <div className="portfolio__image__container ">
          <div className="image__container image__container__cyan__bg ">
            <Img
              alt="Sigma Assessment Systems"
              className="image"
              fluid={data.sigma.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className="portfolio__details__container">
          <div className="details__title">Sigma Assessment Systems </div>
          <div className="details__description">
            <ul>
              <li>
                {" "}
                My main task was to transform PDF’s into working pages in the
                succession planning section.
              </li>
              <li>
                {" "}
                Upload content to the{" "}
                <a
                  className="teal-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.sigmaassessmentsystems.com/blog-posts/"
                >
                  blog page
                </a>{" "}
                along with optimizing images.
              </li>

              <li>
                Screaming Frog crawler to audit sites for common SEO issues by
                extracting data & auditing for common SEO issues. (Find broken
                Links audit redirects, discover duplicate content, analyze page
                titles & MetaData just to name a few).
              </li>
              <li>
                <div className="details__stack"> Built With WordPress</div>
              </li>
            </ul>
          </div>
          <div className="details__links">
            <a
              className="link"
              href="https://www.sigmaassessmentsystems.com/solutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Site Link
            </a>
          </div>
        </div>
      </div>
      {/* Bottom  */}

      {/* Top container */}
      <div className="portfolio__content">
        <div className="portfolio__image__container ">
          <div className="image__container image__container__red__bg ">
            <Img
              alt="Foley Wilde
Orthodontics"
              className="image"
              fluid={data.orthodontics.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className="portfolio__details__container">
          <div className="details__title">Foley Wilde Orthodontics </div>
          <div className="details__description">
            <ul>
              <li>
                My main task was to rebuild pages and insert new / updated
                content
              </li>
              <li>
                {" "}
                Upload content to the{" "}
                <a
                  className="teal-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.foleywildeortho.com/blog/"
                >
                  blog page
                </a>{" "}
                along with optimizing images.
              </li>

              <li>
                Screaming Frog crawler to audit sites for common SEO issues by
                extracting data & auditing for common SEO issues. (Find broken
                Links audit redirects, discover duplicate content, analyze page
                titles & MetaData just to name a few)
              </li>
              <li>
                <div className="details__stack"> Built With WordPress</div>
              </li>
            </ul>
          </div>

          <div className="details__links">
            <a
              className="link"
              href="https://www.foleywildeortho.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Site Link
            </a>
          </div>
        </div>
      </div>
      {/* Bottom  */}
      {/* Top container */}
      <div className="portfolio__content">
        <div className="portfolio__image__container ">
          <div className="image__container image__container__teal__bg">
            <Img
              alt="soleScience"
              className="image"
              fluid={data.soleScience.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className="portfolio__details__container">
          <div className="details__title">Sole Science </div>
          <div className="details__description">
            <ul>
              <li>
                My main task was to rebuild pages and insert new / updated
                content
              </li>
              <li>
                Upload content to the{" "}
                <a
                  className="teal-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.solescience.ca/blog"
                >
                  blog page
                </a>
              </li>
              <li>Optimized images in compliance with SEO standards.</li>
              <li>
                Screaming Frog crawler to audit sites for common SEO issues by
                extracting data & auditing for common SEO issues. (Find broken
                Links audit redirects, discover duplicate content, analyze page
                titles & MetaData just to name a few){" "}
              </li>
              <li>
                <div className="details__stack"> Built With WordPress</div>
              </li>
            </ul>
          </div>

          <div className="details__links">
            <a
              className="link"
              href="https://www.solescience.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Site Link
            </a>
          </div>
        </div>
      </div>
      {/* Bottom  */}

      <div className="portfolio__title">personal Projects</div>
      {/*  DOUBLE IMG CONTAINER*/}
      <div className="portfolio__content">
        <div className="portfolio__image__container  image__container__orange__bg">
          <div className="image__container">
            <Img
              alt="Theme store"
              className="image"
              fluid={data.themestore.childImageSharp.fluid}
            />
          </div>
        </div>

        <div className="portfolio__image__container  image__container__orange__bg">
          <div className="image__container">
            <Img
              alt="theme cart page"
              className="image"
              fluid={data.themecart.childImageSharp.fluid}
            />
          </div>
        </div>

        <div className="double__image">
          <div className="details__title"> Theme Store </div>
          <div className="details__description">
            A web app that displays UI Themes from developers that can be
            purchased. Ratings and descriptions can be given for each theme.
          </div>
          React + Redux - Node - Express - MongoDB (MERN stack)
          <div className="details__links">
            <a
              className="link"
              href="https://github.com/nmguni/theme-store"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>{" "}
            |{" "}
            <a
              className="link"
              href="https://themestore.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview
            </a>
          </div>
        </div>
      </div>
      {/* Bottom  */}

      {/*  DOUBLE IMG CONTAINER*/}
      <div className="portfolio__content">
        <div className="portfolio__image__container image__container__cyan__bg  ">
          <div className="image__container">
            <Img
              alt="shoe shop"
              className="image"
              fluid={data.shoeShop.childImageSharp.fluid}
            />
          </div>
        </div>

        <div className="portfolio__image__container image__container__cyan__bg  ">
          <div className="image__container">
            <Img
              alt="shoe shop item"
              className="image"
              fluid={data.shoeShopshoe.childImageSharp.fluid}
            />
          </div>
        </div>

        <div className="double__image">
          <div className="details__title"> Theme Store </div>
          <div className="details__description">
            E-Commerce Website. Logged in user can add/remove items to the store
            and buy them using PayPal API. <br />{" "}
            <span style={{ fontWeight: "bold", fontSize: ".8rem" }}>
              Login Info <br /> Email: johnwick@gmail.com PW: john1234
            </span>
          </div>
          React + Redux - Node - Express - MongoDB (MERN stack)
          <div className="details__links">
            <a
              className="link"
              href="https://github.com/nmguni/shoe-store"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>{" "}
            |{" "}
            <a
              className="link"
              href="https://calm-eyrie-12447.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview
            </a>
          </div>
        </div>
      </div>
      {/* Bottom  */}
    </div>
  )
}

export default Portfolio
