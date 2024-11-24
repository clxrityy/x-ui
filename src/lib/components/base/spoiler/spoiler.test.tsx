import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Spoiler } from '.'

describe('Spoiler', () => {
  it('should render a spoiler', async () => {
    render(<Spoiler previewText="Click me!">I am a spoiler</Spoiler>)
    expect(screen.findByText('Click me!')).toBeDefined()
  })
})
