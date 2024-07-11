import React from 'react'
import { Box, Typography, Card, Grid, useTheme } from '@mui/material'
import OpacityIcon from '@mui/icons-material/Opacity'
import BubbleChartIcon from '@mui/icons-material/BubbleChart'
import GrainIcon from '@mui/icons-material/Grain'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import EvStationIcon from '@mui/icons-material/EvStation'

const mockWaterParameters = {
  pH: 7.2,
  ammonia: 0.25,
  nitrate: 30,
  nitrite: 0.1,
  dissolvedOxygen: 5.5,
  conductivity: 1.2,
}

const ModuleOtherParameters: React.FC = () => {
  const { pH, ammonia, nitrate, nitrite, dissolvedOxygen, conductivity } =
    mockWaterParameters

  const theme = useTheme()

  const parameters = [
    {
      label: 'pH',
      value: pH,
      icon: <OpacityIcon color="secondary" />,
      color: theme.palette.secondary.main,
    },
    {
      label: 'Ammonia',
      value: `${ammonia} ppm`,
      icon: <BubbleChartIcon color="error" />,
      color: theme.palette.error.main,
    },
    {
      label: 'Nitrate',
      value: `${nitrate} ppm`,
      icon: <GrainIcon color="warning" />,
      color: theme.palette.warning.main,
    },
    {
      label: 'Nitrite',
      value: `${nitrite} ppm`,
      icon: <BubbleChartIcon color="info" />,
      color: theme.palette.info.main,
    },
    {
      label: 'Dissolved Oxygen',
      value: `${dissolvedOxygen} mg/L`,
      icon: <DeviceThermostatIcon color="primary" />,
      color: theme.palette.primary.main,
    },
    {
      label: 'Conductivity',
      value: `${conductivity} mS/cm`,
      icon: <EvStationIcon color="success" />,
      color: theme.palette.success.main,
    },
  ]

  return (
    <Box>
      <Typography align="center" variant="h6" mb={3}>
        Other parameters
      </Typography>
      <Grid
        container
        flexWrap="wrap"
        spacing={3}
        justifyContent="center"
        width="100%"
      >
        {parameters.map((param) => (
          <Grid item key={param.label} width="50%">
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 2,
                borderLeft: `5px solid ${param.color}`,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                }}
              >
                {param.icon}
              </Box>
              <Box>
                <Typography variant="h6">{param.label}</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {param.value}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ModuleOtherParameters
