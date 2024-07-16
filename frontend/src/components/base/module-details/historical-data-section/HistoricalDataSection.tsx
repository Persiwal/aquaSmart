import React, { useState } from 'react'
import { Card, Typography } from '@mui/material'

import useHistoricalData from '../../../../hooks/useHistoricalData'
import HistoricalDataChart from './HistoricalDataChart'
import HistoricalDataTable from './HistoricalDataTable'
import HistoricalDataForm from './HistoricalDataForm'
import { HistoricalTemperatureReadingFormData } from '../../../../types/HistoricalTemperatureReadings'
import dayjs from 'dayjs'
import ViewModeSwitch from './ViewModeSwitch'

const historicalDataContainerStyles = {
  mt: 4,
  p: 4,
  bgcolor: 'rgba(0, 0, 0, 0.01)',
}

const weekBefore = dayjs().subtract(7, 'day')
const now = dayjs()

export interface Props {
  moduleId: string
  targetTemperature: number
}

const HistoricalDataSection: React.FC<Props> = ({
  moduleId,
  targetTemperature,
}) => {
  const [formData, setFormData] =
    useState<HistoricalTemperatureReadingFormData>({
      startDate: weekBefore,
      endDate: now,
      mode: 'daily',
    })

  const [viewMode, setViewMode] = useState<'chart' | 'table'>('chart')

  const { data: historicalData } = useHistoricalData({
    id: moduleId || '',
    start: formData.startDate,
    stop: formData.endDate,
    mode: formData.mode,
  })

  const handleFormSubmit = (data: HistoricalTemperatureReadingFormData) => {
    setFormData(data)
  }

  const handleViewModeChange = (
    _: React.MouseEvent<HTMLElement>,
    newViewMode: 'chart' | 'table'
  ) => {
    if (newViewMode !== null) {
      setViewMode(newViewMode)
    }
  }

  return (
    <Card sx={historicalDataContainerStyles}>
      <Typography variant="h5">Temperature History</Typography>
      <HistoricalDataForm
        initialValues={formData}
        onSubmit={handleFormSubmit}
      />
      <ViewModeSwitch value={viewMode} onChange={handleViewModeChange} />
      {viewMode === 'chart' ? (
        <HistoricalDataChart
          mode={formData.mode}
          historicalData={historicalData}
          targetTemperature={targetTemperature}
        />
      ) : (
        <HistoricalDataTable
          historicalData={historicalData}
          targetTemperature={targetTemperature}
        />
      )}
    </Card>
  )
}

export default HistoricalDataSection
