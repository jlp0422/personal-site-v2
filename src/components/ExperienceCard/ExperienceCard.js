import { css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import React from 'react'
import Image from '../Image'
import { DataItem } from '../../components/shared'
import { Container, Info, LogoContainer } from './styles'
import { joinString } from '../../helpers'

const ExperienceCard = ({ experience }) => {
  const { title, location, company, startDate, endDate } = experience
  const { fonts } = useTheme()
  const normalizedCompany = joinString(company)
  const dataProps = {
    size: 'medium',
    align: 'center',
    background: 'dark'
  }
  return (
    <Container>
      <h3
        css={css`
          font-family: ${fonts.nav};
          color: #f5f5f5;
        `}
      >
        {title}
      </h3>
      <Info>
        <DataItem value={location} label="Location" {...dataProps} />
        <DataItem value={company} label="Company" {...dataProps} />
        <DataItem
          value={`${startDate} - ${endDate}`}
          label="Dates"
          {...dataProps}
        />
      </Info>
      <LogoContainer>
        <Image
          queryKey={`${normalizedCompany}Logo`}
          style={{ width: '60px' }}
        />
      </LogoContainer>
    </Container>
  )
}

export default ExperienceCard
