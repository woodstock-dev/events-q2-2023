import { createTheme } from '@mui/material/styles'
import { colors } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.grey[900],
    },

    secondary: {
      main: colors.cyan[500],
      contrastText: '#FFFFFF'
    }
  }
})