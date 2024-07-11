import { Box, Chip } from '@mui/material'

interface Props {
  isAvailable: boolean
}

const AvaiableChip: React.FC<Props> = ({ isAvailable }) => {
  return (
    <Chip
      label={
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: isAvailable ? 'green' : 'red',
              marginRight: 1,
            }}
          />
          {isAvailable ? 'Available' : 'Not Available'}
        </Box>
      }
      sx={{
        backgroundColor: isAvailable
          ? 'rgba(76, 175, 80, 0.3)'
          : 'rgba(244, 67, 54, 0.3)',
        color: isAvailable ? 'green' : 'red',
      }}
    />
  )
}

export default AvaiableChip
