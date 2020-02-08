/*
I'm 26 years old, currently enrolled in a programming bootcamp through Fullstack Academy. I enjoy cooking, watching sports, playing trumpet, and working out.

Shoot me an email, slide into my DMs, or send a raven:

email: jeremyphilipson@gmail.com
twitter: @jeremyphilipson
address: 455 W 37th Street, Apt 707, NY NY 10018
*/
import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import SEO from '../components/Seo'
import { projects } from '../data'

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About Me</h1>
      {/* add photo ??? */}
      <p>
        I enjoy cooking, watching sports, playing trumpet, and working out.{' '}
      </p>
    </Layout>
  )
}

export default About
