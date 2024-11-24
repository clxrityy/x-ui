import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Separator } from '.'

describe('Separator', () => {
  it('should render a separator', async () => {
    render(
      <div>
        <Separator />
        <h1>separator</h1>
      </div>,
    )
    expect(screen.getByText('separator')).toBeDefined()
  })
})
