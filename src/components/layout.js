import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import Footer from './Footer'
import GlobalStyle from './GlobalStyle'
import Header from './Header'

const ContainerDiv = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1.2rem 1.4rem;
`

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
    <ThemeProvider theme={{}}>
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
  children: PropTypes.node.isRequired,
}

export default Layout
