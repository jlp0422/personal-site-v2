import styled from '@emotion/styled'

export const Copy = styled.p`
  font-size: 2rem;
  padding: 0.5rem 0;
`

export const ContactList = styled.div`
  > p {
    font-family: ${({ theme }) => theme.fonts.nav};
  }
`
