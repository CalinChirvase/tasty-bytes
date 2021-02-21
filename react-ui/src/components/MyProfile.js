import React from 'react'
import { useSelector } from 'react-redux'

import Typography from '@material-ui/core/Typography'

const MyProfile = () => {

  const user = useSelector(state => state.user)
  const blogs = useSelector(state => state.blogs).filter(blog => blog.author === user.username)
  return (
    <div>
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
    </div>
  )
}

export default MyProfile