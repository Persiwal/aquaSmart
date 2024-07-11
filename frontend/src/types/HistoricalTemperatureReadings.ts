import { Dayjs } from 'dayjs'

type HistoricalTemperatureReading = {
  timestamp: Date
  temperature: number
}

type HistoricalTemepratureReadingFormMode = 'hourly' | 'daily'

type HistoricalTemperatureReadingFormData = {
  startDate: Dayjs
  endDate: Dayjs
  mode: HistoricalTemepratureReadingFormMode
}

export type {
  HistoricalTemperatureReading,
  HistoricalTemepratureReadingFormMode,
  HistoricalTemperatureReadingFormData,
}
