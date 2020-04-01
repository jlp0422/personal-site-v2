import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeWrapper } from '../shared'
import HeaderDropdown from './HeaderDropdown'
import { NavLink, List } from './styles'

describe('HeaderDropdown', () => {
  const getOutput = (isDropdownOpen = true) =>
    renderer.create(
      <ThemeWrapper>
        <HeaderDropdown isDropdownOpen={isDropdownOpen} />
      </ThemeWrapper>
    )

  it('Renders correctly when the isDropdownOpen prop is true', () => {
    const tree = getOutput().toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders nothing when the isDropdownOpen prop is false', () => {
    const instance = getOutput(false).root
    const list = instance.findAllByType(List)
    expect(list).toHaveLength(0)
  })

  it('Displays the NavLinks in the correct order', () => {
    const instance = getOutput().root
    const navLinks = instance.findAllByType('li')
    expect(navLinks).toHaveLength(4)

    const getDeepProps = link => link.props.children.props.children.props
    const getLinkAt = index => getDeepProps(navLinks[index])

    navLinks.forEach(link => {
      expect(getDeepProps(link)).toHaveProperty('to')
      expect(getDeepProps(link)).toHaveProperty('children')
      expect(getDeepProps(link)).toHaveProperty('onKeyDown')
      expect(getDeepProps(link)).toHaveProperty('onClick')
    })
    expect(getLinkAt(0)).toEqual(
      expect.objectContaining({ to: '/about', children: 'About' })
    )
    expect(getLinkAt(1)).toEqual(
      expect.objectContaining({ to: '/experience', children: 'Experience' })
    )
    expect(getLinkAt(2)).toEqual(
      expect.objectContaining({ to: '/projects', children: 'Projects' })
    )
    expect(getLinkAt(3)).toEqual(
      expect.objectContaining({
        to: '/resume',
        children: 'Resume',
        element: 'span'
      })
    )
  })
})
