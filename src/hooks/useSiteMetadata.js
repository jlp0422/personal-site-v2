import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () =>
  useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          titleTemplate
          author
        }
      }
    }
  `)

export default useSiteMetadata
