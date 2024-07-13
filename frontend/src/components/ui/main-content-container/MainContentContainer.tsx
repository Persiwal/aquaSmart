import { Box } from '@mui/material'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const MainContentContainer: React.FC<Props> = ({ children }) => {
  return <Box component="main">{children}</Box>
}

export default MainContentContainer
