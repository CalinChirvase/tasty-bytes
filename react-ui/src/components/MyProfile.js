import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'

import { getAll } from '../reducers/blogReducer'

const useStyles = makeStyles({
  paper:{
    padding: '3rem'
  },
  mainContainer: {
    flex: 1
  }
})

const MyProfile = () => {

  const classes = useStyles()
  const dispatch = useDispatch()

  const user = useSelector(state => state.user)
  const blogs = useSelector(state => state.blogs).filter(blog => blog.author === user.username)

  useEffect(() => {
    dispatch(getAll())
  })

  return (
    <Grid container alignItems="center" direction="row" justify="center" className={classes.mainContainer}>
      <Paper elevation={7} className={classes.paper}>
        <Typography variant="h5">
          Username: {user.username}
        </Typography>
        <Typography variant="h5">
          Name: {user.name}
        </Typography>
        <br />
        <div>
          <Typography variant="h5">
            My Blogs:
          </Typography>
          <br />
          {blogs.map(blog =>
            <div key={blog.title}>
              <Link component={RouterLink} to={`/blogs/${blog.id}`}>
                <Typography>
                  {blog.title}, Likes: {blog.likes}
                </Typography>
              </Link>
              <br />
            </div>
          )}
        </div>
      </Paper>
    </Grid>
  )
}

export default MyProfile