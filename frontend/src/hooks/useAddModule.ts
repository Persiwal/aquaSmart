import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { Module } from '../types/Module'
import type { ModuleFormData } from '../types/ModuleFormData'
import { getApiBaseURL } from '../api'

const useAddModule = () => {
  const ENDPOINT = `/modules`
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (module: ModuleFormData) => {
      const res = await fetch(getApiBaseURL() + ENDPOINT, {
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
        throw new Error('Something went wrong when creating the module.')
      }

      const data = await res.json()

      return data as unknown as Module
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['modules'] })
    },
  })

  return mutation
}

export default useAddModule
