import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { Adb as AdbIcon } from '@mui/icons-material'

const Logo = () => {
  return (
    <Link to={'/modules'} style={{ display: 'flex' }}>
      <AdbIcon sx={{ mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'lightblue',
          textDecoration: 'none',
        }}
      >
        aquaSMART
      </Typography>
    </Link>
  )
}

export default Logo
