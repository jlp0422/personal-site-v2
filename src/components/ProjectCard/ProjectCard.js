import React from 'react'
import { joinAndLower, linkExists, upper } from '../../helpers'
import Image from '../Image'
import { GithubLink, LiveLink } from '../shared'
import { Container, LinkContainer, Title } from './styles'

const isStackjack = imageKey => imageKey === 'stackjack'

const ProjectCard = ({ project }) => {
  const imageKey = joinAndLower(project.title)
  const hasGithub = linkExists(project.github)
  const hasWebsite = linkExists(project.website)
  return (
    <Container>
      <Title>{upper(project.title)}</Title>
      <div>
        {project.details.map(detail => (
          <p key={detail}>{detail}</p>
        ))}
        <Image
          queryKey={imageKey}
          style={{ maxHeight: '250px' }}
          imgStyle={{
            ...(isStackjack(imageKey)
              ? { objectPosition: '10% 10%' }
              : { objectPosition: 'top' })
          }}
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
