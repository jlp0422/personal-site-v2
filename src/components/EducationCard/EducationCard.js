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
import { upper } from '../../helpers'

const EducationCard = ({ education }) => {
  const { school, location, year, about, details } = education
  const dataProps = { size: 'medium', background: 'dark' }
  return (
    <Container>
      <InnerContainer>
        <CardFront>
          <Title>{upper(school)}</Title>
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
          {details.map(detail => (
            <p key={detail}>{detail}</p>
          ))}
        </CardBack>
      </InnerContainer>
    </Container>
  )
}

export default EducationCard
