import type {
  HistoricalTemepratureReadingFormMode,
  HistoricalTemperatureReading,
} from '../../../../types/HistoricalTemperatureReadings'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'
import { Box } from '@mui/material'
import { Chart, ChartOptions } from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'

Chart.register(annotationPlugin)

export interface Props {
  historicalData: HistoricalTemperatureReading[] | undefined
  targetTemperature: number
  mode: HistoricalTemepratureReadingFormMode
}

const containerStyles = { mt: 3 }

const formatLabel = (
  reading: HistoricalTemperatureReading,
  mode: HistoricalTemepratureReadingFormMode
) => {
  if (mode === 'hourly') {
    return (
      new Date(reading.timestamp).toLocaleDateString() +
      ' ' +
      new Date(reading.timestamp).toLocaleTimeString()
    )
  }

  if (mode === 'daily') {
    return new Date(reading.timestamp).toLocaleDateString()
  }
}

const HistoricalDataChart: React.FC<Props> = ({
  historicalData,
  targetTemperature,
  mode,
}) => {
  const safeZoneMin = targetTemperature - 0.5
  const safeZoneMax = targetTemperature + 0.5

  const chartData = {
    labels:
      historicalData?.map((reading: HistoricalTemperatureReading) =>
        formatLabel(reading, mode)
      ) || [],
    datasets: [
      {
        label: 'Temperature',
        data:
          historicalData?.map(
            (reading: HistoricalTemperatureReading) => reading.temperature
          ) || [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  }

  const options: ChartOptions<'line'> = {
    plugins: {
      annotation: {
        annotations: {
          line1: {
            drawTime: 'afterDatasetsDraw',
            type: 'line',
            yMin: targetTemperature,
            yMax: targetTemperature,
            borderColor: 'rgba(255, 99, 132, 0.8)',
            borderWidth: 2,
            label: {
              content: 'Target Temperature',
              position: 'start',
            },
          },
          box1: {
            drawTime: 'afterDatasetsDraw',
            type: 'box',
            yMin: safeZoneMin,
            yMax: safeZoneMax,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 0,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  }

  return (
    <Box sx={containerStyles}>
      <Line data={chartData} options={options} />
    </Box>
  )
}

export default HistoricalDataChart
