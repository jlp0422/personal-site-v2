import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () =>
  useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

export default useSiteMetadata
