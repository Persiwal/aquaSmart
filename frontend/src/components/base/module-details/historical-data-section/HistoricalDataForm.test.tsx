import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
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

  it('validates that end date is not before start date', async () => {
    renderWithProviders(
      <HistoricalDataForm onSubmit={onSubmit} initialValues={initialValues} />
    )

    const endDateInput = screen.getByLabelText('End Date')
    const startDateInput = screen.getByLabelText('Start Date')

    fireEvent.change(endDateInput, {
      target: { value: dayjs().subtract(2, 'day').format('MM/DD/YYYY') },
    })

    fireEvent.change(startDateInput, {
      target: { value: dayjs().subtract(1, 'day').format('MM/DD/YYYY') },
    })

    fireEvent.click(screen.getByRole('button', { name: /Update Chart/i }))

    await waitFor(() => {
      expect(
        screen.getByText('End date cannot be before start date')
      ).toBeInTheDocument()
    })
  })

  it('calls onSubmit with correct data when form is valid', async () => {
    renderWithProviders(
      <HistoricalDataForm onSubmit={onSubmit} initialValues={initialValues} />
    )

    fireEvent.click(screen.getByRole('button', { name: /Update Chart/i }))

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        startDate: initialValues.startDate,
        endDate: initialValues.endDate,
        mode: initialValues.mode,
      })
    })
  })
})
