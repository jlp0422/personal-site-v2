import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const spin = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  grid-gap: 2rem 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
  > * {
    margin: 0;
  }
  @media only screen and (max-width: 800px) {
    grid-template: repeat(4, 1fr) / 1fr;
  }
`

export const LinkBox = styled(Link)`
  background-color: ${({ color }) => color};
  padding: 8rem;
  font-family: ${({ theme }) => theme.fonts.nav};
  text-decoration: none;
  transition: all 0.2s linear;
  > h3 {
    margin: 1.5rem;
  }
  @media only screen and (min-width: 641px) {
    :hover {
      transform: scale(1.05);
      div {
        animation: ${spin} 2s linear infinite;
      }
    }
  }
  @media only screen and (max-width: 800px) {
    padding: 5rem;
  }
  @media only screen and (max-width: 640px) {
    padding: 1rem;
    > h3 {
      margin: 0.5rem;
    }
  }
`
