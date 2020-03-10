import { css } from '@emotion/core'
import React, { useState } from 'react'
import { FadeSection } from '../components/shared'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { Copy, ContactList } from '../components/About/styles'
import { contactInfo, emojiObject } from '../data'

const renderEmoji = ({ label, icon }) => (
  <span
    css={css`
      font-size: 3rem;
      padding-left: 0.4rem;
    `}
    key={label}
    role="img"
    aria-label={label}
  >
    {icon}
  </span>
)

const About = () => {
  const [emojiOnly, toggleEmojiOnly] = useState(false)
  return (
    <Layout>
      <SEO title="About" />
      <button
        css={css`
          padding: 0;
          border: none;
        `}
        onClick={() => toggleEmojiOnly(!emojiOnly)}
      >
        <h1>About Me</h1>
      </button>

      {/* add photo ??? */}
      <FadeSection>
        <Copy>
          What up! I'm a 27-year-old Software Engineer working at FanDuel. I
          enjoy
          {emojiOnly ? renderEmoji(emojiObject.cooking) : ' cooking'}, playing
          {emojiOnly ? renderEmoji(emojiObject.trumpet) : ' trumpet'},
          {emojiOnly ? renderEmoji(emojiObject.workOut) : ' working out'}, and
          {emojiOnly
            ? renderEmoji(emojiObject.scotch)
            : ' a nice glass of scotch'}
          .
        </Copy>
        <Copy>
          Find me watching
          {emojiOnly ? renderEmoji(emojiObject.orange) : ' Syracuse'} games,
          improving my
          {emojiOnly
            ? renderEmoji(emojiObject.programming)
            : ' programming'}{' '}
          skills, or
          {emojiOnly ? renderEmoji(emojiObject.snowboarding) : ' on the slopes'}
          .
        </Copy>
        {/* <h3>Vitals</h3>
      <p>Height: 5'9"</p>
      <p>Blood Type: 🍊</p> */}
        <Copy>Shoot me an email, slide into my DMs, or send a raven:</Copy>
        <ContactList>
          {contactInfo.map(({ type, value }) => (
            <p key={type}>{`${type}: ${value}`}</p>
          ))}
        </ContactList>
      </FadeSection>
    </Layout>
  )
}

export default About
