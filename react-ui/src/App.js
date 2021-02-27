import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

//import Image from './assets/test-image.jpg'
import { ThemeProvider } from '@material-ui/styles'
import { makeStyles } from '@material-ui/core/styles'

import NavBar from './components/NavBar'
import LoginNavBar from './components/LoginNavBar'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import CreateAccount from './components/CreateAccount'
import BlogList from './components/BlogList'
import Blog from './components/Blog'
import theme from './components/theme'
import CreateBlog from './components/CreateBlog'
import MyProfile from './components/MyProfile'
import Contact from './components/Contact'
import Footer from './components/Footer'
//import { withStyles } from '@material-ui/core/styles'

/*const styles = {
  '@global': {
    body: {
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover'
    }
  }
}*/

const useStyles = makeStyles({
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }
})
const App = () => {
  const classes = useStyles()
  const user = useSelector(state => state.user)

  return (
    <div className={classes.mainWrapper}>
      <ThemeProvider theme={theme}>
        {user.isLoggedIn
          ?
          <NavBar />
          :
          <LoginNavBar />}
        <Switch>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/users/myprofile'>
            <MyProfile />
          </Route>
          <Route path='/blogs/create'>
            <CreateBlog />
          </Route>
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
        <Footer />
      </ThemeProvider>
    </div>
  )
}

//export default withStyles(styles)(App)
export default App