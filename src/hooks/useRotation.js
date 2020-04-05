import { useState } from 'react'

export const useRotation = (initialRotation = 0) => {
  const [rotation, setRotation] = useState(initialRotation)
  const switchRotation = () => setRotation(!rotation ? 180 : 0)
  const rotationStyles = {
    transform: `rotateY(${rotation}deg)`
  }

  return [rotationStyles, switchRotation]
}
