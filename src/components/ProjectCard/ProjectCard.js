import React from 'react'
import { linkExists, upper } from '../../helpers'
import { GithubLink, LiveLink } from '../shared'
import { Container, Description, LinkContainer, Title } from './styles'
import Image from '../Image'

const wrapWithPTag = (string, index) => <p key={index}>{string}.</p>

const ProjectCard = ({ project }) => {
  const imageKey = project.title
    .split(' ')
    .join('')
    .toLowerCase()

  const hasGithub = linkExists(project.github)
  const hasWebsite = linkExists(project.website)
  return (
    <Container>
      <Title>{upper(project.title)}</Title>
      <Description>{project.description}</Description>
      <div>
        <div>{project.details.map(wrapWithPTag)}</div>
        <Image
          queryKey={imageKey}
          style={{ maxHeight: '250px' }}
          imgStyle={{ objectPosition: '10% 10%' }}
        />
      </div>
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
