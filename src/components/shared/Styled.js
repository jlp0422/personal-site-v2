import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { Link } from 'gatsby'
import { shade } from 'polished'
import React from 'react'

export const OutboundLink = styled.a`
  text-decoration: none;
  margin: 0 0 0 0.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.link.secondary};
  --initialBgColor: ${({ theme }) => theme.palette.link.secondary};/* 000; */
  --slideBgColor: #fff;

  background-image: linear-gradient(
    90deg,
    var(--slideBgColor) 0%,
    var(--slideBgColor) 50%,
    var(--initialBgColor) 50%,
    var(--initialBgColor) 100%
  );
  background-size: 200%;
  transition: background-position 0.2s ease-out,
    color 0.2s ease-out;
  transition-delay: 0s, 0.15s;
  :hover {
    color: #fff;
    background-position: -100% 100%;
  }
`

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
  align-items: center;
  justify-items: start;
  padding: 0.5rem 0;
  > a {
    padding: 0.4rem;
  }
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
  :hover {
    transform: scale(1.05);
    color: ${({ theme }) => shade(0.2, theme.palette.link.primary)};
  }
  :active {
    transform: scale(0.95);
  }
`

export const ActiveLink = ({ children, ...props }) => {
  const { palette } = useTheme()
  return (
    <NavLink
      {...props}
      activeStyle={{
        textDecoration: 'line-through',
        textDecorationColor: palette.white.true
      }}
    >
      {children}
    </NavLink>
  )
}

export const ExpContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.black.darkest};
  display: grid;
  text-align: center;
  padding: 1.5rem;
  margin: 2.5rem auto;
  border: 1px solid black;
  transition: all 0.2s linear;
  --webkit-transition: all 0.2s linear;
  :first-of-type {
    margin-top: 1rem;
  }
  :hover {
    box-shadow: ${({ theme }) => theme.palette.boxShadow.primary};
    transform: translate(-8px, -8px);
    --webkit-transform: translate(-8px, -8px);
  }
  @media only screen and (max-width: 640px) {
    box-shadow: ${({ theme }) => theme.palette.boxShadow.primary};
    :hover {
      transform: none;
    }
  }
`

export const ExpHeader = styled.h1`
  + div {
    margin-top: 1rem;
  }
`

export const ExpTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.nav};
  color: ${({ theme }) => theme.palette.white.lightest};
`

export const ExpInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 1rem 0 0;
  @media only screen and (max-width: 640px) {
    > div {
      margin: 0.6rem 0 0;
    }
  }
`
