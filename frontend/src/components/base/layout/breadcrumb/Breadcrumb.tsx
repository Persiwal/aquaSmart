import { Link, useLocation } from 'react-router-dom'
import { Box, Typography, Breadcrumbs } from '@mui/material'
import formatPath from '../../../../utils/formatPath/formatPath'

const Breadcrumb = () => {
  const location = useLocation()
  const currentPath = location.pathname
  const breadcrumbs = formatPath(currentPath)

  if (currentPath === '/modules') {
    return <div style={{ height: '24px' }}></div>
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ marginBottom: '10px' }}>
        <Breadcrumbs aria-label="breadcrumb">
          {breadcrumbs.map((crumb, index) => (
            <Link
              key={index}
              to={crumb.url}
              style={{
                textDecoration: 'none',
                color:
                  index === breadcrumbs.length - 1 ? 'text.primary' : 'inherit',
              }}
            >
              <Typography color="textPrimary">{crumb.label}</Typography>
            </Link>
          ))}
        </Breadcrumbs>
      </Box>
    </Box>
  )
}

export default Breadcrumb
