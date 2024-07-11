import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Gauge from 'react-gauge-component'

const TempGauge = ({ value, target }: { value: number; target: number }) => {
  return (
    <Box sx={{ width: '500px' }}>
      <Typography align="center" variant="h6">
        Temperature
      </Typography>
      <Gauge
        type="radial"
        arc={{
          width: 0.3,
          padding: 0.02,
          cornerRadius: 1,
          subArcs: [
            {
              limit: target - 0.5,
              color: 'rgba(244, 67, 54, 0.7',
              showTick: true,
              tooltip: {
                text: 'Too low temperature!',
              },
            },
            {
              limit: target + 0.5,
              color: 'rgba(76, 175, 80, 0.3)',
              showTick: true,
              tooltip: {
                text: 'OK temperature!',
              },
            },
            {
              color: 'rgba(244, 67, 54, 0.7',
              tooltip: {
                text: 'Too high temperature!',
              },
            },
          ],
        }}
        pointer={{
          color: '#345243',
          length: 0.8,
          width: 12,
        }}
        labels={{
          valueLabel: {
            formatTextValue: (value: number) => `${value}°C`,
            matchColorWithArc: true,
            style: {
              fontSize: '25px',
              textShadow: 'none',
            },
          },
        }}
        value={value}
        minValue={target - 2}
        maxValue={target + 2}
      />
    </Box>
  )
}

export default TempGauge
