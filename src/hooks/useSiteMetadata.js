import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  return useStaticQuery(graphql`
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
}

export default useSiteMetadata
