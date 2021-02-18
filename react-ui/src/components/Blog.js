import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Paper from '@material-ui/core/Paper'

const Blog = () => {
  const id = useParams().id
  const blog = useSelector(state => state.blogs).find(blog => blog.id === id)
  return (
    <Paper>
      <h2>{blog.title} by {blog.author}</h2>
      <div>{blog.content}</div>
      <div>Likes : {blog.likes}</div>
    </Paper>
  )
}

export default Blog