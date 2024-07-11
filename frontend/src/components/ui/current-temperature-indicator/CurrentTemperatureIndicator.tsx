import React from 'react'
import { Typography, Box } from '@mui/material'
import useCurrentModuleTemperature from '../../../hooks/useCurrentModuleTemperature'

interface Props {
  targetTemperature: number
  moduleId: string
}

const CurrentTemperatureIndicator: React.FC<Props> = ({
  moduleId,
  targetTemperature,
}) => {
  const currentTemperature = useCurrentModuleTemperature(moduleId)

  if (currentTemperature === null) {
    return (
      <Box>
        <Typography variant="body1" component="p" style={{ color: 'grey' }}>
          Current Temperature: N/A
        </Typography>
      </Box>
    )
  }

  const temperatureDifference = Math.abs(currentTemperature - targetTemperature)
  const temperatureColor = temperatureDifference <= 0.5 ? 'green' : 'red'

  return (
    <Typography
      variant="body1"
      component="p"
      style={{ color: temperatureColor }}
    >
      Current Temperature: {currentTemperature}°C
    </Typography>
  )
}

export default CurrentTemperatureIndicator
