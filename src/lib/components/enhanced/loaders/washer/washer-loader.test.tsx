import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WasherLoader } from '.'

describe('WasherLoader', () => {
  it('should render a washer loader', () => {
    render(<WasherLoader title="Washer Loading..." />)

    expect(screen.getByTitle('Washer Loading...')).toBeDefined()
  })
})
