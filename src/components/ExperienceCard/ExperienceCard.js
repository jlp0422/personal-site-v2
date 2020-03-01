import { css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import React from 'react'
import Image from '../Image'
import { DataItem } from '../../components/shared'
import { Container, Info, LogoContainer } from './styles'

const ExperienceCard = ({ experience }) => {
  const { title, location, company, startDate, endDate } = experience
  const { fonts } = useTheme()
  const normalizedCompany = company
    .split(' ')
    .join('')
    .toLowerCase()
  return (
    <Container>
      <h3
        css={css`
          font-family: ${fonts.nav};
        `}
      >
        {title}
      </h3>
      <Info>
        <DataItem
          value={location}
          label="Location"
          size="medium"
          align="center"
        />
        <DataItem
          value={company}
          label="Company"
          size="medium"
          align="center"
        />
        <DataItem
          value={`${startDate} - ${endDate}`}
          label="Dates"
          size="medium"
          align="center"
        />
      </Info>
      <LogoContainer>
        <Image
          queryKey={`${normalizedCompany}Logo`}
          style={{ width: '100px' }}
        />
      </LogoContainer>
    </Container>
  )
}

export default ExperienceCard
