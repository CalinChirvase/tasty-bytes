import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import userService from '../services/users'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const styles = {
  paper: { padding: 100, marginTop: 100 }
}

const CreateAccount = () => {

  const history = useHistory()

  const handleCreate = (event) => {
    event.preventDefault()
    const username = event.target[0].value
    event.target[0].value = ''
    const name = event.target[1].value
    event.target[1].value = ''
    const password = event.target[2].value
    event.target[2].value = ''
    try {
      userService.createUser(username, name, password)
      history.push('/login')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Grid container direction="column" alignContent="center">
      <Paper style={styles.paper} elevation={7}>
        <Grid item>
          <Typography variant="h6" color="inherit">
            Create a new account
          </Typography>
        </Grid>
        <form onSubmit={handleCreate}>
          <Grid item>
            <TextField
              variant="standard"
              label="Username"
              autoComplete="username"
            />
          </Grid>
          <Grid item>
            <TextField
              variant="standard"
              label="Name"
              autoComplete="name"
            />
          </Grid>
          <Grid item>
            <TextField
              variant="standard"
              type="password"
              label="Password"
              autoComplete="new-password"
            />
          </Grid>
          <Button
            style = {{ marginTop: 10 }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Create
          </Button>
        </form>
        <Button
          style = {{ marginTop: 10 }}
          component={Link}
          to="/login"
          variant="contained"
          color="primary">
          Cancel
        </Button>
      </Paper>
    </Grid>
  )
}

export default CreateAccount