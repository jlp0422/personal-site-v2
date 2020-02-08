import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  margin: 1rem 0;
  padding: 1.5rem;
  border: 1px solid black;
  transition: all 0.2s linear;
  --webkit-transition: all 0.2s linear;
  :hover {
    box-shadow: ${({ theme }) => theme.palette.boxShadow.primary};
    transform: translate(-8px, -8px);
    --webkit-transform: translate(-8px, -8px);
  }
  @media only screen and (max-width: 480px) {
    box-shadow: ${({ theme }) => theme.palette.boxShadow.primary};
    :hover {
      transform: none;
    }
  }
`

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  * + * {
    margin-top: 0;
  }
`
