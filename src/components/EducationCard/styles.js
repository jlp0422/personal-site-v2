import styled from '@emotion/styled'
import {
  ExpInfo,
  ExpTitle,
  CardFlipContainer,
  CardFlipInner,
  CardFlipBack,
  CardShared
} from '../shared'

export const Container = styled(CardFlipContainer)`
  display: grid;
  text-align: center;
  margin: 2.5rem auto;
  @media only screen and (max-width: 640px) {
    height: 250px;
  }
`

export const InnerContainer = styled(CardFlipInner)`
  box-shadow: ${({ theme }) => theme.palette.boxShadow.primary};
`

export const CardFront = styled(CardShared)`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.palette.black.darkest};
`

export const CardBack = styled(CardFlipBack)`
  padding: 1.5rem;
  background-color: dodgerblue;
  color: white;
`

export const Title = ExpTitle

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.palette.white.lightest};
  font-size: 2rem;
`

export const Info = styled(ExpInfo)`
  width: 90%;
  grid-template-columns: repeat(2, 1fr);
`
