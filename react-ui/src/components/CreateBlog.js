import { React, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import { createBlog } from '../reducers/blogReducer'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    flex: 1
  },
  paper: {
    padding: 100,
    width: '65rem'
  },
  button: {
    backgroundColor: theme.palette.common.red,
    '&:hover': {
      backgroundColor: theme.palette.common.red
    }
  },
  buttonContainer: {
    marginTop: '0.6rem'
  }
}))

const CreateBlog = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()
  const handleCreate = async () => {
    dispatch(createBlog(title, content))
    setTitle('')
    setContent('')
    history.push('/blogs')
  }
  return (
    <Grid container justify="center" alignContent="center" className={classes.mainContainer}>
      <Grid item>
        <Paper className={classes.paper} elevation={7}>
          <Grid container direction="column">
            <Grid item>
              <TextField
                onChange={({ target }) => setTitle(target.value)}
                fullWidth
                variant="outlined"
                label="Title"
              />
            </Grid>
            <Grid item>
              <TextField
                onChange={({ target }) => setContent(target.value)}
                fullWidth
                style = {{ marginTop: 30 }}
                variant="outlined"
                multiline
                rows={15}
                label="Content"
              />
            </Grid>
            <Grid item>
              <Grid container spacing={4} className={classes.buttonContainer}>
                <Grid item>
                  <Button
                    onClick={() => handleCreate()}
                    style = {{ marginTop: 10 }}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Create
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    component={Link}
                    to="/blogs"
                    style = {{ marginTop: 10 }}
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.button}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default CreateBlog