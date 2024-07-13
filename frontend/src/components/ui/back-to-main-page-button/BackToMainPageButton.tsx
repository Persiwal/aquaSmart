import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const BackToMainPageButton = () => {
  const navigate = useNavigate()

  return (
    <Button
      variant="text"
      onClick={() => navigate('/modules')}
      sx={{ lineHeight: '24px' }}
      startIcon={<ArrowBackIcon />}
    >
      Back to Main Page
    </Button>
  )
}

export default BackToMainPageButton
