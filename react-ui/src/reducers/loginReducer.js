import loginService from '../services/login'

export const login = (username, password) => {
  return async dispatch => {
    try {
      const data = await loginService.login(username, password)
      dispatch({
        type: 'LOGIN',
        data: data
      })

    } catch (error) {
      new Error('Error in action creator!')
      dispatch({
        type: 'ERROR',
        data: error
      })
    }
  }
}

const loginReducer = (state = [], action) => {
  switch(action.type) {
  case 'LOGIN':
    return action.data
  case 'ERROR':
    return action.data
  default:
    return state
  }
}

export default loginReducer