import React from 'react'
import renderer from 'react-test-renderer'
import ProjectCard from './ProjectCard'
import { ThemeWrapper, GithubLink, LiveLink } from '../shared'
import { Title } from './styles'

const DEFAULT_PROJECT = {
  title: 'Hot Tub 2019',
  github: { link: '/to/my/github', text: 'github' },
  website: { link: '/to/my/website', text: 'website' },
  details: ['i made this', 'all by myself']
}

describe('ProjectCard', () => {
  const getOutput = args => {
    const defaultProps = {
      project: DEFAULT_PROJECT
    }

    const props = { ...defaultProps, ...args }

    return renderer.create(
      <ThemeWrapper>
        <ProjectCard {...props} />
      </ThemeWrapper>
    )
  }

  it('Renders correctly', () => {
    const tree = getOutput().toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Displays the project title in all uppercase', () => {
    const instance = getOutput().root
    expect(instance.findByType(Title).props.children).toBe('HOT TUB 2019')
  })

  it('Displays the array of details', () => {
    const instance = getOutput().root
    const details = instance.findAllByType('p')
    const getChildAtIndex = index => details[index].props.children
    expect(details).toHaveLength(2)
    expect(getChildAtIndex(0)).toBe('i made this')
    expect(getChildAtIndex(1)).toBe('all by myself')
  })

  describe('GithubLink', () => {
    it('Displays the link if it exists', () => {
      const instance = getOutput().root
      const link = instance.findByType(GithubLink)
      expect(link).toBeTruthy()
      expect(link.props).toHaveProperty('url')
      expect(link.props).toHaveProperty('linkText')
    })

    it('Does not display if no link exists', () => {
      const instance = getOutput({
        project: { ...DEFAULT_PROJECT, github: {} }
      }).root
      const link = instance.findAllByType(GithubLink)
      expect(link).toHaveLength(0)
    })
  })

  describe('LiveLink', () => {
    it('Displays the link if it exists', () => {
      const instance = getOutput().root
      const link = instance.findByType(LiveLink)
      expect(link).toBeTruthy()
      expect(link.props).toHaveProperty('url')
      expect(link.props).toHaveProperty('linkText')
    })

    it('Does not display if no link exists', () => {
      const instance = getOutput({
        project: { ...DEFAULT_PROJECT, website: {} }
      }).root
      const link = instance.findAllByType(LiveLink)
      expect(link).toHaveLength(0)
    })
  })
})
