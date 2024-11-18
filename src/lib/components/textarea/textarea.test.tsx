import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Textarea } from '.'

describe('Textarea', () => {
  it('should render a textarea', () => {
    const placeholder = 'Type something here'
    render(<Textarea placeholder={placeholder} />)
    expect(screen.getByPlaceholderText(placeholder)).toBeDefined()
  })
})
