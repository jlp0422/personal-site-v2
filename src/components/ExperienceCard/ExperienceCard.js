import React from 'react'
import { DataItem } from '../../components/shared'
import { addPeriod, upper } from '../../helpers'
import { useRotation } from '../../hooks/useRotation'
import {
  CardBack,
  CardFront,
  Container,
  Info,
  InnerContainer,
  Title
} from './styles'

const ExperienceCard = ({ experience }) => {
  const [rotationStyles, rotate] = useRotation()
  const { title, location, company, startDate, endDate, details } = experience
  const dataProps = { size: 'medium', align: 'center', background: 'dark' }
  return (
    <Container onClick={rotate}>
      <InnerContainer css={rotationStyles}>
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
        </CardFront>
        <CardBack>
          <Title background="light">{upper(title)}</Title>
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
