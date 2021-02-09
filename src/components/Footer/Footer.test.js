import React from 'react'
import renderer from 'react-test-renderer'
import Footer from './Footer'

describe('Footer', () => {
  const getOutput = () => renderer.create(<Footer />)

  it('Renders correctly', () => {
    const tree = getOutput().toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Displays the copyright, current year, and full name', () => {
    const instance = getOutput().toJSON()
    expect(instance.type).toBe('footer')
    expect(instance.props).toEqual({})
    expect(instance.children.map(str => str.trim())).toEqual([
      '©',
      '2021',
      'Jeremy L. Philipson'
    ])
  })
})
