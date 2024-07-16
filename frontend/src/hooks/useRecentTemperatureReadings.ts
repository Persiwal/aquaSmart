import { useEffect } from 'react'
import { io } from 'socket.io-client'
import useRecentTemperatureReadingsStore from '../store'
import { TemperatureReading } from '../types/TemperatureReading'
import { BASE_API_URL } from '../api'

const useRecentTemperatureReadings = () => {
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
  }, [setRecentTemperatureReadings])
}

export default useRecentTemperatureReadings
