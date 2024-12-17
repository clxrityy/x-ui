import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MacbookAnimation } from '.'

describe('MacbookAnimation', () => {
  it('should render a macbook animation', () => {
    render(<MacbookAnimation title="Macbook Loading..." />)

    expect(screen.getByTitle('Macbook Loading...')).toBeDefined()
  })
})
