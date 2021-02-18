import React from 'react'
import { Container } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import CreateAccount from './components/CreateAccount'
import BlogList from './components/BlogList'
import Blog from './components/Blog'
//import Image from './assets/test-image.jpg'
import { ThemeProvider } from '@material-ui/styles'
import theme from './components/theme'
//import { withStyles } from '@material-ui/core/styles'

/*const styles = {
  '@global': {
    body: {
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover'
    }
  }
}*/
const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <NavBar />
        <Switch>
          <Route path='/blogs/:id'>
            <Blog />
          </Route>
          <Route path='/blogs'>
            <BlogList />
          </Route>
          <Route path='/register'>
            <CreateAccount />
          </Route>
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