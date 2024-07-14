import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { Adb as AdbIcon } from '@mui/icons-material'

const iconStyles = { mr: 1 }
const textStyles = {
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'lightblue',
  textDecoration: 'none',
}

const Logo = () => {
  return (
    <Link to={'/modules'} style={{ display: 'flex' }}>
      <AdbIcon sx={iconStyles} />
      <Typography variant="h6" noWrap sx={textStyles}>
        aquaSMART
      </Typography>
    </Link>
  )
}

export default Logo
