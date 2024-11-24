import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FlipCard } from '.'

describe('FlipCard', () => {
  it('should render a flip card', () => {
    render(<FlipCard front="Front" back="Back" />)

    expect(screen.getByText('Front')).toBeDefined()
    expect(screen.getByText('Back')).toBeDefined()
  })
})
