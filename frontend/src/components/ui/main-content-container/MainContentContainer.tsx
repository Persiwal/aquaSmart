import { Box } from '@mui/material'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const containerStyles = {
  flexGrow: 1,
  minHeight: 'calc(100vh - 64px - 64px - 36px)', // assuming header height is 64px and breadcrumb height is 24
}

const MainContentContainer: React.FC<Props> = ({ children }) => {
  return (
    <Box component="main" sx={containerStyles}>
      {children}
    </Box>
  )
}

export default MainContentContainer
