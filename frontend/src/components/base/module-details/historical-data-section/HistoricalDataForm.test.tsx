import React from 'react'
import { render, screen } from '@testing-library/react'
import HistoricalDataForm from './HistoricalDataForm'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { HistoricalTemepratureReadingFormMode } from '../../../../types/HistoricalTemperatureReadings'

const currentDate = dayjs()

const initialValues = {
  startDate: currentDate.subtract(1, 'week'),
  endDate: currentDate,
  mode: 'daily' as HistoricalTemepratureReadingFormMode,
}

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>{ui}</LocalizationProvider>
  )
}

describe('HistoricalDataForm', () => {
  const onSubmit = jest.fn()

  beforeEach(() => {
    onSubmit.mockClear()
  })

  it('renders the form with initial values', () => {
    renderWithProviders(
      <HistoricalDataForm onSubmit={onSubmit} initialValues={initialValues} />
    )

    expect(screen.getByLabelText('Start Date')).toHaveValue(
      initialValues.startDate.format('MM/DD/YYYY')
    )
    expect(screen.getByLabelText('End Date')).toHaveValue(
      initialValues.endDate.format('MM/DD/YYYY')
    )
    expect(screen.getByDisplayValue(initialValues.mode)).toBeInTheDocument()
  })
})
