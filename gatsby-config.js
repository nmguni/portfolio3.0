module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Ndumiso Mgunis' Web Developer Portfolio`,
    author: `Ndumiso Mguni`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `Portfolio`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["100", "300", "400", "500", "700"],
            },
            {
              family: "Open Sans Condensed",
              variants: ["300", "700"],
            },
          ],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
