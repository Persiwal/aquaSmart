import React from 'react'
import { CardContent, Typography, Box } from '@mui/material'
import type { Module } from '../../../types/Module'
import AvaiableChip from '../available-chip/AvailableChip'
import CurrentTemperatureIndicator from '../current-temperature-indicator/CurrentTemperatureIndicator'

interface Props {
  module: Module
}

const ModuleCardContent: React.FC<Props> = ({ module }) => {
  const { id, name, available, targetTemperature } = module

  return (
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography variant="h5" component="h2" align="left">
          {name}
        </Typography>
        <AvaiableChip isAvailable={available} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          mt: 2,
        }}
      >
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
