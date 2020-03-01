import React from 'react'
import styled from '@emotion/styled'
// import { Link } from 'gatsby'
import Image from '../components/Image'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const workHistory = [
  {
    title: 'Junior Software Engineer',
    company: 'FanDuel',
    location: 'New York, NY',
    startDate: 'October 2018',
    endDate: 'Present'
  },
  {
    title: 'Email Marketing Associate',
    company: 'FanDuel',
    location: 'New York, NY',
    startDate: 'February 2017',
    endDate: 'October 2018'
  },
  {
    title: 'Email Marketing Coordinator',
    company: 'FanDuel',
    location: 'New York, NY',
    startDate: 'June 2016',
    endDate: 'February 2017'
  },
  {
    title: 'Customer Support Agent',
    company: 'FanDuel',
    location: 'New York, NY',
    startDate: 'June 2015',
    endDate: 'June 2016'
  },
  {
    title: 'Marketing Coordinator',
    company: 'Wake Forest University',
    location: 'Winston-Salem, NC',
    startDate: 'September 2014',
    endDate: 'May 2015'
  }
]

/*
work
- fanduel engineer
- fanduel email marketing
- fanduel customer support
- wake forest marketing

education
- fullstack academy of code
- syracuse university

*/

const Experience = () => (
  <Layout>
    <SEO title="Experience" />
    <h1>Work History</h1>
    <h1>Education</h1>
  </Layout>
)

export default Experience
