import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
    left: '0',
    bottom: '0',
    right: '0',
    height: '5rem'
  },
  icon: {
    height: '2.5em',
    width: '2.5em',
    [theme.breakpoints.down('xs')]: {
      height: '1.5em',
      width: '1.5em'
    }
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '0.85rem',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em'
    }
  },
  footerText: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  gridItem: {
    margin: '2rem'
  },
  mainContainer: {
    position: 'absolute'
  },
}))
const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Grid
        container
        className={classes.mainContainer}
        justify="center"
      >
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={classes.footerText}
            >
              &#169; Tasty Bytes 2021
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
        <Grid item component={'a'} href="http://www.facebook.com" rel="noopener noreferrer" target="_blank">
          <img alt="facebook logo" src={facebook} className={classes.icon} />
        </Grid>
        <Grid item component={'a'} href="http://www.twitter.com"  rel="noopener noreferrer" target="_blank">
          <img alt="twitter logo" src={twitter} className={classes.icon} />
        </Grid>
        <Grid item component={'a'} href="http://www.instagram.com"  rel="noopener noreferrer" target="_blank">
          <img alt="instagram logo" src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer