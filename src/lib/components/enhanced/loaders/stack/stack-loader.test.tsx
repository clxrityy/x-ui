import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StackLoader } from '.'

describe('StackLoader', () => {
  it('should render a stack loader', () => {
    render(<StackLoader title="Stack Loading..." />)

    expect(screen.getByTitle('Stack Loading...')).toBeDefined()
  })
})
