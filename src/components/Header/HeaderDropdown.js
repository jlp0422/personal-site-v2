import { css } from '@emotion/core'
import React from 'react'
import { ActiveLink } from '../../components/shared'
import { List } from './styles'
import ResumeLink from '../Resume/ResumeLink'
import { Fragment } from 'react'

const mobileNavLinks = [
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  {
    label: 'Resume',
    path: '/resume',
    Component: ResumeLink,
    element: 'span'
  }
]

const Dropdown = ({ toggleDropdown, isDropdownOpen }) => {
  const toggle = () => toggleDropdown(!isDropdownOpen)
  if (!isDropdownOpen) {
    return null
  }
  return (
    <List>
      {mobileNavLinks.map(({ label, path, Component, ...rest }) => {
        const LinkRenderer = Component || Fragment
        return (
          <li
            css={css`
              text-align: center;
              border-bottom: none;
            `}
            key={path}
          >
            <LinkRenderer>
              <ActiveLink
                onKeyDown={toggle}
                onClick={toggle}
                to={path}
                {...rest}
              >
                {label}
              </ActiveLink>
            </LinkRenderer>
          </li>
        )
      })}
    </List>
  )
}

export default Dropdown
