import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { useFetch } from '.'

describe('useFetch', () => {
  it('should fetch data from an API endpoint', async () => {
    const Component = () => {
      const { data, error } = useFetch('https://api.ipify.org?format=json')

      return (
        <div>
          <span data-testid="data">{JSON.stringify(data)}</span>
          <span data-testid="error">{error}</span>
        </div>
      )
    }

    render(<Component />)
    expect(screen.getByTestId('data')).toBeDefined()
    expect(screen.getByTestId('error')).toBeDefined()
  })
})
