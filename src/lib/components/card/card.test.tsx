import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card } from '.'

describe('Card', () => {
  it('should render', async () => {
    const children = 'Card content'
    const title = 'Card title'

    render(<Card title={title}>{children}</Card>)
    expect(screen.getByText(children)).toBeDefined()
    expect(screen.getByText(title)).toBeDefined()
  })
})
