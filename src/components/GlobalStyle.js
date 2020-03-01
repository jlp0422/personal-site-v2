import React from 'react'
import { Global, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

export default () => {
  const theme = useTheme()
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        * + * {
          margin-top: 1rem;
        }

        html,
        body {
          background: ${theme.palette.background.primary};
          margin: 0;
          color: ${theme.palette.text.primary};
          font-family: ${theme.fonts.copy}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          font-size: 62.5%;
          line-height: 1.4;

          @media (min-width: calc(550px + 10vw)) {
            /* font-size: 18px; */
          }

          /* remove margin for the main div that Gatsby mounts into */
          > div {
            margin-top: 0;
          }
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #222;
          line-height: 1.1;
          + * {
            margin-top: 1rem;
          }
        }

        h1 {
          font-size: 4rem;
          font-family: ${theme.fonts.header};
          letter-spacing: 0.2rem;
        }

        h2 {
          font-size: 2.8rem;
        }

        h3 {
          font-size: 2.4rem;
        }

        h4 {
          font-size: 2rem;
        }

        h5 {
          font-size: 1.8rem;
        }

        p,
        a,
        footer {
          font-size: 1.6rem;
        }

        footer {
          bottom: 2rem;
          margin: 1rem auto 0;
          text-align: center;
        }

        li {
          margin-top: 0.8rem;
        }
      `}
    />
  )
}
