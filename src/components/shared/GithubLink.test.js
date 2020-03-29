import React from 'react'
import renderer from 'react-test-renderer'
import Image from '../Image'
import { ThemeWrapper } from '../shared'
import GithubLink from './GithubLink'
import { OutboundLink } from './Styled'

describe('GithubLink', () => {
  const getOutput = args => {
    const defaultProps = {
      url: '/path/to/my/file',
      linkText: 'Show me the money'
    }

    const props = { ...defaultProps, ...args }

    return renderer.create(
      <ThemeWrapper>
        <GithubLink {...props} />
      </ThemeWrapper>
    )
  }

  it('Renders correctly', () => {
    const tree = getOutput().toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Shows the octocat Image', () => {
    const instance = getOutput().root
    expect(instance.findByType(Image).props).toEqual({
      queryKey: 'octocat',
      imgStyle: { height: 20, width: 20 }
    })
  })

  it('Passes the URL to the href of the OutboundLink', () => {
    const instance = getOutput().root
    const link = instance.findByType(OutboundLink)
    expect(link.props.href).toBe('/path/to/my/file')
    expect(link.props.children).toBe('Show me the money')
  })
})
