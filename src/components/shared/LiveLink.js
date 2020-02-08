import React from 'react'
import Image from '../Image'
import { GridWrapper, OutboundLink } from './Styled'

const Link = ({ url, linkText }) => {
  return (
    <GridWrapper>
      <Image queryKey="computer" style={{ width: '2rem' }} imgStyle={{ margin: 0 }} />
      <OutboundLink href={url}>{linkText}</OutboundLink>
    </GridWrapper>
  )
}

export default Link
