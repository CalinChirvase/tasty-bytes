import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import logo from '../assets/logo.png'
import { logout } from '../reducers/loginReducer'
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '7em'
  }
}))


const NavBar = () => {

  const dispatch = useDispatch()
  const classes = useStyles()
  const user = useSelector(state => state.user)

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <img src={logo} alt="website logo" className={classes.logo} />
          <Button color="inherit" component={Link} to="/">
            <Typography variant="h6" color="inherit">
                Home
            </Typography>
          </Button>
          {user.token === undefined
            ?
            <Button color="inherit" component={Link} to="/login">
              <Typography variant="h6" color="inherit">
                Login
              </Typography>
            </Button>
            :
            <Button onClick={() => handleLogout()} color="inherit" component={Link} to="/">
              <Typography variant="h6" color="inherit">
                Logout
              </Typography>
            </Button>
          }
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}
export default NavBar