import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import { likeBlog } from '../reducers/blogReducer'

const useStyles = makeStyles({
  paperContainer: {
    minWidth: 500,
    maxWidth: 800,
    padding: 30,
    marginTop: '2rem',
    marginBottom: '2rem'
  },
  contentContainer: {
    marginTop: '1rem'
  },
  content: {
    marginTop: '2rem'
  },
  likesContainer: {
    marginTop: '2rem'
  },
  likeButtonContainer: {
    marginTop: '1rem'
  }
})
const Blog = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const id = useParams().id
  const blog = useSelector(state => state.blogs).find(blog => blog.id === id)

  const handleLike = async () => {
    const newBlog = { ...blog, likes: blog.likes + 1 }
    dispatch(likeBlog(id, newBlog))

  }
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Paper elevation={7} className={classes.paperContainer}>
          <Grid container justify="center" direction="column" className={classes.contentContainer}>
            <Grid item>
              <Button style = {{ marginTop: 15, marginBottom: 20 }} color="primary" variant="contained" component={Link} to="/blogs">
                Back
              </Button>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography color="inherit" variant="h2">
                    {blog.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color="inherit" variant="h4">
                    by {blog.author}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.content}>
              <Typography color="inherit" variant="body1">
                {blog.content}
              </Typography>
            </Grid>
            <Grid item className={classes.likesContainer}>
              <Typography color="inherit" variant="h5">
                Likes : {blog.likes}
              </Typography>
            </Grid>
            <Grid item className={classes.likeButtonContainer}>
              <Button onClick={() => handleLike()} color="primary" variant="contained">
                Like
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Blog