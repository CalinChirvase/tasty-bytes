import { React, useState } from 'react'

//material ui components
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Alert from '@material-ui/lab/Alert'


import { Link as RouterLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../reducers/loginReducer'
import loginService from '../services/login'


const styles = {
  paper: { padding: 100, marginTop: 100 }
}

const LoginForm = () => {
  const [notification, setNotification] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = async (event) => {
    event.preventDefault()
    const username = event.target[0].value
    const password = event.target[1].value
    event.target[0].value = ''
    event.target[1].value = ''
    try {
      //login user and update state
      const response = await loginService.login(username, password)
      dispatch(login(response))
      history.push('/')
    } catch (error) {
      //display alert if login fails
      setNotification('Username or password is incorrect!')
      setTimeout(() => setNotification(''), 4000)
    }
  }

  return (
    <div>
      <Grid container direction="column" alignContent="center">
        <Paper style={styles.paper}>
          <Grid item>
            {notification !== ''
              ? <Alert severity="error">{notification}</Alert>
              : <div></div>}
          </Grid>
          <Grid item>
            <Typography variant="h6" color="inherit">
              Welcome back!
            </Typography>
          </Grid>
          <form onSubmit={handleLogin}>
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
                type="password"
                label="Password"
                autoComplete="current-password"
              />
            </Grid>
            <Button
              style = {{ marginTop: 10 }}
              variant="contained"
              color="primary"
              type="submit"
            >Login
            </Button>
          </form>
          <Grid item>
            <Typography style = {{ marginTop: 10 }}>
              Don&#x27;t have an account? &#160;
              <Link component={RouterLink} to="/register">
                Register
              </Link>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </div>
  )
}

export default LoginForm