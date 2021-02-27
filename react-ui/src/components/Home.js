import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Link as ScrollLink, Element } from 'react-scroll'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import testImage from '../assets/test-image.jpg'

const useStyles = makeStyles(theme => ({
  text: {
    color: theme.palette.common.blue
  },
  imageContainer: {
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
  },
  mainContainer: {
    flex: 1
  },
  learnMore: {
    marginTop: '30rem',
    marginBottom: '20rem'
  },
  sloganContainer: {
    marginTop: '7%'
  }
}))

const Home = () => {
  const user = useSelector(state => state.user)
  const classes = useStyles()
  return (
    <Grid container className={classes.mainContainer} direction="column">
      <Grid item>
        <Grid
          className={classes.sloganContainer}
          container
          justify="space-evenly"
          alignItems="center"
          direction="row"
        >
          <Grid item>
            <Typography className={classes.text} variant="h2" color="inherit" align="center">
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
                    component={ScrollLink}
                    activeClass="active"
                    to="learnMore"
                    smooth={true}
                  >
                    LearnMore
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.imageContainer}>
            <img src={testImage} style={{ height: 500, width: 700 }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          className={classes.learnMore}
          container
          justify="space-evenly"
          alignItems="center"
          direction="row"
        >
          <Grid item>
            <Element name="learnMore"></Element>
            <Typography className={classes.text} variant="h2" color="inherit" align="center">
              Tech Blogs, <br /> A New Perspective
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.text} variant="h2" color="inherit" align="center">
            A Place To Share Knowledge, Skills, <br /> and Tips about Tools, Libraries, <br /> Frameworks and More!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home