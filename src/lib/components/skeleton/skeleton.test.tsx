import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Skeleton } from '.'

describe('Skeleton', () => {
  it('should render a skeleton', async () => {
    render(<Skeleton id="123" />)
    expect(screen.findByDisplayValue('123')).toBeDefined()
  })
})
