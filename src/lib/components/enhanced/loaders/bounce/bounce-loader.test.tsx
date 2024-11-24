import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BounceLoader } from '.'

describe('BounceLoader', () => {
  it('should render a bounce loader', () => {
    render(<BounceLoader title="Bounce Loading..." />)

    expect(screen.getByTitle('Bounce Loading...')).toBeDefined()
  })
})
