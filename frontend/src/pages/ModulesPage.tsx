import ModulesList from '../components/base/modules-list/ModulesList'
import useModules from '../hooks/useModules'
import { Box, Button, Typography } from '@mui/material'
import PageTitle from '../components/ui/page-title/PageTitle'
import { useState } from 'react'
import ModulesFilter from '../components/base/modules-filter/ModulesFilter'
import { ModuleFormData } from '../types/ModuleFormData'
import ModuleFormModal from '../components/ui/module-form-modal/ModuleFormModal'
import useAddModule from '../hooks/useAddModule'
import { Add } from '@mui/icons-material'

const pageContainerStyles = { m: '0 auto', maxWidth: '1000px' }
const pageHeaderStyles = { display: 'flex', alignItems: 'center' }
const addModuleButtonStyles = { marginLeft: 'auto', height: '50px' }

function ModulesPage() {
  const {
    data: modules,
    isLoading,
    isError,
    refetch: refetchModules,
  } = useModules()
  const [searchQuery, setSearchQuery] = useState('')
  const [showAvailable, setShowAvailable] = useState(false)
  const [isAddModalOpen, setAddModalOpen] = useState(false)
  const { mutate: addModule } = useAddModule()

  const handleAddModule = (data: ModuleFormData) => {
    addModule(data)
    setAddModalOpen(false)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleAvailableChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowAvailable(event.target.checked)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
  }

  const filteredModules = modules?.filter((module) => {
    const matchesSearch = module.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const matchesAvailability = showAvailable ? module.available : true
    return matchesSearch && matchesAvailability
  })

  return (
    <Box sx={pageContainerStyles}>
      <Box sx={pageHeaderStyles}>
        <PageTitle />
        <Button
          variant="contained"
          color="primary"
          sx={addModuleButtonStyles}
          startIcon={<Add />}
          onClick={() => setAddModalOpen(true)}
        >
          Add module
        </Button>
      </Box>
      <ModulesFilter
        searchQuery={searchQuery}
        showAvailable={showAvailable}
        onSearchChange={handleSearchChange}
        onAvailableChange={handleAvailableChange}
        onClearSearch={handleClearSearch}
      />
      <Box mb={3}>
        <Typography variant="body1" component="h1">
          {modules ? filteredModules?.length : '0'} modules on the list
        </Typography>
      </Box>
      <ModulesList
        modules={filteredModules}
        isLoading={isLoading}
        isError={isError}
        refetch={refetchModules}
      />
      <ModuleFormModal
        title="Add module"
        open={isAddModalOpen}
        onClose={() => setAddModalOpen(false)}
        onSubmit={handleAddModule}
        initialValues={{
          name: '',
          description: '',
          targetTemperature: 0,
        }}
      />
    </Box>
  )
}

export default ModulesPage
