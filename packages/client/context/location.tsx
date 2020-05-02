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
    const watchId = geolocation.subscribe(
      (pos) => {
        console.log(pos)
        setPosition(pos)
      },
      (err) => {
        console.error(err)
        setError(err)
      },
      { enableHighAccuracy: true },
    )

    return () => geolocation.unsubscribe(watchId)
  }, [])

  return <LocationContext.Provider value={{ position, error }}>{children}</LocationContext.Provider>
}
