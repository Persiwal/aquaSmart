import { Box, Button, Typography } from '@mui/material'
import ReplayIcon from '@mui/icons-material/Replay'
import React from 'react'

export interface Props {
  errorText: string
  refetchFn: () => void
}

const containerStyles = {
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

const ErrorWrapper: React.FC<Props> = ({ refetchFn, errorText }) => {
  return (
    <Box sx={containerStyles}>
      <Typography>{errorText}</Typography>
      {refetchFn && (
        <Button startIcon={<ReplayIcon />} onClick={() => refetchFn()}>
          Try again
        </Button>
      )}
    </Box>
  )
}

export default ErrorWrapper
