import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Input } from '.'

describe('Input', () => {
  it('should render an input', async () => {
    render(<Input placeholder="input" />)
    expect(screen.getByPlaceholderText('input')).toBeDefined()
  })
})
