//react libraries imports
import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../reducers/blogReducer'
import { Link as RouterLink } from 'react-router-dom'

//material-ui imports
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  table: {
    minWidth: 900,
    maxWidth: 1200,
    marginTop: '10%'
  },
  buttonContainer:{
    minWidth: 900,
    maxWidth: 1200
  }
})

const BlogList = () => {
  const classes = useStyles()

  const blogs = useSelector(state => state.blogs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAll())
  }, [dispatch])

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <TableContainer
          className={classes.table}
          component={Paper}
          elevation={7}
          color="secondary"
        >
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
                    <Link component={RouterLink} to={`/blogs/${blog.id}`}>
                      {blog.title}
                    </Link>
                  </TableCell>
                  <TableCell align="right">{blog.author}</TableCell>
                  <TableCell align="right">{blog.likes}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item>
        <Grid
          className={classes.buttonContainer}
          container
          direction="row"
          alignItems="flex-start"
          xs={12}
        >
          <Grid item xs={12}>
            <Button
              style = {{ marginTop: 15 }}
              color="primary" variant="contained"
              component={RouterLink}
              to="/blogs/create"
            >
              Create new blog
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default BlogList