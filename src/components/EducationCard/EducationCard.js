import React from 'react'
import { DataItem } from '../../components/shared'
import { upper } from '../../helpers'
import { useRotation } from '../../hooks/useRotation'
import {
  CardBack,
  CardFront,
  Container,
  Info,
  InnerContainer,
  Title
} from './styles'

const EducationCard = ({ education }) => {
  const [rotationStyles, rotate] = useRotation()
  const { school, location, year, details } = education
  const dataProps = { size: 'medium', background: 'dark' }
  return (
    <Container onClick={rotate}>
      <InnerContainer css={rotationStyles}>
        <CardFront>
          <Title>{upper(school)}</Title>
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
            <p key={detail} dangerouslySetInnerHTML={{ __html: detail }} />
          ))}
        </CardBack>
      </InnerContainer>
    </Container>
  )
}

export default EducationCard
