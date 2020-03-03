import styled from '@emotion/styled'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.black.darkest};
  display: grid;
  grid-template-rows: repeat(auto-fill);
  text-align: center;
  padding: 1.5rem;
  margin: 2.5rem auto;
  border: 1px solid black;
  transition: all 0.2s linear;
  --webkit-transition: all 0.2s linear;
  :first-of-type {
    margin-top: 1rem;
  }
  > p {
    margin-top: 0.5rem;
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

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.nav};
  color: ${({ theme }) => theme.palette.white.lightest};
`

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.palette.white.lightest};
  font-size: 2rem;
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  justify-items: center;
  margin: 1rem 0 0;
  @media only screen and (max-width: 640px) {
    justify-items: stretch;
    > div {
      margin: 0.6rem 0 0;
    }
  }
`
