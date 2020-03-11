import styled from '@emotion/styled'
import React from 'react'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import SEO from '../components/Seo'
import { FadeSection } from '../components/shared'
import { projects } from '../data'

const ProjectGrid = styled.div`
  margin-top: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 48.5%);
  grid-column-gap: 3%;
  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <h1>Things I've worked on</h1>
      <ProjectGrid>
        {projects.map(project => (
          <FadeSection key={project.title}>
            <ProjectCard project={project} />
          </FadeSection>
        ))}
      </ProjectGrid>
    </Layout>
  )
}

export default Projects
