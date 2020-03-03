import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { Link } from 'gatsby'
import { padding, shade } from 'polished'
import React from 'react'

export const OutboundLink = styled.a`
  text-decoration: none;
  margin: 0 0 0 0.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.link.tertiary};
  --initialBgColor: #d44500;
  --slideBgColor: #fff;

  background-image: linear-gradient(
    90deg,
    var(--slideBgColor) 0%,
    var(--slideBgColor) 50%,
    var(--initialBgColor) 50%,
    var(--initialBgColor) 100%
  );
  background-size: 200%;
  transition: background-position 0.3s cubic-bezier(0.47, 0.1, 1, 0.63),
    color 0.2s linear;
  transition-delay: 0s, 0.15s;
  :hover {
    background-position: -100% 100%;
  }
`

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
  justify-items: start;
  ${padding('.5rem', '0')};
`

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.palette.link.primary};
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
    color: ${({ theme }) => shade(0.2, theme.palette.link.primary)};
    /* background-color: ${({ theme }) => theme.palette.link.tertiary}; */
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
  const { palette } = useTheme()
  return (
    <NavLink
      {...props}
      // activeStyle={{ color: tint(0.3, palette.link.primary) }}
      activeStyle={{
        textDecoration: 'line-through',
        textDecorationColor: palette.white.true
      }}
    >
      {children}
    </NavLink>
  )
}
