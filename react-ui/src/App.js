import React from 'react'
import { Container } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Image from './assets/test-image.jpg'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  '@global': {
    body: {
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover'
    }
  }
}
const App = () => {
  return (
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
  )
}

export default withStyles(styles)(App)