import React from 'react'
import renderer from 'react-test-renderer'
import EducationCard from './EducationCard'
import { ThemeWrapper, DataItem } from '../shared'
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
    expect(location.props.value).toBe('Syracuse, NY')
    expect(location.props.label).toBe('Location')
    expect(location.props.align).toBe('left')
    expect(location.props.size).toBe('medium')
    expect(location.props.background).toBe('dark')
  })

  it('Displays the Years value and label', () => {
    const instance = getOutput().root
    const location = instance.findByType(Info).props.children[1]
    expect(location.props.value).toBe('2014')
    expect(location.props.label).toBe('Years')
    expect(location.props.align).toBe('right')
    expect(location.props.size).toBe('medium')
    expect(location.props.background).toBe('dark')
  })

  it('Displays the array of details', () => {
    const instance = getOutput().root
    expect(instance.findByType(CardBack).props.children.length).toBe(2)
    expect(instance.findByType(CardBack).props.children[0].props.children).toBe('i went')
    expect(instance.findByType(CardBack).props.children[1].props.children).toBe(
      'to college here'
    )
  })
})
