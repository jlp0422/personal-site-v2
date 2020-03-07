import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { ActiveLink } from '../../components/shared/Styled'
import Image from '../Image'
import { Div, H1, HeaderLink, List, LogoLink, MobileLogo, NavLink, StyledHeader } from './styles'

const aboutLink = <NavLink to="/about">About</NavLink>
const expLink = <NavLink to="/experience">Experience</NavLink>
const projectsLink = <NavLink to="/projects">Projects</NavLink>
const resumeLink = <NavLink to="/resume">Resume</NavLink>
const logoImage = <Image queryKey="logo" imgStyle={{ height: 60, width: 60 }} />

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Resume', path: '/resume' }
]

const Dropdown = ({ toggleDropdown, isDropdownOpen }) => {
  const toggle = () => toggleDropdown(!isDropdownOpen)
  return (
    <List>
      {navLinks.map(({ label, path }) => (
        <li
          css={css`
            text-align: center;
          `}
          key={path}
        >
          <ActiveLink onKeyDown={toggle} onClick={toggle} to={path}>
            {label}
          </ActiveLink>
        </li>
      ))}
    </List>
  )
}

const Header = ({ siteTitle }) => {
  const [isDropdownOpen, toggleDropdown] = useState(false)
  return (
    <StyledHeader>
      <Div>
        {aboutLink}
        {expLink}
        <H1>
          <HeaderLink to="/">{siteTitle}</HeaderLink>
          <LogoLink to="/">{logoImage}</LogoLink>
          <MobileLogo onClick={() => toggleDropdown(!isDropdownOpen)}>
            {logoImage}
          </MobileLogo>
        </H1>
        {projectsLink}
        {resumeLink}
      </Div>
      {isDropdownOpen && (
        <Dropdown
          toggleDropdown={toggleDropdown}
          isDropdownOpen={isDropdownOpen}
        />
      )}
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
