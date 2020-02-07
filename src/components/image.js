import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

export const query = graphql`
  fragment ImageFragment on File {
    publicURL
    name
    extension
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

const Image = ({ queryKey, imgStyle }) => {
  const data = useStaticQuery(graphql`
    query {
      astronaut: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        ...ImageFragment
      }
      octocat: file(relativePath: { eq: "git-logo.svg" }) {
        ...ImageFragment
      }
      computer: file(relativePath: { eq: "computer-icon-2.png" }) {
        ...ImageFragment
      }
    }
  `)

  const image = data[queryKey]

  const sharedProps = {
    alt: image.name,
    title: image.name
  }

  if (!image.childImageSharp && image.extension === 'svg') {
    return (
      <img
        src={image.publicURL}
        {...imgStyle}
        {...sharedProps}
      />
    )
  }

  return (
    <Img
      fluid={image.childImageSharp.fluid}
      imgStyle={{ margin: 0 }}
      {...sharedProps}
    />
  )
}

export default Image
