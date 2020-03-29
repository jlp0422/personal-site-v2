import React from 'react'
import renderer from 'react-test-renderer'
import ExperienceCard from './ExperienceCard'
import { ThemeWrapper, DataItem } from '../shared'
import { Title, Info, CardBack } from './styles'

describe('ExperienceCard', () => {
  const getOutput = () =>
    renderer.create(
      <ThemeWrapper>
        <ExperienceCard
          experience={{
            title: 'My first job',
            location: 'Los Angeles, CA',
            company: 'ABC',
            startDate: 'Jan 1900',
            endDate: 'Jan 2000',
            details: ['it was fun', 'it was great', 'it was awesome']
          }}
        />
      </ThemeWrapper>
    )

  it('Renders correctly', () => {
    const tree = getOutput().toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Displays the title in all uppercase', () => {
    const instance = getOutput().root
    expect(instance.findByType(Title).props.children).toBe('MY FIRST JOB')
  })

  it('Displays the Location value and label', () => {
    const instance = getOutput().root
    const location = instance.findAllByType(DataItem)[0]
    const getProp = key => location.props[key]
    expect(getProp('value')).toBe('Los Angeles, CA')
    expect(getProp('label')).toBe('Location')
    expect(getProp('align')).toBe('center')
    expect(getProp('size')).toBe('medium')
    expect(getProp('background')).toBe('dark')
  })

  it('Displays the Company value and label', () => {
    const instance = getOutput().root
    const company = instance.findAllByType(DataItem)[1]
    const getProp = key => company.props[key]
    expect(getProp('value')).toBe('ABC')
    expect(getProp('label')).toBe('Company')
    expect(getProp('align')).toBe('center')
    expect(getProp('size')).toBe('medium')
    expect(getProp('background')).toBe('dark')
  })

  it('Displays the Dates value and label', () => {
    const instance = getOutput().root
    const date = instance.findAllByType(DataItem)[2]
    const getProp = key => date.props[key]
    expect(getProp('value')).toBe('Jan 1900 - Jan 2000')
    expect(getProp('label')).toBe('Dates')
    expect(getProp('align')).toBe('center')
    expect(getProp('size')).toBe('medium')
    expect(getProp('background')).toBe('dark')
  })

  it('Displays the array of details', () => {
    const instance = getOutput().root
    const children = instance.findByType(CardBack).props.children
    const getChildAtIndex = index =>
      children[index].props.dangerouslySetInnerHTML.__html

    expect(children).toHaveLength(3)
    expect(getChildAtIndex(0)).toBe('<p>it was fun.</p>')
    expect(getChildAtIndex(1)).toBe('<p>it was great.</p>')
    expect(getChildAtIndex(2)).toBe('<p>it was awesome.</p>')
  })
})
