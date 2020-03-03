import React from 'react'
import EducationCard from '../components/EducationCard'
import ExperienceCard from '../components/ExperienceCard'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { education, experience } from '../data'

const Experience = () => (
  <Layout>
    <SEO title="Experience" />
    <h1>Work History</h1>
    {experience.map(experience => (
      <ExperienceCard key={experience.title} experience={experience} />
    ))}
    <h1>Education</h1>
    {education.map(edu => (
      <EducationCard key={edu.school} education={edu} />
    ))}
  </Layout>
)

export default Experience
