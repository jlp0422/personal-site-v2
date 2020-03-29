import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeWrapper } from '../shared'
import DataItem, { DataWrapper } from './DataItem'

describe('DataItem', () => {
  const getOutput = args => {
    const defaultProps = {
      value: 'Value of the prop',
      label: 'Label of the prop',
      size: 'medium',
      align: 'center',
      background: 'dark'
    }

    const props = { ...defaultProps, ...args }

    return renderer.create(
      <ThemeWrapper>
        <DataItem {...props} />
      </ThemeWrapper>
    )
  }

  it('Renders correctly', () => {
    const tree = getOutput().toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Correctly passes the props to the DataWrapper component', () => {
    const instance = getOutput().root
    const element = instance.findByType(DataWrapper)
    const getProp = key => element.props[key]
    expect(element.props.children).toHaveLength(2)
    expect(getProp('size')).toBe('medium')
    expect(getProp('align')).toBe('center')
    expect(getProp('background')).toBe('dark')
  })
})
