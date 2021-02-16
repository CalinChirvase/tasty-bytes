import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
//import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
//import AccountCircleIcon from '@material-ui/icons/AccountCircle'

//const useStyles = makeStyles((theme) => ({
//  root: {
//    flexGrow: 1,
//  },
//  menuButton: {
//    marginRight: theme.spacing(2),
//  },
//  title: {
//    flexGrow: 1,
//  },
//}))

const NavBar = () => {
  //const classes = useStyles()

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          <Typography variant="h6" color="inherit">
              Tasty Bytes
          </Typography>
        </Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar