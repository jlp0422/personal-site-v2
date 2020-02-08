import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'
import styled from '@emotion/styled'

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 33%);
  grid-column-gap: 5%;
  @media only screen and (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, 47.5%);
  }
  @media only screen and (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`

const SecondPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Take a look at my projects</h1>
    <ProjectGrid>
      {projects.map(project => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </ProjectGrid>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
