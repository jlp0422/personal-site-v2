import { css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import React from 'react'
import { linkExists } from '../../helpers'
import { GithubLink, LiveLink } from '../shared'
import { Container, LinkContainer } from './styles'

const wrapWithPTag = (string, index) => <p key={index}>{string}.</p>

const ProjectCard = ({ project }) => {
  const hasGithub = linkExists(project.github)
  const hasWebsite = linkExists(project.website)
  const { fonts } = useTheme()
  return (
    <Container>
      <h3
        css={css`
          font-family: ${fonts.nav};
        `}
      >
        {project.title}
      </h3>
      <h5
        css={css`
          font-family: ${fonts.copy};
          font-weight: 600;
        `}
      >
        {project.description}
      </h5>
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
