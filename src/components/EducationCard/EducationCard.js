import React from 'react'
import { DataItem } from '../../components/shared'
import {
  CardBack,
  CardFront,
  Container,
  Info,
  InnerContainer,
  Subtitle,
  Title
} from './styles'

const EducationCard = ({ education }) => {
  const { school, location, year, about } = education
  const dataProps = { size: 'medium', background: 'dark' }
  return (
    <Container>
      <InnerContainer>
        <CardFront>
          <Title>{school}</Title>
          <Subtitle>{about}</Subtitle>
          <Info>
            <DataItem
              value={location}
              label="Location"
              align="left"
              {...dataProps}
            />
            <DataItem value={year} label="Years" align="right" {...dataProps} />
          </Info>
        </CardFront>
        <CardBack>
          <h3>this is the back of the card</h3>
        </CardBack>
      </InnerContainer>
    </Container>
  )
}

export default EducationCard
