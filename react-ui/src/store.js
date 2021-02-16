import { createStore, applyMiddleware, combineReducers  } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import loginReducer from './reducers/loginReducer'
import blogReducer from './reducers/blogReducer'

const reducer = combineReducers({
  login: loginReducer,
  blogs: blogReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store