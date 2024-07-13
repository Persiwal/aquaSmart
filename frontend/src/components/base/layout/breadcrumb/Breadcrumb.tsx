import { Link, useLocation } from 'react-router-dom'
import { Box, Typography, Breadcrumbs } from '@mui/material'
import formatPath from '../../../../utils/formatPath/formatPath'

const containerStyles = { width: '100%', marginBottom: '10px', height: '24px' }

const Breadcrumb = () => {
  const location = useLocation()
  const currentPath = location.pathname
  const breadcrumbs = formatPath(currentPath)

  if (currentPath === '/modules') {
    return <Box sx={containerStyles}></Box>
  }

  return (
    <Box sx={containerStyles}>
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs.map((crumb, index) => (
          <Link key={index} to={crumb.url}>
            <Typography>{crumb.label}</Typography>
          </Link>
        ))}
      </Breadcrumbs>
    </Box>
  )
}

export default Breadcrumb
