import { Link } from 'gatsby'
import styled from '@emotion/styled'

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.palette.link.secondary};
  margin-bottom: 1.5rem;
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
`

export const H1 = styled.h1`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`

export const HeaderLink = styled(Link)`
  letter-spacing: 0.3rem;
  font-family: ${({ theme }) => theme.fonts.header};
  color: white;
  text-decoration: none;
  font-size: 4.5rem;
`
