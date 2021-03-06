import { React, useState } from 'react'

//material ui components
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'


import { Link as RouterLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../reducers/loginReducer'
import loginService from '../services/login'
import blogService from '../services/blogs'
import commentService from '../services/comments'


const useStyles = makeStyles({
  mainContainer: {
    flex: 1
  },
  paper: {
    padding: '6.5rem'
  },
  loginButton: {
    marginTop: '2rem',
    marginBottom: '1rem'
  },
  text: {
    marginTop:'1.5rem'
  }
})

const LoginForm = () => {
  const classes = useStyles()
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
      blogService.setToken(response.token)
      commentService.setToken(response.token)
      history.push('/')
    } catch (error) {
      //display alert if login fails
      setNotification('Username or password is incorrect!')
      setTimeout(() => setNotification(''), 4000)
    }
  }

  return (
    <Grid className={classes.mainContainer} container direction="column" justify="center" alignContent="center">
      <Paper className={classes.paper} elevation={7}>
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
              className={classes.text}
              variant="standard"
              label="Username"
              autoComplete="username"
            />
          </Grid>
          <Grid item>
            <TextField
              className={classes.text}
              variant="standard"
              type="password"
              label="Password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item>
            <Button
              className={classes.loginButton}
              variant="contained"
              color="primary"
              type="submit"
            >Log In
            </Button>
          </Grid>
        </form>
        <Grid item>
          <Typography className={classes.text}>
            Don&#x27;t have an account? &#160;
            <Link component={RouterLink} to="/register">
              Register
            </Link>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default LoginForm