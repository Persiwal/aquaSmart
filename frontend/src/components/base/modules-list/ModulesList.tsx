import { Box, CircularProgress, Typography } from '@mui/material'
import type { Module } from '../../../types/Module'
import ModuleCard from '../../ui/module-card/ModuleCard'
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query'

import ErrorWrapper from '../../ui/error-wrapper/ErrorWrapper'

interface Props {
  modules: Module[] | undefined
  isLoading: boolean
  isError: boolean
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<Module[], Error>>
}

const emptyListContainerStyles = {
  height: '500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

const ModulesList: React.FC<Props> = ({
  modules,
  isLoading,
  isError,
  refetch,
}) => {
  if (isLoading)
    return (
      <Box sx={emptyListContainerStyles}>
        <CircularProgress />
      </Box>
    )

  if (isError)
    return (
      <ErrorWrapper
        errorText="Something went wrong when fetching module list."
        refetchFn={refetch}
      />
    )

  if (!modules || modules.length === 0)
    return (
      <Box sx={emptyListContainerStyles}>
        <Typography>Did not found any modules.</Typography>
      </Box>
    )

  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '100%',
      }}
    >
      {modules.map((module) => {
        return (
          <li key={module.id}>
            <ModuleCard module={module} />
          </li>
        )
      })}
    </ul>
  )
}

export default ModulesList
