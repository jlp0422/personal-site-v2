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

export const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 1rem 0 0;
  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    > div {
      margin: 0.6rem auto 0;
    }
  }
`

export const LogoContainer = styled.div`
  display: block;
  visibility: visible;
  width: 60px;
  margin: 1rem auto 0;
  @media only screen and (max-width: 640px) {
    display: none;
    visibility: hidden;
  }
`
