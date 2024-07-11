import { useQuery } from '@tanstack/react-query'
import type { Module } from '../types/Module'
import { getApiBaseURL } from '../api'

const useModuleDetails = (id: string) => {
  const BASE_API_URL = getApiBaseURL()
  const ENDPOINT = `/modules/${id}`

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [`module-details-${id}`],
    queryFn: async () => {
      const res = await fetch(BASE_API_URL + ENDPOINT)

      if (!res.ok) {
        throw new Error('Something went wrong when loading module details.')
      }

      const data = await res.json()
      return data as unknown as Module
    },
  })

  return { data, isLoading, isError, refetch }
}

export default useModuleDetails
