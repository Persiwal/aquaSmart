import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateModule } from '../api'
import type { ModuleFormData } from '../types/ModuleFormData'
import { handleError } from '../utils/fetchErrorHandler'

const useEditModule = (moduleId: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (moduleData: ModuleFormData) =>
      updateModule(moduleId, moduleData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['modules'] })
      queryClient.invalidateQueries({
        queryKey: [`module-details-${moduleId}`],
      })
    },
    onError: (error) => {
      handleError(error)
    },
  })
}

export default useEditModule
