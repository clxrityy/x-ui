import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { useScreenSize } from '.'

describe('useScreenSize', () => {
  it('should return screen size', async () => {
    const Component = () => {
      const screenSize = useScreenSize()

      return (
        <div>
          <span data-testid="width">{screenSize?.width}</span>
          <span data-testid="height">{screenSize?.height}</span>
        </div>
      )
    }

    render(<Component />)
    expect(screen.getByTestId('width')).toBeDefined()
    expect(screen.getByTestId('height')).toBeDefined()
  })
})
