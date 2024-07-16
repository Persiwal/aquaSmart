import { Module } from './types/Module'
import { ModuleFormData } from './types/ModuleFormData'
import { Dayjs } from 'dayjs'
import {
  HistoricalTemepratureReadingFormMode,
  HistoricalTemperatureReading,
} from './types/HistoricalTemperatureReadings'

export const BASE_API_URL = 'http://localhost:3001'

const getModules = async () => {
  const ENDPOINT = '/modules'

  const res = await fetch(BASE_API_URL + ENDPOINT)

  if (!res.ok) {
    throw new Error('Something went wrong when loading modules list.')
  }

  const data = await res.json()
  return data as unknown as Module[]
}

const getModuleDetails = async (moduleId: string) => {
  const ENDPOINT = `/modules/${moduleId}`

  const res = await fetch(BASE_API_URL + ENDPOINT)

  if (!res.ok) {
    throw new Error('Something went wrong when loading module details.')
  }

  const data = await res.json()
  return data as unknown as Module
}

const updateModule = async (moduleId: string, module: ModuleFormData) => {
  const ENDPOINT = `/modules/${moduleId}`

  const res = await fetch(BASE_API_URL + ENDPOINT, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...module,
      targetTemperature: Number(module.targetTemperature),
    }),
  })

  if (!res.ok) {
    const errText = await res.text()

    throw new Error(errText)
  }

  const data = await res.json()
  return data as unknown as Module
}

const getHistoricalData = async (
  id: string,
  start: Dayjs,
  stop: Dayjs,
  mode: HistoricalTemepratureReadingFormMode
) => {
  const ENDPOINT = `/modules/${id}/history?start=${start}&stop=${stop}&mode=${mode}`

  const response = await fetch(BASE_API_URL + ENDPOINT)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const data = await response.json()

  return data as unknown as HistoricalTemperatureReading[]
}

const createModule = async (module: ModuleFormData) => {
  const ENDPOINT = `/modules`

  const res = await fetch(BASE_API_URL + ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...module,
      targetTemperature: Number(module.targetTemperature),
    }),
  })

  if (!res.ok) {
    const errText = await res.text()

    throw new Error(errText)
  }

  const data = await res.json()

  return data as unknown as Module
}

export {
  getModules,
  getModuleDetails,
  updateModule,
  getHistoricalData,
  createModule,
}
