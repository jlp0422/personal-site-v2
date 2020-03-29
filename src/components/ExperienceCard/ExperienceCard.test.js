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
    const locationProps = instance.findAllByType(DataItem)[0].props
    expect(locationProps.value).toBe('Los Angeles, CA')
    expect(locationProps.label).toBe('Location')
    expect(locationProps.align).toBe('center')
    expect(locationProps.size).toBe('medium')
    expect(locationProps.background).toBe('dark')
  })

  it('Displays the Company value and label', () => {
    const instance = getOutput().root
    const companyProps = instance.findAllByType(DataItem)[1].props
    expect(companyProps.value).toBe('ABC')
    expect(companyProps.label).toBe('Company')
    expect(companyProps.align).toBe('center')
    expect(companyProps.size).toBe('medium')
    expect(companyProps.background).toBe('dark')
  })

  it('Displays the Dates value and label', () => {
    const instance = getOutput().root
    const dateProps = instance.findAllByType(DataItem)[2].props
    expect(dateProps.value).toBe('Jan 1900 - Jan 2000')
    expect(dateProps.label).toBe('Dates')
    expect(dateProps.align).toBe('center')
    expect(dateProps.size).toBe('medium')
    expect(dateProps.background).toBe('dark')
  })

  it('Displays the array of details', () => {
    const instance = getOutput().root
    const getChildAtIndex = index =>
      instance.findByType(CardBack).props.children[index].props
        .dangerouslySetInnerHTML.__html

    expect(instance.findByType(CardBack).props.children.length).toBe(3)
    expect(getChildAtIndex(0)).toBe('<p>it was fun.</p>')
    expect(getChildAtIndex(1)).toBe('<p>it was great.</p>')
    expect(getChildAtIndex(2)).toBe('<p>it was awesome.</p>')
  })
})
