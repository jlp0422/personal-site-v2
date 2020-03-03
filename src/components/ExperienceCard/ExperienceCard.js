import React from 'react'
import { DataItem } from '../../components/shared'
import { joinString } from '../../helpers'
import Image from '../Image'
import { Container, Info, LogoContainer, Title } from './styles'

const ExperienceCard = ({ experience }) => {
  const { title, location, company, startDate, endDate } = experience
  const normalizedCompany = joinString(company)
  const dataProps = {
    size: 'medium',
    align: 'center',
    background: 'dark'
  }
  return (
    <Container>
      <Title>{title}</Title>
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
