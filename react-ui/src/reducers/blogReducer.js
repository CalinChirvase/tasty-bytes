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

const blogReducer = (state= [], action) => {
  switch(action.type) {
  case 'GET_BLOGS':
    return action.data
  default:
    return state
  }
}

export default blogReducer