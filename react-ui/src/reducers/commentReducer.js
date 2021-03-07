import commentService from '../services/comments'

export const getComments = () => {
  return async dispatch => {
    const response = await commentService.getComments()
    dispatch({
      type: 'GET_COMMENTS',
      data: response
    })
  }
}

const commentReducer = (state= [], action) => {
  switch(action.type) {
  case 'GET_COMMENTS':
    return action.data
  default:
    return state
  }
}

export default commentReducer