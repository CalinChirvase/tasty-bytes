import { React, useEffect } from 'react'
import { Container } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
//import Image from './assets/test-image.jpg'
import { ThemeProvider } from '@material-ui/styles'
import theme from './components/theme'
//import { withStyles } from '@material-ui/core/styles'
import blogService from './services/blogs'

//const styles = {
//  '@global': {
//    body: {
//      backgroundImage: `url(${Image})`,
//      backgroundSize: 'cover'
//    }
//  }
//}
const App = () => {

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedTastyBytesUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      blogService.setToken(user.token)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <NavBar />
        <Switch>
          <Route path='/login'>
            <LoginForm />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Container>
    </ThemeProvider>
  )
}

//export default withStyles(styles)(App)
export default App