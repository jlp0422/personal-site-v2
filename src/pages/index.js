import styled from '@emotion/styled'
import React from 'react'
// import { Link } from 'gatsby'
import Image from '../components/Image'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const Div = styled.div`
  max-width: 300px;
  margin-bottom: 1.5rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Div>
      <Image queryKey="astronaut" />
    </Div>
  </Layout>
)

export default IndexPage
