import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Logo from './Logo'

const containerStyles = { height: '64px' }

const Header = () => {
  return (
    <AppBar position="static" sx={containerStyles}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
