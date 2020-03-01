import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import SEO from '../components/Seo'
import { projects } from '../data'

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 32%);
  grid-column-gap: 2%;
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, 48.5%);
    grid-column-gap: 3%;
  }
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
          <ProjectCard key={project.title} project={project} />
        ))}
      </ProjectGrid>
    </Layout>
  )
}

export default Projects
