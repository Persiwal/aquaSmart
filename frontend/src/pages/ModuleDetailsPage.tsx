import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { CircularProgress, Container, Button } from '@mui/material'
import useModuleDetails from '../hooks/useModuleDetails'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import AvailableChip from '../components/ui/available-chip/AvailableChip'
import ModuleCurrentParameters from '../components/base/module-details/module-current-parameters/ModuleCurrentParameters'
import HistoricalDataSection from '../components/base/module-details/historical-data-section/HistoricalDataSection'
import ModuleFormModal from '../components/ui/module-form-modal/ModuleFormModal'
import { Edit } from '@mui/icons-material'
import { ModuleFormData } from '../types/ModuleFormData'
import useEditModule from '../hooks/useEditModule'
import ErrorWrapper from '../components/ui/error-wrapper/ErrorWrapper'

const emptyPageContainerStyles = {
  height: '500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}
const pageContainerStyles = { my: 3, padding: '0px !important' }
const pageHeaderStyles = {
  display: 'flex',
  gap: 4,
  alignItems: 'center',
}

const ModuleDetailsPage = () => {
  const { moduleId } = useParams()
  const {
    isLoading,
    data: module,
    isError,
    refetch,
  } = useModuleDetails(moduleId || '')
  const [isEditModalOpen, setEditModalOpen] = useState(false)
  const { mutate: updateModule } = useEditModule(moduleId || '')

  const handleEditModule = (data: ModuleFormData) => {
    updateModule(data)
    setEditModalOpen(false)
  }

  if (isLoading)
    return (
      <Box sx={emptyPageContainerStyles}>
        <CircularProgress />
      </Box>
    )

  if (isError)
    return (
      <ErrorWrapper
        errorText="Something went wrong when downloading module details."
        refetchFn={refetch}
      />
    )

  if (!module)
    return (
      <Box sx={emptyPageContainerStyles}>
        <Typography>Could not find module with provided id.</Typography>
      </Box>
    )

  return (
    <Container sx={pageContainerStyles}>
      <Box sx={pageHeaderStyles}>
        <Typography mt={4} mb={4} variant="h4" align="left">
          {module.name}
        </Typography>
        <AvailableChip isAvailable={module.available} />
        <Button
          variant="contained"
          color="primary"
          sx={{ marginLeft: 'auto' }}
          startIcon={<Edit />}
          disabled={!module.available}
          onClick={() => setEditModalOpen(true)}
        >
          Edit Module
        </Button>
      </Box>
      <Typography mt={0} mb={2} variant="body2" align="left">
        {module.description}
      </Typography>
      <ModuleCurrentParameters module={module} />
      <HistoricalDataSection
        moduleId={module.id}
        targetTemperature={module.targetTemperature}
      />
      <ModuleFormModal
        title="Edit Module"
        open={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSubmit={handleEditModule}
        initialValues={{
          name: module.name,
          description: module.description,
          targetTemperature: module.targetTemperature,
        }}
      />
    </Container>
  )
}

export default ModuleDetailsPage
