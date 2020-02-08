import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.5rem;
`

const Div = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.4rem 1.2rem;
`

const H1 = styled.h1`
  margin: 0;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 3.2rem;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Div>
      <H1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </H1>
    </Div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
