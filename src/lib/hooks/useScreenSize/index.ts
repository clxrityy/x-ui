import { useState, useEffect } from 'react'

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<{
    width: number
    height: number
  } | null>(null)

  useEffect(() => {
    if (typeof window === undefined) return

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return screenSize
}
