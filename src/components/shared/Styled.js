import styled from '@emotion/styled'
import { shade } from 'polished'

export const OutboundLink = styled.a`
  text-decoration: none;
  margin: 0 0 0 6px;
  font-weight: bold;
  color: #1493ff; /* change to theme?? */
  :hover {
    color: ${shade(0.4, '#1493ff')}; /* use same theme color */
  }
`

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
`
