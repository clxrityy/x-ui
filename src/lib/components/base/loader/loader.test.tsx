import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Loader } from '.'

describe('Loader', () => {
  it('should render a loader', async () => {
    render(<Loader id="123" />)
    expect(screen.findByDisplayValue('123')).toBeDefined()
  })
})
