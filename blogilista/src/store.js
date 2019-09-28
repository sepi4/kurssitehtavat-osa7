import notificationReducer from './reducers/notificationReducer'

import thunk from 'redux-thunk'

import { createStore, combineReducers, applyMiddleware } from 'redux'

const reducer = combineReducers({
  notification: notificationReducer,
})
const store = createStore(reducer, applyMiddleware(thunk))

export default store

