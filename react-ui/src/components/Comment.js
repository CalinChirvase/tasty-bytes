import React from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'


const Comment = ({ comment }) => {
  return (
    <Grid item>
      <Typography color="inherit" variant="h5">
        {comment.user.username} said:
      </Typography>
      <Typography color="inherit" variant="body1">
        {comment.content}
      </Typography>
    </Grid>
  )
}

export default Comment