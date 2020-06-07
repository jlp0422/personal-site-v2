import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
// import { useLocation } from '@reach/router'
import useSiteMetadata from '../../hooks/useSiteMetadata'

function SEO({ lang, meta, title: pageTitle }) {
  const { site } = useSiteMetadata()
  const {
    title,
    titleTemplate,
    description,
    author,
    siteUrl,
    image
  } = site.siteMetadata

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={pageTitle || title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: description
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: description
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: `${siteUrl}${image}`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:site`,
          content: `@jeremyphilipson`
        },
        {
          name: `twitter:creator`,
          content: author
        },
        {
          name: `twitter:title`,
          content: pageTitle || title
        },
        {
          name: `twitter:description`,
          content: description
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}

export default SEO
