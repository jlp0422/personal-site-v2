import { ThemeProvider } from 'emotion-theming'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { theme } from '../../helpers'
import Footer from '../Footer'
import GlobalStyle from '../GlobalStyle'
import Header from '../Header'
import { ContainerDiv } from './styles'

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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <ContainerDiv>
        <main>{children}</main>
        <Footer />
      </ContainerDiv>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
