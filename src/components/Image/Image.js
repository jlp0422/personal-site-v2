import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { isGif, isSvg } from '../../helpers'

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
  fragment ScreenshotFragment on File {
    publicURL
    name
    extension
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 500) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }

  fragment ImageFragment on File {
    publicURL
    name
    extension
    childImageSharp {
      fluid(maxWidth: 200) {
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
    query {
      octocat: file(relativePath: { eq: "git-logo.svg" }) {
        ...SvgOrGif
      }
      computer: file(relativePath: { eq: "computer-icon-2.png" }) {
        ...ImageFragment
      }
      dearcarolynfine: file(relativePath: { eq: "dear-carolyn-fine.png" }) {
        ...ScreenshotFragment
      }
      hottub2019: file(relativePath: { eq: "hot-tub-2019.png" }) {
        ...ScreenshotFragment
      }
      stackjack: file(relativePath: { eq: "stackjack.png" }) {
        ...ScreenshotFragment
      }
      untappedtrivia: file(relativePath: { eq: "untapped-trivia.png" }) {
        ...ScreenshotFragment
      }
      winspool2019: file(relativePath: { eq: "wins-pool-2019.png" }) {
        ...ScreenshotFragment
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
      babyphilipson2020: file(relativePath: { eq: "baby_philipson_2020.png" }) {
        ...ScreenshotFragment
      }
      sportslogoalphabetquiz: file(relativePath: { eq: "sport_logo_alphabet_quiz.png" }) {
        ...ScreenshotFragment
      }
    }
  `)

  const image = data[queryKey]

  if (!image) {
    return null
  }

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
