import React, { useState } from 'react'
import { DataItem } from '../../components/shared'
import { upper } from '../../helpers'
import {
  Container,
  Info,
  Title,
  InnerContainer,
  CardFront,
  CardBack
} from './styles'

const addPeriod = string => `<p>${string}.</p>`

const ExperienceCard = ({ experience }) => {
  const [rotation, setRotation] = useState(0)
  const { title, location, company, startDate, endDate, details } = experience
  const dataProps = { size: 'medium', align: 'center', background: 'dark' }
  return (
    <Container onClick={() => setRotation(!rotation ? 180 : 0)}>
      <InnerContainer
        css={{
          transform: `rotateY(${rotation}deg)`
        }}
      >
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
