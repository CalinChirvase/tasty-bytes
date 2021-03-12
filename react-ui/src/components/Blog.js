import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

import { likeBlog, editBlog } from '../reducers/blogReducer'
import { leaveComment, getComments } from '../reducers/commentReducer'
import Comment from './Comment'

const useStyles = makeStyles({
  paperContainer: {
    minWidth: 500,
    maxWidth: 800,
    padding: 30,
    marginBottom: '3rem',
    marginTop: '2rem'
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
  },
  mainContainer: {
    flex: 1
  },
  commentsContainer: {
    marginTop: '2rem'
  }
})
const Blog = () => {
  const [comment, setComment] = useState('')
  const [edit, setEdit] = useState(false)
  const classes = useStyles()
  const dispatch = useDispatch()
  const id = useParams().id
  const blog = useSelector(state => state.blogs).find(blog => blog.id === id)
  const [editContent, setEditContent] = useState(blog.content)
  const user = useSelector(state => state.user)
  const comments = useSelector(state => state.comments).filter(comment => comment.blog === id)

  const handleLike = async () => {
    const newBlog = { ...blog, likes: blog.likes + 1 }
    dispatch(likeBlog(id, newBlog))

  }

  const handleLeaveComment = async () => {
    dispatch(leaveComment(comment, blog.id, user.id))
    setComment('')
  }

  const handleEdit = () => {
    setEdit(!edit)
  }

  const handleUpdate = async () => {
    const newBlog = { ...blog, content: editContent }
    dispatch(editBlog(id, newBlog))
    setEdit(false)
  }
  useEffect(() => {
    dispatch(getComments())
  }, [dispatch])

  return (
    <Grid container justify="center" alignItems="center" className={classes.mainContainer}>
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
              {edit ?
                <TextField defaultValue={blog.content} fullWidth multiline onChange={({ target }) => setEditContent(target.value)} />
                :
                <Typography color="inherit" variant="body1">
                  {blog.content}
                </Typography>
              }
            </Grid>
            <Grid item className={classes.likesContainer}>
              <Typography color="inherit" variant="h5">
                Likes : {blog.likes}
              </Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={2} className={classes.likeButtonContainer}>
                <Grid item>
                  <Button onClick={() => handleLike()} color="primary" variant="contained">
                  Like
                  </Button>
                </Grid>
                {blog.author === user.username ?
                  <React.Fragment>
                    <Grid item>
                      <Button onClick={() => handleEdit()} color="primary" variant="contained">
                        {edit
                          ? 'Cancel'
                          : 'Edit'
                        }
                      </Button>
                    </Grid>
                    {edit
                      ? <Grid item>
                        <Button onClick={handleUpdate} color="primary" variant="contained">
                        Update Blog
                        </Button>
                      </Grid>
                      : null
                    }
                  </React.Fragment>
                  : null
                }
              </Grid>
            </Grid>
            <Grid container spacing={2} direction="column" justify="center" className={classes.commentsContainer}>
              <Grid item>
                <Typography color="inherit" variant="h4">
                    Comments:
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  onChange={({ target }) => setComment(target.value)}
                  variant="outlined"
                  multiline
                  rows={5}
                  label="Leave a comment ..."
                />
              </Grid>
              <Grid item>
                <Button
                  onClick={() => handleLeaveComment()}
                  variant="contained"
                  color="primary"
                >
                  Comment
                </Button>
              </Grid>
              {comments.map(comment => <Comment key={comment.id} comment={comment} />
              )}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Blog