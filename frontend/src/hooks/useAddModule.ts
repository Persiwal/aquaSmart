import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { Module } from '../types/Module'
import type { ModuleFormData } from '../types/ModuleFormData'
import { getApiBaseURL } from '../api'
import { handleError } from '../utils/fetchErrorHandler'

const useAddModule = () => {
  const BASE_API_URL = getApiBaseURL()
  const ENDPOINT = `/modules`
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (module: ModuleFormData) => {
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
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['modules'] })
    },
    onError: (error) => {
      handleError(error)
    },
  })

  return mutation
}

export default useAddModule
