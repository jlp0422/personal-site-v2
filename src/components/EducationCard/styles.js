import styled from '@emotion/styled'
import { ExpContainer, ExpInfo, ExpTitle } from '../shared'

export const Container = styled(ExpContainer)`
  > p {
    margin-top: 0.5rem;
  }
`

export const Title = ExpTitle

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.palette.white.lightest};
  font-size: 2rem;
`

export const Info = styled(ExpInfo)`
  justify-items: center;
  > div:first-of-type {
    grid-column-start: 1;
  }
  > div:last-of-type {
    grid-column-start: 3;
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: stretch;
    > div:last-of-type {
      grid-column-start: 2;
    }
  }
`
