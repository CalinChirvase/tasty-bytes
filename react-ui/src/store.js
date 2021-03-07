import { createStore, applyMiddleware, combineReducers  } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import loginReducer from './reducers/loginReducer'
import blogReducer from './reducers/blogReducer'
import commentReducer from './reducers/commentReducer'

const reducer = combineReducers({
  user: loginReducer,
  blogs: blogReducer,
  comments: commentReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store