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

export const leaveComment = (content, blog, user) => {
  return async dispatch => {
    const newComment = {
      content: content,
      blog: blog,
      user: user
    }
    const response = await commentService.createComment(newComment)
    dispatch({
      type: 'CREATE_COMMENT',
      data: response
    })
  }
}

const commentReducer = (state= [], action) => {
  switch(action.type) {
  case 'GET_COMMENTS':
    return action.data
  case 'CREATE_COMMENT':
    return state.concat(action.data)
  default:
    return state
  }
}

export default commentReducer