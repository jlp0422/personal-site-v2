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
  text-align: center;
  @media only screen and (max-width: 640px) {
    height: 250px;
  }
`

export const InnerContainer = styled(CardFlipInner)`
  box-shadow: ${({ theme }) => theme.palette.boxShadow.dark};
`

export const CardFront = styled(CardShared)`
  background-color: ${({ theme }) => theme.palette.black.darkest};
`

export const CardBack = styled(CardFlipBack)`
  background-color: ${({ theme }) => theme.palette.white.lighter};
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
