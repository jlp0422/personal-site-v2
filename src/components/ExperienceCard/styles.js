import styled from '@emotion/styled'
import {
  CardFlipBack,
  CardFlipContainer,
  CardFlipInner,
  CardShared,
  ExpInfo,
  ExpTitle
} from '../shared'

export const Container = CardFlipContainer

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

export const Title = styled(ExpTitle)`
  color: ${({ background, theme }) =>
    background === 'light'
      ? theme.palette.text.primary
      : theme.palette.white.lightest};
`

export const Info = styled(ExpInfo)`
  width: 100%;
  align-items: center;
  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
