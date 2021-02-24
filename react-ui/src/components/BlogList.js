//react libraries imports
import React, { useEffect, useState } from 'react'
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
import TableFooter from '@material-ui/core/TableFooter'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import TablePaginationActions from './TablePaginationActions'
import { TablePagination } from '@material-ui/core'

const useStyles = makeStyles({
  table: {
    minWidth: 900,
    maxWidth: 1200,
    marginTop: '10%'
  },
  buttonContainer:{
    minWidth: 900,
    maxWidth: 1200,
    marginTop: '1.5rem',
    marginBottom: '2rem'
  },
  mainContainer: {
    marginBottom: '5rem',
    flex: 1
  }
})

const BlogList = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const classes = useStyles()
  const dispatch = useDispatch()

  const blogs = useSelector(state => state.blogs)
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, blogs.length - page * rowsPerPage)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  useEffect(() => {
    dispatch(getAll())
  }, [dispatch])

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.mainContainer}
    >
      <Grid item>
        <TableContainer
          className={classes.table}
          component={Paper}
          elevation={7}
          color="secondary"
        >
          <Table aria-label="table of blogs">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Author</TableCell>
                <TableCell align="right">Likes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? blogs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : blogs
              ).map((blog) => (
                <TableRow key={blog.title}>
                  <TableCell>
                    <Link component={RouterLink} to={`/blogs/${blog.id}`}>
                      {blog.title}
                    </Link>
                  </TableCell>
                  <TableCell align="right">{blog.author}</TableCell>
                  <TableCell align="right">{blog.likes}</TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53* emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={blogs.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'blogs per page' },
                    native: true,
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item>
        <Grid
          className={classes.buttonContainer}
          container
          direction="row"
          alignItems="flex-start"
        >
          <Grid item>
            <Button
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