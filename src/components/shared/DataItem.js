import React from 'react'
import styled from '@emotion/styled'

const SIZES = {
  small: {
    value: '1.6rem',
    label: '1rem'
  },
  medium: {
    value: '2.0rem',
    label: '1.4rem'
  },
  large: {
    value: '2.6rem',
    label: '1.8rem'
  }
}

const alignToFlex = {
  center: 'center',
  left: 'flex-start',
  right: 'flex-end'
}

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => alignToFlex[align]};
  margin: 0;
  > p {
    margin: 0;
  }
  > p:first-of-type {
    font-size: ${({ size }) => SIZES[size].value};
    color: ${({ theme }) => theme.palette.text.primary};
  }
  > p:last-of-type {
    font-size: ${({ size }) => SIZES[size].label};
    color: ${({ theme }) => theme.palette.gray};
    text-transform: uppercase;
    font-weight: 300;
  }
`

const DataItem = ({ value, label, size, align }) => {
  return (
    <DataWrapper size={size} align={align}>
      <p>{value}</p>
      <p>{label}</p>
    </DataWrapper>
  )
}

export default DataItem
