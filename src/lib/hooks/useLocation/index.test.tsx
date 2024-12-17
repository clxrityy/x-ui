import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { useLocation } from '.'

describe('useLocation', () => {
  it('should fetch the user location', async () => {
    const Component = () => {
      const { location, error } = useLocation()

      return (
        <div>
          <span data-testid="location">{JSON.stringify(location)}</span>
          <span data-testid="error">{error}</span>
        </div>
      )
    }

    render(<Component />)
    expect(screen.getByTestId('location')).toBeDefined()
    expect(screen.getByTestId('error')).toBeDefined()
  })
})
