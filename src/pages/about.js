import React, { useState } from 'react'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { css } from '@emotion/core'

const contactInfo = [
  { type: 'email', value: 'jeremyphilipson@gmail.com' },
  { type: 'twitter', value: '@jeremyphilipson' },
  { type: 'address', value: '455 W 37th St, Apt 707, NY, NY 10018' }
]

const Copy = styled.p`
  font-size: 2rem;
  padding: 0.5rem 0
`

const ContactList = styled.div`
  > p {
    font-family: ${({ theme }) => theme.fonts.nav};
  }
`

const cooking = { label: 'Cooking', icon: '👨🏻‍🍳' }
const workOut = { label: 'Working out', icon: '💪🏻' }
const trumpet = { label: 'Trumpet', icon: '🎺' }
const scotch = { label: 'Scotch', icon: '🥃' }
const orange = { label: 'Orange', icon: '🍊' }
const programming = { label: 'Programming', icon: '👨🏻‍💻' }
const snowboarding = { label: 'Snowboarding', icon: '🏂' }

// const emojiArray = [
//   cooking,
//   trumpet,
//   workOut,
//   scotch,
//   orange,
//   programming,
//   snowboarding
// ]

const emojis = {
  cooking,
  trumpet,
  workOut,
  scotch,
  orange,
  programming,
  snowboarding
}

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
      <button css={css`padding: 0`} onClick={() => toggleEmojiOnly(!emojiOnly)}><h1>About Me</h1></button>

      {/* add photo ??? */}
      <Copy>
        I'm a 27-year-old Software Engineer working at FanDuel. I enjoy
        {emojiOnly ? renderEmoji(emojis.cooking) : ' cooking'}, playing
        {emojiOnly ? renderEmoji(emojis.trumpet) : ' trumpet'},
        {emojiOnly ? renderEmoji(emojis.workOut) : ' working out'}, and
        {emojiOnly ? renderEmoji(emojis.scotch) : ' a nice glass of scotch'}.
      </Copy>
      <Copy>
        Find me watching{emojiOnly ? renderEmoji(emojis.orange) : ' Syracuse'}{' '}
        games, improving my
        {emojiOnly ? renderEmoji(emojis.programming) : ' programming'} skills,
        or{emojiOnly ? renderEmoji(emojis.snowboarding) : ' on the slopes'}.
      </Copy>
      {/* {emojiArray.map(({ label, icon }) => (
        <span
          css={css`
            font-size: 5rem;
          `}
          key={label}
          role="img"
          aria-label={label}
        >
          {icon}
        </span>
      ))} */}
      {/* <h3>Vitals</h3>
      <p>Height: 5'9"</p>
      <p>Blood Type: 🍊</p> */}
      <Copy>Shoot me an email, slide into my DMs, or send a raven:</Copy>
      <ContactList>
        {contactInfo.map(({ type, value }) => (
          <p key={type}>{`${type}: ${value}`}</p>
        ))}
      </ContactList>
    </Layout>
  )
}

export default About
