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
  @media only screen and (max-width: 640px) {
    height: 250px;
  }
`

export const InnerContainer = styled(CardFlipInner)`
  box-shadow: ${({ theme }) => theme.palette.boxShadow.light};
`

export const CardFront = styled(CardShared)`
  background-color: ${({ theme }) => theme.palette.black.darkest};
`

export const CardBack = styled(CardFlipBack)`
  background-color: ${({ theme }) => theme.palette.white.lighter};
  align-items: flex-start;
  text-align: left;
`

export const Title = ExpTitle

export const Info = styled(ExpInfo)`
  width: 100%;
  align-items: center;
  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
