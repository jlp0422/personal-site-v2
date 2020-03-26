import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { Link } from 'gatsby'
import React from 'react'

export const OutboundLink = styled.a`
  display: inline;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  margin: 0 0 0 0.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.link.secondary};
  :after {
    content: '';
    position: absolute;
    z-index: -1;
    right: 0;
    width: 0;
    bottom: -2px;
    background: ${({ theme }) => theme.palette.link.secondary};
    height: 2px;
    transition: width 0.3s ease-out;
  }
  :hover:after,
  :focus:after,
  :active:after {
    left: 0;
    right: auto;
    width: 100%;
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
  --initialBgColor: ${({ theme }) => theme.palette.white.true};
  --slideBgColor: ${({ theme }) => theme.palette.link.secondary};

  background-image: linear-gradient(
    90deg,
    var(--slideBgColor) 0%,
    var(--slideBgColor) 50%,
    var(--initialBgColor) 50%,
    var(--initialBgColor) 100%
  );
  background-size: 200%;
  transition: background-position 0.2s ease-out, color 0.2s ease-out;
  transition-delay: 0s, 0.15s;
  :hover {
    background-position: -100% 100%;
  }
  :active {
    transform: scale(0.97);
  }
  @media only screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`

export const ActiveLink = ({ children, ...props }) => {
  const { palette } = useTheme()
  return (
    <NavLink
      {...props}
      getProps={({ isPartiallyCurrent }) => ({
        style: {
          ...(isPartiallyCurrent
            ? {
                backgroundColor: palette.white.true,
                backgroundImage: 'none'
              }
            : {})
        }
      })}
    >
      {children}
    </NavLink>
  )
}

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
  grid-column-gap: 1%;
  margin: 1rem 0 0;
  @media only screen and (max-width: 640px) {
    > div {
      margin: 0.6rem 0 0;
    }
  }
`

export const CardFlipContainer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 210px;
  perspective: 1000px;
  :first-of-type {
    margin-top: 1rem;
  }
  :hover > div {
    transform: rotateY(180deg);
  }
`

export const CardFlipInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s cubic-bezier(0.17, 0.88, 0.44, 1.13);
  transform-style: preserve-3d;
`

export const CardShared = styled.div`
  margin-top: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`

export const CardFlipBack = styled(CardShared)`
  transform: rotateY(180deg);
`
