import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { likeBlog } from '../reducers/blogReducer'

const Blog = () => {
  const dispatch = useDispatch()
  const id = useParams().id
  const blog = useSelector(state => state.blogs).find(blog => blog.id === id)

  const handleLike = async () => {
    const newBlog = { ...blog, likes: blog.likes + 1 }
    dispatch(likeBlog(id, newBlog))

  }
  return (
    <div>
      <Paper>
        <Typography color="inherit" variant="h2">
          {blog.title} by {blog.author}
        </Typography>
        <Typography color="inherit" variant="body1">
          {blog.content}
        </Typography>
        <Typography color="inherit" variant="body1">
          Likes : {blog.likes}
        </Typography>
        <Button onClick={() => handleLike()} color="primary" variant="contained">
          Like
        </Button>
      </Paper>
      <Button style = {{ marginTop: 10 }} color="primary" variant="contained" component={Link} to="/blogs">
        Back
      </Button>
    </div>
  )
}

export default Blog