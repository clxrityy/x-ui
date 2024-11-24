import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '.'

describe('Button', () => {
  it('should render a button', () => {
    const children = 'Click me!'
    render(<Button>{children}</Button>)
    expect(screen.getByText(children)).toBeDefined()
  })
})
