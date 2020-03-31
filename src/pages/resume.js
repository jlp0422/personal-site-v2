import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { FadeSection, OutboundLink } from '../components/shared'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, IFrame } from '../components/Resume/styles'

const Resume = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Resume" />
      <h1>Resume</h1>
      <FadeSection>
        {data.allFile.edges.map(file => (
          <Container key={file.node.name}>
            <div>
              <OutboundLink href={file.node.publicURL} download>
                Download
              </OutboundLink>
              <OutboundLink href={file.node.publicURL} target="_blank">
                Open in new tab
              </OutboundLink>
            </div>
            <div key={file.node.name}>
              <IFrame title={file.node.name} src={file.node.publicURL}></IFrame>
            </div>
          </Container>
        ))}
      </FadeSection>
    </Layout>
  )
}

export default Resume
