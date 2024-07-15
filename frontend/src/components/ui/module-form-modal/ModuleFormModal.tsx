import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { ModuleFormData } from '../../../types/ModuleFormData'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

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
  error: string | undefined
  isPending: boolean
  isSuccess: boolean
  successMsg: string | undefined
}

const ModuleFormModal: React.FC<Props> = ({
  open,
  onClose,
  onSubmit,
  initialValues,
  title,
  error,
  isPending,
  isSuccess,
  successMsg,
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
        {error && (
          <Typography align="center" color="error">
            {error}
          </Typography>
        )}
        <DialogContent sx={dialogContentStyles}>
          {isSuccess ? (
            <Typography
              align="center"
              color="success"
              variant="h5"
              sx={{
                display: 'flex',
                gap: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CheckCircleOutlineIcon fontSize="large" color="success" />{' '}
              {successMsg}
            </Typography>
          ) : (
            <>
              <Controller
                name="name"
                control={control}
                rules={{ required: 'Name is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    disabled={isPending}
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
                    disabled={isPending}
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
                    value: 0.1,
                    message: 'Target temperature must be greater than 0',
                  },
                  max: {
                    value: 39.9,
                    message: 'Target temperature must be less than 40',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Target Temperature"
                    type="number"
                    inputProps={{
                      step: '0.1',
                    }}
                    disabled={isPending}
                    error={!!errors.targetTemperature}
                    helperText={errors.targetTemperature?.message}
                  />
                )}
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            {isSuccess ? 'Close' : 'Cancel'}
          </Button>
          {!isSuccess && (
            <LoadingButton
              type="submit"
              loading={isPending}
              variant="contained"
              color="primary"
              disabled={!isValid || !isDirty}
            >
              Save
            </LoadingButton>
          )}
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default ModuleFormModal
