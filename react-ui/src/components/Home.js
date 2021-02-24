import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import testImage from '../assets/test-image.jpg'

const useStyles = makeStyles(theme => ({
  imag: {
    maxWidth: '25em',
    minWidth: '12.5em',
    marginTop: '2em',
    marginLeft: '5%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '10em'
    }
  },
  slogan: {
    color: theme.palette.common.blue
  },
  image: {
    marginTop: '6.5%',
    marginLeft: '3rem'
  },
  button: {
    borderColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    borderWidth: 2,
    textTransform: 'none',
    borderRadius: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    height: 45,
    width: 145
  },
  buttonContainer: {
    marginTop: '1rem'
  }
}))

const Home = () => {
  const user = useSelector(state => state.user)
  const classes = useStyles()
  return (
    <Grid container justify="space-evenly" alignItems="center" direction="row">
      <Grid item>
        <Typography className={classes.slogan} variant="h2" color="inherit" align="center">
        Tech Blogs, <br /> One Byte at a Time
        </Typography>
        <Grid item>
          <Grid
            container
            className={classes.buttonContainer}
            direction="row"
            justify="center"
            spacing={1}
          >
            <Grid item>
              <Button
                variant="outlined"
                className={classes.button}
                component={Link}
                to={
                  user.isLoggedIn
                    ? '/blogs/create'
                    : '/login'
                }
              >
                Get Started
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                className={classes.button}
                component={Link}
                to="/about"
              >
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.image}>
        <img src={testImage} style={{ height: 500, width: 700 }} />
      </Grid>
    </Grid>
  )
}

export default Home