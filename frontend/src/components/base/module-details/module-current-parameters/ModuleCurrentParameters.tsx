import React from 'react'
import { CardContent, Typography, Box, Card } from '@mui/material'
import type { Module } from '../../../../types/Module'
import useCurrentModuleTemperature from '../../../../hooks/useCurrentModuleTemperature'
import TempGauge from '../../../ui/thermometer/TempGauge'
import ModuleOtherParameters from './module-other-parameters/ModuleOtherParameters'

const containerStyles = { p: 4 }
const disabledContainerStyles = { opacity: '0.5' }
const disabledContentStyles = { minHeight: '528px' }
const paramsContainerStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  gap: 7,
}

interface Props {
  module: Module
}

const ModuleCurrentParameters: React.FC<Props> = ({ module }) => {
  const currentTemperature = useCurrentModuleTemperature(module.id)
  const { targetTemperature } = module

  if (!module.available) {
    return (
      <Card sx={{ ...containerStyles, ...disabledContainerStyles }}>
        <CardContent sx={disabledContentStyles}>
          <Typography mb={4} variant="h5">
            Live preview
          </Typography>
          <Box>
            <Typography align="center" height="100%" width="100%" mt="180px">
              Module is not available now. Live preview is disabled.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card sx={containerStyles}>
      <CardContent>
        <Typography mb={4} variant="h5">
          Live preview
        </Typography>
        <Box sx={paramsContainerStyles}>
          <TempGauge
            value={currentTemperature || 0}
            target={targetTemperature}
          />
          <ModuleOtherParameters />
        </Box>
      </CardContent>
    </Card>
  )
}

export default ModuleCurrentParameters
