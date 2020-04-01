import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Image from '../Image'
import ResumeLink from '../ResumeLink'
import HeaderDropdown from './HeaderDropdown'
import {
  Div,
  H1,
  LogoLink,
  MobileLogo,
  NavLink,
  StyledHeader,
  Title
} from './styles'

const logoImage = <Image queryKey="logo" imgStyle={{ height: 60, width: 60 }} />

const Header = ({ siteTitle }) => {
  const [isDropdownOpen, toggleDropdown] = useState(false)
  return (
    <StyledHeader>
      <Div>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <H1>
          <Title>{siteTitle}</Title>
          <LogoLink>{logoImage}</LogoLink>
          <MobileLogo onClick={() => toggleDropdown(!isDropdownOpen)}>
            {logoImage}
          </MobileLogo>
        </H1>
        <NavLink to="/projects">Projects</NavLink>
        <ResumeLink isDesktop>
          <NavLink element="span" to="/resume">
            Resume
          </NavLink>
        </ResumeLink>
      </Div>
      <HeaderDropdown
        toggleDropdown={toggleDropdown}
        isDropdownOpen={isDropdownOpen}
      />
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
