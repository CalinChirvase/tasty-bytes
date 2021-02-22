import { createMuiTheme } from '@material-ui/core/styles'

const customBlue = '#0B72B9'
const customOrange = '#FFBA60'
const theme = createMuiTheme({
  palette: {
    common: {
      blue: customBlue,
      orange: customOrange
    },
    primary: {
      main: customBlue
    },
    secondary: {
      main: customOrange
    }
  },
  typography: {
    h3: {
      fontWeight: 300
    },
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1.1rem',
    }
  },
  status: {
    danger: 'orange'
  }

})

export default theme