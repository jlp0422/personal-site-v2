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
  box-shadow: ${({ theme }) => theme.palette.boxShadow.light}
`

export const CardFront = styled(CardShared)`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.palette.black.darkest};
`

export const CardBack = styled(CardFlipBack)`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.palette.white.lighter}
`

export const Title = ExpTitle

export const Info = styled(ExpInfo)`
  width: 100%;
  align-items: center;
  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const LogoContainer = styled.div`
  display: block;
  visibility: visible;
  width: 60px;
  margin: 1rem auto 0;
  @media only screen and (max-width: 640px) {
    display: none;
    visibility: hidden;
  }
`
