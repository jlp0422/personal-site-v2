module.exports = {
  siteMetadata: {
    title: `Jeremy Philipson`,
    titleTemplate: `%s | Jeremy Philipson`,
    author: `@jeremyphilipson`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src/files`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jeremy Philipson | Website`,
        short_name: `Jeremy Philipson`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/logo_black.svg` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`
  ]
}
