import React from 'react'
import EducationCard from '../components/EducationCard'
import ExperienceCard from '../components/ExperienceCard'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { ExpHeader, FadeSection } from '../components/shared'
import { education, experience } from '../data'

const Grid = styled.div`
  margin-top: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 48.5%);
  grid-column-gap: 3%;
  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const Experience = () => (
  <Layout>
    <SEO title="Experience" />
    <ExpHeader>Work History</ExpHeader>
    <Grid>
    {experience.map(experience => (
      <FadeSection key={experience.title}>
        <ExperienceCard experience={experience} />
      </FadeSection>
    ))}
    </Grid>
    <ExpHeader>Education</ExpHeader>
    {education.map(edu => (
      <FadeSection key={edu.school}>
        <EducationCard education={edu} />
      </FadeSection>
    ))}
  </Layout>
)

export default Experience
