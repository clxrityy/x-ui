import { useState } from 'react'
import { Button, Input } from '../lib'
import { ICONS } from '../config'
import { useScreenSize } from '../lib/hooks/useScreenSize'
import { useFetch } from '../lib/hooks/useFetch'

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

export const UseScreenSizeExample = () => {
  const screenSize = useScreenSize()

  return (
    <div className="flex flex-col gap-6 items-center">
      <h3>Screen Size</h3>
      <ul>
        <li>
          <strong>Width:</strong> <span className="font-mono">{screenSize?.width}</span>
        </li>
        <li>
          <strong>Height:</strong> <span className="font-mono">{screenSize?.height}</span>
        </li>
      </ul>
    </div>
  )
}

export const UseFetchhookExample = () => {
  const { data, error, loading } = useFetch('https://api.ipify.org?format=json')

  return (
    <div className="flex flex-col gap-6 items-center justify-center mx-auto">
      <h3 className="text-3xl font-bold">Random API Fetch</h3>
      <p>
        Fetching your IP address from{' '}
        <a
          href="https://api.ipify.org/"
          className="text-blue-500 hover:underline hover:text-blue-600 focus:text-blue-700"
          target="_blank"
          rel="noreferrer"
        >
          api.ipify.org
        </a>
      </p>
      <ul>
        {loading ? (
          <li>
            <span>Loading...</span>
          </li>
        ) : (
          <pre className="font-mono font-light bg-gray-100/50 px-2 py-2 rounded-md">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        {error && (
          <li className="text-red-600">
            <strong>Error:</strong>
            <pre className="font-mono font-light bg-red-100/50 px-2 py-2 rounded-md">{error}</pre>
          </li>
        )}
      </ul>
    </div>
  )
}
