import loginService from '../services/login'
import { setNotification } from './notificationReducer'

export const loginUser = credentials => {
  return async dispatch => {
    try {
      const logedUser = await loginService.login(credentials)
      dispatch({
        type: 'LOGIN',
        data: logedUser,
      })
      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(logedUser))
    }
    catch(err) {
      dispatch(setNotification('wrong password or username', true, 10))
    }
  }
}

export const logoutUser = () => {
  return dispatch => {
    window.localStorage.removeItem('loggedBlogappUser')
    dispatch({
      type: 'LOGOUT',
    })
  }
}

export const checkLocalStorage = () => {
  return dispatch => {
    const loggedUserJson = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJson) {
      const user = JSON.parse(loggedUserJson)
      dispatch({
        type: 'SET',
        data: user,
      })
    }
  }
}

const reducer = (state = null, action) => {
  switch(action.type) {
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      return null
    case 'SET':
      return action.data
    default:
      return state
  }
}

export default reducer
