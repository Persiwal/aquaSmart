import BackToMainPageButton from '../../../ui/back-to-main-page-button/BackToMainPageButton'
import { useLocation } from 'react-router-dom'

const SideBar = () => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <aside style={{ width: '300px' }}>
      {currentPath !== '/modules' && <BackToMainPageButton />}
    </aside>
  )
}

export default SideBar
