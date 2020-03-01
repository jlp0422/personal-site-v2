import React from 'react'
import ExperienceCard from '../components/ExperienceCard'
// import Image from '../components/Image'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { experience, education } from '../data'

const Experience = () => (
  <Layout>
    <SEO title="Experience" />
    <h1>Work History</h1>
    {experience.map(experience => (
      <ExperienceCard key={experience.title} experience={experience} />
    ))}
    <h1>Education</h1>
  </Layout>
)

export default Experience
