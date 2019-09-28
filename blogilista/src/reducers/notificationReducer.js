export const makeNotification = (text, error) => {
  return {
    type: 'MAKE_NOTIFICATION',
    data: {
      text,
      error,
    },
  }
}

export const cleanNotification = () => {
  return {
    type: 'CLEAN_NOTIFICATION',
  }
}

export const setNotification = (text, error, sec) => {
  return dispatch => {
    dispatch(makeNotification(text, error))
    setTimeout(() => {
      dispatch(cleanNotification())
    }, sec * 1000)
  }
}

const reducer = (state = null, action) => {
  switch(action.type) {
    case 'MAKE_NOTIFICATION':
      // console.log('MAKE_NOTIFICATION')
      return action.data

    case 'CLEAN_NOTIFICATION':
      return null

    default:
      return state
  }
}

export default reducer
