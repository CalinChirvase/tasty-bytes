import loginService from '../services/login'

export const login = (username, password) => {
  return async dispatch => {
    try {
      const user = await loginService.login(username, password)
      dispatch({
        type: 'LOGIN',
        data: user
      })

    } catch (error) {
      new Error('Error in login action creator!')
      dispatch({
        type: 'ERROR',
        error: error
      })
    }
  }
}

export const logout = () => {
  return dispatch => {
    dispatch({
      type: 'LOGOUT'
    })
  }
}

const loginReducer = (state = [], action) => {
  switch(action.type) {
  case 'LOGIN':
    return action.data
  case 'LOGOUT':
    return []
  case 'ERROR':
    return action.error
  default:
    return state
  }
}

export default loginReducer