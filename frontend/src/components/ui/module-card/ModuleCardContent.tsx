import React from 'react'
import { CardContent, Typography, Box } from '@mui/material'
import type { Module } from '../../../types/Module'
import AvailableChip from '../available-chip/AvailableChip'
import CurrentTemperatureIndicator from '../current-temperature-indicator/CurrentTemperatureIndicator'

const cardHeaderContainerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  mb: 3,
}

const temperaturesContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  mt: 2,
}

interface Props {
  module: Module
}

const ModuleCardContent: React.FC<Props> = ({ module }) => {
  const { id, name, available, targetTemperature } = module

  return (
    <CardContent>
      <Box sx={cardHeaderContainerStyles}>
        <Typography variant="h5" component="h2" align="left">
          {name}
        </Typography>
        <AvailableChip isAvailable={available} />
      </Box>
      <Box sx={temperaturesContainerStyles}>
        <Typography variant="body1" component="p">
          Target Temperature: {targetTemperature}°C
        </Typography>
        <CurrentTemperatureIndicator
          targetTemperature={targetTemperature}
          moduleId={id}
        />
      </Box>
    </CardContent>
  )
}

export default ModuleCardContent
