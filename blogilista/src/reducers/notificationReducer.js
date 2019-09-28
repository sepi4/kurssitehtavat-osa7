export const newNotification = text => {
  return {
    action: 'NEW_NOTIFICATION',
    data: text,
  }
}

const reducer = (state = null, action) => {
  switch(action.type) {
    case 'NEW_NOTIFICATION':
      return action.data
    default:
      return state
  }
}
export default reducer
