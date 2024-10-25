import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Separator } from '.'

describe('Separator', () => {
  it('should render', async () => {
    render(<Separator />)
    expect(screen.getByRole('separator')).toBeDefined()
  })
})
