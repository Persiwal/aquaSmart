import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Box,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  FormHelperText,
} from '@mui/material'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import type { HistoricalTemperatureReadingFormData } from '../../../../types/HistoricalTemperatureReadings'

export interface Props {
  onSubmit: (data: HistoricalTemperatureReadingFormData) => void
  initialValues: HistoricalTemperatureReadingFormData
}

const HistoricalDataForm: React.FC<Props> = ({ onSubmit, initialValues }) => {
  const {
    handleSubmit,
    control,
    setError,
    watch,
    clearErrors,
    formState: { isValid },
  } = useForm({
    defaultValues: initialValues,
  })

  const startDate = watch('startDate')

  const validateDates = (data: HistoricalTemperatureReadingFormData) => {
    if (data.endDate.isBefore(data.startDate)) {
      setError('endDate', {
        type: 'manual',
        message: 'End date cannot be before start date',
      })
      return false
    }
    clearErrors('endDate')
    return true
  }

  const onFormSubmit = (data: HistoricalTemperatureReadingFormData) => {
    if (validateDates(data)) {
      onSubmit(data)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ display: 'flex', gap: 2, mt: 3, mb: 3 }}>
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                label="Start Date"
                value={field.value}
                disableFuture
                onChange={(date) => field.onChange(date)}
                slots={{ textField: (params) => <TextField {...params} /> }}
              />
            )}
          />
          <Controller
            name="endDate"
            control={control}
            render={({ field, fieldState }) => (
              <Box sx={{ position: 'relative' }}>
                <DatePicker
                  label="End Date"
                  value={field.value}
                  disableFuture
                  minDate={startDate}
                  onChange={(date) => field.onChange(date)}
                  slots={{ textField: (params) => <TextField {...params} /> }}
                />
                {fieldState.error && (
                  <FormHelperText error sx={{ position: 'absolute' }}>
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </Box>
            )}
          />
          <Controller
            name="mode"
            control={control}
            render={({ field }) => (
              <FormControl sx={{ width: '246px' }}>
                <InputLabel id="mode-label">Mode</InputLabel>
                <Select
                  {...field}
                  aria-labelledby="mode-label"
                  defaultValue="daily"
                >
                  <MenuItem value="hourly">Hourly</MenuItem>
                  <MenuItem value="daily">Daily</MenuItem>
                </Select>
              </FormControl>
            )}
          />
        </Box>
      </LocalizationProvider>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ height: '56px', mr: 4 }}
        disabled={!isValid}
      >
        Update Chart
      </Button>
    </form>
  )
}

export default HistoricalDataForm
