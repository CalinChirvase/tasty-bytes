import blogService from '../services/blogs'

export const getAll = () => {
  return async dispatch => {
    const response = await blogService.getAll()
    dispatch({
      type: 'GET_BLOGS',
      data: response
    })
  }
}

export const likeBlog = (id, newBlog) => {
  return async dispatch => {
    await blogService.update(id, newBlog)
    dispatch({
      type: 'LIKE_BLOG',
      data: newBlog
    })
  }
}

const blogReducer = (state= [], action) => {
  switch(action.type) {
  case 'GET_BLOGS':
    return action.data
  case 'LIKE_BLOG':
    return state.map(blog => blog.id === action.data.id ?  action.data : blog)
  default:
    return state
  }
}

export default blogReducer