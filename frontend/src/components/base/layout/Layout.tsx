import Header from './header/Header'
import { Outlet } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import Container from '@mui/material/Container'
import Sidebar from './sidebar/Sidebar'
import Breadcrumb from './breadcrumb/Breadcrumb'
import MainContentContainer from '../../ui/main-content-container/MainContentContainer'

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="xl" sx={{ display: 'flex', mt: 4, mb: 4 }}>
        <Sidebar />
        <Container sx={{ p: 0 }}>
          <Breadcrumb />
          <MainContentContainer>
            <Outlet />
          </MainContentContainer>
        </Container>
      </Container>
    </>
  )
}

export default Layout
