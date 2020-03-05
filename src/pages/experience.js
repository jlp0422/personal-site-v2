import React from 'react'
import EducationCard from '../components/EducationCard'
import ExperienceCard from '../components/ExperienceCard'
import { ExpHeader } from '../components/shared/Styled'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { education, experience } from '../data'

const Experience = () => (
  <Layout>
    <SEO title="Experience" />
    <ExpHeader>Work History</ExpHeader>
    {experience.map(experience => (
      <ExperienceCard key={experience.title} experience={experience} />
    ))}
    <ExpHeader>Education</ExpHeader>
    {education.map(edu => (
      <EducationCard key={edu.school} education={edu} />
    ))}
  </Layout>
)

export default Experience
