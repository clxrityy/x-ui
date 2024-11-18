import { useState, useEffect } from 'react'

/**
 * Fetch data from an API endpoint
 * @param url - The URL of the API endpoint
 * @returns An object containing the data and error state
 *
 * @example
 * const { data, error } = useFetch('https://api.ipify.org?format=json');
 */

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url)
        const responseData = await response.json()

        setData(responseData)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  })

  return { data, error, loading }
}
