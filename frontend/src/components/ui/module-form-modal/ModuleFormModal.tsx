import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material'
import { ModuleFormData } from '../../../types/ModuleFormData'

const dialogContainerStyles = {
  '.MuiPaper-root': {
    padding: 2,
  },
}

const dialogContentStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  width: '500px',
}

interface Props {
  open: boolean
  onClose: () => void
  onSubmit: (data: ModuleFormData) => void
  initialValues: ModuleFormData
  title: string
}

const ModuleFormModal: React.FC<Props> = ({
  open,
  onClose,
  onSubmit,
  initialValues,
  title,
}) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    defaultValues: initialValues,
    mode: 'onChange',
  })

  const handleClose = () => {
    onClose()
    reset()
  }

  return (
    <Dialog open={open} onClose={handleClose} sx={dialogContainerStyles}>
      <DialogTitle>{title}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent sx={dialogContentStyles}>
          <Controller
            name="name"
            control={control}
            rules={{ required: 'Name is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            rules={{ required: 'Description is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Description"
                multiline
                rows={4}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            )}
          />
          <Controller
            name="targetTemperature"
            control={control}
            rules={{
              required: 'Target temperature is required',
              min: {
                value: 0,
                message: 'Target temperature must be at least 0',
              },
              max: {
                value: 40,
                message: 'Target temperature must be at most 40',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Target Temperature"
                type="number"
                error={!!errors.targetTemperature}
                helperText={errors.targetTemperature?.message}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!isValid || !isDirty}
          >
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default ModuleFormModal
