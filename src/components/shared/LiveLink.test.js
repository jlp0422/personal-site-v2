import React from 'react'
import renderer from 'react-test-renderer'
import Image from '../Image'
import { ThemeWrapper } from '../shared'
import LiveLink from './LiveLink'
import { OutboundLink } from './Styled'

describe('LiveLink', () => {
  const getOutput = args => {
    const defaultProps = {
      url: '/path/to/my/file',
      linkText: 'it is aliveeee'
    }

    const props = { ...defaultProps, ...args }

    return renderer.create(
      <ThemeWrapper>
        <LiveLink {...props} />
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
      queryKey: 'computer',
      style: { width: '2.2rem' },
      imgStyle: { margin: 0 }
    })
  })

  it('Passes the URL to the href of the OutboundLink', () => {
    const instance = getOutput().root
    const link = instance.findByType(OutboundLink)
    expect(link.props.href).toBe('/path/to/my/file')
    expect(link.props.children).toBe('it is aliveeee')
  })
})
