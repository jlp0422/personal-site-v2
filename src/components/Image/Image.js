import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { isSvg, isGif } from '../../helpers'
import React from 'react'

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
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }

  fragment SvgOrGif on File {
    publicURL
    name
    extension
  }

  fragment PhotoFragment on File {
    publicURL
    name
    extension
    childImageSharp {
      fluid(maxWidth: 800, grayscale: true) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

const Image = ({ queryKey, imgStyle, style }) => {
  const data = useStaticQuery(graphql`
    query ImageFilePath {
      octocat: file(relativePath: { eq: "git-logo.svg" }) {
        ...SvgOrGif
      }
      computer: file(relativePath: { eq: "computer-icon-2.png" }) {
        ...ImageFragment
      }
      dearcarolynfine: file(relativePath: { eq: "dear-carolyn-fine.png" }) {
        ...ImageFragment
      }
      hottub2019: file(relativePath: { eq: "hot-tub-2019.png" }) {
        ...ImageFragment
      }
      stackjack: file(relativePath: { eq: "stackjack.png" }) {
        ...ImageFragment
      }
      untappedtrivia: file(relativePath: { eq: "untapped-trivia.png" }) {
        ...ImageFragment
      }
      winspool2019: file(relativePath: { eq: "wins-pool-2019.png" }) {
        ...ImageFragment
      }
      logo: file(relativePath: { eq: "logo_black.svg" }) {
        ...SvgOrGif
      }
      spongebob: file(relativePath: { eq: "404page.gif" }) {
        ...SvgOrGif
      }
      jeremysitting: file(relativePath: { eq: "jeremy_sitting.jpg" }) {
        ...PhotoFragment
      }
    }
  `)

  const image = data[queryKey]

  if (isSvg(image.extension) || isGif(image.extension)) {
    return (
      <img
        src={image.publicURL}
        {...imgStyle}
        alt={image.name}
        title={image.name}
      />
    )
  }

  return (
    <Img
      fluid={image.childImageSharp.fluid}
      imgStyle={{ margin: 0, ...imgStyle }}
      style={style}
      alt={image.name}
      title={image.name}
    />
  )
}

export default Image
