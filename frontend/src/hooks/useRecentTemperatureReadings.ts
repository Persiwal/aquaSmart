import { useEffect } from 'react'
import { io } from 'socket.io-client'
import useRecentTemperatureReadingsStore from '../store'
import { TemperatureReading } from '../types/TemperatureReading'
import { getApiBaseURL } from '../api-config'

const useRecentTemperatureReadings = () => {
  const BASE_API_URL = getApiBaseURL()

  const { setRecentTemperatureReadings } = useRecentTemperatureReadingsStore()

  useEffect(() => {
    const socket = io(BASE_API_URL)

    socket.on('connect', () => {
      console.log('WebSocket connected')
    })

    socket.on('moduleUpdate', (data: TemperatureReading[]) => {
      setRecentTemperatureReadings(data)
    })

    socket.on('disconnect', () => {
      console.log('WebSocket disconnected')
    })

    return () => {
      socket.disconnect()
    }
  }, [setRecentTemperatureReadings, BASE_API_URL])
}

export default useRecentTemperatureReadings
