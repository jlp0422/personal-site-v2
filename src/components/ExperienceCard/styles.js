import styled from '@emotion/styled'
import { ExpInfo, ExpTitle } from '../shared'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.black.darkest};
  display: grid;
  text-align: center;
  margin: 2.5rem auto;
  border: 1px solid black;
  background-color: transparent;
  width: 100%;
  height: 230px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  :first-of-type {
    margin-top: 1rem;
  }
  :hover > div {
    transform: rotateY(180deg);
  }
`

export const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`

export const shared = styled.div`
  margin-top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`

export const CardFront = styled(shared)`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.palette.black.darkest};
`

export const CardBack = styled(shared)`
  padding: 1.5rem;
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
`

export const Title = ExpTitle

export const Info = styled(ExpInfo)`
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
