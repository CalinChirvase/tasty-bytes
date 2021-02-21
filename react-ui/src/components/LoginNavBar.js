import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

import { makeStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  logo: {
    height: '8em'
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


const LoginNavBar = () => {
  const [tabValue, setTabValue] = useState(0)

  const classes = useStyles()

  const handleTabChange = (_event, value) => {
    setTabValue(value)
  }

  useEffect(() => {
    if (window.location.pathname === '/' && tabValue !== 0) {
      setTabValue(0)
    } else if (window.location.pathname === '/login' && tabValue !== 1) {
      setTabValue(1)
    }

  },[tabValue])

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Button
            className={classes.logoContainer}
            component={Link}
            to="/"
            disableRipple
            onClick={() => setTabValue(0)}
          >
            <img src={logo} alt="website logo" className={classes.logo} />
          </Button>
          <Tabs
            className={classes.tabContainer}
            value={tabValue}
            onChange={handleTabChange}
          >
            <Tab
              className={classes.tab}
              label="Home"
              component={Link}
              to="/"
            />
            <Tab
              className={classes.tab}
              label="Login"
              component={Link}
              to="/login"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}

export default LoginNavBar