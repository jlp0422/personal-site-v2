import React from 'react'
import Image from '../Image'
import { GridWrapper, OutboundLink } from './Styled'

const Link = ({ url, linkText }) => {
  return (
    <GridWrapper>
      <Image queryKey="octocat" imgStyle={{ height: 20, width: 20 }} />
      <div>
        <OutboundLink target="_blank" href={url}>
          {linkText}
        </OutboundLink>
      </div>
    </GridWrapper>
  )
}

export default Link
