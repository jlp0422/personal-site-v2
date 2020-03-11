import { css } from '@emotion/core'
import React from 'react'
import { GridContainer, LinkBox } from '../components/HomePage/styles'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { FadeSection } from '../components/shared'
import { pages } from '../data'

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

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello friends</h1>
      <FadeSection>
        <GridContainer>
          {pages.map(({ path, title, icon, color }) => (
            <LinkBox color={color} key={path} to={path}>
              <h3>{title}</h3>
              {renderEmoji({ title, icon })}
            </LinkBox>
          ))}
        </GridContainer>
      </FadeSection>
    </Layout>
  )
}

export default IndexPage
