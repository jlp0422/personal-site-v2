import React from 'react'
import { DataItem } from '../../components/shared'
import { joinString } from '../../helpers'
import Image from '../Image'
import {
  Container,
  Info,
  LogoContainer,
  Title,
  InnerContainer,
  CardFront,
  CardBack
} from './styles'

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
      <InnerContainer>
        <CardFront>
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
          {/* <LogoContainer>
            <Image
              queryKey={`${normalizedCompany}Logo`}
              style={{ width: '60px' }}
            />
          </LogoContainer> */}
        </CardFront>
        <CardBack>
          <h3>this is the back of the card</h3>
        </CardBack>
      </InnerContainer>
    </Container>
  )
}

export default ExperienceCard
