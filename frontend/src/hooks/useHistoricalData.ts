import { useQuery } from '@tanstack/react-query'
import type {
  HistoricalTemepratureReadingFormMode,
  HistoricalTemperatureReading,
} from '../types/HistoricalTemperatureReadings'
import { Dayjs } from 'dayjs'
import { getApiBaseURL } from '../api-config'

interface Props {
  id: string
  start: Dayjs
  stop: Dayjs
  mode: HistoricalTemepratureReadingFormMode
}

const useHistoricalData = ({ id, start, stop, mode }: Props) => {
  const BASE_API_URL = getApiBaseURL()
  const ENDPOINT = `/modules/${id}/history?start=${start}&stop=${stop}&mode=${mode}`

  const { data, isLoading, isError } = useQuery({
    queryKey: [`module-history-${id}-${start}-${stop}-${mode}`],
    queryFn: async () => {
      const res = await fetch(BASE_API_URL + ENDPOINT)

      if (!res.ok) {
        throw new Error('Something went wrong when loading module history.')
      }

      const data = await res.json()
      return data as unknown as HistoricalTemperatureReading[]
    },
  })

  return { data, isLoading, isError }
}

export default useHistoricalData
