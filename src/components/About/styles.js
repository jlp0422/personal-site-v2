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
  span, a {
    font-size: 1.8rem;
  }
  a {
    cursor: pointer;
  }
`
