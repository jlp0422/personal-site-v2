import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeWrapper, OutboundLink } from '../shared'
import { PureResumeLink as ResumeLink, ResumeLinkDesktop } from './ResumeLink'

describe('ResumeLink', () => {
  const getOutput = (isDesktop = true) =>
    renderer.create(
      <ThemeWrapper>
        <ResumeLink
          data={{
            resume: {
              edges: [
                {
                  node: {
                    publicURL: '/my/public/resume'
                  }
                }
              ]
            }
          }}
          isDesktop={isDesktop}
        />
      </ThemeWrapper>
    )

  it('Renders correctly', () => {
    const tree = getOutput().toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Uses the ResumeLinkDesktop on desktop', () => {
    const instance = getOutput().root
    expect(instance.findAllByType(OutboundLink)).toHaveLength(0)

    const link = instance.findByType(ResumeLinkDesktop)
    expect(link).toBeTruthy()
    expect(link.props).toEqual(
      expect.objectContaining({
        href: '/my/public/resume',
        target: '_blank'
      })
    )
  })

  it('Uses the OutboundLink on mobile', () => {
    const instance = getOutput(false).root
    expect(instance.findAllByType(ResumeLinkDesktop)).toHaveLength(0)

    const link = instance.findByType(OutboundLink)
    expect(link).toBeTruthy()
    expect(link.props).toEqual(
      expect.objectContaining({
        href: '/my/public/resume',
        target: '_blank'
      })
    )
  })
})
