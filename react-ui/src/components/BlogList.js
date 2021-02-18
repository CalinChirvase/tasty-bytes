import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../reducers/blogReducer'
import { Link as RouterLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: 1000
  },
})

const BlogList = () => {
  const classes = useStyles()

  const blogs = useSelector(state => state.blogs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAll())
  }, [dispatch])

  return (
    <TableContainer className={classes.table} component={Paper} elevation={7} color="secondary">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Likes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blogs.map(blog =>
            <TableRow key={blog.title}>
              <TableCell>
                <Link component={RouterLink} to={`/blogs/${blog.id}`}>{blog.title}</Link>
              </TableCell>
              <TableCell align="right">{blog.author}</TableCell>
              <TableCell align="right">{blog.likes}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BlogList