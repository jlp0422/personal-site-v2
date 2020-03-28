import React from 'react'
import { DataItem } from '../../components/shared'
import { joinAndLower, upper } from '../../helpers'
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

const addPeriod = string => `<p>${string}.</p>`

const ExperienceCard = ({ experience }) => {
  const { title, location, company, startDate, endDate, details } = experience
  const normalizedCompany = joinAndLower(company)
  const dataProps = {
    size: 'medium',
    align: 'center',
    background: 'dark'
  }
  return (
    <Container>
      <InnerContainer>
        <CardFront>
          <Title>{upper(title)}</Title>
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
          {details.map(detail => (
            <p
              key={detail}
              dangerouslySetInnerHTML={{
                __html: addPeriod(detail)
              }}
            ></p>
          ))}
        </CardBack>
      </InnerContainer>
    </Container>
  )
}

export default ExperienceCard
