import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  mainContainer: {
    flex: 1
  },
  paper: {
    padding: '2rem'
  }
})

const Contact = () => {
  const classes = useStyles()
  return (
    <Grid container justify="center" alignContent="center" className={classes.mainContainer}>
      <Grid item>
        <Paper elevation={7} className={classes.paper}>
          <Grid container direction="column" justify="center" alignContent="center" spacing={2}>
            <Grid item>
              <Typography variant="h5">
                Contact Us:
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                Phone Number: 999-999-9999
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                Email: tastybytes@tasty.com
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Contact