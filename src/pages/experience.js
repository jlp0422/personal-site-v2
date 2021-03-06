import React from 'react'
import EducationCard from '../components/EducationCard'
import ExperienceCard from '../components/ExperienceCard'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { ExpHeader, FadeSection, TwoColGrid } from '../components/shared'
import { education, experience } from '../data'

const Experience = () => (
  <Layout>
    <SEO title="Experience" />
    <ExpHeader>Work History</ExpHeader>
    <TwoColGrid>
      {experience.map(experience => (
        <FadeSection key={experience.title}>
          <ExperienceCard experience={experience} />
        </FadeSection>
      ))}
    </TwoColGrid>
    <ExpHeader>Education</ExpHeader>
    <TwoColGrid>
      {education.map(edu => (
        <FadeSection key={edu.school}>
          <EducationCard education={edu} />
        </FadeSection>
      ))}
    </TwoColGrid>
  </Layout>
)

export default Experience
