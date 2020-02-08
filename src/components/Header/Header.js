import React from 'react'
import PropTypes from 'prop-types'
import { ActiveLink as NavLink } from '../../components/shared/Styled'
import { StyledHeader, Div, H1, HeaderLink } from './styles'

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
