import { Box, CircularProgress, Typography } from '@mui/material'
import type { Module } from '../../../types/Module'
import ModuleCard from '../../ui/module-card/ModuleCard'
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query'
import FetchErrorWrapper from '../../ui/fetch-error-wrapper/FetchErrorWrapper'

const listContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  width: '100%',
}

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
      <FetchErrorWrapper
        errorText="Something went wrong when fetching modules list."
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
    <Box sx={listContainerStyles} component="ul">
      {modules.map((module) => {
        return (
          <li key={module.id}>
            <ModuleCard module={module} />
          </li>
        )
      })}
    </Box>
  )
}

export default ModulesList
