import Header from './header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import { Box, CssBaseline } from '@mui/material'
import Container from '@mui/material/Container'
import Breadcrumb from './breadcrumb/Breadcrumb'
import MainContentContainer from '../../ui/main-content-container/MainContentContainer'
import BackToMainPageButton from '../../ui/back-to-main-page-button/BackToMainPageButton'

const layoutContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}

const mainContainerStyles = { mt: 4, mb: 4 }

const currentPageNavStyles = {
  height: '36px',
  display: 'flex',
  gap: 4,
  alignItems: 'center',
}

const Layout = () => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <Box sx={layoutContainerStyles}>
      <CssBaseline />
      <Header />
      <Container maxWidth="xl" sx={mainContainerStyles}>
        <Box sx={currentPageNavStyles}>
          {currentPath.startsWith('/modules/') && <BackToMainPageButton />}
          <Breadcrumb />
        </Box>
        <MainContentContainer>
          <Outlet />
        </MainContentContainer>
      </Container>
    </Box>
  )
}

export default Layout
