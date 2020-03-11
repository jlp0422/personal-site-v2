import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { FadeSection } from '../components/shared'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Resume" />
    <h1>Resume</h1>
    <FadeSection>
      <p>Coming soon...once I finish it.</p>
    </FadeSection>
  </Layout>
)

export default NotFoundPage
