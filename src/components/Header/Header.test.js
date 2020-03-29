import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeWrapper } from '../shared'
import Header from './Header'
import { NavLink } from './styles'

describe('Header', () => {
  const getOutput = () =>
    renderer.create(
      <ThemeWrapper>
        <Header />
      </ThemeWrapper>
    )

  it('Renders correctly', () => {
    const tree = getOutput().toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Displays the NavLinks in the correct order', () => {
    const instance = getOutput().root
    const navLinks = instance.findAllByType(NavLink)
    const getLinkAt = index => navLinks[index].props
    expect(navLinks).toHaveLength(4)
    navLinks.forEach(link => {
      expect(link.props).toHaveProperty('to')
      expect(link.props).toHaveProperty('children')
    })
    expect(getLinkAt(0)).toEqual({ to: '/about', children: 'About' })
    expect(getLinkAt(1)).toEqual({ to: '/experience', children: 'Experience' })
    expect(getLinkAt(2)).toEqual({ to: '/projects', children: 'Projects' })
    expect(getLinkAt(3)).toEqual({ to: '/resume', children: 'Resume' })
  })
})
