export const login = (user) => {
  return async dispatch => {
    dispatch({
      type: 'LOGIN',
      data: user
    })
  }
}

export const logout = () => {
  return dispatch => {
    dispatch({
      type: 'LOGOUT'
    })
  }
}

const loginReducer = (state = { isLoggedIn: false }, action) => {
  switch(action.type) {
  case 'LOGIN':
    return {
      ...action.data,
      isLoggedIn: true
    }
  case 'LOGOUT':
    return { isLoggedIn: false }
  case 'ERROR':
    return {
      ...action.error,
      isLoggedIn: false
    }
  default:
    return state
  }
}

export default loginReducer