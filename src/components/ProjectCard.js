import React from 'react'
import styled from '@emotion/styled'
import GithubLink from './shared/GithubLink'
import LiveLink from './shared/LiveLink'

const Container = styled.div`
  background-color: white;
  height: 300px;
  width: 300px;
  margin: 0;
  padding: 10px;
  border: 1px solid black;
  transition: all 0.2s linear;
  --webkit-transition: all 0.2s linear;
  :hover {
    box-shadow: 8px 8px #888888;
    transform: translate(-8px, -8px);
    --webkit-transform: translate(-8px, -8px);
  }
`

const ProjectCard = ({ project }) => {
  return (
    <Container>
      <h2>this is a project title</h2>
      <h5>project description is a bit longer than the title</h5>
      <p>More about the project</p>
      <p>Maybe what stack was used, or how many people worked on it</p>
      <p>Possible even more than that!</p>
      {/* link to github repo */}
      <GithubLink url="https://github.com/jlp0422" linkText="my github profile" />
      {/* if live, link to live site */}
      <LiveLink url="https://hot-tub-2019.herokuapp.com/" linkText="Hot Tub 2019" />
    </Container>
  )
}

export default ProjectCard
