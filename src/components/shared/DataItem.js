import styled from '@emotion/styled'
import React from 'react'

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

const isDark = background => background === 'dark'

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => alignToFlex[align]};
  margin: 0;
  > p {
    margin: 0;
  }
  > p:first-of-type {
    font-size: ${({ size }) => SIZES[size].value};
    color: ${({ theme, background }) =>
      isDark(background)
        ? theme.palette.white.lightest
        : theme.palette.text.primary};
  }
  > p:last-of-type {
    text-transform: uppercase;
    font-weight: 300;
    font-size: ${({ size }) => SIZES[size].label};
    color: ${({ theme, background }) =>
      isDark(background)
        ? theme.palette.white.lighter
        : theme.palette.text.gray};
  }
`

const DataItem = ({ value, label, size, align, background }) => {
  return (
    <DataWrapper size={size} align={align} background={background}>
      <p>{value}</p>
      <p>{label}</p>
    </DataWrapper>
  )
}

export default DataItem
