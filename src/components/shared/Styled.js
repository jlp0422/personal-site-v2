import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { shade, tint } from 'polished'
import { Link } from 'gatsby'
import { useTheme } from 'emotion-theming'

export const OutboundLink = styled.a`
  text-decoration: none;
  margin: 0 0 0 0.6rem;
  font-weight: bold;
  color: #1493ff; /* change to theme?? */
  :hover {
    color: ${shade(0.4, '#1493ff')}; /* use same theme color */
  }
`

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
  justify-items: start;
`

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.palette.button.primary};
  margin: 0;
  padding: 1rem;
  font-family: ${({ theme }) => theme.fonts.nav};
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  /* transition: all 0.2s linear;
  --webkit-transition: all 0.2s linear; */
  :hover {
    /* transform: scale(1.1) translate(-8px, -8px); */
    color: ${({ theme }) => shade(0.2, theme.palette.button.primary)};
    /* background-color: ${({ theme }) => theme.palette.button.tertiary}; */
  }
  /* :hover:after {
    display: block;
    height: 1px;
    width: 100%;
    top: 5px;
    content: '';
    border-bottom: 1px solid white;
  } */
`

export const ActiveLink = ({ children, ...props }) => {
  const theme = useTheme()
  return (
    <NavLink
      {...props}
      activeStyle={{ color: tint(0.3, theme.palette.button.primary) }}
    >
      {children}
    </NavLink>
  )
}
