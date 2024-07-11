import React from 'react'
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'

interface Props {
  searchQuery: string
  showAvailable: boolean
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onAvailableChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClearSearch: () => void
}

const ModulesFilter: React.FC<Props> = ({
  searchQuery,
  showAvailable,
  onSearchChange,
  onAvailableChange,
  onClearSearch,
}) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="body1" color="darkgrey" sx={{ mb: 0 }}>
        Filters
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <TextField
          label="Search Modules"
          variant="outlined"
          margin="normal"
          value={searchQuery}
          onChange={onSearchChange}
          sx={{ mr: 2, flex: 1, maxWidth: '500px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {searchQuery && (
                  <IconButton edge="end" onClick={onClearSearch}>
                    <ClearIcon />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={showAvailable}
              onChange={onAvailableChange}
              color="primary"
            />
          }
          label="Show only available modules"
          sx={{ mb: 0 }}
        />
      </Box>
    </Box>
  )
}

export default ModulesFilter
