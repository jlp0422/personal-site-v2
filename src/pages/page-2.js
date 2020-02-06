import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import ProjectCard from '../components/ProjectCard'

const SecondPage = () => (
  <Layout>
    <SEO title="Page Dos" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <ProjectCard />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
