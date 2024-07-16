import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { ModuleFormData } from '../types/ModuleFormData'
import { handleError } from '../utils/fetchErrorHandler'
import { createModule } from '../api'

const useAddModule = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (module: ModuleFormData) => createModule(module),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['modules'] })
    },
    onError: (error) => {
      handleError(error)
    },
  })
}

export default useAddModule
