import styled from '@emotion/styled'

export const Copy = styled.p`
  font-size: 2rem;
  padding: 0.5rem 0;
`

export const ContactList = styled.div`
  > div {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.8rem;
  }
  span,
  a {
    font-size: 1.8rem;
  }
  a {
    cursor: pointer;
  }
`

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  grid-column-gap: 3%;
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 250px;
  }
  @media only screen and (max-width: 640px) {
    display: block;
  }
`

export const ImageWrapper = styled.div`
  @media only screen and (max-width: 640px) {
    width: 300px;
    margin: 2rem auto;
  }
`
