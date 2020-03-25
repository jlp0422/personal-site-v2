import React from 'react'
import { linkExists, upper } from '../../helpers'
import { GithubLink, LiveLink } from '../shared'
import { Container, Description, LinkContainer, Title } from './styles'

const wrapWithPTag = (string, index) => <p key={index}>{string}.</p>

const ProjectCard = ({ project }) => {
  const hasGithub = linkExists(project.github)
  const hasWebsite = linkExists(project.website)
  return (
    <Container>
      <Title>{upper(project.title)}</Title>
      <Description>{project.description}</Description>
      {project.details.map(wrapWithPTag)}
      <LinkContainer>
        {hasGithub && (
          <GithubLink
            url={project.github.link}
            linkText={project.github.text}
          />
        )}
        {hasWebsite && (
          <LiveLink
            url={project.website.link}
            linkText={project.website.text}
          />
        )}
      </LinkContainer>
    </Container>
  )
}

export default ProjectCard
