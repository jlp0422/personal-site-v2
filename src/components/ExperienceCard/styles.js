import styled from '@emotion/styled'
import { ExpContainer, ExpTitle, ExpInfo } from '../shared'

export const Container = ExpContainer

export const Title = ExpTitle

export const Info = styled(ExpInfo)`
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
