import styled from '@emotion/styled'

export const Container = styled.div`
  border: 2px solid green;
  display: grid;
  grid-template-rows: repeat(auto-fill, 30px);
  text-align: center;
  padding: 1rem 0.5rem;
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

export const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 1rem 0;
`

export const LogoContainer = styled.div`
  width: 100px;
  margin: 1rem auto 0;
`
