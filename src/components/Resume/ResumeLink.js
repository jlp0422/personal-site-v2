import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { OutboundLink } from '../shared'

export const ResumeLinkDesktop = styled(OutboundLink)`
  padding: 1rem;
  @media only screen and (max-width: 640px) {
    display: none;
    visibility: hidden;
  }
`

const ResumeLink = ({ children, isDesktop }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "Philipson-Jeremy-Resume" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  const Component = isDesktop ? ResumeLinkDesktop : OutboundLink

  return (
    <Component href={data.allFile.edges[0].node.publicURL} target="_blank">
      {children}
    </Component>
  )
}

export default ResumeLink
