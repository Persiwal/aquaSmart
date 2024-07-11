import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { Module } from '../types/Module'
import type { ModuleFormData } from '../types/ModuleFormData'
import { getApiBaseURL } from '../api'

const useEditModule = (moduleId: string) => {
  const BASE_API_URL = getApiBaseURL()
  const ENDPOINT = `/modules/${moduleId}`
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (module: ModuleFormData) => {
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
        throw new Error('Something went wrong when updating the module.')
      }

      const data = await res.json()

      return data as unknown as Module
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['modules'] })
      queryClient.invalidateQueries({
        queryKey: [`module-details-${moduleId}`],
      })
    },
  })

  return mutation
}

export default useEditModule
