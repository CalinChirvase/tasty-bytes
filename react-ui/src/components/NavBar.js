//react libraries imports
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { logout } from '../reducers/loginReducer'
import { useDispatch } from 'react-redux'

//material-ui imports
import { makeStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Paper from '@material-ui/core/Paper'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Popper from '@material-ui/core/Popper'
import Grow from '@material-ui/core/Grow'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

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
    marginLeft: theme.spacing(2.5)
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: '0px'

  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1
    }
  }
}))


const NavBar = () => {
  const [tabValue, setTabValue] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)
  const [selectedProfileIndex, setSelectedProfileIndex] = useState(0)

  const dispatch = useDispatch()
  const classes = useStyles()

  const handleLogout = () => {
    dispatch(logout())
    setTabValue(0)
  }

  const handleTabChange = (_event, value) => {
    setTabValue(value)
  }

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }

  const handleProfileClose = () => {
    setAnchorEl(null)
    setOpen(false)
  }

  const handleProfileItemClick = (_event, index) => {
    setAnchorEl(null)
    setOpen(false)
    setSelectedProfileIndex(index)
  }

  //ensure url path is still correctly displayed if user refreshes the browser tab
  useEffect(() => {
    if (window.location.pathname === '/' && tabValue !== 0) {
      setTabValue(0)
    } else if (window.location.pathname === '/blogs' && tabValue !== 1) {
      setTabValue(1)
    } else if (window.location.pathname === '/users/myprofile' && tabValue !== 2) {
      setTabValue(2)
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
              disableRipple
              className={classes.tab}
              label="Home"
              component={Link}
              to="/"
            />
            <Tab
              disableRipple
              className={classes.tab}
              label="Blogs"
              component={Link}
              to="/blogs"
            />
            <Tab
              disableRipple
              icon={<AccountCircleIcon />}
              aria-label="account-circle"
              className={classes.tab}
              onClick={handleProfileClick}
              aria-owns={anchorEl ? 'profile-menu' : undefined}
              aria-haspopup={anchorEl ? true : undefined}
            >
            </Tab>
          </Tabs>
          <Popper
            open={open}
            anchorEl={anchorEl}
            transition
            disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleProfileClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="profile=menu"
                      className={classes.menu}
                    >
                      <MenuItem
                        component={Link}
                        to="/users/myprofile"
                        classes={{ root: classes.menuItem }}
                        onClick={() => {
                          handleProfileItemClick(0)
                          setTabValue(2)
                          handleProfileClose()
                        }}
                        selected={selectedProfileIndex === 0}
                      >
                        My Profile
                      </MenuItem>
                      <MenuItem
                        component={Link}
                        to="/"
                        classes={{ root: classes.menuItem }}
                        onClick={() => {
                          handleProfileItemClick(1)
                          setTabValue(0)
                          handleProfileClose()
                          handleLogout()
                        }}
                        selected={selectedProfileIndex === 1}
                      >
                        Logout
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}
export default NavBar