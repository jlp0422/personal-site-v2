import React from 'react'
import Image from '../Image'
import { GridWrapper, OutboundLink } from './Styled'

const Link = ({ url, linkText }) => {
  return (
    <GridWrapper>
      <Image
        queryKey="computer"
        style={{ width: '2.2rem' }}
        imgStyle={{ margin: 0 }}
      />
      <OutboundLink target="_blank" href={url}>
        {linkText}
      </OutboundLink>
    </GridWrapper>
  )
}

export default Link
