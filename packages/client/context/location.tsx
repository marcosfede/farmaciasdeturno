import React, { useState, useEffect } from 'react'
import { geolocation } from '../utils/geolocation'

interface ILocationContext {
  position: Position | undefined
  error: PositionError | null
}
export const LocationContext = React.createContext<ILocationContext>({ position: undefined, error: null })

export const LocationContextProvider: React.FC = ({ children }) => {
  const [position, setPosition] = useState<Position | undefined>(undefined)
  const [error, setError] = useState<PositionError | null>(null)

  useEffect(() => {
    const watchId = geolocation.subscribe(setPosition, setError, { enableHighAccuracy: true })

    return () => geolocation.unsubscribe(watchId)
  }, [])

  return <LocationContext.Provider value={{ position, error }}>{children}</LocationContext.Provider>
}
