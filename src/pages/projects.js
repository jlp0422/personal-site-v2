import React from 'react'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import SEO from '../components/Seo'
import { FadeSection, TwoColGrid } from '../components/shared'
import { projects } from '../data'

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <h1>Things I've worked on</h1>
      <TwoColGrid>
        {projects.map(project => (
          <FadeSection key={project.title}>
            <ProjectCard project={project} />
          </FadeSection>
        ))}
      </TwoColGrid>
    </Layout>
  )
}

export default Projects
