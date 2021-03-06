import styled from '@emotion/styled'
import { ActiveLink } from '../../components/shared'

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.palette.link.secondary};
  margin-bottom: 1.5rem;
  @media only screen and (max-width: 640px) {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 1;
  }
`

export const Div = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 2rem 1.2rem;
  display: grid;
  grid-template-columns: 120px 120px 1fr 120px 120px;
  justify-items: center;
  align-items: center;
  grid-column-gap: 2rem;
  @media only screen and (max-width: 640px) {
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const H1 = styled.h1`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.white.true};
  letter-spacing: 0.3rem;
`

export const Title = styled.div`
  color: ${({ theme }) => theme.palette.white.true};
  letter-spacing: 0.3rem;
  font-family: ${({ theme }) => theme.fonts.header};
  text-decoration: none;
  font-size: 4.5rem;
  @media only screen and (max-width: 800px) {
    visibility: hidden;
    display: none;
  }
`

export const LogoLink = styled.div`
  margin: 0;
  visibility: hidden;
  display: none;
  @media only screen and (min-width: 641px) and (max-width: 800px) {
    visibility: visible;
    display: block;
  }
`

export const NavLink = styled(ActiveLink)`
  @media only screen and (max-width: 640px) {
    display: none;
    visibility: hidden;
  }
`

export const MobileLogo = styled.button`
  margin: 0;
  visibility: hidden;
  display: none;
  background-color: transparent;
  border: none;
  @media only screen and (max-width: 640px) {
    visibility: visible;
    display: block;
  }
`

export const List = styled.ul`
  padding: 0 0 1rem;
  list-style: none;
  margin-top: 0;
  visibility: hidden;
  display: none;
  @media only screen and (max-width: 640px) {
    visibility: visible;
    display: block;
  }
`
