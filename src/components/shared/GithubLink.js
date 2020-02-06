import React from 'react'
import Image from '../Image'

const Link = ({ url = '', linkText = 'my link' }) => {
  return (
    <div>
      <Image queryKey="octocat" />
      <a href={url}>{linkText}</a>
    </div>
  )
}

export default Link
