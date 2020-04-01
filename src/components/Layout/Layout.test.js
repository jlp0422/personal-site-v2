import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import renderer from 'react-test-renderer'
import Footer from '../Footer'
import Header from '../Header'
import { PureLayout as Layout } from './Layout'
import { ContainerDiv } from './styles'

describe('Layout', () => {
  const data = {
    site: {
      siteMetadata: {
        title: 'Gatsby Starter Blog'
      }
    },
  }
  const getOutput = () => renderer.create(<Layout data={data} />)

  it('Renders correctly', () => {
    const tree = getOutput().toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Wraps everything in the theme provider', () => {
    const instance = getOutput().root
    const component = instance.findByType(ThemeProvider)
    expect(component).toBeTruthy()
    expect(component.props).toHaveProperty('theme')
  })

  it('Passes the sietMetaData title to the Header component', () => {
    const instance = getOutput().root
    const component = instance.findByType(Header)
    expect(component).toBeTruthy()
    expect(component.props.siteTitle).toBe('Gatsby Starter Blog')
  })

  it('Wraps the main content and Footer in a ContainerDiv', () => {
    const instance = getOutput().root
    const component = instance.findByType(ContainerDiv)
    const children = component.props.children
    expect(component).toBeTruthy()
    expect(children.length).toBe(2)
    expect(children[0].type).toBe('main')
    expect(children[1].type).toEqual(Footer)
  })
})
