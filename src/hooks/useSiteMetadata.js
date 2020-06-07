import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () =>
  useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          titleTemplate
          description
          author
          siteUrl: url
          image
        }
      }
    }
  `)

export default useSiteMetadata
