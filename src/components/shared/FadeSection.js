import React, { useState, useRef, useEffect } from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  display: inherit;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? 'none' : 'translateY(5vh)')};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  will-change: opacity, visibility;
  margin-top: 0;
`

const FadeSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver((entries, o) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      })
    })
    observer.observe(domRef.current)
    return () => {
      observer.unobserve(domRef.current)
    }
  }, [])

  return (
    <Container isVisible={isVisible} ref={domRef}>
      {children}
    </Container>
  )
}

export default FadeSection
