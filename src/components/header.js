import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { ActiveLink as NavLink } from '../components/shared/Styled'
import styled from '@emotion/styled'

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.palette.button.secondary};
  margin-bottom: 1.5rem;
`

const Div = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 2rem 1.2rem;
  display: grid;
  grid-template-columns: 120px 120px 1fr 120px 120px;
  justify-items: center;
  align-items: center;
  grid-column-gap: 2rem;
`

const H1 = styled.h1`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`

const HeaderLink = styled(Link)`
  letter-spacing: 0.2rem;
  font-family: ${({ theme }) => theme.fonts.header};
  color: white;
  text-decoration: none;
  font-size: 4.5rem;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Div>
      <NavLink to="/about">About Me</NavLink>
      <NavLink to="/experience">Experience</NavLink>
      <H1>
        <HeaderLink to="/">{siteTitle}</HeaderLink>
      </H1>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/resume">Resume</NavLink>
    </Div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
