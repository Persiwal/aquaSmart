import { useQuery } from '@tanstack/react-query'

import { getModules } from '../api'

const useModules = () => {
  return useQuery({
    queryKey: ['modules'],
    queryFn: () => getModules(),
  })
}

export default useModules
