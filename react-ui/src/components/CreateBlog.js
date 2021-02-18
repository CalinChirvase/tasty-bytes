import { React, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

import { createBlog } from '../reducers/blogReducer'

const styles = {
  paper: { padding: 150, marginTop: 50 }
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
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
    <Paper style={styles.paper} elevation={7} className={classes.root}>
      <TextField
        onChange={({ target }) => setTitle(target.value)}
        fullWidth
        variant="outlined"
        label="Title"
      />
      <TextField
        onChange={({ target }) => setContent(target.value)}
        fullWidth
        style = {{ marginTop: 30 }}
        variant="outlined"
        multiline
        rows={15}
        label="Content"
      />
      <Button
        onClick={() => handleCreate()}
        style = {{ marginTop: 10 }}
        variant="contained"
        color="primary"
        type="submit"
      >
        Create
      </Button>
      <Button
        component={Link}
        to="/blogs"
        style = {{ marginTop: 10 }}
        variant="contained"
        color="primary"
        type="submit"
      >
        Cancel
      </Button>
    </Paper>
  )
}

export default CreateBlog