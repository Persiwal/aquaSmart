import { useQuery } from '@tanstack/react-query'
import { getModuleDetails } from '../api'

const useModuleDetails = (id: string) => {
  return useQuery({
    queryKey: [`module-details-${id}`],
    queryFn: () => getModuleDetails(id),
  })
}

export default useModuleDetails
