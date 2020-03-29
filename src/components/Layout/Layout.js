import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Footer from '../Footer'
import GlobalStyle from '../GlobalStyle'
import Header from '../Header'
import { ThemeWrapper } from '../shared'
import { ContainerDiv } from './styles'

export const PureLayout = ({ data, children }) => {
  return (
    <ThemeWrapper>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <ContainerDiv>
        <main>{children}</main>
        <Footer />
      </ContainerDiv>
    </ThemeWrapper>
  )
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <PureLayout data={data}>{children}</PureLayout>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
