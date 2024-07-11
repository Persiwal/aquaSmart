import useRecentTemperatureReadingsStore from '../store'

const useCurrentModuleTemperature = (moduleId: string) => {
  const { recentTemperatureReadings } = useRecentTemperatureReadingsStore()

  const temperature = recentTemperatureReadings.find(
    (reading) => reading.id === moduleId
  )?.temperature

  if (!temperature) {
    return null
  }

  return temperature
}

export default useCurrentModuleTemperature
