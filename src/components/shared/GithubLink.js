import React from 'react'
import Image from '../Image'
import { GridWrapper, OutboundLink } from './Styled'

const Link = ({ url, linkText }) => {
  return (
    <GridWrapper>
      <Image queryKey="octocat" imgStyle={{ height: 20, width: 20 }} />
      <OutboundLink target="_blank" href={url}>
        {linkText}
      </OutboundLink>
    </GridWrapper>
  )
}

export default Link
