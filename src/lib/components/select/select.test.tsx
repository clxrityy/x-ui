import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Select, SelectContent, SelectTrigger, SelectValue } from '.';

describe('Select', () => {
  it('should render a select', async () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue>Option 1</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <div>Option 1</div>
          <div>Option 2</div>
          <div>Option 3</div>
        </SelectContent>
      </Select>
    )
    expect(screen.findByText('Option 1')).toBeDefined()
  })
})