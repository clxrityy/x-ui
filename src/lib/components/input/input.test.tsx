import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Input } from '.'

describe('Input', () => {
    it("should render", async() => {
        const placeholder = 'Type here'
        render(<Input placeholder={placeholder} />)
        expect(screen.getByPlaceholderText(placeholder)).toBeDefined()
    })
})