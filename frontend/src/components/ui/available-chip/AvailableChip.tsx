import { Box, Chip } from '@mui/material'

const chipLabelContainerStyles = { display: 'flex', alignItems: 'center' }
const chipLabelDotStyles = {
  width: 8,
  height: 8,
  borderRadius: '50%',
  marginRight: 1,
}
const chipAvailableBgColor = 'rgba(76, 175, 80, 0.3)'
const chipNotAvailableBgColor = 'rgba(244, 67, 54, 0.3)'

interface Props {
  isAvailable: boolean
}

const AvailableChip: React.FC<Props> = ({ isAvailable }) => {
  return (
    <Chip
      label={
        <Box sx={chipLabelContainerStyles}>
          <Box
            sx={{
              ...chipLabelDotStyles,
              backgroundColor: isAvailable ? 'green' : 'red',
            }}
          />
          {isAvailable ? 'Available' : 'Not Available'}
        </Box>
      }
      sx={{
        backgroundColor: isAvailable
          ? chipAvailableBgColor
          : chipNotAvailableBgColor,
        color: isAvailable ? 'green' : 'red',
      }}
    />
  )
}

export default AvailableChip
