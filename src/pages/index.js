import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'
import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const spin = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`

const renderEmoji = ({ title, icon }) => (
  <div
    css={css`
      font-size: 5rem;
      @media only screen and (max-width: 640px) {
        font-size: 3rem;
      }
    `}
    key={title}
    role="img"
    aria-label={title}
  >
    {icon}
  </div>
)

const pages = [
  {
    path: '/about',
    title: 'About',
    icon: '🤔',
    color: '#ff0000'
  },
  {
    path: '/projects',
    title: 'Projects',
    icon: '🛠',
    color: '#32cd32'
  },
  {
    path: '/experience',
    title: 'Experience',
    icon: '📈',
    color: '#8a2be2'
  },
  {
    path: '/resume',
    title: 'Resume',
    icon: '📝',
    color: '#ff8c00'
  }
]

const GridContainer = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  grid-gap: 2rem 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
  > * {
    margin: 0;
  }
  @media only screen and (max-width: 800px) {
    grid-template: repeat(4, 1fr) / 1fr
  }
`

const LinkBox = styled(Link)`
  background-color: ${({ color }) => color};
  padding: 8rem;
  font-family: ${({ theme }) => theme.fonts.nav};
  text-decoration: none;
  transition: all 0.2s linear;
  > h3 {
    margin: 1.5rem;
  }
  :hover {
    transform: scale(1.05);
    div {
      animation: ${spin} 2s linear infinite;
    }
  }
  @media only screen and (max-width: 800px) {
    padding: 5rem;
  }
  @media only screen and (max-width: 640px) {
    padding: 1rem;
    > h3 {
      margin: 0.5rem;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello friends</h1>
    <GridContainer>
      {pages.map(({ path, title, icon, color }) => (
        <LinkBox color={color} key={path} to={path}>
          <h3>{title}</h3>
          {renderEmoji({ title, icon })}
        </LinkBox>
      ))}
    </GridContainer>
  </Layout>
)

export default IndexPage
