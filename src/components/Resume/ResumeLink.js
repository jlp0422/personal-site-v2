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

export const PureResumeLink = ({ data, children, isDesktop }) => {
  const Component = isDesktop ? ResumeLinkDesktop : OutboundLink

  return (
    <Component href={data.resume.edges[0].node.publicURL} target="_blank">
      {children}
    </Component>
  )
}

const ResumeLink = ({ children, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      resume: allFile(filter: { name: { eq: "Philipson-Jeremy-Resume" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)

  return (
    <PureResumeLink data={data} {...props}>
      {children}
    </PureResumeLink>
  )
}

export default ResumeLink
