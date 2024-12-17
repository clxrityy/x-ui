import { useState, useEffect } from 'react'
import { URLS } from '../../../config'

export interface LocationData {
  query: string
  status: string
  country: string
  countryCode: string
  region: string
  regionName: string
  city: string
  lat: number
  lon: number
}

async function fetchIp(): Promise<string> {
  const response = await fetch(URLS.ipify)
  const { ip }: { ip: string } = await response.json()

  return ip
}

async function getLocationByIp(ip: string): Promise<LocationData> {
  const response = await fetch(`${URLS.ip_api}/${ip}`)
  const { lat, lon, city, regionName, region, countryCode, country, status, query } = await response.json()

  return { lat, lon, city, regionName, region, countryCode, country, status, query }
}

export const useLocation = (ip?: string) => {
  const [location, setLocation] = useState<LocationData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchLocation() {
      try {
        const fetchedIp = await fetchIp()
        const locationData = await getLocationByIp(ip || fetchedIp)

        setLocation(locationData)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchLocation()
  }, [])

  return { location, error, loading }
}
