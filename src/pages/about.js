import { css } from '@emotion/core'
import React, { useState } from 'react'
import {
  TitleButton,
  ContactList,
  ContentWrapper,
  Copy,
  ImageWrapper
} from '../components/About/styles'
import Image from '../components/Image'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { FadeSection, OutboundLink } from '../components/shared'
import { contactInfo, emojiObject as emj } from '../data'

const renderEmoji = ({ label, icon }) => (
  <span
    css={css`
      font-size: 3rem;
      padding-left: 0.4rem;
    `}
    key={label}
    role="img"
    title={label}
    aria-label={label}
  >
    {icon}
  </span>
)

const chooseEmojiOrText = showEmoji => (emoji, text) =>
  showEmoji ? renderEmoji(emoji) : text

const About = () => {
  const [emojiOnly, toggleEmojiOnly] = useState(false)
  const switchEmoji = chooseEmojiOrText(emojiOnly)
  return (
    <Layout>
      <SEO title="About" />
      <TitleButton onClick={() => toggleEmojiOnly(!emojiOnly)}>
        <h1>About Me</h1>
      </TitleButton>
      <FadeSection>
        <ContentWrapper>
          <div>
            <Copy>
              I'm a 31-year-old Software Engineer working at FanDuel. Originally
              from Upstate New York, I enjoy&nbsp;
              {switchEmoji(emj.cooking, 'cooking')},&nbsp;
              {switchEmoji(emj.reading, 'reading')},
              {switchEmoji(emj.workOut, ' working out')}, and&nbsp;
              {switchEmoji(emj.scotch, 'a nice glass of scotch')}.
            </Copy>
            <Copy>
              Find me watching&nbsp;{switchEmoji(emj.orange, 'Syracuse')}
              &nbsp;games, improving my&nbsp;
              {switchEmoji(emj.programming, 'programming')}
              &nbsp;skills, or&nbsp;
              {switchEmoji(emj.snowboarding, 'hitting the slopes')}.
            </Copy>
            <Copy>Shoot me an email, slide into my DMs, or send a raven:</Copy>
            <ContactList>
              {contactInfo.map(({ type, props, display, element }) => {
                const Element = element === 'a' ? OutboundLink : element
                return (
                  <div key={type}>
                    {`${type}: `}
                    <Element {...props}>{display}</Element>
                  </div>
                )
              })}
            </ContactList>
          </div>
          <ImageWrapper>
            <Image
              queryKey="jeremysitting"
              style={{
                maxWidth: 400,
                borderRadius: '6px',
                boxShadow: `3px 2px 10px 0px #888888`
              }}
            />
          </ImageWrapper>
        </ContentWrapper>
      </FadeSection>
    </Layout>
  )
}

export default About
