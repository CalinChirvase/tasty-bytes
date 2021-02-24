import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  mainContainer: {
    flex: 1
  }
})

const Contact = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.mainContainer}>
      <Paper>
        Contact Us
      </Paper>
    </Grid>
  )
}

export default Contact