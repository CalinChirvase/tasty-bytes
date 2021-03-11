import blogService from '../services/blogs'

export const getBlogs = () => {
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

export const createBlog = (title, content) => {
  return async dispatch => {
    const newBlog = {
      title: title,
      content: content
    }
    const response = await blogService.create(newBlog)
    dispatch({
      type: 'NEW_BLOG',
      data: response
    })
  }
}

export const editBlog = (id, newBlog) => {
  return async dispatch => {
    await blogService.update(id, newBlog)
    dispatch({
      type: 'EDIT_BLOG',
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
  case 'EDIT_BLOG':
    return state.map(blog => blog.id === action.data.id ?  action.data : blog)
  case 'NEW_BLOG':
    return state.concat(action.data)
  default:
    return state
  }
}

export default blogReducer