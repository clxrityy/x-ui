import { useState } from 'react'
import { Button, Input } from '../lib'
import { ICONS } from '../config'

export const ButtonAndInputExample = () => {
  const [name, setName] = useState<string>('')
  const [loading, setIsLoading] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleSet = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  const handleRemove = () => {
    setIsLoading(true)
    setSubmitted(false)
    setTimeout(() => {
      setIsLoading(false)
      setName('')
    }, 1000)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex flex-row gap-3 items-center justify-center">
        <Input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            e.preventDefault()
            setName(e.target.value)
          }}
        />
        <Button onClick={handleSet} variant="default" size="default" disabled={loading || !name.length}>
          {loading ? <ICONS.LOADING className="animate-spin" /> : 'Display'}
        </Button>
      </div>
      {submitted ? (
        <div className="flex flex-col gap-3 items-center justify-center">
          <p className="text-lg font-semibold">Hello, {name}!</p>
          <Button variant={'destructive'} onClick={handleRemove}>
            Remove
          </Button>
        </div>
      ) : loading ? (
        <ICONS.LOADING className="animate-spin" />
      ) : null}
    </div>
  )
}
