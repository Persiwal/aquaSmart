import { create } from 'zustand'
import { TemperatureReading } from './types/TemperatureReading'

interface RecentTemperatureReadingsStore {
  recentTemperatureReadings: TemperatureReading[]
  setRecentTemperatureReadings: (data: TemperatureReading[]) => void
}

const useRecentTemperatureReadingsStore =
  create<RecentTemperatureReadingsStore>((set) => ({
    recentTemperatureReadings: [],
    setRecentTemperatureReadings: (data) =>
      set({ recentTemperatureReadings: data }),
  }))

export default useRecentTemperatureReadingsStore
