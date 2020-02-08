import React from 'react'
import styled from '@emotion/styled'
import GithubLink from './shared/GithubLink'
import LiveLink from './shared/LiveLink'
import { linkExists } from '../helpers'

const Container = styled.div`
  background-color: white;
  margin: 1rem 0;
  padding: 1.5rem 1rem;
  border: 1px solid black;
  transition: all 0.2s linear;
  --webkit-transition: all 0.2s linear;
  :hover {
    box-shadow: ${({ theme }) => theme.palette.boxShadow.primary};
    transform: translate(-8px, -8px);
    --webkit-transform: translate(-8px, -8px);
  }
  @media only screen and (max-width: 480px) {
    box-shadow: ${({ theme }) => theme.palette.boxShadow.primary};
    :hover {
      transform: none;
    }
  }
`

const wrapWithPTag = (string, index) => <p key={index}>{string}.</p>

const ProjectCard = ({ project }) => {
  const hasGithub = linkExists(project.github)
  const hasWebsite = linkExists(project.website)
  return (
    <Container>
      <h3>{project.title}</h3>
      <h5>{project.description}</h5>
      {project.details.map(wrapWithPTag)}
      {hasGithub && (
        <GithubLink url={project.github.link} linkText={project.github.text} />
      )}
      {hasWebsite && (
        <LiveLink url={project.website.link} linkText={project.website.text} />
      )}
    </Container>
  )
}

export default ProjectCard
