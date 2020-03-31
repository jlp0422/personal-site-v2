import styled from '@emotion/styled'

export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const IFrame = styled.iframe`
  height: 70vh;
  width: 60vw;
  max-width: 1200px;
  @media only screen and (max-width: 800px) {
    width: 70vw;
  }
  @media only screen and (max-width: 640px) {
    height: 60vh;
    width: 80vw;
  }
`
