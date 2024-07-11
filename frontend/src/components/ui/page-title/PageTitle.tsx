import { Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import getPageTitle from '../../../utils/getPageTitle/getPageTitle'

const PageTitle = () => {
  const location = useLocation()
  const currentPath = location.pathname
  const currentPageTitle = getPageTitle(currentPath)

  return (
    <Typography mt={4} mb={4} variant="h4" sx={{ textAlign: 'left' }}>
      {currentPageTitle}
    </Typography>
  )
}

export default PageTitle
