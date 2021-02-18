import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { logout } from '../reducers/loginReducer'
import { useDispatch, useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '7em'
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px'
  }
}))


const NavBar = () => {

  const dispatch = useDispatch()
  const classes = useStyles()
  const user = useSelector(state => state.user)

  const handleLogout = () => {
    dispatch(logout())
  }

  if (!user.isLoggedIn) {
    return (
      <React.Fragment>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <img src={logo} alt="website logo" className={classes.logo} />
            <Tabs className={classes.tabContainer}>
              <Tab className={classes.tab} label="Home" component={Link} to="/" />
              <Tab className={classes.tab} label="Login" component={Link} to="/login" />
            </Tabs>
          </Toolbar>
        </AppBar>
        <div className={classes.toolbarMargin} />
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <img src={logo} alt="website logo" className={classes.logo} />
          <Tabs className={classes.tabContainer}>
            <Tab className={classes.tab} label="Home" component={Link} to="/" />
            <Tab className={classes.tab} label="Blogs" component={Link} to="/blogs" />
            <Tab onClick={() => handleLogout()} className={classes.tab} label="Logout" component={Link} to="/" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}
export default NavBar