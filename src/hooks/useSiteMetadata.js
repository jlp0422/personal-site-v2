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
      image: file(relativePath: { eq: "jeremy_sitting.jpg" }) {
        publicURL
        name
        extension
        childImageSharp {
          id
          fluid(maxWidth: 800, grayscale: true) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

export default useSiteMetadata
