import { createMuiTheme } from '@material-ui/core/styles'

const customBlue = '#0B72B9'
const customOrange = '#FFBA60'
const customRed = '#F44336'
const theme = createMuiTheme({
  palette: {
    common: {
      blue: customBlue,
      orange: customOrange,
      red: customRed
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
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 550,
      fontSize: '2.7rem',
      lineHeight: 1.5
    }
  },
  status: {
    danger: 'orange'
  }

})

export default theme