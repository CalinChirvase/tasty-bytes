import React from 'react'
import { useSelector } from 'react-redux'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

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

  const user = useSelector(state => state.user)
  const blogs = useSelector(state => state.blogs).filter(blog => blog.author === user.username)
  return (
    <Grid container alignItems="center" direction="row" justify="center" className={classes.mainContainer}>
      <Paper elevation={7} className={classes.paper}>
        <Typography>
          Username: {user.username}
        </Typography>
        <Typography>
          Name: {user.name}
        </Typography>
        <br />
        <div>
          My Blogs
          {blogs.map(blog =>
            <p key={blog.title}>{blog.title}, Likes: {blog.likes}</p>
          )}
        </div>
      </Paper>
    </Grid>
  )
}

export default MyProfile