// ViewModeSwitch.tsx
import React from 'react'
import { Box, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material'
import {
  TableChart as TableChartIcon,
  ShowChart as ShowChartIcon,
} from '@mui/icons-material'

interface Props {
  value: 'chart' | 'table'
  onChange: (
    event: React.MouseEvent<HTMLElement>,
    newValue: 'chart' | 'table'
  ) => void
}

const ViewModeSwitch: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Box>
      <Typography>View mode</Typography>
      <Box sx={{ display: 'flex', my: 2 }}>
        <ToggleButtonGroup
          value={value}
          exclusive
          onChange={onChange}
          aria-label="view mode"
        >
          <ToggleButton
            value="chart"
            aria-label="chart view"
            sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
          >
            <ShowChartIcon />
            Chart View
          </ToggleButton>
          <ToggleButton
            value="table"
            aria-label="table view"
            sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
          >
            <TableChartIcon />
            Table View
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  )
}

export default ViewModeSwitch
