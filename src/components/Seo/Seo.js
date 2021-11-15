import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import { useLocation } from '@reach/router'
import useSiteMetadata from '../../hooks/useSiteMetadata'
import defaultImage from '../../../static/image/jeremy_sitting.jpg'

function SEO({ lang, meta, title: pageTitle }) {
  const { site } = useSiteMetadata()
  const { origin } = useLocation()
  const { title, titleTemplate, author } = site.siteMetadata

  const seo = {
    title: pageTitle || title,
    titleTemplate,
    desc: `${pageTitle || title} | Jeremy Philipson`,
    image: `${origin}${defaultImage}`,
    author
  }

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={seo.title}
      titleTemplate={seo.titleTemplate}
      meta={[
        {
          name: `description`,
          content: seo.desc
        },
        {
          property: `og:title`,
          content: seo.title
        },
        {
          property: `og:description`,
          content: seo.desc
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: seo.image
        },
        {
          property: `og:image:secure_url`,
          content: seo.image
        },
        {
          property: `og:image:type`,
          content: "image/jpg"
        },
        {
          property: `og:image:height`,
          content: "750"
        },
        {
          property: `og:image:width`,
          content: "500"
        },
        {
          property: `og:image:alt`,
          content: "Jeremy Philipson"
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:site`,
          content: seo.author
        },
        {
          name: `twitter:creator`,
          content: seo.author
        },
        {
          name: `twitter:title`,
          content: seo.title
        },
        {
          name: `twitter:description`,
          content: seo.desc
        },
        {
          name: `twitter:image`,
          content: seo.image
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
