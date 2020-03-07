import React from 'react'
import { DataItem } from '../../components/shared'
import { Container, Info, Subtitle, Title } from './styles'

const EducationCard = ({ education }) => {
  const { school, location, year, about } = education
  const dataProps = { size: 'medium', background: 'dark' }
  return (
    <Container>
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
    </Container>
  )
}

export default EducationCard
