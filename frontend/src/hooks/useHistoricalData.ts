import { useQuery } from '@tanstack/react-query'
import type { HistoricalTemepratureReadingFormMode } from '../types/HistoricalTemperatureReadings'
import { Dayjs } from 'dayjs'
import { getHistoricalData } from '../api'

interface Props {
  id: string
  start: Dayjs
  stop: Dayjs
  mode: HistoricalTemepratureReadingFormMode
}

const useHistoricalData = ({ id, start, stop, mode }: Props) => {
  return useQuery({
    queryKey: ['module-history', id, start, stop, mode],
    queryFn: () => getHistoricalData(id, start, stop, mode),
  })
}

export default useHistoricalData
