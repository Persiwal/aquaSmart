import { Card, Typography } from '@mui/material'
import useHistoricalData from '../../../../hooks/useHistoricalData'
import HistoricalDataChart from './HistoricalDataChart'
import { useState } from 'react'
import HistoricalDataForm, { HistoricalFormData } from './HistoricalDataForm'
import dayjs from 'dayjs'

export interface Props {
  moduleId: string
  targetTemperature: number
}

const HistoricalDataSection: React.FC<Props> = ({
  moduleId,
  targetTemperature,
}) => {
  const [formData, setFormData] = useState<HistoricalFormData>({
    startDate: dayjs(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
    endDate: dayjs(new Date()),
    mode: 'daily',
  })

  const { data: historicalData } = useHistoricalData({
    id: moduleId || '',
    start: formData.startDate,
    stop: formData.endDate,
    mode: formData.mode,
  })

  const handleFormSubmit = (data: HistoricalFormData) => {
    setFormData({
      startDate: data.startDate,
      endDate: data.endDate,
      mode: data.mode,
    })
  }

  return (
    <Card sx={{ mt: 4, p: 4, bgcolor: 'rgba(0, 0, 0, 0.01)' }}>
      <Typography variant="h5">Temperature history</Typography>
      <HistoricalDataForm
        initialValues={{ ...formData }}
        onSubmit={handleFormSubmit}
      />
      <HistoricalDataChart
        mode={formData.mode}
        historicalData={historicalData}
        targetTemperature={targetTemperature}
      />
    </Card>
  )
}

export default HistoricalDataSection
