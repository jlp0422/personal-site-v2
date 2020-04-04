import React from 'react'
import renderer from 'react-test-renderer'
import EducationCard from './EducationCard'
import { ThemeWrapper } from '../shared'
import { Title, Info, CardBack } from './styles'

describe('EducationCard', () => {
  const getOutput = () =>
    renderer.create(
      <ThemeWrapper>
        <EducationCard
          education={{
            school: 'Syracuse',
            location: 'Syracuse, NY',
            year: '2014',
            details: ['i went', 'to college here']
          }}
        />
      </ThemeWrapper>
    )

  it('Renders correctly', () => {
    const tree = getOutput().toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Displays the school in all uppercase', () => {
    const instance = getOutput().root
    expect(instance.findByType(Title).props.children).toBe('SYRACUSE')
  })

  it('Displays the Location value and label', () => {
    const instance = getOutput().root
    const location = instance.findByType(Info).props.children[0]
    const getProp = key => location.props[key]
    expect(getProp('value')).toBe('Syracuse, NY')
    expect(getProp('label')).toBe('Location')
    expect(getProp('align')).toBe('left')
    expect(getProp('size')).toBe('medium')
    expect(getProp('background')).toBe('dark')
  })

  it('Displays the Years value and label', () => {
    const instance = getOutput().root
    const years = instance.findByType(Info).props.children[1]
    const getProp = key => years.props[key]
    expect(getProp('value')).toBe('2014')
    expect(getProp('label')).toBe('Years')
    expect(getProp('align')).toBe('right')
    expect(getProp('size')).toBe('medium')
    expect(getProp('background')).toBe('dark')
  })

  it('Displays the array of details', () => {
    const instance = getOutput().root
    const children = instance.findByType(CardBack).props.children
    const getChildAtIndex = index =>
      children[index].props.dangerouslySetInnerHTML.__html

    expect(children).toHaveLength(2)
    expect(getChildAtIndex(0)).toBe('i went')
    expect(getChildAtIndex(1)).toBe('to college here')
  })
})
